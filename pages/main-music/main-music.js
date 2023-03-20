// pages/main-music/main-music.js
import { getMusixBanner } from "../../services/music"
import querySelect from "../../utils/query-select"
import GPthrottle from "../../utils/throttle"
// import { throttle } from "underscore"
const querySelectThrottle = GPthrottle(querySelect, 100)

Page({
    data: {
        shearchValue: "",
        banners: [],
        bannerHeight: 150

    },
    onLoad() {
        this.fetchMusicBanner()

    }

    //======================网络请求=============
    , async fetchMusicBanner() {
        const res = await getMusixBanner()
        this.setData({
            banners: res.banners
        })

    }


    //======================事件监听=============
    // 点击搜索
    , onSearchClick() {
        wx.navigateTo({
            url: '../../pages/detail-search/detail-search',
        })
    }
    , onBannerImgLoad(event) {
        querySelectThrottle(".banner-image").then(res => {
            this.setData({
                bannerHeight: res[0].height
            })
        })
    }

    // 
    , onRecommendMoreClick() {
        console.log(111);
    }
})