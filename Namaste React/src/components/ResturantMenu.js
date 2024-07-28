
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import Shimmer from "./Shimmer";


const ResturantMenu=()=>{

    const { resId }=useParams();

    const resInfo = useResturantMenu(resId);
    
    if (resInfo===null){ return <Shimmer/>};

    const { itemCards }=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const { name,cuisines,avgRating } =  resInfo?.cards[2]?.card?.card?.info;
    
    return (
        <div className="res-menu">
            <h1>{name}</h1>
            <h1>{cuisines.join(",")}</h1>
            <h1>{avgRating}</h1>
            <h2>Menu</h2>
             <ul >
                {itemCards.map((item)=>(
                  <li key={item.card.info.id}>
                    {item.card.info.name}-{"  Rs"}{item.card.info.price/100}
                  </li>
                ))
                }
             </ul>        
        </div>
    )
}

export default ResturantMenu;
