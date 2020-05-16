import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickCounter />
        <HoverCounter />
      </header>
    </div>
  );
}
