import { gpRequest } from "./index"
// 1. top mv
export function getTopMV(offset = 0, limit = 30) {
  return gpRequest.get({
    url: "/top/mv",
    data: {
      limit,
      offset
    }
  })
}

// 3. mv地址
export function getMVUrl(id) {
  return gpRequest.get({
    url: "/mv/url",
    data: { id },
  })
}
// 2. 获取 mv 数据
export function getMVInfo(mvid) {
  return gpRequest.get({
    url: "/mv/detail",
    data: { mvid }
  })
}
// 4. 相关视频
export function getAllvideo(id) {
  return gpRequest.get({
    url: "/related/allvideo",
    data: { id }
  })
}

