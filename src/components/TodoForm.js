import React, { useState } from 'react';

function TodoForm() {
  const [input, setInput] = useState('');

  return (
    <div>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
        />
        <button className="to-do-button">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
