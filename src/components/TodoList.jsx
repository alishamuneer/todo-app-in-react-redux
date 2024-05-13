import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';

      return matchesFilter;
    });
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);
  const completedTodos = filteredTodos.filter((todo) => todo.completed);

  const sortedTodos = [...incompleteTodos, ...completedTodos];

  return (
    <ul>
      <li className='my-2 text-sm italic'>All Your Notes Here...</li>
      {sortedTodos.map((todo, index) => (
        <div key={index}>
          {!todo.completed ? (
            <div>
              <TodoItem todo={todo} index={index} />
            </div>
          ) : (
            <div>
              <TodoItem todo={todo} index={index} />
            </div>
          )}
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
