import Post from "../post/Post"
import "./Feed.css"
import FirestoreBanner from '../images/firestore-banner.png';
import CloudSQLBanner from '../images/cloud-sql-banner.png';

const Feed = (props) => {
return(
    <div className="feed-container">
        <div style={{"text-align": "-webkit-center"}}>
            <img className="feed-banner" src={props.CloudSQL ? CloudSQLBanner : FirestoreBanner} />
        </div>
        <Post postImage="https://images.unsplash.com/photo-1450778869180-41d0601e046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0NDA2NTV8MHwxfHNlYXJjaHwxfHxwZXRzfGVufDB8fHx8MTY4MjQzMzAxNQ&ixlib=rb-4.0.3&q=80&w=1080"
            caption="Caption here"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"
            profile="https://www.w3schools.com/howto/img_avatar.png"
            comment="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
        />
        <Post postImage="https://images.unsplash.com/photo-1450778869180-41d0601e046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0NDA2NTV8MHwxfHNlYXJjaHwxfHxwZXRzfGVufDB8fHx8MTY4MjQzMzAxNQ&ixlib=rb-4.0.3&q=80&w=1080"
            caption="Caption here"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"
            profile="https://www.w3schools.com/howto/img_avatar.png"
            comment="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
        />
    </div>
)
}

export default Feed