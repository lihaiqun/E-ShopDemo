import { connect } from 'react-redux';
import UI from './UI';
import api from '@/api';

const mapStateToProps = (state) => ({
  fashionNetRed: state.fashion.fashionNetRed
})
const mapDispatchToProps = (dispatch) => {
  return {
    getFashionNetRed () {
      api.reqGetData("fashion").then(data => {
        dispatch({
          type: "changeFashionNetRed",
          data
        })
      }) 
    }
  }
}
const Com = connect(mapStateToProps, mapDispatchToProps)(UI)

export default Com;