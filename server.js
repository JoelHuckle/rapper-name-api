const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 8000;

const rappers = {
  "playboi carti": {
    age: 50,
    birthPlace: "Atlanta",
  },
  "lil uzi vert": {
    age: 1000,
    birthPlace: "Philly",
  },
  unknown: {
    age: "unknown",
    birthPlace: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/api/:name?", (req, res) => {
  const rapperName = (req.params.name || "").toLowerCase();
  rappers[rapperName]
    ? res.json(rappers[rapperName])
    : res.json(rappers.unknown);
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
