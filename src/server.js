import express from "express";
import bodyPaser from "body-parser";

const app = express();

app.set("view engine", "pug");

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extendeds: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/intro", (req, res) => {
  res.render("intro");
});

app.listen(3000, () => {
  console.log("Serer Start");
});
