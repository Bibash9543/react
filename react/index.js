//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import reactDom from "react-dom";
reactDom.render(
    <div>
        <p>
            Created by Bibash P.
        </p>
        <p>
            Copyright 2020.
        </p>

    </div>
    ,document.getElementById("root");
)

import React from "react";
import reactDom from "react-dom";
const customStyle = {
  color: "Blue",
  border: "2px solid red",
};
reactDom.render(
  <h1 style={customStyle}>Hello bibash</h1>,
  document.getElementById("root")
);




//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import reactDom from "react-dom";
const currentTime = new Date();
const time = currentTime.getHours();
console.log(time);
let greetings;
let colorChange;

if (time < 12) {
  greetings = "Good Morning";
  colorChange = {
    color: "red",
  };
} else if (time < 18) {
  greetings = "Good Afternoon";
  colorChange = {
    color: "green",
  };
} else {
  greetings = "Good evening";
  colorChange = {
    color: "blue",
  };
}

reactDom.render(
  <h1 className="heading" style={colorChange}>
    {greetings}
  </h1>,
  document.getElementById("root")
);
