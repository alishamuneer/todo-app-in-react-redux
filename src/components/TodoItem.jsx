import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../redux/actions';
import { FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  const handleChange = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(index));
  };

  return (
    <li
      className={`flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4 ${
        todo.completed ? 'opacity-50' : ''
      }`}
    >
      <div className='flex items-center'>
        <span className='mr-4 text-gray-500'>{index + 1}.</span>
        <div className='flex'>
          <span
            className={`mr-4 ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {todo.title}
          </span>
          {todo.description && (
            <p className='text-sm text-gray-600'>{todo.description}</p>
          )}
        </div>
      </div>
      <div className='space-x-3 ml-8'>
        <button
          className='mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded'
          onClick={handleRemove}
        >
          <FaTrash />
        </button>
        <input
          type='checkbox'
          name={todo.title}
          checked={todo.completed}
          onChange={() => handleChange(todo.id)}
        />
      </div>
    </li>
  );
};

export default TodoItem;
