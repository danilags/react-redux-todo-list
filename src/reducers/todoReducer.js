const initialState = [
  { id: 1, title: 'Coding Java', createdAt: '2017-08-22', completed: false },
  { id: 3, title: 'Makan Siang', createdAt: '2017-08-28', completed: false },
  { id: 2, title: 'Makan Malam', createdAt: '2017-08-24', completed: false },
];

const todoReducer = (state = initialState, action) => {
  // belum ada action apa-apa untuk sekarang
  return state;
};

export default todoReducer;
