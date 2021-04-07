import react from "react"
import Comment from "./Comment.js"

function Comments({comments}){
    const commentList = comments.map((item) => {
        return (
            <Comment user={item.user} comment={item.comment}/>
        )
    })
    return (
 <div>
     {commentList}
     </div>


)
}

export default Comments