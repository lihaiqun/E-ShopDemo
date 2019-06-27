const action = {
  getBannerList (dispatch) {
    dispatch({
      type: 'setHomeBannerList',
      data: [4,5,6]
    })
  }
}
export default action