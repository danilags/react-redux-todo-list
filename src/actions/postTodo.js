import { ADD_TODO } from './constants';

export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
});
