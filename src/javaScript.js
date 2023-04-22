import React from "react"

function Sample() {
    const Firstname = "Jeremiah" ;
    const Lastname = "Egbune" ;
    const date = new Date()
    let timeOfDay;
    if (date.getHours < 12) {
        timeOfDay = "Morning";
    } else if(date.getHours < 17) {
        timeOfDay = "Afternoon"
    }else{
        timeOfDay = "night"
    }

    return (
        // <h1> Hello {Firstname} {Lastname} </h1>
        // <h1> it is currently {date.getHours() % 12} O'clock  </h1>
        <h1>Good {timeOfDay}</h1>
        )

}
export default Sample