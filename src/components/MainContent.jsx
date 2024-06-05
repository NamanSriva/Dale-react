import React from 'react';
import './MainContent.css';
import post1 from "../assets/post1.png";
import icon1 from "../assets/icon1.png";
import post2 from "../assets/post2.png";
import icon2 from "../assets/icon2.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import filter from "../assets/filter.svg";
import RatingStars from './RatingStars';
import { FaComment, FaEllipsisV, FaHeart, FaSearch, FaShare } from 'react-icons/fa';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="top-bar-container">
            <div className="top-bar">
            <FaSearch /> <input type="text" placeholder="Search here..." className="search-bar" />
                <button className="filter-button"><img src={filter} className='filter-icon'/>Filters</button>
            </div>
            </div>
            <div className="posts">
                <div className="post">
                    <div className="user-info">
                        <img src={icon1} alt="Profile" className="profile-icon" />
                        <div>
            
                            <p> <b style={{fontSize:'20px'}}>Lara Leones</b> <br />@thewallart</p>
                        </div>
                        <div className="more-options">
                            <FaEllipsisV />
                        </div>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content <br />
                        of a page when looking at its layout. <span className="read-more">Read More</span>
                    </p>
                    <img src={post1} alt="Post" className="post-image" />
                    <div className="social">
                        <FaHeart /><span className='icon-text'>9.8k</span>
                        <FaComment /> <span className='icon-text'>8.6k</span>
                        <FaShare /> <span className='icon-text'>7.2k</span>
                    </div>
                </div>
                {/* Repeat post structure as needed */}
                <div className="post">
                    <div className="user-info">
                        <img src={icon2} alt="Profile2" className="profile-icon" />
                        <div>
                        <p> <b style={{fontSize:'20px'}}>Thomas J.</b> <br />@thecustomcreator</p>
                        </div>
                        <div className="more-options">
                            <FaEllipsisV />
                        </div>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content <br />
                        of a page when looking at its layout. <span className="read-more">Read More</span>
                    </p>
                    <img src={post2} alt="Post" className="post-image" />
                    <div className="social">
                        <FaHeart /><span className='icon-text'>9.8k</span>
                        <FaComment /> <span className='icon-text'>8.6k</span>
                        <FaShare /> <span className='icon-text'>7.2k</span>
                    </div>
                </div>
            </div>
            <div className="slider">
                <div className="carousel">
                   
                <div className="slide">
                        <img src={s1}alt="Item 1" />
                        <div>
                            <p>Modern Wall Decor Framed Painting</p>
                           <div className="con">
                            <h3>$19.99 </h3>
                            <div style={{ marginLeft: '115px' }}>
                            <RatingStars rating={4.5} />
                            </div>                           
                           </div>
                        </div>
                       
                    </div>

                    <div className="slide">
                        <img src={s2}alt="Item 1" />
                        <div>
                            <p>Modern Wall Decor Framed Painting</p>
                           <div className="con">
                            <h3>$19.99 </h3>
                            <div style={{ marginLeft: '115px' }}>
                            <RatingStars rating={4.5} />
                            </div>                           
                           </div>
                        </div>
                       
                    </div>



                    <div className="slide">
                        <img src={s3}alt="Item 1" />
                        <div>
                            <p>Modern Wall Decor Framed Painting</p>
                           <div className="con">
                            <h3>$19.99 </h3>
                            <div style={{ marginLeft: '115px' }}>
                            <RatingStars rating={4.5} />
                            </div>                           
                           </div>
                        </div>
                       
                    </div>

                    <div className="slide">
                        <img src={s4}alt="Item 1" />
                        <div>
                            <p>Modern Wall Decor Framed Painting</p>
                           <div className="con">
                            <h3>$19.99 </h3>
                            <div style={{ marginLeft: '115px' }}>
                            <RatingStars rating={4.5} />
                            </div>                           
                           </div>
                        </div>
                       
                    </div>
                   
                   
                </div>
            </div>
        </div>

    );
};

export default MainContent;
