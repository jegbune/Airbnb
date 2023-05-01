import React from "react"

function Cart(props) {
    let stock;
    if (props.openSpot > 0){
        stock = "online"
    }else if (props.openSpot <= 0) {
        stock = "offline"
    }
    return(
        <div className="Cart">
            <img src="./images/cards/image-12.png" alt="logo" /> 
            {stock && <div>{stock}</div>}
            <div>
                <p>{props.title}</p>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default Cart