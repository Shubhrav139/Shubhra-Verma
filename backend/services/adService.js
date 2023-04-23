const adsModel = require("../models/ad");

async function insertAds(data) {
  try {
    const adsData = new adsModel(data);
    const res = await adsData.save();
    return res;
  } catch (error) {
    throw error;
  }
}

async function getAllAds() {
  try {
    const allAds = await adsModel.find().populate('company');
    return allAds;
  } catch (error) {
    throw error;
  }
}

async function searchAds(data) {
  try {
    const { keyword } = data;
    const filter = {
      $regex: keyword
    }

    const ads = await adsModel.aggregate([{ $lookup: { from: "companies", localField: "company", foreignField: "_id", as: "company" } },
    { $unwind: { path: "$company" } },
    { $match: { $or: [{ 'company.companyName': filter }, { primaryText: filter }, { headline: filter }, { description: filter }] } }])

    return ads;
  } catch (error) {
    throw error;
  }
}

module.exports = { insertAds, getAllAds, searchAds };