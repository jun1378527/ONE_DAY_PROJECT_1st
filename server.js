const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const path = require("path");

const app = express();

// 루트 디렉토리를 정적 파일 경로로 설정
app.use(express.static(path.join(__dirname, "/")));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

mongoose.connect(
  "mongodb+srv://summerlife3643:b8rhNqEn7LXsSZ97@summer.lgkggyi.mongodb.net/"
);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});

app.post("/register", function (req, res) {
  console.log("Received register request with data:", req.body);
  const newUser = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
  });

  newUser.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

app.post("/login", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const foundUser = await User.findOne({ username: username });
    if (foundUser) {
      if (bcrypt.compareSync(password, foundUser.password)) {
        req.session.user = foundUser;
        res.redirect("/dashboard");
      } else {
        res.send("Incorrect password");
      }
    } else {
      res.send("No user found with that username");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error during user login.");
  }
});
