import React from 'react'
import {Link} from 'react-router-dom'
const Single = () => {
    return (
        <li className="ritekhana-column-4">
                <div className="ritekhana-listing-style2-inner">
                    <figure><Link to="/restaurant/1"><img src="extra-images/listing-list-logo1.png" /></Link> <span className="ritekhana-bgcolor">open</span> <Link to="/restaurant/1" className="ritekhana-listing-style2-like ritekhana-color"><i className="fa fa-heart" /></Link> </figure>
                    <div className="ritekhana-listing-style2-right">
                    <strong>Price: $65 - $78</strong>
                    <div className="ritekhana-reviews-rating"><span className="ritekhana-reviews-rating-box" style={{width: '80%'}} /></div>
                    </div>
                    <div className="ritekhana-listing-style2-text">
                    <strong className="ritekhana-listing-style2-title"><Link to="/restaurant/1">New Noodle Menu</Link></strong>
                    <span className="ritekhana-listing-style2-left"> <i className="fa fa-map-marker-alt" /> 105 Soi Sathon 1 Thung Maha Mek</span>
                    <p>Fusce pulvinar tortor viverra aliquam semper. Cras in sapien ultrices, molestie sapien ac sodales leo Aenean ultricies tellus.</p>
                    <Link to="/restaurant/1" className="ritekhana-listing-style2-btn ritekhana-bgcolor ritekhana-border-color">View Detail</Link>
                    </div>
                </div>
            </li>
    )
}

export default Single
