import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getReviewByReviewIdAtFirst, getReviewByReviewId } from "./storeGet.sql.js";

// 가게 리뷰 조회
export const getPreviewReview = async (cursorId, size, store_id) => {
  try {
    const conn = await pool.getConnection();

    if (cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null) {
      // console.log("Query Parameters:", [store_id, cursorId, size]);
      const [reviews] = await pool.query(getReviewByReviewIdAtFirst, [parseInt(store_id), parseInt(size)]);
      conn.release();
      return reviews;
    } else {
      // console.log("Query Parameters:", [store_id, cursorId, size]);
      const [reviews] = await pool.query(getReviewByReviewId, [parseInt(store_id), parseInt(cursorId), parseInt(size)]);
      conn.release();
      return reviews;
    }
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
