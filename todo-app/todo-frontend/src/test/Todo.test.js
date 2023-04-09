import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Todo from "../Todos/Todo";


describe('Todo component', () => {
  const mockDelete = jest.fn();
  const mockComplete = jest.fn();

  let component;

  beforeEach(() => {
    const exampleTodo = {
      text: "Test text", done: false
    }

    component = render(<Todo todo={exampleTodo} onClickComplete={mockComplete()} onClickDelete={mockDelete()}/>)
  })

  it('renders', () => {
    expect(component.container).toHaveTextContent('Test text')
    expect(component.container).toHaveTextContent('This todo is not done')
  })

  it('complete button can be clicked', async () => {
    const completeButton = component.getByText('Set as done')
    await userEvent.click(completeButton)

  })

  it('delete button can be clickedy', async () => {
    const deleteButton = component.getByText('Delete')
    await userEvent.click(deleteButton)
    expect(mockDelete).toHaveBeenCalled();
  })
})