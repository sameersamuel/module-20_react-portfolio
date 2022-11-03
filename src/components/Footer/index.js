import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    const icons = [
        {
            name: "fa-brands fa-github",
            link: "http://github.com/"
        },
        {
            name: "fa-brands fa-linkedin",
            link: "http://github.com/" 
        }
    ]
 
    
    return (
        <footer>
            {icons.map(icon => {
                return <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"> <i className={icon.name}></i></a>
            })}
        </footer>
    )

}

export default Footer;