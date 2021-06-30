import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();
  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button id="hey">Measure</button>
    </div>
  );
}

export default Box;
