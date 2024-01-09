import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { connectFoodCategory, confirmEmail, getUserID, insertUserSql, getPreferToUserID, confirmDoMission, getDoMissionID, insertDoMissionSql } from "./user.sql.js";

// User 데이터 삽입
export const addUser = async (data) => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmEmail, data.email);

    if (confirm[0].isExistEmail) {
      conn.release();
      return -1;
    }

    console.log("Inserting user data:", data); // 추가: 데이터가 올바르게 전달되는지 확인하기 위한 로그

    // const result = await pool.query(insertUserSql, [data.email, data.name, data.gender, data.birth, data.addr, data.specAddr, data.phone]);
    const result = await pool.query(insertUserSql, [data.name, data.nickname, data.gender, data.age, data.address, data.spec_address, data.email, data.phone_number]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    console.error("Error in addUser:", err); // 추가: 에러 발생 시 에러 메시지 출력
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// 사용자 정보 얻기
export const getUser = async (userId) => {
  try {
    const conn = await pool.getConnection();
    const [user] = await pool.query(getUserID, userId);

    console.log(user);

    if (user.length == 0) {
      return -1;
    }

    conn.release();
    return user;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// 음식 선호 카테고리 매핑
export const setPrefer = async (userId, foodCategoryId) => {
  try {
    const conn = await pool.getConnection();

    console.log("Mapping prefer:", userId, foodCategoryId); // 추가: 로그 출력

    await pool.query(connectFoodCategory, [foodCategoryId, userId]);

    conn.release();

    return;
  } catch (err) {
    console.error("Error in setPrefer:", err); // 추가: 에러 메시지 출력
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// 사용자 선호 카테고리 반환
export const getUserPreferToUserID = async (userID) => {
  try {
    const conn = await pool.getConnection();
    const prefer = await pool.query(getPreferToUserID, userID);

    conn.release();

    return prefer;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// 미션 도전 데이터 삽입
export const addDoMission = async (data) => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmDoMission, [data.member_id, data.mission_id]);

    if (confirm[0].isExistDoMission) {
      conn.release();
      return -1;
    }

    console.log("Inserting domission data:", data); // 추가: 데이터가 올바르게 전달되는지 확인하기 위한 로그

    const result = await pool.query(insertDoMissionSql, [data.member_id, data.mission_id, data.status]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    console.error("Error in addDoMission:", err); // 추가: 에러 발생 시 에러 메시지 출력
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// 미션 도전 정보 얻기
export const getDoMission = async (domissionId) => {
  try {
    const conn = await pool.getConnection();
    const [domission] = await pool.query(getDoMissionID, domissionId);

    console.log(domission);

    if (domission.length == 0) {
      return -1;
    }

    conn.release();
    return domission;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
