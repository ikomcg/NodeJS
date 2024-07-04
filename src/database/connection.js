const mysql = require("mysql");
require("dotenv").config();

const env = process.env;

const dbConfig = {
   host: env.HOST,
   user: env.USER,
   password: env.PASSWORD,
   port: env.PORT,
   database: env.DATABASE,
};

const db = mysql.createPool(dbConfig);

module.exports = (query, exectQuery) => {
   return new Promise((resolve, reject) =>
      db.getConnection((err, connection) => {
         if (err) {
            console.log("Err get connection :", err);
            reject(err);
         } else {
            connection.query(query, exectQuery, (error, results) => {
               connection.release();
               if (error) {
                  console.log("Err query connection :", error);
                  reject(error);
               } else {
                  resolve(results);
               }
            });
         }
      })
   );
};
