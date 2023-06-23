var express = require ('express');
const carModel = require('../models/carModel');
var router = express.Router();

router.get('/', async (req, res) => {
   var car_list = await carModel.find({})
   res.render('car/list', { car: car_list })
})

router.get('/add', (req, res) => {
   res.render('car/add');
})
router.post('/add', async (req, res) => {
   var car = req.body;
   await carModel.create(car)
   .then(() => { console.log ("Add new car succeed !")});
   res.redirect('/car');
})

router.get('/edit/:id', async (req, res) => {
   var car = await carModel.findById(req.params.id);
   res.render('car/edit', { car : car });
})

router.post('/edit/:id', async(req, res) =>{
   await carModel.findByIdAndUpdate(req.params.id, req.body)
   .then(()=>{console.log("Edit car succeed!!!")});
   res.redirect('/car');
})

router.get('/delete/:id', async(req, res) => {
   await carModel.findByIdAndDelete(req.params.id)
   .then(() => { console.log ('Delete car succeed !')});
   res.redirect('/car');
})

module.exports = router;