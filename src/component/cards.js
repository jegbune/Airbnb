import React from "react"

function Cards(props) {
    return (
        <div className="cards">
            <div className="card-container">
                <img src={`./images/cards/${props.image}`} className="card-image" alt ="image12" />
                <p className="card-status">SOLD OUT</p>
            </div>
            <div className="card-info">
                <div className="stat-container">
                <img src="./images/cards/Star 1.png" className="star" alt="star" />
                <span>{props.rating} <span className="feeds-stats">( {props.reviewCount}).{props.country}</span></span>
                </div>
                <p>{props.title}</p>
                <p className="price-container"><span className="Price">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}

export default Cards