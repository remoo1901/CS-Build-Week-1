import React from "react";

export default function Info() {
  return (
    <>
      
      <h2>Rules of the Game</h2>
      <p>
        1 - Any cell with fewer than two live neighbors dies
      </p>
      <p>
        2 - Any cell with two or three living neighbors survives to the next
        generation
      </p>

      <p>
        3 - Any cell with four or more neighbors dies  </p>
    </>
  );
}
