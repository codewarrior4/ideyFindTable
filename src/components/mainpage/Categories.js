import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
const Categories = () => {
    return (
        <div className="bg_gray">
            <div className="container margin_60_40">
                <div className="main_title center">
                    <span><em></em></span>
                    <h2>Popular Categories</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
                </div>
                
                <OwlCarousel items={6} loop  nav  margin={18}  className="owl-theme categories_carousel" >
                {/* <div className=" owl-theme">
                 */}
                    <div className="item">
                        <a href="#0">
                        <span>98</span>
                        <i className="icon-food_icon_pizza" />
                        <h3>Pizza - Italian</h3>
                        <small>Avg price $40</small>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#0">
                        <span>87</span>
                        <i className="icon-food_icon_sushi" />
                        <h3>Japanese - Sushi</h3>
                        <small>Avg price $50</small>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#0">
                        <span>96</span>
                        <i className="icon-food_icon_burgher" />
                        <h3>Burghers</h3>
                        <small>Avg price $55</small>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#0">
                        <span>78</span>
                        <i className="icon-food_icon_vegetarian" />
                        <h3>Vegetarian</h3>
                        <small>Avg price $40</small>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#0">
                        <span>65</span>
                        <i className="icon-food_icon_cake_2" />
                        <h3>Bakery</h3>
                        <small>Avg price $60</small>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#0">
                        <span>65</span>
                        <i className="icon-food_icon_chinese" />
                        <h3>Chinese</h3>
                        <small>Avg price $40</small>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#0">
                        <span>65</span>
                        <i className="icon-food_icon_burrito" />
                        <h3>Mexican</h3>
                        <small>Avg price $35</small>
                        </a>
                    </div>
                {/* </div> */}
            </OwlCarousel>  
            </div>
        </div>
    
    )
}

export default Categories
