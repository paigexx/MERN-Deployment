const mongoose = require("mongoose")

const PirateSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is required."],
        minlength: [2, "Pirates name must be 2 characters long!"]
    }, 
    image: {
        type: String, 
        required: [true, "Image is required!"]
    },
    treasureChests: {
        type: Number, 
        required: [true, "Number of treasure chests required!"],
        min: [0, "Treaasure Chests can't be less than 0 or greater than 20"],
        max: [20, "Treaasure Chests can't be less than 0 or greater than 20"]
    },
    catchPhrase: {
        type: String, 
        required: [true, "Arrr matey, catch phrase is required!" ]
    },
    position: {
        type: String,
        required: [true, "Position is required aboard this ship!"] 
    }, 
    pegLeg: {
        type: Boolean, 
        required: [true, "Pegleg or no?"]
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Eye path or no?"]
    },
    hookHand: {
        type: Boolean, 
        required: [true, "Hook for a hand or no?"]
    }
}, {timestamps: true})

const Pirate = mongoose.model("Pirate", PirateSchema)

module.exports = Pirate 