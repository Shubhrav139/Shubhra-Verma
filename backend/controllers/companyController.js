const service = require("../services/companyService");

function insertCompany(req, res) {
    service
        .insertCompany(req.body)
        .then((result) => {
            res.status(201).send(result);
        })
        .catch((err) => {
            res.status(400).send({ message: err.message });
        });
}

function getAllCompanies(req, res) {
    service
        .getAllCompanies()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send({ message: err.message });
        });
}

module.exports = { insertCompany, getAllCompanies };