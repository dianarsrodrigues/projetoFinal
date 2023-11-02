const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(
    express.urlencoded({
      extended: true,
    })
  );

let sqlUtils = require('./sqlUtils.js');

app.get("/", (req, res) => {
    res.json({ message: "ok" });
  });

//Inserir Post
app.post("/post/new", sqlUtils.functionInsertPost);

//Update Post
app.post("/post/update/:id", sqlUtils.functionUpdatePost);

//Delete Post
app.post("/post/delete/:id", sqlUtils.functionDeletePost);

//Get Post
app.get("/post/:id", sqlUtils.functionGetPost);

//Get Blog
app.get("/posts", sqlUtils.functionGetPosts);

app.listen(PORT, (err) => {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});