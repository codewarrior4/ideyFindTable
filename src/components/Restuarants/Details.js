import React from 'react'
import {Link} from 'react-router-dom'

const Details = () => {
    return (
       
            <div>
            {/*// SubHeader //*/}
            <div className="ritekhana-subheader-view2"  style={{backgroundImage:"url('/extra-images/subheader-bg.jpg')"}}>
                <span className="ritekhana-banner-transparent" />
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <figure>
                        <span className="ritekhana-subheader-view2-thumb"><img src="/extra-images/listing-list-logo1.png"  /></span>
                        <figcaption>
                        <div className="ritekhana-reviews-rating"><span className="ritekhana-reviews-rating-box" style={{width: '60%'}} /></div>
                        <h2>Margherita 12 Deep Pan</h2>
                        <span><i className="fa fa-map-marker- ritekhana-color" /> 324 Yarang Road, T.Chabangtigo, Muanng Pattani 9400</span>
                        </figcaption>
                    </figure>
                    <div className="ritekhana-subheader-view2-right">
                        <span><i className="ritekhana-color fa fa-biking" /> Delivery fee: £10.00</span>
                        <span><i className="ritekhana-color far fa-money-bill-" /> Min Order : £15.00 Max Order : £50.00</span>
                        <a href="#" className="ritekhana-bgcolor"><i className="far fa-envelope" /> Email</a>
                        <a href="#" className="ritekhana-bgcolor"><i className="far fa-heart" /> Add to favorite</a>
                    </div>
                    </div>
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
                    <div className="ritekhana-column-9">
                        <div className="ritekhana-tab-style1">
                        <div className="nav" id="nav-tab" role="tablist">
                            <a className="active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">Menu</a>
                            <a className id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Review</a>
                            <a className id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Photo/Location</a>
                            <a className id="nav-loc-tab" data-toggle="tab" href="#nav-loc" role="tab" aria-controls="nav-loc" aria-selected="false">Resturant Booking</a>
                        </div>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            {/*// Resturants Detail List //*/}
                            <div className="ritekhana-listing ritekhana-listing-style3">
                                <ul className="ritekhana-row">
                                <li className="ritekhana-column-12">
                                    <figure><img src="/extra-images/listing-detail-1.jpg"  /></figure>
                                    <div className="ritekhana-listing-style3-text">
                                    <span>Bacon and Beef Pasta Bake <a href="#" className="ritekhana-bgcolor"><i className="fa fa-plus" /></a> </span>
                                    <small>Cheese, tomatoes, tuna fish, sweetcorn and italian herbs</small>
                                    <strong className="ritekhana-bgcolor">$11.54</strong>
                                    </div>
                                </li>
                                <li className="ritekhana-column-12">
                                    <figure><img src="/extra-images/listing-detail-2.jpg"  /></figure>
                                    <div className="ritekhana-listing-style3-text">
                                    <span>Creamy Pasta Carbonara <a href="#" className="ritekhana-bgcolor"><i className="fa fa-plus" /></a> </span>
                                    <small>Cheese, tomatoes, tuna fish</small>
                                    <strong className="ritekhana-bgcolor">$12.00</strong>
                                    </div>
                                </li>
                                <li className="ritekhana-column-12">
                                    <figure><img src="/extra-images/listing-detail-3.jpg"  /></figure>
                                    <div className="ritekhana-listing-style3-text">
                                    <span>Dutch Indonesian Chicken <a href="#" className="ritekhana-bgcolor"><i className="fa fa-plus" /></a> </span>
                                    <small>Cheese, tomatoes, shrimps, garlic, mussels, cockles, olives and italian</small>
                                    <strong className="ritekhana-bgcolor">$05.00</strong>
                                    </div>
                                </li>
                                <li className="ritekhana-column-12">
                                    <figure><img src="/extra-images/listing-detail-4.jpg"  /></figure>
                                    <div className="ritekhana-listing-style3-text">
                                    <span>Golden Roast Potatoes <a href="#" className="ritekhana-bgcolor"><i className="fa fa-plus" /></a> </span>
                                    <small>Cheese, tomatoes, tuna fish</small>
                                    <strong className="ritekhana-bgcolor">$09.00</strong>
                                    </div>
                                </li>
                                <li className="ritekhana-column-12">
                                    <figure><img src="/extra-images/listing-detail-1.jpg"  /></figure>
                                    <div className="ritekhana-listing-style3-text">
                                    <span>Bacon and Beef Pasta Bake <a href="#" className="ritekhana-bgcolor"><i className="fa fa-plus" /></a> </span>
                                    <small>Cheese, tomatoes, tuna fish, sweetcorn and italian herbs</small>
                                    <strong className="ritekhana-bgcolor">$11.54</strong>
                                    </div>
                                </li>
                                <li className="ritekhana-column-12">
                                    <figure><img src="/extra-images/listing-detail-2.jpg"  /></figure>
                                    <div className="ritekhana-listing-style3-text">
                                    <span>Creamy Pasta Carbonara <a href="#" className="ritekhana-bgcolor"><i className="fa fa-plus" /></a> </span>
                                    <small>Cheese, tomatoes, tuna fish</small>
                                    <strong className="ritekhana-bgcolor">$12.00</strong>
                                    </div>
                                </li>
                                <li className="ritekhana-column-12">
                                    <figure><img src="/extra-images/listing-detail-3.jpg"  /></figure>
                                    <div className="ritekhana-listing-style3-text">
                                    <span>Dutch Indonesian Chicken <a href="#" className="ritekhana-bgcolor"><i className="fa fa-plus" /></a> </span>
                                    <small>Cheese, tomatoes, shrimps, garlic, mussels, cockles, olives and italian</small>
                                    <strong className="ritekhana-bgcolor">$05.00</strong>
                                    </div>
                                </li>
                                <li className="ritekhana-column-12">
                                    <figure><img src="/extra-images/listing-detail-4.jpg"  /></figure>
                                    <div className="ritekhana-listing-style3-text">
                                    <span>Golden Roast Potatoes <a href="#" className="ritekhana-bgcolor"><i className="fa fa-plus" /></a> </span>
                                    <small>Cheese, tomatoes, tuna fish</small>
                                    <strong className="ritekhana-bgcolor">$09.00</strong>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            <div className="ritekhana-listing-loadmore-btn"><a href="#" className="ritekhana-bgcolor">Load More Menu</a></div>
                            {/*// Resturants Detail List //*/}
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            {/*// Resturants Reviews //*/}
                            <div className="ritekhana-resturant-reviews">
                                <ul className="ritekhana-row">
                                <li className="ritekhana-column-12">
                                    <figure><img src="/extra-images/resturant-review-1.jpg"  />
                                    <figcaption> <span>PhasePhore Jacklin</span> </figcaption>
                                    </figure>
                                    <div className="ritekhana-resturant-reviews-text">
                                    <div className="ritekhana-reviews-rating"><span className="ritekhana-reviews-rating-box" style={{width: '60%'}} /></div>
                                    <time dateTime="2008-02-14 20:00" className="ritekhana-color">reviewed on April 11, 2019</time>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum, odio vel tincidunt tincidunt, justo sapien ornare felis, id mattis ante libero non ante Maecenas porttitor.</p>
                                    <small className="ritekhana-color">Food: 7</small>
                                    <small className="ritekhana-color">Service: 6</small>
                                    <small className="ritekhana-color">Recommend: 8</small>
                                    <small className="ritekhana-color">Worth: 9</small>
                                    </div>
                                </li>
                                <li className="ritekhana-column-12">
                                    <figure><img src="/extra-images/resturant-review-2.jpg"  />
                                    <figcaption> <span>Westwill</span> </figcaption>
                                    </figure>
                                    <div className="ritekhana-resturant-reviews-text">
                                    <div className="ritekhana-reviews-rating"><span className="ritekhana-reviews-rating-box" style={{width: '90%'}} /></div>
                                    <time dateTime="2008-02-14 20:00" className="ritekhana-color">reviewed on March 18, 2019</time>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum, odio vel tincidunt tincidunt, justo sapien ornare felis, id mattis ante libero non ante Maecenas porttitor.</p>
                                    <small className="ritekhana-color">Food: 2</small>
                                    <small className="ritekhana-color">Service: 8</small>
                                    <small className="ritekhana-color">Recommend: 1</small>
                                    <small className="ritekhana-color">Worth: 3</small>
                                    </div>
                                </li>
                                <li className="ritekhana-column-12">
                                    <figure><img src="/extra-images/resturant-review-3.jpg"  />
                                    <figcaption> <span>Jacklin Grand</span> </figcaption>
                                    </figure>
                                    <div className="ritekhana-resturant-reviews-text">
                                    <div className="ritekhana-reviews-rating"><span className="ritekhana-reviews-rating-box" style={{width: '35%'}} /></div>
                                    <time dateTime="2008-02-14 20:00" className="ritekhana-color">reviewed on May 07, 2019</time>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum, odio vel tincidunt tincidunt, justo sapien ornare felis, id mattis ante libero non ante Maecenas porttitor.</p>
                                    <small className="ritekhana-color">Food: 7</small>
                                    <small className="ritekhana-color">Service: 6</small>
                                    <small className="ritekhana-color">Recommend: 8</small>
                                    <small className="ritekhana-color">Worth: 9</small>
                                    </div>
                                </li>
                                <li className="ritekhana-column-12">
                                    <figure><img src="/extra-images/resturant-review-1.jpg"  />
                                    <figcaption> <span>PhasePhore Jacklin</span> </figcaption>
                                    </figure>
                                    <div className="ritekhana-resturant-reviews-text">
                                    <div className="ritekhana-reviews-rating"><span className="ritekhana-reviews-rating-box" style={{width: '60%'}} /></div>
                                    <time dateTime="2008-02-14 20:00" className="ritekhana-color">reviewed on April 11, 2019</time>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum, odio vel tincidunt tincidunt, justo sapien ornare felis, id mattis ante libero non ante Maecenas porttitor.</p>
                                    <small className="ritekhana-color">Food: 7</small>
                                    <small className="ritekhana-color">Service: 6</small>
                                    <small className="ritekhana-color">Recommend: 8</small>
                                    <small className="ritekhana-color">Worth: 9</small>
                                    </div>
                                </li>
                                <li className="ritekhana-column-12">
                                    <figure><img src="/extra-images/resturant-review-2.jpg"  />
                                    <figcaption> <span>Westwill</span> </figcaption>
                                    </figure>
                                    <div className="ritekhana-resturant-reviews-text">
                                    <div className="ritekhana-reviews-rating"><span className="ritekhana-reviews-rating-box" style={{width: '90%'}} /></div>
                                    <time dateTime="2008-02-14 20:00" className="ritekhana-color">reviewed on March 18, 2019</time>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum, odio vel tincidunt tincidunt, justo sapien ornare felis, id mattis ante libero non ante Maecenas porttitor.</p>
                                    <small className="ritekhana-color">Food: 2</small>
                                    <small className="ritekhana-color">Service: 8</small>
                                    <small className="ritekhana-color">Recommend: 1</small>
                                    <small className="ritekhana-color">Worth: 3</small>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            {/*// Resturants Reviews //*/}
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <span className="ritekhana-section-title">Photo Gallery</span>
                            <div className="ritekhana-gallery ritekhana-gallery-style1">
                                <ul className="ritekhana-row">
                                <li className="ritekhana-column-6"> <img src="/extra-images/listing-detail-photo-1.jpg"  /> </li>
                                <li className="ritekhana-column-6"> <img src="/extra-images/listing-detail-photo-3.jpg"  /> </li>
                                <li className="ritekhana-column-12"> <img src="/extra-images/listing-detail-photo-2.jpg"  /> </li>
                                <li className="ritekhana-column-6"> <img src="/extra-images/listing-detail-photo-4.jpg"  /> </li>
                                <li className="ritekhana-column-6"> <img src="/extra-images/listing-detail-photo-5.jpg"  /> </li>
                                </ul>
                            </div>
                            <span className="ritekhana-section-title">Location</span>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13606.814674601637!2d74.32354245!3d31.504828099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1572437507320!5m2!1sen!2s" height={295} />
                            </div>
                            <div className="tab-pane fade" id="nav-loc" role="tabpanel" aria-labelledby="nav-loc">
                            <form className="ritekhana-booking-form">
                                <ul className="ritekhana-row">
                                <li><input type="text" placeholder="First Name" /></li>
                                <li><input type="text" placeholder="Last Name" /></li>
                                <li><input type="text" placeholder="Your Email" /></li>
                                <li><input type="text" placeholder="Number Of Guest" /></li>
                                <li className="full-area"><textarea placeholder="Your Discription" defaultValue={""} /></li>
                                <li className="full-area"><input type="submit" defaultValue="Book Now" className="ritekhana-bgcolor" /></li>
                                </ul>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    <aside className="ritekhana-column-3">
                        <div className="ritekhana-deal-box">                    
                        <h2>Deals &amp; Offers</h2>
                        <p>30% of Total Bill</p>
                        <p>Mon - Sun 11:00 AM to 10:30 PM</p>
                        </div>
                        <form className="ritekhana-baskit-cart-status">
                        <span className="ritekhana-baskit-cart-status-title">Your Basket</span>
                        <div className="ritekhana-filter-radio-view2">
                            <ul>
                            <li>
                                <input id="radio1" type="radio" name="radio" defaultValue={1} defaultChecked="checked" />
                                <label htmlFor="radio1">
                                <span><span>
                                    </span></span>
                                Delivery
                                <small>30 to 45 min</small>
                                </label>
                            </li>
                            <li>
                                <input id="radio2" type="radio" name="radio" defaultValue={2} />
                                <label htmlFor="radio2">
                                <span><span>
                                    </span></span>
                                Takeaway
                                <small>Unavailable</small>
                                </label>
                            </li>
                            </ul>
                        </div>
                        <ul className="ritekhana-baskit-cart-status-list">
                            <li><a href="#"><i className="fa fa-times-circle ritekhana-color" /> Pancake</a> <span>$33.56</span></li>
                            <li><a href="#">Turkey Bacon</a> <small>$33.56</small></li>
                            <li><a href="#">Mushrooms</a> <small>$33.56</small></li>
                            <li><a href="#">Mushrooms</a> <small>$33.56</small></li>
                            <li><a href="#">Cheddar</a> <small>$33.56</small></li>
                            <li><a href="#">Algerian sauce</a> <small>$33.56</small></li>
                        </ul>
                        <ul className="ritekhana-baskit-cart-subtotal">
                            <li>Subtotal <span>$56</span></li>
                            <li>Delivery fee <span>$10</span></li>
                            <li className="active">TOTAL <span>$33.56</span></li>
                        </ul>
                        <input type="submit" defaultValue="Order Now" className="ritekhana-bgcolor" />
                        </form>
                    </aside>
                    </div>
                </div>
                </div>
                {/*// Main Section //*/}
            </div>
            {/*// Content //*/}
            </div>

    )
}

export default Details
