const express = require("express");
const router = express.Router();

router.get("/list/viewers", (request, response) => {
   console.log(request.query);

   response.json({
      name: "Miko",
      gender: "male",
   });
});

router.post("/create/viewer", (request, response) => {
   response.json(request.headers);
});

module.exports = router;
