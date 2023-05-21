require('dotenv').config()


const methodOverride = require("method-override")
const express=require('express');
const app = express();
const cors = require("cors")
const PORT = process.env.PORT


app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use((req, res) => {res.status(404).json({message: "NOT A PROPER ROUTE"})});

app.listen(PORT, () => console.log (`listening on PORT ${PORT}`));
