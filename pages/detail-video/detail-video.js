// pages/detail-video/detail-video.js
import { getMVUrl, getMVInfo, getAllvideo } from "../../services/video"
import mvInfoStore from "../../store/mvInfoStore"

Page({
  data: {
    id: 0,
    mvUrl: "",
    // 弹幕
    danmuList: [
      {
        text: "沙发",
        color: "#fff",
        time: 1
      }, {
        text: "真好",
        color: "#fff",
        time: 2
      }, {
        text: "？？？",
        color: "#fff",
        time: 5
      }, {
        text: "a~",
        color: "#fff",
        time: 6
      }, {
        text: "!!!",
        color: "#fff",
        time: 8
      }, {
        text: "0000",
        color: "#fff",
        time: 9
      },
    ],
    mvInfo: {},
    isDescShowAll: false,
    relatedVideoList: [],
  }
  , onLoad(options) {

    //1. 获取id
    const id = options.id
    this.setData({ id })
    // 3. mv地址
    this.fetchMVUrl()

    // ==================主要为了将mvInfo保存到仓库中
    mvInfoStore.dispatch("fetchMvInfo", this.data.id)
    // ==================
    // 2. 获取 mv 数据 
    this.fetchMVInfo()
    // 4. 获取 相关视频
    this.fetchMVRelated()
  }
  //=================网络请求相关==============
  // 3. mv地址
  , async fetchMVUrl() {
    const res = await getMVUrl(this.data.id)
    this.setData({ mvUrl: res.data.url })
  }
  // 2. 获取 mv 数据 
  , async fetchMVInfo() {
    const res = await getMVInfo(this.data.id)
    this.setData({
      mvInfo: res.data
    })
  }
  //4. 相关视频
  , async fetchMVRelated() {
    const res = await getAllvideo(this.data.id)
    this.setData({ relatedVideoList: res.data })
  }
  //=================事件监听相关==============
  , onDescTap() {
    this.setData({
      isDescShowAll: !this.data.isDescShowAll
    })
  }

  // 下拉刷新
  , onPullDownRefresh() {
    // 清空除id以外的数据，重新请求
    this.setData({
      mvUrl: "",
      // 弹幕
      danmuList: [
        {
          text: "沙发",
          color: "#fff",
          time: 1
        }, {
          text: "真好",
          color: "#fff",
          time: 2
        }, {
          text: "？？？",
          color: "#fff",
          time: 5
        }, {
          text: "a~",
          color: "#fff",
          time: 6
        }, {
          text: "!!!",
          color: "#fff",
          time: 8
        }, {
          text: "0000",
          color: "#fff",
          time: 9
        },
      ],
      mvInfo: {},
      relatedVideoList: [],
    })
    // 3. mv地址
    this.fetchMVUrl()
    // 2. 获取 mv 数据 
    this.fetchMVInfo()
    // 4. 获取 相关视频
    this.fetchMVRelated()
    // 停止显示加载刷新
    wx.stopPullDownRefresh()
  }

  // 点击某个推进视频
  //相当于对整个data进行重新获取数据，（数据中无可用请求数据的id,判断有没有id 没有设置为id:14612840  ）
  , onRelatedItemTap(event) {
    const item = event.currentTarget.dataset.item
    // 清空当前data中所有数据
    this.setData({
      id: 0,
      mvUrl: "",
      // 弹幕
      danmuList: [
        {
          text: "沙发",
          color: "#fff",
          time: 1
        }, {
          text: "真好",
          color: "#fff",
          time: 2
        }, {
          text: "？？？",
          color: "#fff",
          time: 5
        }, {
          text: "a~",
          color: "#fff",
          time: 6
        }, {
          text: "!!!",
          color: "#fff",
          time: 8
        }, {
          text: "0000",
          color: "#fff",
          time: 9
        },
      ],
      mvInfo: {},
      relatedVideoList: [],
    })
    //1. 携带id 获取url 存到data里面
    this.setData({
      id: item.id ? item.id : 14612840
    })

    // 3. mv地址
    this.fetchMVUrl()
    // 2. 获取 mv 数据 
    this.fetchMVInfo()
    // 4. 获取 相关视频
    this.fetchMVRelated()
    // 停止显示加载刷新
    wx.stopPullDownRefresh()
  }
  // 点击艺术家
  , onAtistTap() {
    // const artists = this.data.mvInfo.artist
    wx.navigateTo({
      url: `../../pages/detail-artist/detail-artist`,
    })
  }


  , onUnload() {
    mvInfoStore.offState('mvInfo')
  }
})