const service = require("../services/adService");

function insertAds(req, res) {
  service
    .insertAds(req.body)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
}

function getAllAds(req, res) {
  service
    .getAllAds()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
}

function searchAds(req, res) {
  service
    .searchAds(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
}

module.exports = { insertAds, getAllAds, searchAds };
