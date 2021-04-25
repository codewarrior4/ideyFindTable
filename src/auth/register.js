import React from 'react'
import {Link} from 'react-router-dom'
const register = () => {
    return (
        <div>
        <div className="ritekhana-subheader-view1" style={{backgroundImage:"url('/extra-images/subheader-bg.jpg')"}} >
            <span className="ritekhana-banner-transparent"  />
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1>SignUp</h1>
                </div>
                <ul className="ritekhana-breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li><i className="fa fa-angle-right" />SignUp</li>
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
                    {/*// Login //*/}
                    <div className="ritekhana-login-box-wrap">
                    <div className="ritekhana-login-box">
                        <h2>Create Account</h2>
                        <span className="ritekhana-login-box-sub">Use your credentials to access your account.</span>
                        <form>
                        <ul>
                            
                            <li><input type="text" placeholder="User Name" /> <i className="login-box-iconin far fa-user" /></li>
                            <li><input type="text" placeholder="Email Address" /> <i className="login-box-iconin far fa-envelope" /></li>
                            <li><input type="text" placeholder="Password*" /> <i className="login-box-iconin far fa-eye" /></li>
                            <li><input type="text" placeholder="Re- type password*" /></li>
                            <li>
                                <input id="ritekhana-filter-checkbox1" name="posted" defaultValue="lasthour" type="checkbox" />
                                <label htmlFor="ritekhana-filter-checkbox1"><span />I agree all statements in Terms of Service</label>
                            </li>
                            <li><input type="submit" defaultValue="Sign Up" className="ritekhana-bgcolor" /></li>
                            <li><p>Have already an account? <Link to="/login" className="ritekhana-color">Login Here</Link></p></li>
                            </ul>   
                        </form>
                    </div>
                    </div>
                    {/*// Login //*/}
                </div>
                </div>
            </div>
            </div>
            {/*// Main Section //*/}
        </div>
        </div>

    )
}

export default register
