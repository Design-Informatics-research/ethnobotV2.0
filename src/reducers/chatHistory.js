// const chatHistory = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         (todo.id === action.id)
//           ? {...todo, completed: !todo.completed}
//           : todo
//       )
//     default:
//       return state
//   }
// }
//
// export default chatHistory;

import { FETCH, DELETE, CREATE } from '../actions/types';

const chatHistory = (state = {}, action) => {
  switch (action.type) {
    case FETCH:
      return state;
    case CREATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default chatHistory;
