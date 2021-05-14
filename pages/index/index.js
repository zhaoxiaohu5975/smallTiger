// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    imggroup:[ 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=3a9b1c0d33e153337ad455d2d8d0c26f',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fuserup%2F0909%2F2Z64022L38.jpg&refer=http%3A%2F%2Fimg.aiimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=cf79e9237a7082356ca39aede3968a6d',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201309%2F01%2F20130901131907_BtJWZ.jpeg&refer=http%3A%2F%2Fimg5.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=ffecc4f6726150d1284fb5d933c9160b','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblog.sina.com.cn%2Fpic%2F44f59d727e4f484157caa&refer=http%3A%2F%2Fblog.sina.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895914&t=c64c558fb5bbeabcdf7349aeb11cbb04', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=3a9b1c0d33e153337ad455d2d8d0c26f',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fuserup%2F0909%2F2Z64022L38.jpg&refer=http%3A%2F%2Fimg.aiimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=cf79e9237a7082356ca39aede3968a6d',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201309%2F01%2F20130901131907_BtJWZ.jpeg&refer=http%3A%2F%2Fimg5.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=ffecc4f6726150d1284fb5d933c9160b','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblog.sina.com.cn%2Fpic%2F44f59d727e4f484157caa&refer=http%3A%2F%2Fblog.sina.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895914&t=c64c558fb5bbeabcdf7349aeb11cbb04', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=3a9b1c0d33e153337ad455d2d8d0c26f',
],
    pepol:'113',
    background:[
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=3a9b1c0d33e153337ad455d2d8d0c26f',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fuserup%2F0909%2F2Z64022L38.jpg&refer=http%3A%2F%2Fimg.aiimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=cf79e9237a7082356ca39aede3968a6d',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201309%2F01%2F20130901131907_BtJWZ.jpeg&refer=http%3A%2F%2Fimg5.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=ffecc4f6726150d1284fb5d933c9160b','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblog.sina.com.cn%2Fpic%2F44f59d727e4f484157caa&refer=http%3A%2F%2Fblog.sina.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895914&t=c64c558fb5bbeabcdf7349aeb11cbb04',
    ],
    hasUserInfo: false,
    cardinfo:{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01176f5a9abad1a801206d96a55f4e.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623044356&t=9639a0b04407e5fd9fcefb3c49c55e77',title:'则深美术 专业课程 (素描, 色彩) 等体验课程2节',original:'600',price:'22.22',num:'2',inventory:'15'},
    tuxedinfo:{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblog.sina.com.cn%2Fpic%2F44f59d727e4f484157caa&refer=http%3A%2F%2Fblog.sina.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895914&t=c64c558fb5bbeabcdf7349aeb11cbb04',title:'则深美术 3-11岁综合艺术体验课程2节',original:'480',price:'12.12',num:'2',inventory:'22'},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    bulklist:[{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=3a9b1c0d33e153337ad455d2d8d0c26f',name:'小苹果',title:'发起了拼团',time:'2020-12-09 08:53'},{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=3a9b1c0d33e153337ad455d2d8d0c26f',name:'小苹果',title:'发起了拼团',time:'2020-12-09 08:53'},{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=3a9b1c0d33e153337ad455d2d8d0c26f',name:'小苹果',title:'发起了拼团',time:'2020-12-09 08:53'},{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=3a9b1c0d33e153337ad455d2d8d0c26f',name:'小苹果',title:'发起了拼团',time:'2020-12-09 08:53'},{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=3a9b1c0d33e153337ad455d2d8d0c26f',name:'小苹果',title:'发起了拼团',time:'2020-12-09 08:53'},{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=3a9b1c0d33e153337ad455d2d8d0c26f',name:'小苹果',title:'发起了拼团',time:'2020-12-09 08:53'},{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=3a9b1c0d33e153337ad455d2d8d0c26f',name:'小苹果',title:'发起了拼团',time:'2020-12-09 08:53'},{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=3a9b1c0d33e153337ad455d2d8d0c26f',name:'小苹果',title:'发起了拼团',time:'2020-12-09 08:53'},{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F1812.img.pp.sohu.com.cn%2Fimages%2Fblog%2F2009%2F11%2F18%2F18%2F8%2F125b6560a6ag214.jpg&refer=http%3A%2F%2F1812.img.pp.sohu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=3a9b1c0d33e153337ad455d2d8d0c26f',name:'小苹果',title:'发起了拼团',time:'2020-12-09 08:53'}],
    num:'1',
    spellnum:[{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblog.sina.com.cn%2Fpic%2F44f59d727e4f484157caa&refer=http%3A%2F%2Fblog.sina.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895914&t=c64c558fb5bbeabcdf7349aeb11cbb04',name:'小蘑菇',num:'2'},{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblog.sina.com.cn%2Fpic%2F44f59d727e4f484157caa&refer=http%3A%2F%2Fblog.sina.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895914&t=c64c558fb5bbeabcdf7349aeb11cbb04',name:'李晓彤',num:'1'},{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblog.sina.com.cn%2Fpic%2F44f59d727e4f484157caa&refer=http%3A%2F%2Fblog.sina.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895914&t=c64c558fb5bbeabcdf7349aeb11cbb04',name:'宋针',num:'1'}],
    cardnum:[{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblog.sina.com.cn%2Fpic%2F44f59d727e4f484157caa&refer=http%3A%2F%2Fblog.sina.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895914&t=c64c558fb5bbeabcdf7349aeb11cbb04',name:'王亚兰',num:'3'},{image:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblog.sina.com.cn%2Fpic%2F44f59d727e4f484157caa&refer=http%3A%2F%2Fblog.sina.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895914&t=c64c558fb5bbeabcdf7349aeb11cbb04',name:'林小茹',num:'2'}],
    img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fuserup%2F0909%2F2Z64022L38.jpg&refer=http%3A%2F%2Fimg.aiimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895055&t=cf79e9237a7082356ca39aede3968a6d',
    title:'林潇潇'
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
   
     let spelllist = this.data.spellnum
     let cardlist = this.data.cardnum
    this.setData({

      Swidth:wx.getSystemInfoSync().windowWidth,
      Sheight:wx.getSystemInfoSync().windowHeight,
      height:wx.getSystemInfoSync().windowWidth/3*2,
      cardheight:35 + cardlist.length*40,
      tuxedoheight:250 + 35 + cardlist.length*40,
      carheight:35 + spelllist.length*40,
      groupheight:200 + 35 + spelllist.length*40,
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },
  onShow:function(){
    this.setData({


    })
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
