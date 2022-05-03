import { useRef } from "react";
import useReduxDispatch from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/actions";

function TodoForm() {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();

  const click = () => {
    dispatch(addTodo(inputRef.current.value));
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} autoFocus />
      <button onClick={click}>add</button>
    </div>
  );
}

export default TodoForm;
