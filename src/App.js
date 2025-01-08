import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Ensure correct import path
import Registration from "./pages/Registration"; // Ensure correct import path
import Header from "./components/Header"; // Ensure correct import path
import Footer from "./components/Footer"; // Ensure correct import path

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Registration />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
