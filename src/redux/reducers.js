import { ADD_TODO } from "./actions";

const initialState = [];

function todoApp(state = initialState, action) {
  // 초기값을 설정해주는 부분
  // if (state === undefined) return [];

  if (action.type === ADD_TODO) return [...state, action.todo];

  return state;
}
