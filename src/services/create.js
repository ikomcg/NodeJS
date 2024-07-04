const connection = require("../database/connection");

module.exports = async (name, address) => {
   try {
      const query = `INSERT INTO account (name, address) VALUES ('${name}', '${address}')`;
      const data = await connection(query);
      return data;
   } catch (error) {
      return false;
   }
};
