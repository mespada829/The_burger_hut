const express = require('express');
const burger = require('../models/burger');

const router = express.Router();


router.get('/', (req, res)=>{
    burger.selectAll(data=>{
        var dataObject = {
            burgers: data
        }
        console.log(dataObject);
        res.render("index", dataObject)
    })
});

router.post("/order", (req, res)=>{
    var bName = req.body.burger_name;
    burger.insertOne(bName, ()=>{res.redirect('/')});
})

router.put("/eat/:id", (req,res)=>{
    var devour = req.body.devoured;
    var id = req.params.id;
    burger.updateOne(devour, id, ()=>{
        res.redirect('/');
    });
});


module.exports = router;