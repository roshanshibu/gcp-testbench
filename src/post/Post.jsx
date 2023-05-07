import "./Post.css"
import Liked from '../images/liked.svg';
import UnLiked from '../images/unliked.svg';

const Post = (props) => {
return(
    <div className={"frame frame-" + props.accent}>
        <img className="image" src={props.postImage} />

        <div className="like-caption-row">
            <p className="caption">{props.caption}</p>
            <img className="like-icon" src={props.isLiked ? Liked : UnLiked} />
            
        </div>

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