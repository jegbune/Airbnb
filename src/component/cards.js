import React from "react"

function Cards(props) {
    let badgeText 
    if(props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="cards"> 
            <div className="card-container">
                <img src={`./images/cards/${props.item.image}`} className="card-image" alt ="image12" />
                {badgeText && <div className="card-status">{badgeText}</div>}
            </div>
            <div className="card-info">
                <div className="stat-container">
                <img src="./images/cards/Star 1.png" className="star" alt="star" />
                <span>{props.item.rating} <span className="feeds-stats">( {props.item.reviewCount}).{props.item.location}</span></span>
                </div>
                <p>{props.item.title}</p>
                <p className="price-container"><span className="Price">From ${props.item.price}</span> / person</p>
            </div>
        </div>
    )
}

export default Cards