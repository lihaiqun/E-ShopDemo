import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import home from '@/views/home/store';
import fashion from '@/views/fashion/store';
import find from '@/views/find/store';
import detail from '@/views/detail/store';
const reducer = combineReducers({
home,
find,
detail,
fashion
})
const store = createStore (reducer, applyMiddleware(thunk));
export default store;