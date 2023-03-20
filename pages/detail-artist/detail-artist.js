// pages/detail-artist/detail-artist.js
import mvInfoStore from "../../store/mvInfoStore"


Page({

    data: {
        mvInfo: {},
        artist: {}
    },
    onLoad() {
        mvInfoStore.onState('mvInfo', (value) => {
            const artist = value.data.artists[0]
            // console.log(value);
            this.setData({
                mvInfo: value,
                artist
            })
        })
    },

})