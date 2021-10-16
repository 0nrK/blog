import React from 'react';
import "./UserSettings.css";
import { CgProfile } from "react-icons/cg"

const UserSettings = () => {
    return (
        <div className="settings">
            <h1>Update Your Account</h1>
            <form>
                <div className="settings-wrapper">
                    <span >Profile Picture:</span>
                    <div className="pp-wrapper">
                        <img className="profile-pic" src="https://source.unsplash.com/random" alt="" />
                        <label>
                            <CgProfile htmlFor="file-input" className="pp-btn" />
                            <input
                                id="file-input"
                                type="file"
                                style={{ display: "none" }}
                                className="settingsPPInput"
                            />
                        </label>
                    </div>
                    <span>Username:</span>
                    <input type="text"></input>
                    <span>E-mail:</span>
                    <input type="email"></input>
                    <span>Password:</span>
                    <input className="last-input" type="password"></input>
                    <button className="update-btn" type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default UserSettings
