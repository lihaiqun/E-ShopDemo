import { connect } from 'react-redux';
import UI from './UI';

const mapStateToPorps = (state) => {
  return ({
    moreFlag: state.detail.IndexReducer.moreFlag
})}

const mapDispatchToProps = (dispatch) => ({
  changeMoreFlag () {
    dispatch({
      type : "changeMoreFlag",
      data: !this.moreFlag
    })
  }
})

const Com = connect(mapStateToPorps, mapDispatchToProps)(UI)

export default Com;