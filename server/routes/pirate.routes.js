const PirateController = require("../controllers/pirate.controllers")


module.exports = app => {
    app.post("/api/pirate/create", PirateController.createPirate)
    app.get("/api/pirate", PirateController.findAll)
    app.get("/api/pirate/:_id", PirateController.onePirate)
    app.put("/api/pirate/update/:_id", PirateController.updatePirate)
    app.delete("/api/pirate/delete/:_id", PirateController.deletePirate)
}