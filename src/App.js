import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error.js";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const AppLayout = () => {
  return (
    <div className="app">
      {/* //Header */}
      <Header />
      <Body />
      {/* //Body */}
      {/* //footer */}
    </div>
  );
};

const appRouter = createBrowserRouter([  //Craeting Multiple Router
  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <Error/>
  },
  {
    path : "/about",
    element : <About/>
  },
])

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); // I want to render accordingly to the appRouter for that we will use RouterOrovider
