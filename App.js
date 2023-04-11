import React from 'react'
import ReactDom from 'react-dom/client'

/*
<div id="parent">
    <div id="child">
           <h1>This is h1 tag </h1>
           <h2>This is h2 tag </h2>
    <div>
    <div id="child">
           <h1>This is h1 tag </h1>
           <h2>This is h2 tag </h2>
    <div>
<div>
*
*ReactElement(object) ---> HTML(Browser understood)
*/
/*
const heading = React.createElement(
    "h1", 
    {id : "heading" , xyz : "abc"}, 
    "Hello World from React!"
);
*/

const heading = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1" , {} , "This is h1 tag"),
        React.createElement("h2" , {} , "This is h2 tag")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1" , {} , "This is h1 tag"),
        React.createElement("h2" , {} , "This is h2 tag")]
    )
    ]
)

console.log(heading)

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(heading)

// console.log(heading) // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
