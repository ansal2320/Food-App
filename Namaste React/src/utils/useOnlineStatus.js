import { useEffect, useState } from "react";


const useOnlineStatus=()=>{
    const [onlineStatus, setOnlineStatus]=useState(true);
   
    // check if online....
    // here we use the useEffect because we have to load eventlistener only once(possible thru empty array dependency)....
    useEffect(()=>{

        window.addEventListener("offline",()=>{
              setOnlineStatus(false);
        });

        window.addEventListener("online",()=>{
             setOnlineStatus(true);
        });
    },[]);


    // return boolean value...
    return onlineStatus; 

}

export default useOnlineStatus;