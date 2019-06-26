const initData = {
  homeBannerList: [1,2,3]
}
const reducer = (state = initData, action) => {
  const { type, data } = action
  switch (type) {
    case 'setHomeBannerList':
      return Object.assign({}, state, { homeBannerList: data })
    default:
      return state
  }
}
export default reducer