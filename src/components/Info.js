import React from "react"
import ProfileImg from "../images/Profile-img1.jpg"
import MailLogo from "../images/Mail.png"

export default function Info () {
    return (
        <div className="info">
            <img src={ProfileImg} className="profile-img" />
            <div className="info-text">
                <p className="name">Khush Savaliya</p>
                <p className="profetion">Frontend Developer</p>
                <p className="website">khushsavaliya.website</p>
            </div>
            <div className="button-section">
                <a href="mailto:savaliyakhush82012@gmail.com" target="_blank" className="link">
                    <button className="button"><img src={MailLogo} className="mail-logo"/> Email</button>
                </a>
            </div>
        </div>
    )
}