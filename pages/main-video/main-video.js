// pages/main-video/main-video.js
import { getTopMV } from "../../services/video"
Page({
	data: {
		videoList: [],
		videoOffset: 0,
		hasMore: true
	}
	, onLoad() {
		this.fetchTopMV()
	}
	//**下拉刷新 
	, async onPullDownRefresh() {
		//1. 清空之前的数据
		this.setData({
			videoList: [],
			videoOffset: 0,
			hasMore: true
		})
		//2. 重新请求新的数据
		await this.fetchTopMV()
		//3. 停止下拉刷新
		wx.stopPullDownRefresh()
	}
	//**上拉加载更多
	, onReachBottom() {
		if (!this.data.hasMore) return
		this.fetchTopMV()
	}

	//===================网络请求相关==================
	// 获取videoList
	, async fetchTopMV() {
		//1. 获取数据
		const res = await getTopMV(this.data.videoOffset)
		// 2. 将新的数据追加到原来的数据后面 形成新newVideoList */
		const newVideoList = [...this.data.videoList, ...res.data]
		// 3. newVideoList覆盖原来 videoList
		this.setData({ videoList: newVideoList })
		this.data.videoOffset = this.data.videoList.length
		this.setData({ hasMore: res.hasMore })//setData（）开发者工具会动态显示
		// 4. 获取的数据后，停止下拉刷新，但上拉加载更多不需要调用 wx.stopPullDownRefresh()
	}

	// ==================事件监听===================
	, onVideoItemTap(event) {
		// const item = event.currentTarget.dataset.item
		// // console.log(item);
		// wx.navigateTo({
		// 	//路由跳转query传参id
		// 	url: `/pages/detail-video/detail-video?id=${item.id}`,
		// })
	}
})