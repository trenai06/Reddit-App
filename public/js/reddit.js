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
      authorImageTag = info.authorimage
      authorNameTag = info.author
      postTitle = info.title
      postImage = info.image
      postVotes = info.likecount
      postId = info.id
  
      mainPostContainer = document.getElementById("post-container")
  
      postDiv = document.createElement("div")
      postDiv.classList.add("post")
      postDiv.setAttribute("id", `post`)
      postDiv.setAttribute("onclick",`getOne(${postId})`)
      topContainerDiv = document.createElement("div")
      topContainerDiv.classList.add("top-container")
      postDiv.appendChild(topContainerDiv)
      mainPostContainer.appendChild(postDiv)

      threadInfoDiv = document.createElement("div")
      threadInfoDiv.classList.add("thread-info")
      threadPicImg = document.createElement("img")
      threadPicImg.classList.add("threadIcon")
      threadInfoDiv.appendChild(threadPicImg)
      threadPicImg.src = threadPicTag
      threadNameDiv = document.createElement("div")
      threadNameDiv.innerText = threadNameTag
      threadInfoDiv.appendChild(threadNameDiv)
      topContainerDiv.appendChild(threadInfoDiv)

     
      joinButton = document.createElement("button")
      joinButton.classList.add("join-icon")
      joinButton.innerText = `Join Subreddit`
      topContainerDiv.appendChild(joinButton)

      authorContainerDiv = document.createElement("div")
      authorContainerDiv.classList.add("authorInfo")
      postDiv.appendChild(authorContainerDiv)
  
      authorImg = document.createElement("img")
      authorImg.classList.add("author-image")
      authorImg.src = authorImageTag
      authorNameDiv = document.createElement("div")
      authorNameDiv.classList.add("author")
      authorNameDiv.innerText = authorNameTag
      authorContainerDiv.appendChild(authorImg)
      authorContainerDiv.appendChild(authorNameDiv)
     
      middleContainerDiv = document.createElement("div")
      middleContainerDiv.classList.add("middle-container")
  
      postTitleDiv = document.createElement("div")
      postTitleDiv.classList.add("postSnippet")
      postTitleDiv.innerText = postTitle
      posterImage = document.createElement("img")
      posterImage.classList.add("postImage")
      posterImage.src = postImage
      middleContainerDiv.appendChild(postTitleDiv)
      middleContainerDiv.appendChild(posterImage)
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

      postDiv.appendChild(bottomContainerDiv)
  
      upButton.setAttribute("onclick", `upvote(${postId})`)
      downButton.setAttribute("onclick", `downvote(${postId})`)
   })
}

function getOne(postId){
   let id = postId
   console.log(id)
fetch(`/post/${id}`)
.then((response) => {
   info = response.json()
   return info
})

.then((info) => {
   console.log(info)
   const postContainer = document.getElementById("post-container")
   postContainer.innerHTML = ""

      authorImageTag = info.authorimage
      authorNameTag = info.author
      postTitle = info.title
      postImage = info.image
      postVotes = info.likecount
      postId = info.id
   
      mainPostContainer = document.getElementById("post-container")
      mainPostContainer.classList.add("newpostcontainer")

      postDiv = document.createElement("div")
      postDiv.classList.add("newpost")

      topContainerDiv = document.createElement("div")
      topContainerDiv.classList.add("newtopcontainer")
      postDiv.appendChild(topContainerDiv)
      mainPostContainer.appendChild(postDiv)
      authorContainerDiv = document.createElement("div")
      authorContainerDiv.classList.add("newauthorinfo")
      
      middleContainerDiv = document.createElement("div")
      middleContainerDiv.classList.add("new-middle-container")
      postDiv.appendChild(middleContainerDiv)

      bottomContainerDiv = document.createElement("div")
      bottomContainerDiv.classList.add("new-bottom-container")
      postDiv.appendChild(bottomContainerDiv)

      authorImg = document.createElement("img")
      authorImg.classList.add("newauthorimage")
      authorImg.src = authorImageTag
      authorNameDiv = document.createElement("div")
      authorNameDiv.classList.add("newauthor")
      authorNameDiv.innerText = authorNameTag
      authorContainerDiv.appendChild(authorImg)
      authorContainerDiv.appendChild(authorNameDiv)
      topContainerDiv.appendChild(authorContainerDiv)

      authorPostDiv = document.createElement("div")
      authorPostDiv.classList.add("author-post")
      middleContainerDiv.appendChild(authorPostDiv)

      postTitleDiv = document.createElement("h1")
      postTitleDiv.classList.add("new-post-title")
      postParagraph = document.createElement("p")
      postParagraph.classList.add("post-paragraph")
      authorPostDiv.appendChild(postTitleDiv)
      authorPostDiv.appendChild(postParagraph)
      postTitleDiv.innerText = postTitle
      postParagraph.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero accusantium nisi, odit ipsum impedit veritatis eligendi dolorum autem debitis? Doloribus iste quas nesciunt. Harum ut aut eum doloribus quidem, repudiandae rem quia voluptate vero perferendis distinctio iste sed quos consectetur fugit molestiae exercitationem eveniet ratione eos necessitatibus aspernatur! Mollitia?"  
     
      authorImageDiv = document.createElement("div")
      authorImageDiv.classList.add("new-author-image")
      middleContainerDiv.appendChild(authorImageDiv)
      
      authorImageImg = document.createElement("img")
      authorImageImg.classList.add("post-image")
      authorImageImg.src = postImage
      authorImageDiv.appendChild(authorImageImg)

      voteContainer = document.createElement("div")
      voteContainer.classList.add("new-vote-container")
    
      upButton = document.createElement("button")
      upButton.classList.add("new-up")
      upButton.innerText = `✔︎`
    
      voteTrackDiv = document.createElement("div")
      voteTrackDiv.classList.add("new-vote-track")
      voteTrackDiv.id = postId
      voteTrackDiv.innerText = postVotes
    
      downButton = document.createElement("button")
      downButton.classList.add("new-down")
      downButton.innerText = `✘`
    
      voteContainer.appendChild(upButton)
      voteContainer.appendChild(voteTrackDiv)
      voteContainer.appendChild(downButton)
    
      bottomContainerDiv.appendChild(voteContainer)

    
      upButton.setAttribute("onclick", `upvote(${postId})`)
      downButton.setAttribute("onclick", `downvote(${postId})`)   
   })

.catch((error) => {
      console.log(error)
})
}


//set an on click to be able to click on the subreddits names and go to threads
//set an onclick and a paage to just view the full screen of the post and maybe some more text