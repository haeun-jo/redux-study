import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import UserListContainer from "./containers/UserListContainer";

function App() {
  return (
    <>
      {/* {JSON.stringify(state)} */}
      <TodoListContainer />
      <TodoFormContainer />
      <UserListContainer />
    </>
  );
}

export default App;
