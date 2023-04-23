const mongoose = require("mongoose");

const AdsSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'companies'
    },
    primaryText: { type: String, required: true },
    headline: { type: String, required: true },
    description: { type: String },
    cta: { type: String },
    imageUrl: { type: String }
  },
  {
    timestamps: true
  }
);

const adsModel = mongoose.model("ads", AdsSchema);

module.exports = adsModel;