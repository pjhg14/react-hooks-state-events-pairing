function Details({ video }) {
    const {id, title, embedUrl, views, createdAt, upvotes, downvotes, comments} = video

    return(
        <div>
            {/* title */}
            <h1>{title}</h1>
            {/* views | post date */}
            <p>{views} Views | Uploaded {createdAt}</p>
            {/* likes/dislikes */}
            <div>
                <button></button>
                <button></button>
            </div>
            {/* comments toggle button */}
            <button></button>
            {/* comments */}
            {/* <Comments comments={comments}/> */}
        </div>
    )
}

export default Details