const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const keys = require("./config/keys");

const app = express();

// passport.use(new GoogleStrategy({}));
// appid: emaily-dev-2018--june-208308

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
