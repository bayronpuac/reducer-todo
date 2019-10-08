import React, {useState, useReducer} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';


//Reducer 
import { initialState, todoReducer} from './reducers/todoReducer';


function App() {

  const [todo, setTodo] = useState();

  //reducer
  const [state, dispatch]= useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <div className="header">
        <h1>Todo List</h1>
        <TodoForm 
            state={state.todoData}
            dispatch={dispatch}
        />
      </div>
      <TodoList
          todoItem={state.todoData}
          dispatch={dispatch}
        />
        <button className="clear-btn" onClick={() => dispatch({type: 'CLEAR_ITEM'})}>Clear Completed</button>
    </div>
  );
}
  


export default App;
