const express = require("express");
const router = express.Router();

const CreateService = require("../services/create");
const UpdateService = require("../services/update");
const DeleteService = require("../services/delete");
const RetrieveService = require("../services/retrieve");

router.post("/create/accounts", async (req, res) => {
   const { name, address } = req.body;

   const results = await CreateService(name, address);

   if (results) {
      res.status(200).send({
         message: "Successfull Created",
      });
   } else {
      res.status(500).send({
         message: "Failed to Create",
      });
   }
});

router.get("/list", async (req, res) => {
   const results = await RetrieveService();

   if (results) {
      res.status(200).send(results);
   } else {
      res.status(500).send({
         message: "Failed to Retrieve",
      });
   }
});

router.delete("/delete", async (req, res) => {
   const { id } = req.query;
   const results = await DeleteService(id);

   if (results) {
      res.status(200).send(results);
   } else {
      res.status(500).send({
         message: "Failed to Delete",
      });
   }
});

module.exports = router;
