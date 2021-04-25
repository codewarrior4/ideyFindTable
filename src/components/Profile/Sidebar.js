import React from 'react'
import {Link} from 'react-router-dom'
import swal from 'sweetalert';

const Sidebar = () => {
    function popup (){
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover your profile!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your Profile has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your Profile is safe!");
            }
          });
    }
    return (
        <ul>
        <li className="active"><Link to="/dashboard"><i className="fab fa-delicious" /> Dashboard</Link></li>
        <li><Link to="/bookings"><i className="fa fa-book-reader" /> Bookings</Link></li>   
        <li><Link to="/profile"><i className="fa fa-lock-open" /> Update Profile </Link></li>
        <li><a href="#" onClick={popup}><i className="fa fa-trash-alt" /> Delete Account</a></li>
        <li><Link to="/logout"><i className="fa fa-sign-out-alt" /> Logout</Link></li>
    </ul>
    )
}

export default Sidebar
