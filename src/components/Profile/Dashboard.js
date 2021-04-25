import React from 'react'
import {Link} from 'react-router-dom'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <div>
        {/*// SubHeader //*/}
        <div className="ritekhana-subheader-view1" style={{backgroundImage:"url('/extra-images/subheader-bg.jpg')"}}>
            <span className="ritekhana-banner-transparent"  />
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1>Dashboard</h1>
                </div>
                <ul className="ritekhana-breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li><i className="fa fa-angle-right" /> Dashboard</li>
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
                <div className="ritekhana-column-3 ritekhana-right-padd">
                    <div className="ritekhana-dashboard-nav">
                        <Sidebar />
                    </div>
                </div>
                <div className="ritekhana-column-9 ritekhana-right-padd ritekhana-left-padd">
                    {/*// DashBoard Content //*/}
                    <div className="ritekhana-dashboard-box">
                  
                    <div className="ritekhana-dashboard-cover">
                        <figure>
                        <span><img src="extra-images/listing-list-logo1.png" alt /></span>
                        <figcaption>
                            <span className="ritekhana-dashboard-cover-title">Huck Smith</span>
                            <small>Good Evening </small>
                            <div className="ritekhana-dashboard-file-upload">
                            <input id="upload" className="ritekhana-file-upload-input" type="file" name="file-upload" />
                            </div>
                        </figcaption>
                        </figure>
                    </div>
                    {/*// Dashboard Cover //*/}
                    {/*// Dashboard Title //*/}
                    <div className="ritekhana-dashboard-title">
                        <small className="ritekhana-dashboard-cover-transparent" />
                        <span>Recent Booking</span>
                        
                    </div>
                    {/*// Dashboard Title //*/}
                        <div className="ritekhana-recet-order-list">
                        <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Date/Time</th>
                                                <th>Booking ID</th>
                                                <th>Status</th>
                                                <th>Contact Info</th>
                                                <th>Detail</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Jhon Damed</td>
                                                <td>01/31/2019 18:20.00</td>
                                                <td>98454126</td>
                                                <td><strong>Processing</strong></td>
                                                <td>+92333-4584589 <span>info@example.com</span></td>
                                                <td><Link to="/booking/2" class="ritekhana-recet-order-link">Detail <i class="fa fa-plus-circle"></i></Link></td>
                                            </tr>
                                            <tr>
                                                <td>Damed Hinsun</td>
                                                <td>02/05/2019 19:20.00</td>
                                                <td>98454126</td>
                                                <td><strong class="color2">Completed</strong></td>
                                                <td>+92333-4584589 <span>info@example.com</span></td>
                                                <td><Link to="/booking/2" class="ritekhana-recet-order-link">Detail <i class="fa fa-plus-circle"></i></Link></td>
                                            </tr>
                                            <tr>
                                                <td>Ginksun Dong</td>
                                                <td>05/12/2019 11:20.00</td>
                                                <td>98454126</td>
                                                <td><strong>Processing</strong></td>
                                                <td>+92333-4584589 <span>info@example.com</span></td>
                                                <td><Link to="/booking/2" class="ritekhana-recet-order-link">Detail <i class="fa fa-plus-circle"></i></Link></td>
                                            </tr>
                                            <tr>
                                                <td>Jhon Damed</td>
                                                <td>01/31/2019 18:20.00</td>
                                                <td>98454126</td>
                                                <td><strong class="color2">Completed</strong></td>
                                                <td>+92333-4584589 <span>info@example.com</span></td>
                                                <td><Link to="/booking/2" class="ritekhana-recet-order-link">Detail <i class="fa fa-plus-circle"></i></Link></td>
                                            </tr>
                                            <tr>
                                                <td>Damed Hinsun</td>
                                                <td>02/05/2019 19:20.00</td>
                                                <td>98454126</td>
                                                <td><strong>Processing</strong></td>
                                                <td>+92333-4584589 <span>info@example.com</span></td>
                                                <td><Link to="/booking/2" class="ritekhana-recet-order-link">Detail <i class="fa fa-plus-circle"></i></Link></td>
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

export default Dashboard
