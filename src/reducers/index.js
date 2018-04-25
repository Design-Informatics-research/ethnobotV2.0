// import { combineReducers } from 'redux'
// import chatHistory from './chatHistory'
//
// export default combineReducers({
//   chatHistory
// })

import { combineReducers } from 'redux';
import chatHistory from './chatHistory';

const rootReducer = combineReducers({
  items: chatHistory
});

export default rootReducer;
