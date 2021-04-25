
import React from 'react'

import Index from './components/mainpage/Index'
import Details from './components/Restuarants/Details'
import Restaurants from './components/Restuarants/Restaurants'
import Footer  from './components/reuse/Footer'
import Header from './components/reuse/Header'
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from "react-router-dom";
import Contact from './components/mainpage/Contact';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/Blog/BlogDetails';
import login from './auth/login';
import register from './auth/register';
import Dashboard from './components/Profile/Dashboard'
import Bookings from './components/Profile/Bookings'
import BookingDetails from './components/Profile/BookingDetails'
import Profile from './components/Profile/Profile'

const App = () => {
  return (
      <Router>
      
            {/* <Switch> */}
              <Header /> 
               <Route path="/" exact component={Index}/>
               <Route exact path="/contact" component={Contact} />
               <Route exact path="/blog" component={Blog} />
               <Route exact path="/blog/:id" component={BlogDetails} />
               <Route path="/login" component={login} />
               <Route path="/register" component={register} />
              <Route path="/restaurants"component={Restaurants} />
              <Route path="/restaurant/:id"component={Details} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/bookings" component={Bookings} />
              <Route exact path="/booking/:id" component={BookingDetails} />
              <Route path="/profile" component={Profile} />

               {/*   
                <Route path="/detail" component={Details} /> */}
              <Footer />
            {/* </Switch> */}
      </Router>
  )
}
export default App
