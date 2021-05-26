import React, { useEffect, useRef, useState } from "react";

function randomcColor(currentColor) {
  const COLOR_LIST = ["red", "green", "yellow", "bisque", "blue"];

  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 5);
  }
  //   console.log(COLOR_LIST[newIndex]);
  return COLOR_LIST[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  //Change color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      // console.log("First color: ", color);
      // console.log("Change color:", colorRef.current);
      const newColor = randomcColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 3000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
