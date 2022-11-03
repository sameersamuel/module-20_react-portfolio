import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
// components

const App = () => {

  const [pages] = useState([
    {
      name: "about"
    },
    {
      name: "portfolio"
    },
    {
      name: "contact"
    },
    {
      name: "resume"
    }
  ])
  const [currentPage, setCurrentPage] = useState(pages[0])

  return <div>
    <Header>
      <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </Header>

    <main>
      Inside MAIN TAGS in App.js
    </main>
    <Footer/>
  </div>
}

export default App;