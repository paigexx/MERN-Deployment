const Pirate = require("../models/pirate.models")
// change the model in the controllers

module.exports = {
    createPirate: (req, res) => {
    Pirate.create(req.body)
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },    
    findAll: (req, res) => {
    Pirate.find()
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },    
    onePirate: (req, res) => {
    Pirate.findOne({ _id: req.params._id })
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },    
    updatePirate: (req, res) => {
    Pirate.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },

    deletePirate: (req, res) => {
    Pirate.deleteOne({ _id: req.params._id })
        .then((data) => res.json({ results: data }))
        .catch((err) => res.json(err.errors));
    },
};
