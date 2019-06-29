const reducer = ( state = {
  fashionNetRed: []
},action) => {
  const { type, data } = action
  switch (type) {
    case "changeFashionNetRed":
      return Object.assign({}, state, {fashionNetRed: data});
    default:
      return state;
  }
}
export default reducer;