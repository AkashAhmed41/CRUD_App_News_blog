import axios from "axios";
import React, { useEffect, useState } from "react";
import LogoutRoute from "./logoutRoute";
import { ProfileFeedCard } from './newsCard';

function ProfilefeedRoute() {

    const [backEndData, setBackEndData] = useState([{}]);
    const [message, setMessage] = useState("");
    const [forceLogout, setForceLogout] = useState(false);

    useEffect(() => {
        axios("/blogpost")
            .then(res => {
                console.log(res.data.rows);
                setBackEndData(res.data.rows);
            })
            .catch(err => {
                if (err.response.status === 500) {
                    setMessage(err.response.statusText);
                }
                else if (err.response.status === 401) {
                    setForceLogout(true);
                }
            })
    }, [])

    return (

        <div>
            {(typeof backEndData === 'undefined' || message) ? (
                <h3 style={{ color: "red", textAlign: "center" }}>{message}!</h3>
            ) :
                (
                    backEndData.map((post, i) => <ProfileFeedCard key={i} newsBlogId={post.blogid} newsTitle={post.title} newsContent={post.content} />)
                )
            }
            {
                forceLogout && <LogoutRoute />
            }

        </div>
    )
}

export default ProfilefeedRoute;