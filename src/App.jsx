import { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { addTodo } from './store/todoSlice';

function App() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const addTask = () => {
		if (text) dispatch(addTodo({ text }));
		setText('');
	};

	return (
		<div className="App">
			<InputField text={text} handleSubmit={addTask} handleInput={setText} />
			<TodoList />
		</div>
	);
}

export default App;
