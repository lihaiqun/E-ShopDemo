import { connect } from 'react-redux';
import UI from './UI';

const mapStateToPorps = (state) => {
  return ({
    moreAdressFlag: state.detail.detailShop.moreAdressFlag
})}

const mapDispatchToProps = (dispatch) => ({
  changeMoreAdressFlag () {
    dispatch({
      type : "changeMoreAdressFlag",
      data: !this.moreAdressFlag
    })
  }
})

const Com = connect(mapStateToPorps, mapDispatchToProps)(UI)

export default Com;