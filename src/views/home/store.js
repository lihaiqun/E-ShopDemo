
const initData = {
  homeBannerList: [1,2,3],
  subnavList:[
    {name: '新品首发',desc: '每日上新', proinfo: [{src:require('@/images/home/newpro1.png'),price:'168'},{src:require('@/images/home/newpro2.png'),price:'399'}]},
    {name: '整点秒杀',desc: '爆款限时限量抢', proinfo: [{src:require('@/images/home/seckill1.png'),price:'499',origin:'599'},{src:require('@/images/home/seckill2.png'),price:'109',origin:'209'}]},
    {name: '必买清单',desc: '到手必看指南', proinfo: [{src:require('@/images/home/buylist1.png'),price:'168'},{src:require('@/images/home/buylist1.png'),price:'399'}]},
    {name: '新品首发',desc: '每日上新', proinfo: [{src:require('@/images/home/welfare1.png'),save:'立省5元'},{src:require('@/images/home/welfare2.png'),save: '立省150元'}]},
    ]
}
const reducer = (state = initData, action) => {
  const { type, data } = action
  switch (type) {
    case 'setHomeBannerList':
      return Object.assign({}, state, { homeBannerList: data })
    case 'setSubnavList':
      return Object.assign({}, state, { subnavList: data })
    default:
      return state
  }
}
export default reducer