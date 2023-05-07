FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install


CMD [ "npm", "run", "start" ]

#CMD json-server --watch /app/db.json --port 3001 --host 0.0.0.0