const connection = require("../database/connection");

module.exports = async (id, name, address) => {
   try {
      const query = `UPDATE 
                        account 
                    SET 
                        name = '${name}', 
                        address = '${address}' 
                        WHERE id = ${id}`;

      const data = await connection(query);
      return data;
      
   } catch (error) {
      return false;
   }
};
