import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    var date =new Date()
    let years= date.getFullYear()
    return (
        <footer id="ritekhana-footer" className="ritekhana-footer-one">
            {/*// Footer Widget //*/}
            <div className="ritekhana-footer-widget">
                <div className="container">
                    <div className="row">
                        <aside className="widget col-md-6 widget_links">
                        <div className="ritekhana-footer-title"><h3>Popular Resturants</h3></div>
                            <ul>
                                <li><a href="#">Main Menu</a></li>
                                <li><a href="#">Chinese Food</a></li>
                                <li><a href="#">Deesert</a></li>
                                <li><a href="#">Fast Food</a></li>
                                <li><a href="#">Continental</a></li>
                            </ul>
                        </aside>
                        <aside className="widget col-md-6 widget_links">
                        <div className="ritekhana-footer-title"><h3>Information Link</h3></div>
                        <ul>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/restaurants">Menu</a></li>
                        </ul>
                        </aside>
                    </div>
                </div>
            </div>
            {/*// Footer Widget //*/}
            {/*// Footer CopyRight //*/}
            <div className="ritekhana-copyright">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <p>I dey Find Table © {years}, All Right Reserved - by <a target="_blank" href="//codewarrior.unaux.com">Adebayo Mayowa</a></p>
                    <ul className="ritekhana-footer-social">
                        <li>Follow us on:</li>
                        <li><a href="#" className="fab fa-facebook-f" /></li>
                        <li><a href="#" className="fab fa-twitter" /></li>
                        <li><a href="#" className="fab fa-linkedin-in" /></li>
                        <li><a href="#" className="fab fa-instagram" /></li>
                    </ul>
                    </div>
                </div>
                </div>
                <a href="#" className="ritekhana-back-top"><i className="fa fa-arrow-up" /></a>
            </div>
            {/*// Footer CopyRight //*/}
            </footer>

    )
}

export default Footer
