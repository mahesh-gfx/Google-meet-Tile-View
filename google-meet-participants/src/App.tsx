import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GenerateParticipantsBlock from "./components/GeneratePartitipantsBlock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="participants-container">
      <GenerateParticipantsBlock />
    </div>
  );
}

export default App;
