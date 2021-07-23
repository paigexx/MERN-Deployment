const express = require("express")
const app = express()
const port = 8000
const cors = require("cors")
app.use(cors())

// this connects to the db
require("./server/config/mongoose.config");

// handle the post requests
app.use(express.json(), express.urlencoded({extended:true}))


// dont foget to add my routes here: 
const AllMyRoutes = require("./server/routes/pirate.routes");
AllMyRoutes(app);

app.listen(port, () => console.log(`Running on port ${port}!!`));