import React from 'react';

const Todo = props =>  {
    return (
        <div
        className={`todo${props.todo.completed ? ' completed' : ''}`}
        onClick={() => props.toggleTodo({type: 'TOGGLE_ITEM', payload: props.todo.id})}>
            <p>{props.todo.name}</p>
          </div>
    );
};

export default Todo;