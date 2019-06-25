export default (
    state = {
      screenFlag: false
    },
    {
      type,data
    }
  ) => {
  switch (type) {
    case "changeScreenFlag":
      return Object.assign({}, state, { screenFlag: data });
    default:
      return state;
  }
}