// pages/main-music/main-music.js
Page({
    data: {
        shearchValue: "",
    },
    //======================事件监听相关=============

    // 点击搜索
    onSearchClick() {
        wx.navigateTo({
            url: '../../pages/detail-search/detail-search',
        })
    }
})