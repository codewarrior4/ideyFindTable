import React from 'react'

const Index = () => {
    return (
     <div>
  <div className="ritekhana-banner-one">
    <div className="ritekhana-banner-one-layer">
      <img src="extra-images/banner-1.jpg"/>
      <span className="ritekhana-banner-transparent" />
      <div className="ritekhana-banner-caption-view1">
        <div className="container">
          <h1>Discover Restaurants That Deliver Near You</h1>
          <span>And Book A table</span>
          <form>
            <ul>
              <li>
                <div className="ritekhana-select-view1">
                  <select>
                    <option>Select City</option>
                    <option>Select City</option>
                    <option>Select City</option>
                    <option>Select City</option>
                    <option>Select City</option>
                  </select>
                </div>
              </li>
              <li>
                <div className="ritekhana-select-view1">
                  <select>
                    <option>Select Area</option>
                    <option>Select Area</option>
                    <option>Select Area</option>
                    <option>Select Area</option>
                    <option>Select Area</option>
                  </select>
                </div>
              </li>
              <li> <input type="text" placeholder="Home Delivery" /> </li>
              <li> <input type="submit" defaultValue="Show Restaurants" /> </li>
            </ul>
          </form>
          <ul className="ritekhana-banner-list">
            <li><strong>2650</strong> Restaurant</li>
            <li><strong>5350</strong> People Served</li>
            <li><strong>12350</strong> Registered Users</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/*// Banner //*/}
  {/*// Content //*/}
  <div className="ritekhana-main-content">
    {/*// Main Section //*/}
    <div className="ritekhana-main-section ritekhana-services-view1-full">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/*// Services //*/}
            <div className="ritekhana-services ritekhana-services-view1">
              <ul className="row">
                <li className="col-md-3">
                  <i className="fab fa-searchengin ritekhana-color" />
                  <h2><a href="#">Search Resturant</a></h2>
                  <p>Sed consequat sapien faus quam bibendum convallis.</p>
                </li>
                <li className="col-md-3">
                  <i className="fa fa-hamburger ritekhana-color" />
                  <h2><a href="#">Choose Menu</a></h2>
                  <p>Sed consequat sapien faus quam bibendum convallis.</p>
                </li>
                <li className="col-md-3">
                  <i className="far fa-money-bill-alt ritekhana-color" />
                  <h2><a href="#">Payment</a></h2>
                  <p>Sed consequat sapien faus quam bibendum convallis.</p>
                </li>
                <li className="col-md-3">
                  <i className="fa fa-truck-moving ritekhana-color" />
                  <h2><a href="#">Enjoy Table</a></h2>
                  <p>Sed consequat sapien faus quam bibendum convallis.</p>
                </li>
              </ul>
            </div>
            {/*// Services //*/}
          </div>
        </div>
      </div>
    </div>
    {/*// Main Section //*/}
    {/*// Main Section //*/}
    <div className="ritekhana-main-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/*// Fancy Title //*/}
            <div className="ritekhana-fancy-title">
              <h2 className="ritekhana-color">Popular Resturant</h2>
              <span>Sed consequat sapien faus quam bibendum convallis quis in nulla.</span>
            </div>
            {/*// Fancy Title //*/}
            {/*// Popular Resturant //*/}
            <div className="ritekhana-resturant ritekhana-resturant-view1">
              <ul className="row">
                <li className="col-md-6">
                  <div className="ritekhana-resturant-view1-wrap">
                    <figure><a href="#"><img src="extra-images/resturant-view1-image1.jpg"/></a> <span className="ritekhana-bgcolor">Popular</span> </figure>
                    <div className="ritekhana-resturant-view1-text">
                      <h2><a href="#">McDonalds</a> <span className="ritekhana-color">Delivery Time 30 Min</span></h2>
                      <div className="ritekhana-resturant-view1-tags">
                        <a href="#">Beverage, </a>
                        <a href="#">Burgers, </a>
                        <a href="#">Fast Food, </a>
                        <a href="#">Wraps</a>
                      </div>
                      <p>Sed consequat sapien faus quam bibendum convallis quis in nulla Pellentesque.</p>
                      <span className="ritekhana-resturant-view1-loc"><i className="fa fa-map-marker-alt ritekhana-color" /> 105 Soi Sathon 2</span>
                      <a href="#" className="ritekhana-resturant-view1-btn ritekhana-bgcolor">Order Now</a>
                    </div>
                  </div>
                </li>
                <li className="col-md-6">
                  <div className="ritekhana-resturant-view1-wrap">
                    <figure><a href="#"><img src="extra-images/resturant-view1-image2.jpg"/></a></figure>
                    <div className="ritekhana-resturant-view1-text">
                      <h2><a href="#">Vell Kitchen</a> <span className="ritekhana-color">Delivery Time 15 Min</span></h2>
                      <div className="ritekhana-resturant-view1-tags">
                        <a href="#">Beverage, </a>
                        <a href="#">Burgers, </a>
                        <a href="#">Fast Food, </a>
                        <a href="#">Wraps</a>
                      </div>
                      <p>Sed consequat sapien faus quam bibendum convallis quis in nulla Pellentesque.</p>
                      <span className="ritekhana-resturant-view1-loc"><i className="fa fa-map-marker-alt ritekhana-color" /> 105 Soi Sathon 2</span>
                      <a href="#" className="ritekhana-resturant-view1-btn ritekhana-bgcolor">Order Now</a>
                    </div>
                  </div>
                </li>
                <li className="col-md-6">
                  <div className="ritekhana-resturant-view1-wrap">
                    <figure><a href="#"><img src="extra-images/resturant-view1-image3.jpg"/></a></figure>
                    <div className="ritekhana-resturant-view1-text">
                      <h2><a href="#">Hen Kitchen</a> <span className="ritekhana-color">Delivery Time 20 Min</span></h2>
                      <div className="ritekhana-resturant-view1-tags">
                        <a href="#">Beverage, </a>
                        <a href="#">Burgers, </a>
                        <a href="#">Fast Food, </a>
                        <a href="#">Wraps</a>
                      </div>
                      <p>Sed consequat sapien faus quam bibendum convallis quis in nulla Pellentesque.</p>
                      <span className="ritekhana-resturant-view1-loc"><i className="fa fa-map-marker-alt ritekhana-color" /> 105 Soi Sathon 2</span>
                      <a href="#" className="ritekhana-resturant-view1-btn ritekhana-bgcolor">Order Now</a>
                    </div>
                  </div>
                </li>
                <li className="col-md-6">
                  <div className="ritekhana-resturant-view1-wrap">
                    <figure><a href="#"><img src="extra-images/resturant-view1-image4.jpg"/></a> <span className="ritekhana-bgcolor">Popular</span> </figure>
                    <div className="ritekhana-resturant-view1-text">
                      <h2><a href="#">Way Kitchen</a> <span className="ritekhana-color">Delivery Time 10 Min</span></h2>
                      <div className="ritekhana-resturant-view1-tags">
                        <a href="#">Beverage, </a>
                        <a href="#">Burgers, </a>
                        <a href="#">Fast Food, </a>
                        <a href="#">Wraps</a>
                      </div>
                      <p>Sed consequat sapien faus quam bibendum convallis quis in nulla Pellentesque.</p>
                      <span className="ritekhana-resturant-view1-loc"><i className="fa fa-map-marker-alt ritekhana-color" /> 105 Soi Sathon 2</span>
                      <a href="#" className="ritekhana-resturant-view1-btn ritekhana-bgcolor">Order Now</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/*// Popular Resturant //*/}
            <div className="ritekhana-resturant-viewall"><a href="#" className="ritekhana-bgcolor">View All Resturant</a></div>
          </div>
        </div>
      </div>
    </div>
    {/*// Main Section //*/}
    {/*// Main Section //*/}
    <div className="ritekhana-main-section ritekhana-browse-dishes-links-full">
      <span className="ritekhana-white-transparent" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/*// Fancy Title //*/}
            <div className="ritekhana-fancy-title white-color">
              <h2 className="ritekhana-color">Browse By Dishes</h2>
              <span>Sed consequat sapien faus quam bibendum convallis quis in nulla.</span>
            </div>
            {/*// Fancy Title //*/}
            {/*// Browse By Dishes //*/}
            <div className="ritekhana-browse-dishes-links">
              <ul>
                <li><a href="#">Arabian</a></li>
                <li><a href="#">Delhi</a></li>
                <li><a href="#">Indian</a></li>
                <li><a href="#">Italian</a></li>
                <li><a href="#">Thai</a></li>
                <li><a href="#">Diner</a></li>
                <li><a href="#">Breakfast</a></li>
                <li><a href="#">Tandori</a></li>
                <li><a href="#">Mughlai</a></li>
                <li><a href="#">Korean</a></li>
                <li><a href="#">Arabian</a></li>
                <li><a href="#">Traditional Indian</a></li>
                <li><a href="#">Chinese</a></li>
                <li><a href="#">Pizza(9)</a></li>
                <li><a href="#">Vegetarian</a></li>
                <li><a href="#">Barbeque</a></li>
                <li><a href="#">Sandwiches</a></li>
                <li><a href="#">Burgers</a></li>
                <li><a href="#">Mughlai</a></li>
                <li><a href="#">Korean</a></li>
                <li><a href="#">Arabian</a></li>
                <li><a href="#">Delhi</a></li>
                <li><a href="#">Indian</a></li>
                <li><a href="#">Italian</a></li>
                <li><a href="#">Thai</a></li>
                <li><a href="#">Diner</a></li>
                <li><a href="#">Breakfast</a></li>
                <li><a href="#">Tandori</a></li>
                <li><a href="#">Mughlai</a></li>
                <li><a href="#">Korean</a></li>
                <li><a href="#">Burgers</a></li>
                <li><a href="#">Mughlai</a></li>
              </ul>
            </div>
            {/*// Browse By Dishes //*/}
          </div>
        </div>
      </div>
    </div>
    {/*// Main Section //*/}
 
    {/*// Main Section //*/}
    <div className="ritekhana-main-section ritekhana-testimonial-view1-full">
      <span className="ritekhana-transparent-white" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/*// Fancy Title //*/}
            <div className="ritekhana-fancy-title white-color">
              <h2 className="ritekhana-color">Testimonials </h2>
              <span>What our clients say about us.</span>
            </div>
            {/*// Fancy Title //*/}
            {/*// Testimonial //*/}
            <div className="ritekhana-testimonial-view1">
              <div className="ritekhana-testimonial-view1-layer">
                <div className="ritekhana-testimonial-view1-inner">
                  <p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls. One morning,...</p>
                  <figure>
                    <img src="extra-images/testimonial-thumb-1.jpg"/>
                    <figcaption>
                      <h2>Williams Son</h2>
                      <span>New York City</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="ritekhana-testimonial-view1-layer">
                <div className="ritekhana-testimonial-view1-inner">
                  <p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls. One morning,...</p>
                  <figure>
                    <img src="extra-images/testimonial-thumb-2.jpg"/>
                    <figcaption>
                      <h2>Williams Son</h2>
                      <span>New York City</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="ritekhana-testimonial-view1-layer">
                <div className="ritekhana-testimonial-view1-inner">
                  <p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls. One morning,...</p>
                  <figure>
                    <img src="extra-images/testimonial-thumb-3.jpg"/>
                    <figcaption>
                      <h2>Williams Son</h2>
                      <span>New York City</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            {/*// Testimonial //*/}
          </div>
        </div>
      </div>
    </div>
    {/*// Main Section //*/}
    {/*// Main Section //*/}
    <div className="ritekhana-main-section">
      <div className="container">
        <div className="row">
          <div className="col-md-5 ritekhana-text-app">
            <small className="ritekhana-color">Download the Resturant app now</small>
            <h2>It's Coming up </h2>
            <p>Just be patient.</p>
            <a href="#"><img src="extra-images/appthumb-1.png"/></a>
            <a href="#"><img src="extra-images/appthumb-2.png"/></a>
          </div>
          <div className="col-md-7">
            <img src="extra-images/text-thumb-1.png"/>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

    )
}

export default Index
