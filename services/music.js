import { gpRequest } from "../services/index"


// 1. 轮播图
export function getMusixBanner(type = 0) {
	return gpRequest.get({
		url: "/banner",
		data: {
			type
		}
	})
}