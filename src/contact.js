import React from "react"

function Contact(props) {
    console.log(props)
    return (
      <div className="contact-card">
          <img src={props.img} alt="mr-whiskerson" />
          <h3>{props.name}</h3>
          <div className="info-group">
              <img src="./images/phone-icon.png" alt="phone-icon" />
              <p>{props.Number}</p>
          </div>
          <div className="info-group">
              <img src="./images/mail-icon.png" alt="mail-icon" />
              <p>{props.mail}</p>
          </div>
      </div> 
    )
}

export default Contact