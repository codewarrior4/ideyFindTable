import React from 'react'
import {Link} from 'react-router-dom'
const Contact = () => {
    return (
        <div>
        {/*// SubHeader //*/}
        <div className="ritekhana-subheader-view1" style={{backgroundImage:"url('/extra-images/subheader-bg.jpg')"}}>
            <span className="ritekhana-banner-transparent" />
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1>Contact Us</h1>
                </div>
                <ul className="ritekhana-breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li><i className="fa fa-angle-right" /> Contact Us</li>
                </ul>
            </div>
            </div>
        </div>
        {/*// SubHeader //*/}
        {/*// Content //*/}
        <div className="ritekhana-main-content">
            {/*// Main Section //*/}
            <div className="ritekhana-main-section">
            <div className="container">
                <div className="ritekhana-row">
                <div className="ritekhana-column-12">
                    {/*// Contact Us //*/}
                    <div className="ritekhana-contact-wrapper">
                    <span className="ritekhana-contact-title">Contact Info</span>
                    <div className="ritekhana-contact-service">
                        <ul className="row">
                        <li className="col-md-4">
                            <span className="ritekhana-service-icon"><i className="fa fa-map-marker-alt" /></span>
                            <h5 className="ritekhana-color">Address</h5>
                            <p>195 Cooks Mine Road Espanola, NM 87532</p>
                        </li>
                        <li className="col-md-4">
                            <span className="ritekhana-service-icon"><i className="fa fa-blender-phone" /></span>
                            <h5 className="ritekhana-color">Phone &amp; Fax</h5>
                            <p>+1 505-753-5656 +1 505-753-4437</p>
                        </li>
                        <li className="col-md-4">
                            <span className="ritekhana-service-icon"><i className="far fa-envelope" /></span>
                            <h5 className="ritekhana-color">E-mail</h5>
                            <p><a href="mailto:name@email.com">Info@ritekhana.com</a> <a href="mailto:name@email.com">support@ritekhana.com</a></p>
                        </li>
                        </ul>
                    </div>
                    <ul className="contact-social-icon">
                        <li><a href="#"><i className="ritekhana-color fab fa-facebook-square" /> Facebook</a></li>
                        <li><a href="#"><i className="ritekhana-color fab fa-twitter-square" /> Twitter</a></li>
                        <li><a href="#"><i className="ritekhana-color fab fa-linkedin" /> Linkedin</a></li>
                        <li><a href="#"><i className="ritekhana-color fab fa-vimeo-square" /> Vimeo</a></li>
                    </ul>
                    </div>
                    <div className="ritekhana-contact-form">
                    <span>Talk To Us Today</span>
                    <form>
                        <ul>
                        <li>
                            <i className="fa fa-user" />
                            <input type="text" placeholder="Name" />
                        </li>
                        <li>
                            <i className="fa fa-paper-plane" />
                            <input type="text" placeholder="E-mail" />
                        </li>
                        <li>
                            <i className="fa fa-phone" />
                            <input type="text" placeholder="Phone" />
                        </li>
                        <li>
                            <i className="fa fa-envelope" />
                            <textarea placeholder="Message" defaultValue={""} />
                        </li>
                        <li> <input type="submit" defaultValue="Send Message" /> </li>
                        </ul>
                    </form>
                    </div>
                    {/*// Contact Us //*/}
                </div>
                </div>
            </div>
            </div>
            {/*// Main Section //*/}
            {/*// Main Section //*/}
            <div className="ritekhana-main-section ritekhana-contact-map-full">
            <div className="container-fluid">
                <div className="ritekhana-row">
                {/*// Contact Us //*/}
                <div className="ritekhana-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.294420466!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1581071766354!5m2!1sen!2s" height={400} />
                </div>
                {/*// Contact Us //*/}
                </div>
            </div>
            </div>
            {/*// Main Section //*/}
        </div>
        {/*// Content //*/}
        </div>

    )
}

export default Contact
