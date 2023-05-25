const getData = () => {

  return new Promise((resolve, reject) => {
    resolve([
      {
        name: 'A',
        img: 'http://img.daimg.com/uploads/allimg/210916/3-210916110348.jpg',
        url: 'http://baidu.com'
      },
      {
        name: 'B',
        img: 'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg',
        url: 'http://baidu.com'
      },
      {
        name: 'C', 
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
        url: 'http://baidu.com'
      },
      {
        name: 'D',
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
        url: 'http://baidu.com'
      },
      {
        name: 'E',
        img: 'https://i0.hdslb.com/bfs/article/557199e1e541c8ae471d52179610e5f5d82016a2.jpg@942w_1676h_progressive.webp',
        url: 'http://baidu.com'
      }
    ])
  })
}


export { getData }