import React from 'react';
import './Sidebar.css'
const Sidebar = () => {
    return (

        <>
            <div className="sidenav">
                <img src="logo.png" alt="" className='sidebar-logo'/>
                
                <div className='sidebar-content'>
                <hr />
                <a href="#"> <i class="far fa-columns"></i> Dashboard </a>
                <a href="#"><i class="fas fa-user"></i>Profile</a>
                <a href="#"><i class="fas fa-address-book"></i>My Courses</a>
                <a href="#"><i class="fas fa-comments-alt"></i>Chat Inbox</a>
                <a href="#"><i class="fas fa-stars"></i>Ratings</a>
                <a href="#"><i class="fas fa-cauldron"></i>My Bookings</a>
                <a href="#"><i class="fas fa-megaphone"></i>My Promotions</a>
                <a href="#"><i class="fas fa-bell"></i>Notification</a>
                <a href="#"><i class="fas fa-wallet"></i>My Wallet</a>
                <a href="#"><i class="fas fa-user-friends"></i>Invite Friends</a>
                <a href="#"><i class="far fa-comments-alt"></i>Dispute</a>
                <a href="#"><i class="fas fa-analytics"></i>Transaction History</a>
                <hr />
                <a href="#">Logout<i class="fas fa-arrow-alt-square-right"></i></a>
                </div>
                

            </div>

            
        </>
    );

};

export default Sidebar;
