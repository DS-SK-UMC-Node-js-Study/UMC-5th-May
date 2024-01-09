// export const insertUserSql = "INSERT INTO user (email, user_name, gender, birth, user_address, user_spec_address, user_phone) VALUES (?, ?, ?, ?, ?, ?, ?);";
export const insertUserSql = "INSERT INTO member (name, nickname, gender, age, address, spec_address, email, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";

// export const getUserID = "SELECT * FROM user WHERE user_id = ?";
export const getUserID = "SELECT * FROM member WHERE id = ?;";

// export const connectFoodCategory = "INSERT INTO user_favor_category (f_category_id, user_id) VALUES (?, ?);";
export const connectFoodCategory = "INSERT INTO member_prefer (category_id, member_id) VALUES (?, ?);";

// export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail";
export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM member WHERE email = ?) as isExistEmail;";

// export const getPreferToUserID = "SELECT ufc.uf_category_id, ufc.f_category_id, ufc.user_id, fcl.f_category_name " + "FROM user_favor_category ufc JOIN food_category_list fcl on ufc.f_category_id = fcl.f_category_id " + "WHERE ufc.user_id = ? ORDER BY ufc.f_category_id ASC;";
export const getPreferToUserID = "SELECT mp.id, mp.category_id, mp.member_id, fc.name " + "FROM member_prefer mp JOIN food_category fc on mp.category_id = fc.id " + "WHERE mp.member_id = ? ORDER BY mp.category_id ASC;";
