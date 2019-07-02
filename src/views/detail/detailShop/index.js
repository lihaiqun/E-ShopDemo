import { connect } from 'react-redux';
import UI from './UI';

const mapStateToPorps = (state) => {
  return ({
    moreAdressFlag: state.detail.detailShop.moreAdressFlag,
    otherAdressFlag: state.detail.detailShop.otherAdressFlag,
    detailCouponFlag: state.detail.detailShop.detailCouponFlag,
    detailStyleFlag: state.detail.detailShop.detailStyleFlag,
    moreServerFlag: state.detail.detailShop.moreServerFlag,
    setAdress: state.detail.detailShop.setAdress,
    receviedArr: state.detail.detailShop.receviedArr,
    noReceviedArr: state.detail.detailShop.noReceviedArr,
    detailStyleColor: state.detail.detailShop.detailStyleColor,
    detailStyleSize: state.detail.detailShop.detailStyleSize,
})}

const mapDispatchToProps = (dispatch) => ({
  changeMoreAdressFlag () {
    dispatch({
      type : "changeMoreAdressFlag",
      data: !this.moreAdressFlag
    })
  },
  changeSetAdress (data) {
    dispatch({
      type : "changeSetAdress",
      data
    })
  },
  setOtherAdress () {
    dispatch({
      type : "setOtherAdress",
      data: !this.otherAdressFlag
    })
  },
  changeMoreServerFlag () {
    dispatch({
      type : "setMoreServerFlag",
      data: !this.moreServerFlag
    })
  },
  setDetailCouponFlag () {
    dispatch({
      type : "setDetailCouponFlag",
      data: !this.detailCouponFlag
    })
  },
  changeDetailStyleFlag () {
    dispatch({
      type : "setDetailStyleFlag",
      data: !this.detailStyleFlag
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
  setDetailStyleColor (data) {
    dispatch({
      type : "setDetailStyleColor",
      data
    })
  },
  setDetailStyleSize (data) {
    dispatch({
      type : "setDetailStyleSize",
      data
    })
  },
})

const Com = connect(mapStateToPorps, mapDispatchToProps)(UI)

export default Com;