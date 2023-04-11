import React from "react";
import ReactDom from "react-dom/client";

const Title = () => {
  return <h1 className="head">Namaste React from Title Component</h1>;
};

//React Function Component --> is a Normal js functiona
const HeadingComponent = () => {
  return <h1 className="heading">Namaste react Functional Component</h1>;
};

//React Element
const heading = (
  <h1 className="haed" tabIndex="2">
    Namste React using JSX
    <HeadingComponent />
  </h1>
);

//single line arrao function
const HeadingComponent1 = () => (
  <h1 className="heading">Namaste react Functional Component</h1>
);

//ReactElement
const element = <span>Span React Element</span>;

const number = 100000;
//Component Composition --> put component inside the component is called componenet composition
const HeadingComponent2 = () => {
  //assign any javascript in jsx put inside {} //may be its reactElement , its any calculation
  return (
    <>
      <div>
        {element}
        <h2>{number}</h2>
        <h3>{heading}</h3>
        {Title()}
        <Title />
        <Title></Title>
        <h2>{console.log(number)}</h2>
        <h1 className="heading"> Namaste react Functional Component</h1>
        <Title />
      </div>
      <div>
        {element}
        <h2>{number}</h2>
        <h3>{heading}</h3>
        {Title()}
        <Title />
        <Title></Title>
        <h2>{console.log(number)}</h2>
        <h1 className="heading"> Namaste react Functional Component</h1>
        <Title />
      </div>
    </>
  );
};

//If you wrapped multiple child , you wrapped inside the React Fragment --> React fragment behave elment empty tag

const root = ReactDom.createRoot(document.getElementById("root"));

//root.render(heading) // render element
root.render(<HeadingComponent2 />); // render component
