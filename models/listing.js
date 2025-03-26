const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: String,
    image: {
      filename: { type: String, required: true },
      url: {
        type: String,
        required: true,
        default:
          "https://images.unsplash.com/photo-1732388579063-c4f80d563389?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    price: Number,
    location: String,
    country: String,
  });
  
const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;