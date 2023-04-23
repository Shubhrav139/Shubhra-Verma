const express = require("express");
const controller = require("../controllers/companyController");
const router = express.Router();

router.route("/company").post((req, res) => {
    controller.insertCompany(req, res);
});

router.route("/company").get((req, res) => {
    controller.getAllCompanies(req, res);
});

module.exports = router;