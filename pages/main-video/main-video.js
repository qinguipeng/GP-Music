// pages/main-video/main-video.js
import { gpRequest } from "../../services/index"
Page({
  data: {
    videoList: []
  }

  , onLoad() {
    gpRequest.get({
      url: "/top/mv",
      data: {
        limit: 20,
        offset: 0
      }
    }).then(res => {
      console.log(res);
      this.setData({
        videoList: res.data
      })
    })
  }
})