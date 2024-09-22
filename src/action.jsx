// actions.js
export const addTodo = (title) => {
  return {
    type: 'ADD_TODO',
    payload: {
      title,
      id: Math.random().toString(36).substring(7),
    },
  };
};
