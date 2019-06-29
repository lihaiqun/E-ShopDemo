export default (
  state = {
    moreAdressFlag: false,
    setAdress: "",
    otherAdressFlag: false,
    detailCouponFlag: false
  },
  {
    type,data
  }
) => {
switch (type) {
  case "changeMoreAdressFlag":
    return Object.assign({}, state, { moreAdressFlag: data });
  case "changeSetAdress":
    return Object.assign({}, state, { setAdress: data });
  case "setOtherAdress":
    return Object.assign({}, state, { otherAdressFlag: data });
  case "setDetailCouponFlag":
    return Object.assign({}, state, { detailCouponFlag: data });
  default:
    return state;
}
}