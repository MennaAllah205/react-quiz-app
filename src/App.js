import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./Components/Quiz";
import Results from "./Components/Results";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;
