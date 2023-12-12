// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const drones = [
    { name: "Creeper XXL 1000", propellers: 3, maxSpeed: 12 },
    { name: "Racer 987", propellers: 4, maxSpeed: 20 },
    { name: "Courier 7865", propellers: 6, maxSpeed: 18 }
  ];

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

  mongoose
    .connect(MONGO_URI)
    .then((x) => {
      console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
      return Drone.create(drones);
    })
    .then(createdDrones => console.log(`${createdDrones.length} drones were added`))
    .then(()=> mongoose.connection.close())
    .catch(err => console.log(err))