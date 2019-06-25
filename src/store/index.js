import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import home from '@/views/home/store';
import find from '@/views/find/store';
const reducer = combineReducers({
home,
find
})
const store = createStore (reducer, applyMiddleware(thunk));
export default store;