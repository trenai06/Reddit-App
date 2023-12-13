const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

let posts = [
  {
    id: "1",
    userpic: "/Assets/reddit-Icon.jpg",
    subreddit: "somethingweird",
    timestamp: "Just Now",
    authorimage: "/Assets/peony.avif",
    author: "awkwardpeony06",
    title: "Did you know? Mcdonald's serves spaghetti in the Phillipines!",
    image: "/Assets/spaghetti.webp",
    likecount: "12000",
    commentcount: "800 comments",
  },

  {
    id: "2",
    userpic: "/Assets/reddit-Icon.jpg",
    subreddit: "anime",
    timestamp: "Just Now",
    authorimage: "/Assets/peony.avif",
    author: "awkwardpeony06",
    title: "Why Blood+ is the only anime you need in your life?",
    image: "/Assets/bloodplus.jpg",
    likecount: "12000",
    commentcount: "17k comments",
  },

  {
    id: "3",
    userpic: "/Assets/reddit-Icon.jpg",
    subreddit: "games",
    timestamp: "Just Now",
    authorimage: "/Assets/peony.avif",
    author: "awkwardpeony06",
    title: "Why Blood+ is the only anime you need in your life?",
    image: "/Assets/bloodplus.jpg",
    likecount: "12000",
    commentcount: "6 comments",
  },

  {
    id: "4",
    userpic: "/Assets/reddit-Icon.jpg",
    subreddit: "news",
    timestamp: "Just Now",
    authorimage: "/Assets/peony.avif",
    author: "awkwardpeony06",
    title: "Why Blood+ is the only anime you need in your life?",
    image: "/Assets/bloodplus.jpg",
    likecount: "12000",
    commentcount: "0 likes",
  },

  {
    id: "5",
    userpic: "/Assets/reddit-Icon.jpg",
    subreddit: "music",
    timestamp: "Just Now",
    authorimage: "/Assets/peony.avif",
    author: "awkwardpeony06",
    title: "Why Blood+ is the only anime you need in your life?",
    image: "/Assets/bloodplus.jpg",
    likecount: "12000",
    commentcount: "0 likes",
  },
  {
    id: "6",
    userpic: "/Assets/reddit-Icon.jpg",
    subreddit: "somethingweird",
    timestamp: "Just Now",
    authorimage: "/Assets/peony.avif",
    author: "awkwardpeony06",
    title: "People used to say 'prunes' when taking pictures.",
    image: "/Assets/blue-steel.jpg",
    likecount: "12000",
    commentcount: "800 comments",
  },
  {
    id: "7",
    userpic: "/Assets/reddit-Icon.jpg",
    subreddit: "somethingweird",
    timestamp: "Just Now",
    authorimage: "/Assets/peony.avif",
    author: "awkwardpeony06",
    title: "Did you know? Mcdonald's serves spaghetti in the Phillipines!",
    image: "/Assets/spaghetti.webp",
    likecount: "12000",
    commentcount: "800 comments",
  },
  {
    id: "8",
    userpic: "/Assets/reddit-Icon.jpg",
    subreddit: "somethingweird",
    timestamp: "Just Now",
    authorimage: "/Assets/peony.avif",
    author: "awkwardpeony06",
    title: "Did you know? Mcdonald's serves spaghetti in the Phillipines!",
    image: "/Assets/spaghetti.webp",
    likecount: "12000",
    commentcount: "800 comments",
  },
];

// add a middleware function to update the time stamp based off of
// time is counted based off of the epoc (based off of the number of sevonds that have elapsed since the first computer january 1970)
// will have to convert that time to today's time
// will have to use npm i to use the article that devan sent
// 32 bit number would 32 pairs of binary numbers

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/reddit.html"));
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/upvote/:id", (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      let upvotes = Number(posts[i].likecount);
      upvotes = upvotes + 1;
      res.send((posts[i].likecount = upvotes.toString()));
    }
  }
});

app.get("/downvote/:id", (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      let downvotes = Number(posts[i].likecount);
      downvotes = downvotes - 1;
      res.send((posts[i].likecount = downvotes.toString()));
    }
  }
});

app.get("/subreddit/:subreddit", (req, res) => {
  const subreddit = req.params.subreddit;
  const subredditPosts = [];

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].subreddit === subreddit) {
      subredditPosts.push(posts[i]);
    }
  }
  res.send(subredditPosts);
});

app.listen(3000);
console.log("Reddit Activity is working!");
