import React from 'react';

const Todo = ({task, removeTodo}) => (
    <li>
        {task}
        <span className="deleteSpan" onClick={removeTodo}>   X </span>
    </li>
);

export default Todo;