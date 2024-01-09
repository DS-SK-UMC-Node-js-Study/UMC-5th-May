// 특정 지역에 가게 추가
export const insertStoreSql = "INSERT INTO store (region_id, name, address) VALUES (?, ?, ?);";

export const getStoreID = "SELECT * FROM store WHERE id = ?;";

export const confirmAddress = "SELECT EXISTS(SELECT 1 FROM store WHERE address = ?) as isExistAddress;";

// 가게 리뷰 추가
export const insertReviewSql = "INSERT INTO review (member_id, store_id, body, score) VALUES (?, ?, ?, ?);";

export const getReviewID = "SELECT * FROM review WHERE id = ?;";

export const confirmStore = "SELECT EXISTS(SELECT id FROM store WHERE id = ?) as isExistStore;";
