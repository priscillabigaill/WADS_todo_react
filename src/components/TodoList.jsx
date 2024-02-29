import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {

  return (
    <div className="mb-3">
      <h1 className="text-pink-900 text-2xl font-semibold mb-3 mt-3">To-do's</h1>
      <ul className="list text-pink-900"> {/* Apply text-pink-900 class here */}
        {todos.length === 0 && "No todos available."}
        {todos.map((todo, id) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}
