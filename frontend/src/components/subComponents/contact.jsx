import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            name: '',
            email: '',
            message: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handleMessageChange(event) {
        this.setState({ message: event.target.value });
    }

    handleButton(event) {
        /*
        this.sendFeedback(
            "template_428MCM92",
            this.state.email,
            "bremauer.jan2@gmail.com",
            this.state.message
        );*/
    }

    sendFeedback (templateId, senderEmail, receiverEmail, feedback) {
        window.emailjs.send(
          'gmail',
          templateId,
          {
            senderEmail,
            receiverEmail,
            feedback
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Failed to send feedback. Error: ', err))
      }

	render() {
		return (
            <div className="container-fluid section">
                <div id="contact" style={{position: 'absolute', top: '2000px', left: 0}}/>
                <div className="container">
                    <h1 className="text-center">
                        Contact
                    </h1>
                    <p className="text">
                        Bei Fragen können sie mich jederzeit per Kontaktformular oder direkt über folgende E-Mail kontaktieren.
                    </p>
                    <p className="text">
                        E-Mail: jan@bremauer.cc
                    </p>
                    <form className="row mt-3">
                        <div className="col-md-6">
                            <div className="inputWrapper">
                                <label className="coustomlabel" >
                                    <span className="labelText">Name</span><span className="labelRequired"> (required)</span>
                                </label>
                                <input type="text" name="name" onChange={this.handleNameChange} className="coustomForm" id="nameInput" placeholder="Enter name"/>
                            </div>
                            <div className="inputWrapper">
                                <label className="coustomlabel" >
                                    <span className="labelText">Email</span><span className="labelRequired"> (required)</span>
                                </label>
                                <input type="text" name="email" onChange={this.handleEmailChange} className="coustomForm" id="emailInput" placeholder="Enter email"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="inputWrapper">
                                <label className="coustomlabel">
                                    <span className="labelText">Message</span><span className="labelRequired"> (required)</span>
                                </label>
                                <textarea type="text" name="message" onChange={this.handleMessageChange} className="coustomForm coustomArea" id="messageInput" rows="5" placeholder="Enter message"/>
                            </div>
                        </div>
                    </form>
                    <div className="buttonRow">
                        <button onClick={this.handleButton} className="coustomButton">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;