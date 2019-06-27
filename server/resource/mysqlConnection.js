import mysql from 'mysql';

const {
  SQL_HOST: host,
  SQL_PORT: port,
  SQL_USERNAME: user,
  SQL_PASSWORD: password,
  SQL_DATABASE: database,
} = process.env;

const pool = mysql.createPool({
  connectionLimit: 4,
  multipleStatements: false,
  host,
  port,
  user,
  password,
  database,
});

export const sqlExecOne = qr =>
  new Promise((resolve, reject) => {
    pool.query(qr, (err, rows) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
