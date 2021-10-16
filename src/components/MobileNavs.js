import React,{useState} from 'react';
import "./MobileNavs.css";
import {ImCross} from "react-icons/im"

const MobileNavs = ({handleMenu}) => {

    return (
        <div className="mobile-nav">
            <div className="menuClose-btn">
                <ImCross onClick={handleMenu}/>
            </div>
            <ul>
                <li><a className="mobile-menu-item" href="/">HOME</a></li>
                <li><a className="mobile-menu-item" href="">ABOUT</a></li>
                <li><a className="mobile-menu-item" href="#">CONTACT</a></li>
                <li><a className="mobile-menu-item" href="/addpost">WRITE</a></li>
            </ul>
        </div>
    )
}

export default MobileNavs
