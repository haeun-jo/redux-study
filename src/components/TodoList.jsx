import useReduxState from "../hooks/useReduxState";

function TodoList() {
  const state = useReduxState();
  // console.log(state);

  return (
    <ul>
      {state.todos.map((todo, i) => (
        <li key={i}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
