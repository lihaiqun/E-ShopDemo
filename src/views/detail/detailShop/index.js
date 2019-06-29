import { connect } from 'react-redux';
import UI from './UI';

const mapStateToPorps = (state) => {
  return ({
    moreAdressFlag: state.detail.detailShop.moreAdressFlag,
    setAdress: state.detail.detailShop.setAdress,
    otherAdressFlag: state.detail.detailShop.otherAdressFlag,
    detailCouponFlag: state.detail.detailShop.detailCouponFlag
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
  }
})

const Com = connect(mapStateToPorps, mapDispatchToProps)(UI)

export default Com;