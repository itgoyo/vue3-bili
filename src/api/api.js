// import fetch from "../utils/axios";
import request from '../utils/request'


export function getData() {
  return request.get(
    // "/api/x/relation/stat?vmid=12767066"
    // "/api/room/v1/Room/getRoomInfoOld?mid=12767066"
    "/api/x/space/acc/info?mid=12767066"

  );
}

export function SendMsgToWeChat() {

  return request.get(
    "https://sctapi.ftqq.com/SCT54044Tqx9tyefQsHlbrI2crqzQ1g2g.send?title=👿直播断线提醒👿&desp=Bilibili直播已经断开"
  )

}
