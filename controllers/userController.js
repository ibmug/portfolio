const {User} = require("../models");

//Controllers should not be returning any res, that should be the task of routes...
module.exports = {
    findAll:function (req,res){
        User.find(req.query)
        // .sort({date})
        .then(dbModel => res.json(dbModel))
        .catch(err=> res.status(422).json(err));
    },
    findById: function(req,res){
        User.findById(req.params.id)
        .then(dbModel=>res.json(dbModel))
        .catch(err=>res.status(422).json(err));
    },
    create: function(req,res){
        console.log(req.body);
        User.create({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email
        })
        .then(dbModel => res.json(dbModel))
        .catch((err)=>{res.status(422).json(err)});
    }
};