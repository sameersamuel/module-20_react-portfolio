import React from "react";



const Footer = () => {
    const icons = [
        {
            name: "fab fa-github",
            link: "http://github.com/"
        },
        {
            name: "fab fa-github",
            link: "http://github.com/" 
        }
    ]
 
    
    return (
        <footer>
            {icons.map(icon => {
                return <a href={icon.link} key={icon.name} target="_blank"><i className={icon.name}></i></a>
            })}
        </footer>
    )

}

export default Footer;