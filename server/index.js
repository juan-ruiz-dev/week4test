const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const ctrl = require('./controller')

app.get("/api/compliment", ctrl.getCompliment);
app.get("/api/fortune", ctrl.getFortune)
app.get("/api/game", ctrl.getGame)
app.post("/api/quote", ctrl.createQuote)
app.listen(4000, () => console.log("Server running on 4000"));
