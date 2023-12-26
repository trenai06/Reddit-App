fetch("/posts")
.then((response) => {
 info = response.json()
 return info
})

.then((info) => {
 console.log(info)
 displayPost(info)
})

.catch((error) => {
 console.log(error)
})

function upvote(id){
   fetch(`/upvote/${id}`)
   .then((response) => {
      console.log("upvoted")
      console.log(id)
      let newVote = document.getElementById(id)
      newVote.innerHTML = Number(newVote.innerHTML) + 1 
   })

   .catch((error) => {
      console.log(error)
   })
}

// change my functions to reflect html change
function downvote(id){
   fetch(`/downvote/${id}`)
   .then((response) => {
      console.log("downvoted")
      console.log(id)
      let newVote = document.getElementById(id)
      newVote.innerHTML = Number(newVote.innerHTML) - 1
   })

   .catch((error) => {
      console.log(error)
   })
}

function subreddits(subreddit){
   fetch(`/subreddit/${subreddit}`)
   .then((response) => {
      info = response.json()
      return info
   })

   .then((info) => {
      console.log(info)
      displayPost(info)
   })

   .catch((error) => {
      console.log(error)
   })
}

function goHome(){
   fetch("/posts")
   .then((response) => {
      info = response.json()
      return info
     })
     
     .then((info) => {
      console.log(info)
      displayPost(info)
     })
     
     .catch((error) => {
      console.log(error)
     })
   }


function displayPost(info){
   const postContainer = document.getElementById("post-container")
   postContainer.innerHTML = ""

   info.forEach((info) => {
      threadPicTag = info.redditicon
      threadNameTag = info.subreddit
      timeTag = info.timestamp
      authorImageTag = info.authorimage
      authorNameTag = info.author
      postTitle = info.title
      postImage = info.image
      postVotes = info.likecount
      commentTrackCount = info.commentcount
      postId = info.id
  
      mainPostContainer = document.getElementById("post-container")
  
      postDiv = document.createElement("div")
      postDiv.classList.add("post")
      topContainerDiv = document.createElement("div")
      topContainerDiv.classList.add("top-container")
      postDiv.appendChild(topContainerDiv)
      mainPostContainer.appendChild(postDiv)
  
      userInfoDiv = document.createElement("div")
      userInfoDiv.classList.add("userInfo")
      threadPicImg = document.createElement("img")
      threadPicImg.classList.add("threadIcon")
      userInfoDiv.appendChild(threadPicImg)
      threadPicImg.src = threadPicTag
  
      threadPostDiv = document.createElement("div")
      threadPostDiv.classList.add("thread-post")
      threadInfoDiv = document.createElement("div")
      threadInfoDiv.classList.add("thread-info")
      threadPostDiv.appendChild(threadInfoDiv)
  
      threadNameDiv = document.createElement("div")
      threadNameDiv.classList.add("threadName")
      threadNameDiv.innerText = threadNameTag
      threadTimeDiv = document.createElement("div")
      threadTimeDiv.classList.add("timePosted")
      threadTimeDiv.innerText = timeTag
      threadInfoDiv.appendChild(threadNameDiv)
      threadInfoDiv.appendChild(threadTimeDiv)
    
  
      authorInfoDiv = document.createElement("div")
      authorInfoDiv.classList.add("author-info")
      threadPostDiv.appendChild(authorInfoDiv)
  
      authorImageDiv = document.createElement("div")
      authorImageDiv.classList.add("authorimage")
      authorImg = document.createElement("img")
      authorImg.classList.add("author-image")
      authorImg.src = authorImageTag
      authorImageDiv.appendChild(authorImg)
  
      authorNameDiv = document.createElement("div")
      authorNameDiv.classList.add("author")
      authorNameDiv.innerText = authorNameTag
  
      authorInfoDiv.appendChild(authorImageDiv)
      authorInfoDiv.appendChild(authorNameDiv)
  
     userInfoDiv.appendChild(threadPostDiv)
     topContainerDiv.appendChild(userInfoDiv)
  
     
     moreInfoDiv = document.createElement("div")
     moreInfoDiv.classList.add("more-info")
     joinButton = document.createElement("button")
     joinButton.classList.add("join-icon")
     joinButton.innerText = `Join Subreddit`
     moreInfoDiv.appendChild(joinButton)
     topContainerDiv.appendChild(moreInfoDiv)
     
     middleContainerDiv = document.createElement("div")
     middleContainerDiv.classList.add("middle-container")
  
     postTitleDiv = document.createElement("div")
     postTitleDiv.classList.add("postSnippet")
     postTitleDiv.innerText = postTitle
  
     postImageDiv = document.createElement("div")
     postImageDiv.classList.add("imageSummary")
     posterImage = document.createElement("img")
     posterImage.classList.add("postImage")
     posterImage.src = postImage
  
     postImageDiv.appendChild(posterImage)
  
     middleContainerDiv.appendChild(postTitleDiv)
     middleContainerDiv.appendChild(postImageDiv)
     postDiv.appendChild(middleContainerDiv)
  
    bottomContainerDiv = document.createElement("div")
    bottomContainerDiv.classList.add("bottom-container")
  
    voteContainer = document.createElement("div")
    voteContainer.classList.add("vote-container")
  
    upButton = document.createElement("button")
    upButton.classList.add("up")
    upButton.innerText = `✔︎`
  
    voteTrackDiv = document.createElement("div")
    voteTrackDiv.classList.add("vote-track")
    voteTrackDiv.id = postId
    voteTrackDiv.innerText = postVotes
  
    downButton = document.createElement("button")
    downButton.classList.add("down")
    downButton.innerText = `✘`
  
    voteContainer.appendChild(upButton)
    voteContainer.appendChild(voteTrackDiv)
    voteContainer.appendChild(downButton)
  
    bottomContainerDiv.appendChild(voteContainer)
  
    div = document.createElement("div")
    div.innerText = ` . `
  
    commentTrackDiv = document.createElement("div")
    commentTrackDiv.innerText = commentTrackCount
  
    shareDiv = document.createElement("div")
  
    bottomContainerDiv.appendChild(shareDiv)
    bottomContainerDiv.appendChild(div)
    bottomContainerDiv.appendChild(commentTrackDiv)
    bottomContainerDiv.appendChild(shareDiv)
  
    postDiv.appendChild(bottomContainerDiv)
  
    upButton.setAttribute("onclick", `upvote(${postId})`)
    downButton.setAttribute("onclick", `downvote(${postId})`)
  
   })
   

}