export const getMaxId = (todos) => {
  let maxId = 0;
  todos.forEach((todo) => {
    if (todo.id > maxId) {
      maxId = todo.id;
    }
  });
  return maxId;
};
