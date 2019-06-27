const Mock = require('mockjs');

let fashionList = [];
const getFashion = function () {
  for (var i = 0; i < 10; i++) {
    var item = {
      avatar:Mock.Random.image('50x50', '#894FC4', '#FFF', 'png', '头像1'),
      title_name: Mock.mock(),
      id: 'img' + i,
      itemSrc: Mock.Random.image('111x111', '#894FC4', '#FFF', 'png', '我是第' + i + '张图片'),
      alt: Mock.mock('@url()'),
      href: Mock.mock('@url()'),
    }
    fashionList.push(item);
  }
  console.log(fashionList)
  return fashionList
}

Mock.mock('http://www.daxunxun.com/banner', 'get', getFashion)
// let homeDogList = [];
// let homeCatList = [];
// let dogs = ['泰迪', '哈士奇', '萨摩耶', '阿拉斯加犬', '雪纳瑞', '柯基', '金毛']
// let cats = ['波斯猫', '橘猫', '加菲猫', '蓝猫', '布偶']
// const getProList = function () {
//   for (var i = 0; i < 5; i++) {
//     let item = {
//       id: 'dog' + i,
//       type: 1, // 1 表示 狗
//       title: dogs[Math.floor(Math.random() * dogs.length)],
//       itemSrc: Mock.Random.image('100x100', Mock.mock('@color()')),
//       color: Mock.mock('@color()'),
//       'sex': i % 2
//     }
//     homeDogList.push(item)
//   }
//   for (var i = 0; i < 6; i++) {
//     let item = {
//       id: 'cat' + i,
//       type: 2, // 2 表示 猫
//       title: cats[Math.floor(Math.random() * cats.length)],
//       itemSrc: Mock.Random.image('100x100', Mock.mock('@color()')),
//       color: Mock.mock('@color()'),
//       'sex': i % 2
//     }
//     homeCatList.push(item)
//   }

//   return {
//     dogList: homeDogList,
//     catList: homeCatList
//   }
// }


