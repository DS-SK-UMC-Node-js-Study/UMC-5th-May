// 가게 리뷰 조회
export const getReviewByReviewId = "SELECT m.name, m.id, r.id, r.score, r.body, r.created_at " + "FROM review r JOIN member m on r.member_id = m.id " + "WHERE r.store_id = ? AND r.id < ? " + "ORDER BY r.id DESC LIMIT ? ;";

export const getReviewByReviewIdAtFirst = "SELECT m.name, m.id, r.id, r.score, r.body, r.created_at " + "FROM review r JOIN member m on r.member_id = m.id " + "WHERE r.store_id = ? " + "ORDER BY r.id DESC LIMIT ? ;";

// 가게 미션 조회
export const getMissionByMissionId = "SELECT s.name, s.id, mi.id, mi.reward, mi.deadline, mi.mission_spec " + "FROM mission mi JOIN store s on mi.store_id = s.id " + "WHERE mi.store_id = ? AND mi.id < ? " + "ORDER BY mi.id DESC LIMIT ? ;";

export const getMissionByMissionIdAtFirst = "SELECT s.name, s.id, mi.id, mi.reward, mi.deadline, mi.mission_spec " + "FROM mission mi JOIN store s on mi.store_id = s.id " + "WHERE mi.store_id = ? " + "ORDER BY mi.id DESC LIMIT ? ;";
