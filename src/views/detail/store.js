import { combineReducers } from 'redux';
// import detailShop from '@/views/detail/detailShop/store';

const IndexReducer = (
  state = {
    moreFlag: false
  },
  {
    type,data
  }
) => {
switch (type) {
  case "changeMoreFlag":
    return Object.assign({}, state, { moreFlag: data });
  default:
    return state;
}
}

const reducer = combineReducers({
  // detailShop,
  IndexReducer
})

export default reducer;