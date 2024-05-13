import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos } from '../redux/actions';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);
  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className='flex space-x-4 items-center'>
      <select
        className='text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none'
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value='ALL'>All Todos</option>
        <option value='COMPLETED'>Completed</option>
        <option value='INCOMPLETE'>Incomplete</option>
      </select>
    </div>
  );
};

export default FilterButtons;
