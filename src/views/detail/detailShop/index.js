import { connect } from 'react-redux';
import UI from './UI';

const mapStateToPorps = (state) => {
  return ({
    moreAdressFlag: state.detail.detailShop.moreAdressFlag,
    otherAdressFlag: state.detail.detailShop.otherAdressFlag,
    detailCouponFlag: state.detail.detailShop.detailCouponFlag,
    setAdress: state.detail.detailShop.setAdress,
    receviedArr: state.detail.detailShop.receviedArr,
    noReceviedArr: state.detail.detailShop.noReceviedArr
})}

const mapDispatchToProps = (dispatch) => ({
  changeMoreAdressFlag () {
    dispatch({
      type : "changeMoreAdressFlag",
      data: !this.moreAdressFlag
    })
  },
  changeSetAdress (str) {
    dispatch({
      type : "changeSetAdress",
      data: str
    })
  },
  setOtherAdress () {
    dispatch({
      type : "setOtherAdress",
      data: !this.otherAdressFlag
    })
  },
  setDetailCouponFlag () {
    dispatch({
      type : "setDetailCouponFlag",
      data: !this.detailCouponFlag
    })
  },
  setReceviedArr (data) {
    dispatch({
      type : "setReceviedArr",
      data
    })
  },
  setNoReceviedArr (data) {
    dispatch({
      type : "setNoReceviedArr",
      data
    })
  },
})

const Com = connect(mapStateToPorps, mapDispatchToProps)(UI)

export default Com;