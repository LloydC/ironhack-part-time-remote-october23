const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the Apartment model to whatever makes sense in this case
const apartmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
      default: 'images/default-ApartmentImg.jpg'
    },
    pricePerDay: {
        type: Number,
        required: true
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Apartment = model("Apartment", apartmentSchema);

module.exports = Apartment;
