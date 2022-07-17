import { useState } from "react";
import DeletePost from "./deletePost";
import EditPost from "./editPost";

function NewsFeedCard(props) {

    const { author, newsTitle, newsContent } = props;
    return (
        <div className='card'>

            <h3 className='cardTitle'>{newsTitle}</h3>
            <p className='cardDesc'>{newsContent}</p>
            <p style={{ color: "blue" }}>Author: {author}</p>
        </div>
    )

}

function ProfileFeedCard(props) {

    const { newsBlogId, newsTitle, newsContent } = props;

    const [openEditPost, setOpenEditPost] = useState(false);
    const [openDeletePost, setOpenDeletePost] = useState(false);

    const handleEdit = () => {
        console.log("Button is Clicked");
        setOpenEditPost(true);
    }
    const handleDelete = () => {
        console.log("Button is Clicked");
        setOpenDeletePost(true);
    }

    return (
        <div className='card'>

            <div className='cardTitle'>
                <h3 >{newsTitle}</h3>
            </div>
            <div className='cardDesc'>
                <p >{newsContent}</p>
            </div>
            {openEditPost && <EditPost newsBlogId={newsBlogId} newsTitle={newsTitle} newsContent={newsContent} />}
            {openDeletePost && <DeletePost newsBlogId={newsBlogId} />}
            <button onClick={handleEdit} className="editPostButton">Edit Post</button>
            <button onClick={handleDelete} className="deletePostButton">Delete</button>

        </div>
    )

}

export {
    NewsFeedCard,
    ProfileFeedCard
}