import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todoItem.map(item => (
                <Todo key={item.id} toggleTask={props.dispatch} item={item} />
            ))}
        </div>
    );
};

export default TodoList;