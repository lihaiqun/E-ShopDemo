export default (
  state = {
    moreAdressFlag: false,
    setAdress: "",
    otherAdressFlag: false,
    detailCouponFlag: false,
    detailStyleFlag: false,
    receviedArr: [],
    noReceviedArr: [{id: "00001", title: "满399减50元,连衣裙专享券", date: "2019.05.21-2019.06.01", price: 50, require: "无门槛"},{id: "00002",title: "全场满10.01元即可使用", date: "2019.05.21-2019.06.01", price: 10, require: "无门槛"},{id: "00003",title: "全场满20.01元即可使用", date: "2019.05.21-2019.06.01", price: 20, require: "无门槛"}]
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
  case "setDetailStyleFlag":
    return Object.assign({}, state, { detailStyleFlag: data });
  case "setReceviedArr":
    return Object.assign({}, state, { receviedArr: data });
  case "setNoReceviedArr":
    return Object.assign({}, state, { noReceviedArr: data });
  default:
    return state;
}
}