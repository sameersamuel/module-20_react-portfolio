import React from "react";

import About from "../../pages/about";
import Portfolio from "../../pages/portfolio";
import Content from "../../pages/contact";
import Resume from "../../pages/resume";

const Page = ({ currentPage }) => {
    const renderPage = () => {
        if(currentPage.name === "about") {
            return <About/>
        } else if (currentPage.name === "portfolio") {
            return <Portfolio/>
        } else if (currentPage === "contact") {
            return <Content/> 
        } else {
            return <About/>
        }
    }
    return <section>
        {renderPage()}
    </section>
}

export default Page;