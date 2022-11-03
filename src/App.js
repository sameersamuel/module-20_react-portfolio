import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
// components

const App = () => {
  return <div>
    <Header>
      <Nav/>
    </Header>

    <main>
      Inside MAIN TAGS in App.js
    </main>
    <Footer/>
  </div>
}

export default App;