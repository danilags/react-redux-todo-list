import { ADD_TODO } from '../actions/constants';

const initialState = [
  { id: 1, title: 'Coding Java', createdAt: '2017-08-22', completed: false },
  { id: 3, title: 'Makan Siang', createdAt: '2017-08-28', completed: false },
  { id: 2, title: 'Makan Malam', createdAt: '2017-08-24', completed: false },
];

const addTodo = (state, newTodo) => {
  const { title, createdAt, completed } = newTodo;
  const ids = state.map(todo => todo.id);
  const newId = Math.max(...ids) + 1;
  const todo = {
    id: newId,
    title,
    createdAt,
    completed,
  };
  const newState = [...state, todo]
  return newState
};

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action.payload);
    default: return state;
  }
};

export default todoReducer;
