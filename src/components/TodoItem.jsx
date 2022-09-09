import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../store/todoSlice';

const TodoItem = ({ id, text }) => {
	const dispatch = useDispatch();
	const completed = useSelector((state) => state.todos.todos.completed);

	return (
		<li key={id}>
			<input
				type="checkbox"
				checked={completed}
				onChange={() => dispatch(toggleTodoComplete({ id }))}
			/>
			<span>{text}</span>
			<span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
				&times;
			</span>
		</li>
	);
};

export default TodoItem;
