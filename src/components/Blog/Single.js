import React from 'react'
import {Link} from 'react-router-dom'

const Single = () => {
    return (
            <li className="col-md-4">
                <figure><Link to="/blog/2"><img src="extra-images/blog-grid-img2.jpg"  /></Link></figure>
                <div className="ritekhana-blog-heading">
                    <h2><Link to="/blog/2">Sed vulputate elementum aliqua unc vel</Link></h2>
                    <ul className="ritekhana-blog-option">
                    <li>Date: <time dateTime="2008-02-14 20:00">21 Aug 2017</time></li>
                    </ul>   
                </div>
                <div className="ritekhana-blog-large-text">
                    <p>Aenean ultricies iaculis cursus Mauris enim tellus finibus in felis a sollicitudin iaculis dolor Donec sollicitudin ori id effi citur dapibus Aliquam tempor sapien sed.</p>
                    <Link to="/blog/2" className="ritekhana-learn-btn ritekhana-bgcolor ritekhana-border-color">Read More <span className="btn-shape" /></Link>
                </div>
            </li>
    )
}

export default Single
