import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="mx-auto">
    <BrowserRouter>
      <Navigation />
      <Footer />
    </BrowserRouter>
    </div>
  );
}
export default App;
