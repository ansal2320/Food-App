import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";


const Body=()=>{
    //useState...
    const [listRestaurants,setListResturant]=useState([]);
    console.log("LLL");

    const [filteredResturants,setFilteredResturants]=useState([]);

    //useState for search....
    const [searchText,setSearchText]=useState("");

    const onlineStatus=useOnlineStatus();
    
    
    //usseEffect...
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        try {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json=await data.json();

        console.log(json);

        setListResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    }catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    //loading....
    if(listRestaurants.length===0){
        return <Shimmer/>
    }
    
    
    if(onlineStatus === false) { 
        return (
            <h1>
                Looks like you are offline!! Please check your internet connection.....
            </h1>
        )
    };
    
   

    return( 
        <div className="body">
            <div className="filter-bar">
                <div className="search-bar">
                    <input 
                        className="searchBox" 
                        type="text" 
                        value={searchText} 
                        onChange={(e)=>{setSearchText(e.target.value)}}
                    />
                    <button 
                        className="search"  
                        onClick={()=>{ 
                            console.log(searchText)
                        
                            const filteredResturants=listRestaurants.filter((res)=>{
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase())});

                            setFilteredResturants(filteredResturants);

                        }}>Search</button>
                </div>   
                <button 
                className="filter-btn" 
                onClick={()=>{ 
                    const filteredList = listRestaurants.filter(
                        (res)=> res.info.avgRating>4
                    );
                    setFilteredResturants(filteredList); 
                       
            }
            }>Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
               {
                    filteredResturants.map((resturant)=>(                        //resturant is just a argument passed, just like in coding......
                    <Link  
                        key={resturant.info.id} 
                        to={"/resturant/"+resturant.info.id}>
                        <ResturantCard resData={resturant}/>
                    </Link> 
                    )
                )}
            </div>

        </div>
    );
};

export default Body;