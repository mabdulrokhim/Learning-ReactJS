import React from "react";

//variable greeting and date
let greeting;
const date = new Date();
const currentTime = date.getHours();

// CSS custom style
const customStyle = {
  color: ""
};

//logic
if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

function Greeting() {
  return <h1 style={customStyle}>{greeting}, My Name is Rokhim</h1>;
}

export default Greeting;
