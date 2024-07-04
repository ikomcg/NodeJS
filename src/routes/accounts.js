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
      res.status(200).send({ ...req.body });
   } else {
      res.status(500).send({
         message: "Failed to Create",
      });
   }
});

router.get("/list", async (req, res) => {
   const { limit, page, search } = req.query;

   const limitValue = parseInt(limit, 10) || 10;
   const pageValue = parseInt(page, 10) || 1;

   const results = await RetrieveService(limitValue, pageValue, search || "");

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

router.patch("/update", async (req, res) => {
   const { name, address } = req.body;
   const { id } = req.query;

   const results = await UpdateService(id, name, address);

   if (results) {
      res.status(200).send({
         id,
         ...req.body,
      });
   } else {
      res.status(500).send({
         message: "Failed to Update",
      });
   }
});

module.exports = router;
