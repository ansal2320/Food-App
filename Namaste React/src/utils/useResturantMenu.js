import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useResturantMenu=(resId)=>{
    
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{ fetchData() },[]);

    const fetchData = async () => {
        try {
          const response = await fetch( MENU_URL + resId );
          const json = await response.json();
          console.log(json);
         
          setResInfo(json.data);
        
        } catch (error) {
          console.error("Error fetching the data:", error);
        }
      };

      return resInfo;

}

export default useResturantMenu;