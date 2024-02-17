const router = require("express").Router();
const Apartment = require('../models/Apartment.model');

router.get("/", (req, res, next) => {
    Apartment.find({})
            .then(allApartments => res.json(allApartments))
            .catch(err => console.log(err))
  
});

router.get("/:apartmentId", (req, res) =>{
    const {apartmentId} = req.params;

    Apartment.findById(apartmentId)
            .then(singleApartment => res.json(singleApartment))
            .catch(err => console.log(err))
})

router.post("/", (req, res) => {
    Apartment.create(req.body)
            .then(newApartment => res.json(newApartment))
            .catch(err => console.log(err))
})

module.exports = router;
