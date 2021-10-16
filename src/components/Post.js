import React from 'react';
import "./Post.css";
import {data} from './data';

const Post = () => {
    return (
        <>
        {data.map( (post) => {
            return(
                <div className="post" key={post.id}>
                    <a href="#">
                        <img className="post-img" src={post.img} alt="postimg"></img>
                        <span className="tags">{post.tags}</span>
                        <h3 className="title"> {post.title}</h3>
                        <span className="time-stamp">{post.timestamp}</span>
                        <p className="content">{post.content.substr(0,400) + "..."}</p>
                    </a>
                </div>
            )
        })}
        </>
    )}
    

export default Post
