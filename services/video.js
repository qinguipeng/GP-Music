import { gpRequest } from "./index"
// 请求视频 列表
export function getTopMV(offset = 0, limit = 30) {
  return gpRequest.get({
    url: "/top/mv",
    data: {
      limit,
      offset
    }
  })
}

// 请求视屏URL
export function getMVUrl(id) {
  return gpRequest.get({
    url: "/mv/url",
    data: { id },
  })
}

