import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/blogReducer';

const store = createStore(reducer, composeWithDevTools());
console.log(store);

export default store;
