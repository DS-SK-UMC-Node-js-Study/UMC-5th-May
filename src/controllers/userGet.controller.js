import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { getUserReview } from "../services/userGet.provider.js";

export const reviewUserPreview = async (req, res, next) => {
  console.log("내 리뷰 조회를 요청하였습니다!");
  //   console.log(req.params.member_id);

  return res.send(response(status.SUCCESS, await getUserReview(req.params.member_id, req.query)));
};
