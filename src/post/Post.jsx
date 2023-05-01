import "./Post.css"

const Post = (props) => {
return(
    <div className={"frame frame-" + props.accent}>
        <div>
            <img className="image" src={props.postImage} />
        </div>

        <p className="caption">{props.caption}</p>
        <p className="description smalltext">{props.description}</p>

        <div className={"post-comment comment-" + props.accent}>
            <img className="comment-profile" src={props.profile} />
            <p className="comment smalltext">{props.comment}</p>
        </div>

        <p className="timestamp">{props.timestamp}</p>
    </div>
)
}

export default Post