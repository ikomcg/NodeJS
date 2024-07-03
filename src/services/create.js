const connection = require("../database/connection");

module.exports = async (name, address) => {
   try {
      const query = `INSERT INTO account (name, address) VALUES ('${name}', '${address}')`;
      await connection(query);
      return true;
   } catch (error) {
      console.log(error);
      return false;
   }
};
