import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsPlus } from 'react-icons/bs';
import { addTodo } from '../redux/actions';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });

  const handleAddTodo = () => {
    if (newTodo.title.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo({ title: '', description: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>
        TODO APP
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo(e);
        }}
        className='flex items-center mb-4'
      >
        <input
          className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
          type='text'
          placeholder='Title (required)'
          name='title'
          value={newTodo.title}
          onChange={handleInputChange}
          required
        />
        <input
          className='flex-grow ml-5 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
          type='text'
          placeholder='Description'
          name='description'
          value={newTodo.description}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'
        >
          <BsPlus size={20} />
        </button>
      </form>

      <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
        <FilterButtons />
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
