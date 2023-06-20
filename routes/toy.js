var express = require ('express');
const toyModel = require('../models/toyModel');
var router = express.Router();

router.get('/', async (req, res) => {
   var toy_list = await toyModel.find({})
   res.render('toy/list', { toy: toy_list })
})

router.get('/add', (req, res) => {
   res.render('toy/add');
})
router.post('/add', async (req, res) => {
   var toy = req.body;
   await toyModel.create(toy)
   .then(() => { console.log ("Add new toy succeed !")});
   res.redirect('/toy');
})

router.get('/edit/:id', async (req, res) => {
   var toy = await toyModel.findById(req.params.id);
   res.render('toy/edit', { toy : toy });
})

router.post('/edit/:id', async(req, res) =>{
   await toyModel.findByIdAndUpdate(req.params.id, req.body)
   .then(()=>{console.log("Edit toy succeed!!!")});
   res.redirect('/toy');
})

router.get('/delete/:id', async(req, res) => {
   await toyModel.findByIdAndDelete(req.params.id)
   .then(() => { console.log ('Delete Toy succeed !')});
   res.redirect('/toy');
})

module.exports = router;