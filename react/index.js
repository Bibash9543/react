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