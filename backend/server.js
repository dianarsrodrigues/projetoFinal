const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


let sqlUtils = require("./sqlUtils.js");

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

//Insert Post
app.post("/post/new", sqlUtils.functionInsertPost);

//Update Post
app.post("/post/update/:id", sqlUtils.functionUpdatePost);

//Delete Post
app.post("/post/delete/:id", sqlUtils.functionDeletePost);

//Get Post
app.get("/post/:id", sqlUtils.functionGetPost);

//Get Blog
app.get("/posts", sqlUtils.functionGetPosts);

// Autentication ---------------------------

//Insert new user
app.post('/register', sqlUtils.functionRegister);

 // Login and generate a token
app.post('/login', sqlUtils.functionLogin);


// app.get("/posts", (req, res) => {
//   res.json([
//     {
//       id: "1",
//       title: "ola",
//       date: "11-05-2012",
//       text: "wfhoiweh hew iewf wefjo pwef we few",
//       image:
//         "https://s3-alpha-sig.figma.com/img/8bdd/365c/5b5a6dd5651fa3aa09758a0f9a210eeb?Expires=1699833600&Signature=eARBcV9qDljYmcSNZIHCaSBfM8~u6nN2VJZRLs85KX1OjBW6ag3aGkEGNG2Knn2qTkdi1Pf8vpxY~MsmaWBZn8abP68uQE4NyWN9lOHFrGA5HbJK8UszVpldNR3rKafHhR3W1AL-6P51nwJ-SNL13gT~13gZXcLR3TjMWg8wvOVbvq-KOCcza8dL1oF26Bjmw2fwb0XAJJUbbQQv9VBRuKduarwuhHp0PIcahAELysnx96nNgyFC7iqmseCWhYW0L7yfdaJiK7AWkY3faNsTed-lDDE62ShoJQYv3Eepa1FiC-juHPKsgLF7mr~531qyg-2fQ7WLxWiugPtC-sVk4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     },
//     {
//       id: "2",
//       title: "ola2",
//       date: "13-05-2012",
//       text: "wfaaaaaaaaaaa few",
//       image:
//         "https://s3-alpha-sig.figma.com/img/23a4/5aa5/f74c01d62517f0e02ef5a88d9cad72de?Expires=1699833600&Signature=Si9XsCle7AQoMqJUNsxnWujtMgFlN0l91XNCbfVPwlZmVyjLW-Kk60TgdulbgUutrkPXtGCZAylraw6Pah4MOYWZNfiNdYXgEDdfCDQDs7WFKnynlcPS8Yv3KavQBWau9NoyN-BytV962Ip-RsODEWYJ3yQPV9mCa4G5GFDjIeNRPqz0KbAglKuk6zChGbIP1cvvve32hQ06BOhA39rjb9AHtpTHcgmKc7fa~Sg9VAU8-9yERlCsGnXqMd1JH9AUMPylMMaBquRel77EOg75joZ7UbQcbMeKbSUW8AukMdCSqwVX~ylm~onO1AYBP8YQGwPESUNB3EFm3TgZSSJTWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     },
//     {
//       id: "3",
//       title: "ola3",
//       date: "15-05-2012",
//       text: "aadasfkjohgioqghpowepçwoqjf few",
//       image: "",
//     },
//   ]);
// });




app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
