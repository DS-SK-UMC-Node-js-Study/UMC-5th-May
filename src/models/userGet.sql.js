// 내 리뷰 조회
export const getUserReviewByReviewId = "SELECT m.name, m.id, r.id, r.score, r.body, r.created_at " + "FROM review r JOIN member m on r.member_id = m.id " + "WHERE r.member_id = ? AND r.id < ? " + "ORDER BY r.id DESC LIMIT ? ;";

export const getUserReviewByReviewIdAtFirst = "SELECT m.name, m.id, r.id, r.score, r.body, r.created_at " + "FROM review r JOIN member m on r.member_id = m.id " + "WHERE r.member_id = ? " + "ORDER BY r.id DESC LIMIT ? ;";

// 내가 진행중인 미션 조회
export const getUserMissionByMissionId = "SELECT s.name, m.id, mi.id, mi.reward, mi.deadline, mi.mission_spec " + "FROM member_mission mm JOIN mission mi ON mm.mission_id = mi.id JOIN member m ON mm.member_id = m.id JOIN store s on mi.store_id = s.id " + "WHERE mm.member_id = ? AND mm.status = 'progress' AND mi.id < ? " + "ORDER BY mi.id DESC LIMIT ? ;";

export const getUserMissionByMissionIdAtFirst = "SELECT s.name, m.id, mi.id, mi.reward, mi.deadline, mi.mission_spec " + "FROM member_mission mm JOIN mission mi ON mm.mission_id = mi.id JOIN member m ON mm.member_id = m.id JOIN store s on mi.store_id = s.id " + "WHERE mm.member_id = ? AND mm.status = 'progress' " + "ORDER BY mi.id DESC LIMIT ? ;";
