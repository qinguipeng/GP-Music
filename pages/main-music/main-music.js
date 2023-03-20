// pages/main-music/main-music.js
import { getMusixBanner, getRecommendList } from "../../services/music"
import querySelect from "../../utils/query-select"
import recommendStore from "../../store/recommendStore"
import GPthrottle from "../../utils/throttle"
const querySelectThrottle = GPthrottle(querySelect, 100)



Page({
    data: {
        shearchValue: "",
        banners: [],
        bannerHeight: 150,
        recommendSongs: [],

    },
    onLoad() {
        this.fetchMusicBanner()
        // this.fetchRecommendList()

        // 监听数据仓库里面的recommendSongs 变化
        recommendStore.onState("recommendSongs", (value) => {
            this.setData({
                recommendSongs: value.slice(0, 6)
            })
        })
        // 发起获取推荐列表action：fetchRecommendSongsAction
        recommendStore.dispatch("fetchRecommendSongsAction")
    }

    //======================网络请求=============
    // 轮播图
    , async fetchMusicBanner() {
        const res = await getMusixBanner()
        this.setData({
            banners: res.banners
        })

    }
    // 请求推荐歌曲列表
    // , async fetchRecommendList() {
    //     const res = await getRecommendList(3778678)
    //     console.log(res);
    //     this.setData({
    //         recommendSongs: res.playlist.tracks.slice(0, 6)
    //     })
    // }



    //======================事件监听=============
    // 点击搜索
    , onSearchClick() {
        wx.navigateTo({
            url: '../../pages/detail-search/detail-search',
        })
    }
    // 图片加载完毕
    , onBannerImgLoad(event) {
        querySelectThrottle(".banner-image").then(res => {
            this.setData({
                bannerHeight: res[0].height
            })
        })
    }

    // 点击更多
    , onRecommendMoreClick() {
        wx.navigateTo({
            url: '../../pages/detail-song/detail-song',
        })
    }
})