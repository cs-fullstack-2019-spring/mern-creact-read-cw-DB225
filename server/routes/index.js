var express = require('express');
var router = express.Router();
var movieCollection = require('../models/MovieSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Didier' });
});

router.post('/create',(req,res)=>{
  console.log(req.body);
  movieCollection.create(req.body, (errors,results)=>{
    if(errors) res.send(errors);
    else res.send("Added");
  })
});

router.get('/list', (req,res)=>{
  movieCollection.find({}, (err, results)=>{
    if(err) res.send(err);
    else res.send(results)
  })
});



module.exports = router;
