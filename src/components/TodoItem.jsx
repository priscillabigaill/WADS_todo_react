import { useState } from "react";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <button className="btn btn-edt" onClick={() => { editTodo({ id, title: editedTitle }); setIsEditing(false); }} disabled={editedTitle.length === 0}>
        Save
      </button>

      </>
    );
  } else {
    todoContent = (
      <>
        {title}
        <button className="btn btn-edit" onClick={() => setIsEditing(true)}>
          Edit</button>
      </>
    );
  }

  return (
    <div className="mb-3">
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {todoContent}
          <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </label>
      </li>
    </div>
  );
}