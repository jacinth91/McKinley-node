const User = require('../models/user.model.js');

exports.create = (req, res) => {
    res.send(req);
    if(!req.body.content){
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
        const user = new User({
            name:req.body.name,
            mobileNumber: req.body.mobileNumber || "Untitled Note", 
            password: req.body.password
        });


        user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });

}

exports.findOne = (req, res) => {
 res.send(req);

 

}