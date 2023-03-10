const express = require('express');
const app = express();

const connectToMongoDB = require("./db/mongodb");
const logger = require('morgan');

const cors = require('cors');

require('dotenv').config();

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200
}

const mcuRouter = require("./routes/mcuRouter");



app.use(logger("dev"));
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use("/api", mcuRouter);

// const PORT = 3001;
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server has started and is running on Port ${PORT}`);
  connectToMongoDB();
});