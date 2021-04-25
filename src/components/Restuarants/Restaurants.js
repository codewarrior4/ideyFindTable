import React from 'react'
import {Link} from 'react-router-dom'
import Single from './Single'

const Restaurants = () => {
    return (
            <div>
            {/*// SubHeader //*/}
            <div className="ritekhana-subheader-view1"    style={{backgroundImage:"url('/extra-images/subheader-bg.jpg')"}}>
                <span className="ritekhana-banner-transparent" />
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="ritekhana-banner-caption-view1">
                        <form>
                        <ul>
                            <li>
                            <div className="ritekhana-select-view1">
                                <select>
                                <option>Select your City</option>
                                <option>Select your City</option>
                                <option>Select your City</option>
                                <option>Select your City</option>
                                <option>Select your City</option>
                                </select>
                            </div>
                            </li>
                            <li>
                            <div className="ritekhana-select-view1">
                                <select>
                                <option>Select Cuisine</option>
                                <option>Select Cuisine</option>
                                <option>Select Cuisine</option>
                                <option>Select Cuisine</option>
                                <option>Select Cuisine</option>
                                </select>
                            </div>
                            </li>
                            <li> <input type="submit" defaultValue="Search Here Now" /> </li>
                        </ul>
                        </form>
                    </div>
                    </div>
                    <ul className="ritekhana-breadcrumb">
                    <li><Link to="/">Home</Link></li>
                    <li><i className="fa fa-angle-right" /> Restaurants List</li>
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
                        {/*// Sorting Filter //*/}
                        <div className="ritekhana-listing-sortby">
                        <ul className="ritekhana-listing-sortby-left">
                            <li>Sort By:</li>
                            <li className="active"><a href="#">All</a></li>
                            <li><a href="#">Free Delivery</a></li>
                            <li><a href="#">Price</a></li>
                            <li><a href="#">Cuisine</a></li>
                            <li><a href="#">Location</a></li>
                        </ul>
                        <ul className="ritekhana-listing-sortby-right">
                            <li><a href="listing-list.html" className="fa fa-list-ul" /></li>
                            <li className="active"><a href="#" className="fa fa-th" /></li>
                        </ul>
                        </div>
                        {/*// Sorting Filter //*/}
                        {/*// Listing //*/}
                        <div className="ritekhana-listing ritekhana-listing-style2">
                        <ul className="ritekhana-row">
                            
                            <Single />
                            <Single />
                            <Single />
                            <Single />
                            <Single />
                            <Single />
                            <Single />
                            <Single />
                            <Single />
                        </ul>
                        </div>
                        {/*// Listing //*/}
                        {/*// Pagination //*/}
                        <div className="ritekhana-pagination">
                        <ul>
                            <li><a href="#"><i className="fa fa-chevron-left" /></a></li>
                            <li><a href="#">1</a></li>
                            <li className="active"><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#"><i className="fa fa-chevron-right" /></a></li>
                        </ul>
                        </div>
                        {/*// Pagination //*/}
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

export default Restaurants
