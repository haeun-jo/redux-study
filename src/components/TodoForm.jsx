import { useRef } from "react";

export default function TodoForm({ add }) {
  const inputRef = useRef();
  // const dispatch = useReduxDispatch();

  const click = () => {
    add(inputRef.current.value);
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
