const express = require("express");
const path = require("path");
const queries = require('./queries')
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/reddit.html"));
});

app.get("/posts", queries.getPosts)

app.get("/post/:id",queries.getPostById)

app.get("/upvote/:id", queries.upvote)

app.get("/downvote/:id", queries.downvote)

app.get("/subreddit/:subreddit", queries.getSubreddit)

app.listen(3000);
console.log("Reddit Activity is working!");
