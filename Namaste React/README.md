---------------------------------EXPORT AND IMPORT--------------------------------------------------

#There are 2 type of export and import in react:
      1.Default export and import
      2.Named export and import

1. Default export and import:->
    *Use for single export and import of component from that js file..

     export==>  export default {component_name};
     import==>  import component_name from "./filepath";

2.  Named export and import:->
    *Use for multiple export and import of constant or component from that js file..

     export==>  write export in front of component_names; 
     import==>  import {component_name1,component_name2} from "./filepath";   


***NOTE:
    You can use both named exports and default exports in the same module in React.

----------------------------------------------------------------------------------------------------

--------------------------------------------REACT HOOKS --------------------------------------------

 -Hooks is a normal JavaScript Function---> by facebook developers.
 -Present in the react module...
 -Two important Hook function are:-

    1.useState():
        -It is a ReactHook.
        -Allow Functional components to manages states(state managments).

        # step 1:
             -import useState():                  import {useState} from "react";
             
             -initialize state variable:          const [ count,setCount ]=useState(default value of count);
             
             -update the setcount function:       <button onClick= { ()=>{setCount(count+1)} }> Click Me </button>

        -We imported the useState as "Named import".
        -All these steps perform within component function.
        -update the set function in onClick function inside button.

    ***NOTE: 
        - whenever a useSate variable update it rerender whole component very fast.....
        - never initialize useState outside the component....
        - never create useState in any conditional loop and function because it create inconsistency...






    2.useEffect():
    - Anythings we want to do in component after the body render,then the useEffect() come in work.
    -

    #Steps:
        -Import the useEffect from react.                  import { useEffect } from "react";
        
        -Initialize the useEffect().                      
        
         useEffect( ()=>{} , [] );                            useEffect( ()=>{} );
            ()=>{}  --> function contain logic.       OR      ()=>{}  --> function contain logic.                        []    --> Dependency Array
        
      
      
      
      
      
      
      
     ***NOTE: 
        * If there is no dependency array in useEffect(), then component render every time.                  
        * If there is Empty dependency array ,then useEffect called once during initial render.
        * If there is something in dependency array, then useEffect is called when dependency array changes. 




    3.useRouteError():
       -


       #Steps:
          -import useRouteError():              import { useRouterError } from "react-router-dom";
          
          -create Error components:
          
          -export and import to App.js:         
----------------------------------------onChange()--------------------------------------------------------------- 



----------------------------------------Routes--------------------------------------------------------------- 
   -It is a components we use when we want to fix any component on wepage and switch between other components...
     Ex:- header should be fix and other has to switch..
   -
   -help in nested looping...

   #Purpose:
      -It act as a place-holder where child routes will be rendererd.


-----------------------------------Class Based Component--------------------------------------------




----------------------------------Custom hook-------------------------------------------------------





--------------------------lazy() and Suspense Component---------------------------------------------
# lazy():
    -It is a function given by React.
    -It is a Named import.
    -It take a callback() in which import function is present.

   *steps:
      -import lazy from react...                        import { lazy } from "react";

      -initialize grocery.....                          const Grocery= lazy(()=> 
                                                           import("path of grocery component")
                                                           );

# Suspense Component:
    -It is a component given by raect.
    -It is a Named import.
    -Purpose :
        * Handle loading states for components.
        * Show fallback content while components or data are loading.
        * Simplify the process of managing asynchronous operations.

    *Steps:
        -import Suspense...                                 import { Suspense } from "react";

        -use Suspense....                                   path:"/grocery",
                                                            element:<Suspense 
                                                                        fallback={<h1>Loading</h1>}
                                                                    >
                                                                    <Grocery/>
                                                                    </Suspense>