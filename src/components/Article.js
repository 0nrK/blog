import React from 'react';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import {data} from "./data";
import "./Article.css";
import { TiEdit, TiTrash } from "react-icons/ti"
const Article = () => {
    return (
        <>
        <Navbar />
        <Sidebar />
        {data.map((article) => {
                return(
                    <div className="article">
                        <div className="article-wrapper">
                            <img className="article-img" src={article.img} alt="" />
                            <div className="article-heading">
                                <h2>{article.title}</h2>
                                <div className="heading-icons">
                                    <TiEdit className="edit-icon" /><TiTrash className="delete-icon" />
                                </div>
                            </div>
                            <div className="article-info">
                                <span>Author: Onur</span>
                                <span>{article.timestamp}</span>
                            </div>
                            <p className="article-content">{article.content}</p>
                        </div>
                    </div>
                )

        })}
        </>
    )
        
 }


export default Article
