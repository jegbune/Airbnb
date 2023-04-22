import React from "react"

function Cards(props) {
    return (
        <div className="cards">
            <div className="card-container">
                <img src="./images/cards/image-12.png" className="card-image" alt ="image12" />
                <p className="card-status">SOLD OUT</p>
            </div>
            <div className="card-info">
                <div className="stat-container">
                <img src="./images/cards/Star 1.png" className="star" alt="star" />
                <span>5.0 <span className="feeds-stats">(6).USA</span></span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p className="price-container"><span className="Price">From $136</span> / person</p>
            </div>
        </div>
    )
}

export default Cards