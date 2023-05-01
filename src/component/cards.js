import React from "react"

function Cards(props) {
    let badgeText 
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="cards"> 
            <div className="card-container">
                <img src={`./images/cards/${props.image}`} className="card-image" alt ="image12" />
                {badgeText && <div className="card-status">{badgeText}</div>}
            </div>
            <div className="card-info">
                <div className="stat-container">
                <img src="./images/cards/Star 1.png" className="star" alt="star" />
                <span>{props.rating} <span className="feeds-stats">( {props.reviewCount}).{props.location}</span></span>
                </div>
                <p>{props.title}</p>
                <p className="price-container"><span className="Price">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}

export default Cards