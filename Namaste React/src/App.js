import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";

import Header from "./components/Header"; // import Header from "./components/Header.js";  both are same 
import ResturantMenu from "./components/ResturantMenu";



const Grocery=lazy(()=> import("./components/Grocery"));

const Applayout=()=>{
    return <div className="app">
        <Header/>
        <Outlet/>
    </div>
}


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/resturant/:resId",
                element:<ResturantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense 
                           fallback={
                              <h1> Loading Grocery Page.....</h1>
                           }><Grocery/>
                        </Suspense>
            }
        ],
        errorElement:<Error/>,
       
    }, 
   
]);

//return
const root= ReactDOM.createRoot(document.getElementById("root"))
//root.render(<Applayout/>);
root.render(<RouterProvider router={appRouter}/>)





