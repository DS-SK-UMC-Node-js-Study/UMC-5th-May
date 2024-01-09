export const insertStoreSql = "INSERT INTO store (region_id, name, address) VALUES (?, ?, ?);";

export const getStoreID = "SELECT * FROM store WHERE id = ?;";

export const confirmAddress = "SELECT EXISTS(SELECT 1 FROM store WHERE address = ?) as isExistAddress;";
