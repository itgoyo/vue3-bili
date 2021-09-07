// import fetch from "../utils/axios";
import request from '../utils/request'


export function getData() {
  return request.get(
    // "/api/x/relation/stat?vmid=12767066"
    // "/api/room/v1/Room/getRoomInfoOld?mid=12767066"
    "/api/x/space/acc/info?mid=12767066"

  );
}
