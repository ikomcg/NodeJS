const mysql = require("mysql");

const dbConfig = {
   host: "localhost",
   user: "root",
   password: "root1",
   port: 3306,
   database: "nodejs_mysql",
};

const db = mysql.createConnection(dbConfig);

module.exports = (query) => {
   return new Promise((reject, resolve) =>
      db.connect((err) => {
         if (err) {
            reject(err);
         } else {
            db.query(query, (error, results) => {
               if (error) {
                  reject(error);
               } else {
                  resolve(results);
               }
            });
         }
      })
   );
};
