import { HYEventStore } from "hy-event-store"
import { getRecommendList } from "../services/music.js"

const recommendStore = new HYEventStore({
	state: {
		recommendSongs: []
	},
	actions: {
		fetchRecommendSongsAction(ctx) {
			getRecommendList(3778678).then(res => {
				ctx.recommendSongs = res.playlist.tracks
			})
		}
	}
})

export default recommendStore