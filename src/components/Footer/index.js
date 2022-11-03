import React from "react";



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
 
    const LinkStyle = {
        textDecoration: "none", 
        color: "black", 
        cursor: "pointer"
    }

    const FooterStyle = {
        height: "50px",
        display: "grid", 
        alignItems: "center", 
        justifyContent: "center", 
        gridGap: "15px"
    }

    return (
        <footer style={FooterStyle}>
            <section>
                {new Date().getFullYear()}
            </section>
            <section>
                {icons.map(icon => {
                    return <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer" style={LinkStyle}> <i className={icon.name}></i></a>
                })}
            </section>
        </footer>
    )

}

export default Footer;