import React, { useRef, useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor(currentColor) {
  const COLOR_LIST = ["green", "yellow", "orange", "red", "bisque"];

  const currentIndex = COLOR_LIST.indexOf(currentColor);

  let newIndex = currentIndex;

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 5);
  }
  return COLOR_LIST[newIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  });

  const colorRef = useRef(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  });
  const currentColor = colorRef.current;
  function handleBoxClick() {
    const newColor = getRandomColor(currentColor);
    setColor(newColor);
    console.log(newColor);
    colorRef.current = newColor;
    localStorage.setItem("box_color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
