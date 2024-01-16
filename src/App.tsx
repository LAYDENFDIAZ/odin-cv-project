// src/App.tsx
import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CV Application</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
