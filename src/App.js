import React, { Fragment } from "react";

// files
import "./App.css";
import Header from "./components/header.js";
import Section from "./components/section.js";
import Footer from "./components/footer.js";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Section />
      {/*<Footer />*/}
    </Fragment>
  );
};

export default App;
