const connection = require("../database/connection");

module.exports = async (id) => {
   try {
      const query = `DELETE FROM account WHERE id = ${id}`;
      await connection(query);
      return true;
   } catch (error) {
      return false;
   }
};
