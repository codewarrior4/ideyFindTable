import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Profile = () => {
    return (
      <div>
  {/*// SubHeader //*/}
  <div className="ritekhana-subheader-view1" style={{backgroundImage:"url('/extra-images/subheader-bg.jpg')"}}>
    <span className="ritekhana-banner-transparent" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>My Profile</h1>
        </div>
        <ul className="ritekhana-breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><i className="fa fa-angle-right" /> Update Profile</li>
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
              {/*// Dashboard Form //*/}
              <p className="pt-3 font-weight-bold">Change Details</p>
                    <hr />
              <form className="ritekhana-dashboard-form">
                <ul className="ritekhana-row">
                  <li className="ritekhana-column-6">
                    <label>Fullname *</label>
                    <input type="text" placeholder="Chicken Pizza" />
                  </li>
                  <li className="ritekhana-column-6">
                    <label> Phone *</label>
                    <input type="text" placeholder="+65 123 654 987" />
                  </li>
                  <li className="ritekhana-column-6">
                    <label>Username *</label>
                    <input type="text" placeholder="+65 123 654 987" />
                  </li>
                  <li className="ritekhana-column-6">
                    <label>Email Address *</label>
                    <input type="text" placeholder="info@example.com" />
                  </li>
                  <li className="ritekhana-column-12"> <input type="submit" className="ritekhana-dashboard-submit-btn ritekhana-bgcolor ritekhana-border-color ritekhana-colorhover" defaultValue="Update Profile" /> </li>
                   
                </ul>
              </form>
              <form className="ritekhana-dashboard-form">
                 <p className="pt-3 font-weight-bold">Change Password</p>
                    <hr />
                <ul className="ritekhana-row">
                  <li className="ritekhana-column-6">
                    <label>New Password *</label>
                    <input type="password"  />
                  </li>
                  <li className="ritekhana-column-6">
                    <label> Confirm password *</label>
                    <input type="password"  />
                  </li>
                  <li className="ritekhana-column-12"> <input type="submit" className="ritekhana-dashboard-submit-btn ritekhana-bgcolor ritekhana-border-color ritekhana-colorhover" defaultValue="Change Password" /> </li>
                   
                </ul>
              </form>
              {/*// Dashboard Form //*/}
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

export default Profile
