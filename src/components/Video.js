function Video({ video }) {
    const {id, title, embedUrl, views, createdAt, upvotes, downvotes, comments} = video

    {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      /> */}
    return(
        <iframe
            width="919"
            height="525"
            src={embedUrl}
            frameborder="0"
            allowfullscreen
            title={title}
        />
    )
}

export default Video