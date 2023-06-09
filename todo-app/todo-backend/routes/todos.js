const express = require('express');
const {Todo} = require('../mongo')
const redis = require('../redis');
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* GET by id. */
router.get('/:id', async (req, res) => {
  const todo = await Todo.find({_id: req.params.id})
  res.send(todo);
});

/* update by id. */
router.put('/:id', async (req, res) => {
  const todo = await Todo.updateOne({"_id": req.params.id}, {"text": req.body.text, "done": req.body.done})

  console.log('Todo', todo)
  res.send(todo)
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text, done: false
  })

  const counter = await redis.getAsync('added_todos')
  const value = Number(counter)
  redis.setAsync('added_todos', (value + 1))
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const {id} = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.sendStatus(405); // Implement this
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  res.sendStatus(405); // Implement this
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
