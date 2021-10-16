import React from 'react';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3 className="sidebar-heading">About Me</h3>
            <img src="https://source.unsplash.com/random" alt="aboutmeImg"></img>
            <span className="whoami">Laborts   suntLaborts   suntLaborts   suntLaborts   suntLaborts   suntLaborts   sunt aute cupıdipat velit magna velit unanca</span>
            <h3 className="sidebar-heading">Categories</h3>
            <div className="categories">
               <span>Deneme</span>
               <span>Deneme</span>
               <span>Deneme</span>
               <span>Deneme</span>
            </div>
            <h3 className="sidebar-heading">Follow US</h3>
            <div className="socials">
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Pinterest</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
