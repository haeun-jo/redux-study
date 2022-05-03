// import { connect } from "react-redux";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../redux/actions";

// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: (text) => {
//       dispatch(addTodo(text));
//     },
//   };
// };

// const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);

function TodoFormContainer() {
  const dispatch = useDispatch();

  const add = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  return <TodoForm add={add} />;
}

export default TodoFormContainer;
