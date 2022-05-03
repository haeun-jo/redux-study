// import useReduxState from "../hooks/useReduxState";

export default function TodoList({ todos }) {
  // const state = useReduxState();
  // console.log(state);

  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>{todo.text}</li>
      ))}
    </ul>
  );
}
