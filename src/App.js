import { useEffect, useState } from "react";
import { addTodo } from "./redux/actions";

function App({ store }) {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      // console.log(store.getState());
      setState(store.getState());
    });

    return () => {
      unsubscribe();
    };
  }, [store]);

  const click = () => {
    store.dispatch(addTodo("coding"));
  };

  return (
    <>
      {JSON.stringify(state)}
      <button onClick={click}>add</button>
    </>
  );
}

export default App;
