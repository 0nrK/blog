import React,{useState} from 'react';
import MobileNavs from './MobileNavs';
import "./Navbar.css";
import "./MobileNavs.css"

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <>
        <div className="navbar">
            <span className="logo"><a href="#">myBlog</a></span>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
                <li><a href="/addpost">WRITE</a></li>
            </ul>
            <img className="user-img"src="https://source.unsplash.com/random" alt="userimg"></img>
        </div>
        <div className="mobile-navbar">
            <div className="mb-wrapper">
                <span className="logo-btn"><a onClick={handleMenu}>myBlog</a></span>
                <img className="mobile-pp"src="https://source.unsplash.com/random" alt="userimg"></img>
            </div>
            {menu && <MobileNavs handleMenu={handleMenu}/>}
        </div>
        </>
    )
}

export default Navbar
