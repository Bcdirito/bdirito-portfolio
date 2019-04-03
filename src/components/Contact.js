import React, { Component } from 'react'

export default class Contact extends Component {
  state = {
    email: "bdirito.dev@gmail.com"
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted")
  }

  render() {
    return (
      <div>
        <h1>Contact Info:</h1>
          <div className="contactInfo">
            LinkedIn <a href="https://www.linkedin.com/in/brian-dirito-7a7174145/" target="_blank" rel="noopener noreferrer">here</a>
            <br/>
            Github <a href="https://github.com/Bcdirito" target="_blank" rel="noopener noreferrer">here</a>
            <br/>
            Medium <a href="https://medium.com/@bdirito91" target="_blank" rel="noopener noreferrer">here</a>
            <br/>
            Phone Number: (954)-234-1748
            <br/>
            Email: <a href={`mailto:${this.state.email}`}>{this.state.email}</a>
          </div>
      </div>
    )
  }
}
