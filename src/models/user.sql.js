// 회원가입
export const insertUserSql = "INSERT INTO member (name, nickname, gender, age, address, spec_address, email, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM member WHERE id = ?;";

export const connectFoodCategory = "INSERT INTO member_prefer (category_id, member_id) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM member WHERE email = ?) as isExistEmail;";

export const getPreferToUserID = "SELECT mp.id, mp.category_id, mp.member_id, fc.name " + "FROM member_prefer mp JOIN food_category fc on mp.category_id = fc.id " + "WHERE mp.member_id = ? ORDER BY mp.category_id ASC;";

// 미션 도전
export const insertDoMissionSql = "INSERT INTO member_mission (member_id, mission_id, status) VALUES (?, ?, ?);";

export const getDoMissionID = "SELECT * FROM member_mission WHERE id = ?;";

export const confirmDoMission = "SELECT EXISTS(SELECT 1 FROM member_mission WHERE member_id = ? AND mission_id = ?) as isExistDoMission;";
