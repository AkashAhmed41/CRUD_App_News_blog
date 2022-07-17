
import React, { useState } from 'react'
import axios from "axios"

const EditPost = (props) => {
    const { newsBlogId, newsTitle, newsContent } = props;
    const [inputs, setInputs] = useState({ blogid: newsBlogId, title: newsTitle, content: newsContent });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        axios.put("/blogpost", inputs)
            .then(res => res.data)
            .then(data => {
                alert(data.success);
            })
            .catch(error => {
                if (error.response.status === 400) {
                    alert(error.response.data.message);
                }
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='createPost'>
                    <h3 className='createPostElement'>Edit Post</h3>
                </div>
                <textarea className='titleTextArea' name='title'
                    value={inputs.title || ""}
                    onChange={handleChange}
                    placeholder="Set Title" />
                <textarea className='contentTextArea' name='content'
                    value={inputs.content || ""}
                    onChange={handleChange}
                    placeholder="What's on your mind?" /> <br />

                <button className='postButton'>Update</button>
            </form>
        </div>
    )
}
export default EditPost;
