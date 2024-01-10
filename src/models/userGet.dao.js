import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getUserReviewByReviewIdAtFirst, getUserReviewByReviewId, getUserMissionByMissionIdAtFirst, getUserMissionByMissionId } from "./userGet.sql.js";

// 내 리뷰 조회
export const getPreviewUserReview = async (cursorId, size, member_id) => {
  try {
    const conn = await pool.getConnection();

    if (cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null) {
      //   console.log("Query Parameters:", [member_id, cursorId, size]);
      const [user_reviews] = await pool.query(getUserReviewByReviewIdAtFirst, [parseInt(member_id), parseInt(size)]);
      conn.release();
      return user_reviews;
    } else {
      //   console.log("Query Parameters:", [member_id, cursorId, size]);
      const [user_reviews] = await pool.query(getUserReviewByReviewId, [parseInt(member_id), parseInt(cursorId), parseInt(size)]);
      conn.release();
      return user_reviews;
    }
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// 내가 진행중인 미션 조회
export const getPreviewUserMission = async (cursorId, size, member_id) => {
  try {
    const conn = await pool.getConnection();

    if (cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null) {
      // console.log("Query Parameters:", [member_id, cursorId, size]);
      const [user_missions] = await pool.query(getUserMissionByMissionIdAtFirst, [parseInt(member_id), parseInt(size)]);
      conn.release();
      return user_missions;
    } else {
      // console.log("Query Parameters:", [member_id, cursorId, size]);
      const [user_missions] = await pool.query(getUserMissionByMissionId, [parseInt(member_id), parseInt(cursorId), parseInt(size)]);
      conn.release();
      return user_missions;
    }
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
