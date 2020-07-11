import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import "tachyons";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import Pricing from "./components/pricing/Pricing";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/pricing" component={Pricing} />
        <Footer />
      </div>
    );
  }
}

export default App;
