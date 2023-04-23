import React from "react"

function Contact({img, name, Number, mail}) {
    // console.log()
    return (
      <div className="contact-card">
          <img src={img} alt="mr-whiskerson" />
          <h3>{name}</h3>
          <div className="info-group">
              <img src="./images/phone-icon.png" alt="phone-icon" />
              <p>{Number}</p>
          </div>
          <div className="info-group">
              <img src="./images/mail-icon.png" alt="mail-icon" />
              <p>{mail}</p>
          </div>
      </div> 
    )
}

export default Contact