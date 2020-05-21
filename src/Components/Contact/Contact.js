import React, { Component } from 'react';
import './Contact.css';
import img_contact from '../../assets/images/team/4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="contact" className="box_contact">
                <div className={"container-fluid section" + (this.props.dark ? " section-dark" : "")}>
                    <div className="section-content" id={this.props.id}>
                        <h1>{this.props.title}</h1>

                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h3 className="section-subheading text-muted">Get In Touch</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="team-member">
                                    <img alt="contact" className="contactImg" src={img_contact} />
                                    <h4 style={{color:'#efefef'}}>Goutam singh</h4>
                                    <p className="text-muted">User Interface(UI) Specialist</p>
                                    <div className="text-muted">Email: afixi.gautam@gmail.com</div>
                                    <div className="text-muted">Phone: +91 - 9886207210</div>
                                    <div className="text-muted">
                                        <a rel="noopener noreferrer" href="https://www.meetup.com/Prov-JS/members/254405462/" style={{textDecoration: 'none', color: '#fed136'}}>MeetUp</a>
                                    </div>
                                    <ul className="list-inline social-buttons">
                                        <li className="list-inline-item">
                                            <a rel="noopener noreferrer" href="https://twitter.com/glamour_gleam" target="_blank">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a rel="noopener noreferrer" href="https://www.facebook.com/glamourgleam" target="_blank">
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/goutampsingh/" target="_blank">
                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a rel="noopener noreferrer" href="https://www.instagram.com/_gautamsingh/" target="_blank">
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a rel="noopener noreferrer" href="https://github.com/Gautampsingh" target="_blank">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                <div className="col-lg-12">
                    <form method="post" id="form_id" action="mailto:gs@goutamsingh.com">

                        <div className="row" style={{marginBottom: '10px'}}>
                            <div className="col-md-12 msgTxt">Any queries? shoot me here </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="Name" className="form-control" id="name" placeholder="Your Name *" 
                                        required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email *" 
                                        required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input type="tel" name="Phone" className="form-control" id="phone" placeholder="Your Phone *" 
                                        required="required" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea name="Message" className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-lg-12 text-center">
                                <div id="success"></div>
                                {/* <input type="submit" value="Send Message" className="btn btn-primary btn-xl text-uppercase">
                                <button type="submit" id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase">Send Message</button> */}
                                <button className="btn btn-primary btn-xl text-uppercase">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Contact;