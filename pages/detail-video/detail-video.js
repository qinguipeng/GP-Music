// pages/detail-video/detail-video.js
import { getMVUrl } from "../../services/video"
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
		]
	}
	, onLoad(options) {
		//1. 获取id
		const id = options.id
		this.setData({ id })
		// 2. 请求数据Url
		this.fetchMVUrl()
	}

	//=================网络请求相关==============
	// 获取mvUrl
	, async fetchMVUrl() {
		const res = await getMVUrl(this.data.id)
		this.setData({ mvUrl: res.data.url })
	}
})