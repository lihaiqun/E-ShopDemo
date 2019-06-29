export default (
  state = {
    moreAdressFlag: false
  },
  {
    type,data
  }
) => {
switch (type) {
  case "changeMoreAdressFlag":
    return Object.assign({}, state, { moreAdressFlag: data });
  default:
    return state;
}
}