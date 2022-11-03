import React from "react";

import "./style.css";

const Header = (props) => {
    return (
    <header className="header-container">
        <h1>Welcome to Sameer's Portfolio</h1>
            <img src="https://images.unsplash.com/photo-1638025773292-1ef8c1ec8c5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2515&q=80"/>
            {props.children}
    </header>
    );
}

export default Header;