import { useState } from "react";

export function TodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    addTodo(newItem);
    setNewItem("");
  }

  return (
    <div>
      <form className="new-item-form">
        <div className="form-row">
          <div className="text-pink-900 text-2xl font-semibold mb-3 mt-4">
          <label htmlFor="item">Add new:</label>
          </div>
          <input 
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            style={{
              backgroundColor: 'pink',
              border: '1px solid #ff1493',
              color: '#cc0066'
          }}
          />
        </div>
        <button className="btn border border-pink-500 bg-pink-500 text-white  hover:bg-pink-400" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}
