const connection = require("../database/connection");

module.exports = async (id, name, address) => {
   try {
      const query = `UPDATE 
                        account 
                    SET 
                        username = '${name}', 
                        address = '${address}' 
                        WHERE id = ${id}`;

      await connection(query);
      return true;
   } catch (error) {
      return false;
   }
};
