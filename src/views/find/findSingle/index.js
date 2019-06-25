import { connect } from 'react-redux';
import UI from './UI';

const mapStateToPorps = (state) => {
  return ({
  screenFlag: state.find.findSingle.screenFlag
})}

const mapDispatchToProps = (dispatch) => ({
  changeScreenFlag () {
    dispatch({
      type : "changeScreenFlag",
      data: !this.screenFlag
    })
  }
})

const Com = connect(mapStateToPorps, mapDispatchToProps)(UI)

export default Com;