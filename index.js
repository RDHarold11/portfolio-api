require("dotenv").config();
const express = require("express");
const app = express();
const projectsRouter = require("./routes/projects");
const mongoose = require("mongoose");
const { errorHandler, notFound } = require("./middlewares/errorHandler");
const connectDB = require("./config/dbConn");
const cors = require("cors");
const PORT = process.env.PORT || 3500;

//Connect to db
connectDB();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(projectsRouter);

//Custom middlewares
app.all("*", notFound);
app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to mongoose");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
