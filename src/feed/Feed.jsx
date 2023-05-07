import Post from "../post/Post"
import "./Feed.css"
import FirestoreBanner from '../images/firestore-banner.png';
import CloudSQLBanner from '../images/cloud-sql-banner.png';
import Loading from '../images/loading.svg';
import { useContext, useEffect, useState } from "react";
import { CloudSQLPerfContext, FirestorePerfContext, CloudSQLCountContext, FirestoreCountContext, JSONContext } from '../App';

const Feed = (props) => {
    let api = "http://127.0.0.1:5000/"

    const [PostJSON, setPostJSON] = useState({});
    
    const cloudSQLPerfContext = useContext(CloudSQLPerfContext);
    const firestorePerfContext = useContext(FirestorePerfContext);
    const cloudSQLCountContext = useContext(CloudSQLCountContext);
    const firestoreCountContext = useContext(FirestoreCountContext);
    const jsonContext = useContext(JSONContext);

    useEffect(() => {
        setPostJSON({});
        let time1 = performance.now();
        let random_page = Math.floor(Math.random() * (50 - 1) + 1);
        fetch(api + (props.CloudSQL ?  'sqlPosts' : 'firestorePosts') + '?page=' + random_page)
        .then((response) => response.json())
        .then((actualData) => {setPostJSON(actualData);
                                jsonContext.setCurrentJSON(actualData);

                                let time2 = performance.now();
                                console.log(time2 - time1);
                                if(props.CloudSQL){
                                    let count = cloudSQLCountContext.CloudSQLCount + 1
                                    let old_avg = cloudSQLPerfContext.CloudSQLPerf;
                                    let new_resp_time = time2 - time1;
                                    let new_avg = old_avg + (new_resp_time - old_avg)/count;
                                    cloudSQLCountContext.setCloudSQLCount(count);
                                    cloudSQLPerfContext.setCloudSQLPerf(Number.parseFloat(new_avg));
                                    //cloudSQLPerfContext.setCloudSQLPerf(new_resp_time);
                                }else{
                                    let count = firestoreCountContext.FirestoreCount + 1
                                    let old_avg = firestorePerfContext.FirestorePerf;
                                    let new_resp_time = time2 - time1;
                                    let new_avg = old_avg + (new_resp_time - old_avg)/count;
                                    firestoreCountContext.setFirestoreCount(count);
                                    firestorePerfContext.setFirestorePerf(Number.parseFloat(new_avg));
                                    //firestorePerfContext.setFirestorePerf(new_resp_time);
                                }
                                })
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
                            isLiked={post_data.isLiked}
                            />)
                    })
                :
                    <img src={Loading} className="loading" />
            }
        </div>
    )
}

export default Feed