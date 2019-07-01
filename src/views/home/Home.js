import { connect } from 'react-redux';
import action from './action'
import UI from './UI';
const mapStateToProps = (state) => {
  return {
    bannerList: state.home.homeBannerList,
    subnavList: state.home.subnavList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerList () {
      dispatch(action.getBannerList)
    }
  }
  
}
const Com = connect(mapStateToProps,mapDispatchToProps)(UI)
export default Com;