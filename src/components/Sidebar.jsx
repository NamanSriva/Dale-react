import React from 'react';
import './Sidebar.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon from react-fontawesome
import { FaStore,FaWallet,FaNewspaper ,FaUser,FaCog, FaHome} from "react-icons/fa"; 
import { LiaSignOutAltSolid } from "react-icons/lia";
import {  FaMessage } from "react-icons/fa6";// Import icons from Font Awesome library

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="upper-sidebar">
        <div className="logo">
          <h2>LOGO</h2>
        </div>
      </div>
      <div className="lower-sidebar">
        <div className="notifications">
         
          <ul>
          <li><FaHome/> <a href="/shop">Home</a></li>
            <li><FaStore/> <a href="/shop">Shop</a></li>
            <li><FaMessage/> <a href="/conversation">Conversation</a></li>
            <li><FaWallet /> <a href="/wallet">Wallet</a></li>
            <li><FaNewspaper/> <a href="/subscription">Subscription</a></li>
            <li><FaUser /> <a href="/profile">My Profile</a></li>
            <li><FaCog /> <a href="/settings">Settings</a></li>
          </ul>
          <div className="logout">
            <LiaSignOutAltSolid style={{ color: 'blue',marginLeft: '20px' }}/> 
            <span style={{ color: 'blue', marginLeft: '5px' }}>Logout</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Sidebar;
