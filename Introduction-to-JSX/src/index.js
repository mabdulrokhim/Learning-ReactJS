import React from "react";
import ReactDom from "react-dom";

// input value to JSX
const name = "Rokhim";
// const number = 18;
const date = new Date(2020, 1, 1, 20);
const year = date.getFullYear();

//custom CSS style
const customCSS = {
  color: "blue"
};

// edit custom CSS json
customCSS.color = "black";

//greeting custom time
const currentTime = date.getHours();
let greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
  customCSS.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customCSS.color = "green";
} else {
  greeting = "Good Night";
  customCSS.color = "blue";
}

//JSX File Render
ReactDom.render(
  <div>
    <h1 style={customCSS}>
      {" "}
      {greeting}, my name is {name}
    </h1>
    <h2>My favorite foods are</h2>
    <ul>
      <li>Indonesian Fried Rice</li>
      <li>Meatball</li>
      <li>Soto/Chicken Soup</li>
    </ul>
    <p>My Favorite Number is {Math.floor(Math.random() * 100)}</p>
    <div>
      <img
        className="img-animal"
        src="https://www.birdlife.org/wp-content/uploads/2021/06/Owl-in-tree-by-Philip-Brown-1-1024x576.jpg"
        alt=""
      />
      <img
        className="img-animal"
        src="https://worldbirds.com/wp-content/uploads/2020/02/how-to-attract-owls.jpg"
        alt=""
      />
      <img
        className="img-animal"
        src="http://www.asianagri.com/wp-content/uploads/2019/03/Asian_Agri_Tyto_Alba_-_Natural_Pest_Management_1.jpg"
        alt=""
      />
    </div>
    <p>
      Created by <strong>{name}</strong>
      <br />
      Copyright {year}
    </p>
  </div>,

  document.getElementById("root")
);
