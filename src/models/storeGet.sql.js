export const getReviewByReviewId = "SELECT m.name, m.id, r.id, r.score, r.body, r.created_at " + "FROM review r JOIN member m on r.member_id = m.id " + "WHERE r.store_id = ? AND r.id < ? " + "ORDER BY r.id DESC LIMIT ? ;";

export const getReviewByReviewIdAtFirst = "SELECT m.name, m.id, r.id, r.score, r.body, r.created_at " + "FROM review r JOIN member m on r.member_id = m.id " + "WHERE r.store_id = ? " + "ORDER BY r.id DESC LIMIT ? ;";
