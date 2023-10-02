const express = require("express");
const App = express();
const cors = require("cors");
const sequelize = require("./config/database");
const port = process.env.PORT | 5000;
const productRoute = require("./routes/route");

App.use(cors());
App.use(express.json({ limit: "50mb" }));

App.get("/", (req, res) => {
  res.status(200).send("working");
});
App.use("/api", productRoute);

sequelize
  .sync()
  .then(() => {
    console.log("Database connected successfully");
    App.listen(port, () => {
      console.log("lisiting on port " + port);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
