const express = require("express");
const controller = require("../controllers/adController");
const router = express.Router();

router.route("/ads").post((req, res) => {
  controller.insertAds(req, res);
});

router.route("/ads").get((req, res) => {
  controller.getAllAds(req, res);
});

router.route("/search-ads").post((req, res) => {
  controller.searchAds(req, res);
});

module.exports = router;
