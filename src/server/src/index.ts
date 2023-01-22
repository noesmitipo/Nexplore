import bodyParser from "body-parser";
import express from "express";
import dutyRouter from "./api/routes/duty-router";
import dbInit from "./db/db-init";

const port = 3003;

const start = () => {
  const app = express();
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    next();
  });

  app.use("/duty/", dutyRouter);

  try {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {
    console.log(`Error occurred: ${error}`);
  }
};

dbInit();
start();
