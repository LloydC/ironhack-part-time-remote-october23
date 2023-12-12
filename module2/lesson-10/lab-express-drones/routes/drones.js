const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
      .then(foundDrones =>{
        console.log('foundDrones', foundDrones)
        res.render('drones/list', { foundDrones })
      })
      .catch(err => console.log(err))
  // ... your code here
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log('propellers', typeof req.body.propellers)
  const {name, propellers, maxSpeed} = req.body
  Drone.create(req.body)
  // Drone.create({name, propellers: Number(propellers), maxSpeed: Number(maxSpeed)})
  .then(()=>res.redirect('/drones/create'))
  .catch(err => console.log(err))
  
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then(foundDrone => {
      console.log('foundDrone', foundDrone)
      res.render('drones/update-form', foundDrone)
    })
  
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
 console.log('req.body', req.body)
 const {name, propellers, maxSpeed} = req.body;

 Drone.findByIdAndUpdate(req.params.id, req.body)
  .then(()=> res.redirect(`/drones/`))
  .catch(err => console.log(err))
 
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
      .then(()=> res.redirect('/drones'))
      .catch(err => console.log(err))
});

module.exports = router;
