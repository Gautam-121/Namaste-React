import React from 'react'
import ReactDom from 'react-dom/client'

//React.craeteElement

//React Element is a Object when we Render this Object on to the Dom then it becomes HTML element

const heading = React.createElement( // React Element is a Object
    "h1",
    {id:"heading"}, // This is create React element using core React
    "Namaste React"
) // It is Not good Way to create React Object /Browser Element
console.log(heading)
// For this facebook Developer craete jsx for to write React Element much easier way
//JSX is javascript syntex which is easier to create React Element
 
//JSX --> is not html in js , it is html look like syntex
const jsxHeading = <h1 id="heading1" className='head' tabIndex= "5">Namste React using JSX</h1>  // this jsx element is react element
console.log(jsxHeading)

const jsxMultipleLine = (<h1>
    Nameste Javascript
</h1>)
//This sis create react element using jsx

//React.createElement craete an Object

const root = ReactDom.createRoot(document.getElementById("root"))

//root.render() --> it take this react Object convert into Html element and replaces with this containt with this root-id
root.render(jsxHeading)

//jsx(transcompile before it reaches the js engine) --> TransComplile by Parcel give responsibility to the package know as babble

