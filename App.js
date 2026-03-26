import React from "react";

export default function App() {
  return (
    <div style={{fontFamily:"Arial", padding:40}}>
      <h1>Felix App</h1>
      <p>AI Pricing Assistant Prototype</p>
      <button onClick={()=>alert("Scan flow coming soon!")}>
        Scan Product
      </button>
    </div>
  );
}
