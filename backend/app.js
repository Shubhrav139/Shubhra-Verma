const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const dbconnect = require("./dbconnect");
const companyRoutes = require("./routers/companyRoutes");
const adsRoutes = require("./routers/adRoutes");

const PORT = 8080;
const URL = "http://localhost:3000";
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: URL,
    methods: "GET,POST,DELETE,PATCH"
  })
);

// Database connection
dbconnect()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", companyRoutes);
app.use("/api", adsRoutes);

app.listen(PORT, () => {
  console.log("Connected to localhost:" + PORT);
});

