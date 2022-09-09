import { useState, useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { addTodo, fetchTodos } from './store/todoSlice';

function App() {
	const [text, setText] = useState('');
	const { status, error } = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	const addTask = () => {
		if (text) dispatch(addTodo({ text }));
		setText('');
	};

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	return (
		<div className="App">
			<InputField text={text} handleSubmit={addTask} handleInput={setText} />

			{status === 'loading' && <h2>Loading...</h2>}
			{error && <h2>An error occurred: {error}</h2>}

			<TodoList />
		</div>
	);
}

export default App;
