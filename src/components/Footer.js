import React from "react"
import TwitterIcon from "../images/Twitter Icon.png"
import InstagramIcon from "../images/Instagram Icon.png"
import GitHubIcon from "../images/GitHub Icon.png"
import LinkedinIcon from "../images/Linkedin Icon.png"

export default function Footer () {
    return (
        <div className="footer">
            <a href="https://www.instagram.com/khushsavaliya/" target="_blank">
                <img src={InstagramIcon}/>
            </a>
            <a href="https://github.com/Khush0307" target="_blank">
                <img src={GitHubIcon}/>
            </a>
            <a href="https://www.linkedin.com/in/khush-savaliya-3126b3288/" target="_blank">
                <img src={LinkedinIcon}/>
            </a>
        </div>
    )
}