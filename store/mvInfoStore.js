import { HYEventStore } from "hy-event-store"
import { getMVInfo } from "../services/video"
const mvInfoStore = new HYEventStore({
	state: {
		mvInfo: {}
	},
	actions: {
		fetchMvInfo(ctx, mvid) {
			getMVInfo(mvid).then(res => {
				ctx.mvInfo = res
				console.log(res );
			})
		}
	}
})

export default mvInfoStore