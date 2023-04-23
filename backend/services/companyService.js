const companyModel = require("../models/company");

async function insertCompany(data) {
    try {
        const companyData = new companyModel(data);
        const res = await companyData.save();
        return res;
    } catch (error) {
        throw error;
    }
}

async function getAllCompanies() {
    try {
        const allCompanies = await companyModel.find();
        return allCompanies;
    } catch (error) {
        throw error;
    }
}

module.exports = { insertCompany, getAllCompanies };