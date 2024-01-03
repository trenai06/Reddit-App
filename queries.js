const Pool = require('pg').Pool
const pool = new Pool({
    user:'cbreaux2',
    host:'localhost',
    database:'reddit',
    password: 'wildrice',
    port: 5432 
})

const getPosts = (req, res) => {
    pool.query('SELECT * FROM posts', (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getSubreddit = (req, res) => {
    const subreddit = req.params.subreddit
    pool.query('SELECT * FROM posts WHERE subreddit = $1', [subreddit], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getPostById = (req,res) => {
    const id = req.params.id
        pool.query('SELECT * FROM posts WHERE id = $1', [id], (error, results) => {
            if(error){
                throw error
            }
            res.status(200).json(results.rows[0])
        })
    }

const upvote = (req, res) => {
    const id = req.params.id
   
    pool.query('UPDATE posts SET likecount = likecount + 1 WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).send(`User ID ${id} was upvoted`)
    })
}

const downvote = (req, res) => {
    const id = req.params.id 
    pool.query('UPDATE posts SET likecount = likecount - 1 WHERE id = $1', [id], (error, results) => { 
        if(error){
            throw error
        }
        res.status(200).send(`User ID ${id} was downvoted`)
    })
}

module.exports = {
    getPosts, 
    getSubreddit,
    upvote, 
    downvote, 
    getPostById,
}