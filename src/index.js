const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const cors = require('cors')

const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

//mongoose connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connected MongoDB Atlas"))
    .catch((error) => console.error(error))


app.listen(8080, () => {
    console.log("Server listening on port", port);
});