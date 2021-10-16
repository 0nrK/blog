import React from 'react'
import Post from './Post'
import "./Posts.css"

const Posts = () => {
    return (
        <div className="posts">
            <div className="posts-wrapper">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Posts
