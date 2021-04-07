import { useState } from "react"
import Comments from "./Comments"



function Details({ video }) {
    const {id, title, embedUrl, views, createdAt, upvotes, downvotes, comments} = video


    const [likes, setLikes] = useState(upvotes)

    function handleUpvote(){
        setLikes(likes + 1)
    }

    const [dislikes, setDislikes] = useState(downvotes)

    function handleDownvote(){
        setDislikes(dislikes + 1)
    }

    const [toggleComments, setToggleComments] = useState(true)

    function handleToggleButton() {
        setToggleComments(!toggleComments)
    }

    return(
        <div>
            {/* title */}
            <h1>{title}</h1>
            {/* views | post date */}
            <p>{views} Views | Uploaded {createdAt}</p>
            {/* likes/dislikes */}
            <div>
                <button onClick={handleUpvote}>{likes}👍</button>
                <button onClick={handleDownvote}>{dislikes}👎</button>
            </div>
            <br></br>
            {/* comments toggle button */}
            <button onClick={handleToggleButton}>Hide Comments</button>
            {/* comments */}
            {toggleComments && <Comments comments={comments}/>}
            
        </div>
    )
}

export default Details