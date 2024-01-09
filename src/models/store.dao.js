import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { confirmAddress, getStoreID, insertStoreSql } from "./store.sql.js";

// Store 데이터 삽입
export const addStore = async (data) => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmAddress, data.address);

    if (confirm[0].isExistAddress) {
      conn.release();
      return -1;
    }

    console.log("Inserting store data:", data); // 추가: 데이터가 올바르게 전달되는지 확인하기 위한 로그

    const result = await pool.query(insertStoreSql, [data.region_id, data.name, data.address]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    console.error("Error in addStore:", err); // 추가: 에러 발생 시 에러 메시지 출력
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// 가게 정보 얻기
export const getStore = async (storeId) => {
  try {
    const conn = await pool.getConnection();
    const [store] = await pool.query(getStoreID, storeId);

    console.log(store);

    if (store.length == 0) {
      return -1;
    }

    conn.release();
    return store;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
