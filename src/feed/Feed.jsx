import Post from "../post/Post"
import "./Feed.css"
import FirestoreBanner from '../images/firestore-banner.png';
import CloudSQLBanner from '../images/cloud-sql-banner.png';
import Loading from '../images/loading.svg';
import { useEffect, useState } from "react";

const Feed = (props) => {
    let api = "http://127.0.0.1:5000/"

    const [PostJSON, setPostJSON] = useState({});
    
    useEffect(() => {
        setPostJSON({})
        fetch(api + (props.CloudSQL ?  'sqlPosts' : 'firestorePosts') + '?page=1')
        .then((response) => response.json())
        .then((actualData) => setPostJSON(actualData));
       }, [props.CloudSQL]);

    return(
        <div className={"feed-container " + (props.CloudSQL ? "blue" : "yellow")}>
            <div style={{"text-align": "-webkit-center"}}>
                <img className="feed-banner" src={props.CloudSQL ? CloudSQLBanner : FirestoreBanner} />
            </div>
            {
                Object.keys(PostJSON).length > 0 ?
                    PostJSON.map((post_data) => {
                        return (<Post postImage = {post_data.PostImage}
                            caption={post_data.Caption}
                            description={post_data.Description}
                            profile={post_data.CommentImage}
                            comment={post_data.CommentText}
                            timestamp={post_data.Timestamp}
                            key={post_data.ID}
                            accent={props.CloudSQL ? "blue" : "yellow"}
                            />)
                    })
                :
                    <img src={Loading} className="loading" />
            }
        </div>
    )
}

export default Feed