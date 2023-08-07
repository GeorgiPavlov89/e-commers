const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const data = require("./data.json");
app.use(express.static("public/images/"));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.get("/watches", (req, res) => {
  const watchesData = data.categories.watches;
  res.json(watchesData);
});

app.get("/jewelries", (req, res) => {
  const jewelriesData = data.categories.jewelries;
  res.json(jewelriesData);
});

app.get("/glasses", (req, res) => {
  const glassesData = data.categories.glasses;
  res.json(glassesData);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
