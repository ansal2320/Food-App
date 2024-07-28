import { CDN_URL } from "../utils/constants";




const ResturantCard=(props)=>{
    const {resData}=props;

    const {name,cuisines,avgRating,costForTwo}=resData?.info;

    return(
        < div className="res-card">
            <img 
                className="img" 
                alt={name} 
                src={
                   CDN_URL + resData.info.cloudinaryImageId}>
            </img>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}rating</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime}min</h4>
        </div>
    );
}

export default ResturantCard;