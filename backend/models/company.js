const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
    {
        id: { type: Number, required: true, unique: true },
        companyName: { type: String, required: true },
        url: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

const companyModel = mongoose.model("companies", CompanySchema);

module.exports = companyModel;