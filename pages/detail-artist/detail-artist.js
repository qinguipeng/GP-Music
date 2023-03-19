// pages/detail-artist/detail-artist.js
Page({

    data: {
        PhotoUrl: ''
    },
    onLoad() {
        
        const event = this.getOpenerEventChannel();
        event.on('getArtists', params => {
            console.log(params);
        });
    }
})