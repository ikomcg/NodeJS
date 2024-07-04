const connection = require("../database/connection");

module.exports = async (limit, page, search) => {
   try {
      const dataQuery = `SELECT * FROM account WHERE name LIKE ? LIMIT ? OFFSET ? `;

      const data = await connection(dataQuery, [`%${search}%`, limit, page]);
      const countQuery = `SELECT COUNT(*) FROM account`;

      const countResults = await connection(countQuery);
      
      const totalItems = countResults[0]["COUNT(*)"];
      const totalPages = Math.ceil(totalItems / limit);

      return {
         results: data,
         count: countResults[0].count,
         limit,
         page,
         total_pages: totalPages,
         count: totalItems,
      };
   } catch (error) {
      return error;
   }
};
