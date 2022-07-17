import axios from "axios";
import React, { useEffect, useState } from "react";
import LogoutRoute from "./logoutRoute";
import { NewsFeedCard } from './newsCard';

function NewsfeedRoute() {

    const [backEndData, setBackEndData] = useState([{}]);
    const [message, setMessage] = useState("");
    const [forceLogout, setForceLogout] = useState(false);

    useEffect(() => {
        axios("/allblogpost")
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
        <div style={{ margin: "0 25% 0 25%" }}>
            {(typeof backEndData === 'undefined' || message) ? (
                <h3 style={{ color: "red", textAlign: "center" }}>{message}!</h3>
            ) :
                (
                    backEndData.map((post, i) => <NewsFeedCard key={i} author={post.name} newsTitle={post.title} newsContent={post.content} />)
                )
            }
            {
                forceLogout && <LogoutRoute />
            }
        </div>
    )
}

export default NewsfeedRoute;