// 元素选择器
export default function querySelect(slector) {
	// 获取image组件的高度
	return new Promise(resolve => {
		const query = wx.createSelectorQuery()
		query.select(slector).boundingClientRect()
		query.exec((res) => {
			resolve(res)
		})
	})
}
