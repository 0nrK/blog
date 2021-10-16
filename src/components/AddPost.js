import React from 'react';
import "./AddPost.css"
import { IoIosAddCircleOutline } from "react-icons/io"

const AddPost = () => {
    return (
        <div className="addpost-wrapper">
            <img className="addpost-img" src="https://images.unsplash.com/photo-1602018979916-2dc45cb2e10c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""></img>
            <form className="addpost-form" >
                <div className="texts">
                    <input className="post-title" placeholder="title:" type="text"></input>
                    <textarea placeholder="Content:" className="post-text" type="text" autoFocus={true}></textarea>
                </div>
                <div className="buttons">
                    <label className="file-button" htmlFor="fileInput"><IoIosAddCircleOutline /></label>
                    <input id="fileInput"  type="file" style={{ display: "none" }}></input>
                    <button className="post-submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddPost
