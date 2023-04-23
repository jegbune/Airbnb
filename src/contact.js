import React from "react"

function Contact() {
    return (
      <div className="contacts">
        <div className="contact-card">
            <img src="./images/mr-whiskerson.png" alt="mr-whiskerson" />
            <h3>Mr. Whiskerson</h3>
            <div className = "info-group">
                <img src="./images/phone-icon.png" alt="phone-icon" />
                <p>(212) 555 -1234</p>
            </div> 
            <div className="info-group">
                <img src="./image/mail-icon.png" alt="mail-icon" />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>

      </div>  
    )
}

export default Contact