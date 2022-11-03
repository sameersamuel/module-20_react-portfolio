import React from "react";



const Footer = () => {
    const icons = [
        {
            name: "fa-brands fa-github",
            link: "http://github.com/sameersamuel/"
        },
        {
            name: "fa-brands fa-linkedin",
            link: "https://www.linkedin.com/in/sameer-bhattacharya-a5a47958/" 
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
            <section style={{display: "grid", gridTemplateColumns: "max-content 1fr 1fr", gridGap: "20px"}}>
                <span style={{paddingRight: "15px"}}>©{new Date().getFullYear()}</span>
                {icons.map(icon => {
                    return <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer" style={LinkStyle}> <i className={icon.name}></i></a>
                })}
            </section>
        </footer>
    )

}

export default Footer;