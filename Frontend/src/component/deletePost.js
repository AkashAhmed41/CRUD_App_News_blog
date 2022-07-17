
import React from 'react'
import axios from "axios"

const DeletePost = (props) => {

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log(props.newsBlogId);

        axios.delete("/blogpost", {
            data: {
                blogid: props.newsBlogId
            }
        })
            .then(res => res.data)
            .then(data => {
                alert(data.success);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='createPost'>
                    <h3 className='createPostElement'>Delete Post</h3>
                </div>

                <button className='deletePostButton'>Confirm Delete</button>
            </form>
        </div>
    )
}
export default DeletePost;
