// import { Route, Routes } from "react-router-dom";

// import About from "./pages/About";
// import Home from "./pages/Home";

// const App = () => (
// 	<Routes>
// 		<Route path="/" element={<Home />} />
// 		<Route path="/about/this/site" element={<About />} />
// 	</Routes>
// );

// export default App;
// src/App.js

import React from "react";
import AvailabilityForm from "./AvailabilityForm";
import MatchingTrainees from "./MatchingTrainees";

const App = () => {
  return (
    <div>
      <h1>Study Buddies</h1>
      <AvailabilityForm />
      <MatchingTrainees />
    </div>
  );
};

export default App;
