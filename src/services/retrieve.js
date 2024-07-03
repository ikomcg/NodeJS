const connection = require("../database/connection");

module.exports = async () => {
   try {
      const query = `SELECT * FROM account`;

      const data = await connection(query);

      return data;
   } catch (error) {
      return error;
   }
};
