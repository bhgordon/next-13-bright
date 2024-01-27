"use client";
import React from "react";

function Revealable({ children }) {
  const [isRevealed, setisRevealed] = React.useState(false);
  return isRevealed ? (
    children
  ) : (
    <div className="reveal">
      <button onClick={() => setisRevealed(true)}>Reveal Content</button>
    </div>
  );
}

export default Revealable;
