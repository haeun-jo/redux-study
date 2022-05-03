import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";

function App() {
  return (
    <>
      {/* {JSON.stringify(state)} */}
      <TodoListContainer />
      <TodoFormContainer />
    </>
  );
}

export default App;
