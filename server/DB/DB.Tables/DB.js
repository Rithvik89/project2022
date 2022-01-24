const config = require("../../HTTP/config");

const { mysql_pool } = config;

function Exec(create_query, arg) {
  // console.log(create_query, arg);
  return new Promise((resolve, reject) => {
    mysql_pool.query(create_query, arg, (error, result, field) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function QueryAll(get_all_query) {
  return new Promise(async (resolve, reject) => {
    try {
      mysql_pool.query(get_all_query, (error, result, field) => {
        resolve(result);
      });
    } catch (err) {
      reject(err);
    }
  });
}

function Query(get_query, arg) {
  return new Promise(async (resolve, reject) => {
    try {
      mysql_pool.query(get_query, arg, (error, result, field) => {
        resolve(result);
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = { QueryAll, Exec, Query };
