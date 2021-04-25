import React from 'react'
import {Link} from 'react-router-dom'
import Sidebar from './Sidebar'
const BookingDetails = () => {
    return (
        <div>
        {/*// SubHeader //*/}
        <div className="ritekhana-subheader-view1" style={{backgroundImage:"url('/extra-images/subheader-bg.jpg')"}}>
            <span className="ritekhana-banner-transparent"  />
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1>Booking</h1>
                </div>
                <ul className="ritekhana-breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li><i className="fa fa-angle-right" /> Booking Detail</li>
                </ul>
            </div>
            </div>
        </div>
        {/*// SubHeader //*/}
        {/* <!--// Content //--> */}
            <div className="ritekhana-main-content">
                {/*// Main Section //*/}
                <div className="ritekhana-main-section">
                    <div className="container">
                    <div className="ritekhana-row">
                        <div className="ritekhana-column-3 ritekhana-right-padd">
                        <div className="ritekhana-dashboard-nav">
                           <Sidebar />
                        </div>
                        </div>
                        <div className="ritekhana-column-9 ritekhana-right-padd ritekhana-left-padd">
                        {/*// DashBoard Content //*/}
                        <div className="ritekhana-dashboard-box">
                         
                            {/*// Dashboard Title //*/}
                            <div className="ritekhana-recet-order-list">
                            <table width="100%">
                                
                                <tbody>
                                <tr>
                                    <td>Restaurant Name</td>
                                    <td>New Noodle Menu</td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>Lagos</td>
                                </tr>
                                <tr>
                                    <td>Booking ID</td>
                                    <td>0000001</td>
                                </tr>
                                <tr>
                                    <td>Contact Info</td>
                                    <td>+92333-4584589 <span>info@example.com</span></td>
                                </tr>
                                <tr>
                                    <td>Tables</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td className="color2">Processing</td>
                                </tr>
                               
                                </tbody>
                            </table>
                            </div>
                        </div>
                        {/*// DashBoard Content //*/}
                        </div>
                    </div>
                    </div>
                </div>
                {/*// Main Section //*/}
                </div>
                {/*// Content //*/}

        </div>
    )
}

export default BookingDetails
