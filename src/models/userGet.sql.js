// 내 리뷰 조회
export const getUserReviewByReviewId = "SELECT m.name, m.id, r.id, r.score, r.body, r.created_at " + "FROM review r JOIN member m on r.member_id = m.id " + "WHERE r.member_id = ? AND r.id < ? " + "ORDER BY r.id DESC LIMIT ? ;";

export const getUserReviewByReviewIdAtFirst = "SELECT m.name, m.id, r.id, r.score, r.body, r.created_at " + "FROM review r JOIN member m on r.member_id = m.id " + "WHERE r.member_id = ? " + "ORDER BY r.id DESC LIMIT ? ;";
