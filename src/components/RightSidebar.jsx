import React from 'react';
import './RightSidebar.css';
import id1 from "../assets/id1.png";
import id2 from "../assets/id2.png";
import id3 from "../assets/id3.png";
import id4 from "../assets/id4.png";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import s1 from "../assets/s1.png";
import s4 from "../assets/s4.png";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <button className="become-seller">Become a Seller</button>
      <div className="tabs">
        <button className="tab"><b>Artists</b></button>
        <button className="tab">Photographers</button>
      </div>
      <div className="artist-list-container">
        <div className="artist-list">
          <div className="artist" style={{ backgroundImage: `url(${a1})`,backgroundRepeat:'no-repeat' }}>
            <div className="artist-info">
              <img src={id1} alt="Artist Profile" className="artist-image" />
              <p className="artist-name">Thomas Edward <br /> @wildwithyou</p>
            </div>
          </div>
          {/* Repeat artist structure as needed */}
          <div className="artist" style={{ backgroundImage: `url(${a2})` ,backgroundRepeat:'no-repeat'}}>
            <div className="artist-info">
              <img src={id2} alt="Artist Profile" className="artist-image" />
              <p className="artist-name">Thomas Edward <br /> @wildwithyou</p>
            </div>
          </div>
          <div className="artist" style={{ backgroundImage: `url(${s1})`,backgroundRepeat:'no-repeat' }}>
            <div className="artist-info">
              <img src={id3} alt="Artist Profile" className="artist-image" />
              <p className="artist-name">Thomas Edward <br /> @wildwithyou</p>
            </div>
          </div>
          <div className="artist" style={{ backgroundImage: `url(${s4})`,backgroundRepeat:'no-repeat' }}>
            <div className="artist-info" >
              <img src={id4} alt="Artist Profile" className="artist-image" />
              <p className="artist-name">Thomas Edward <br /> @wildwithyou</p>
            </div>
          </div>

          <div className="artist" style={{ backgroundImage: `url(${a2})` ,backgroundRepeat:'no-repeat'}}>
            <div className="artist-info">
              <img src={id2} alt="Artist Profile" className="artist-image" />
              <p className="artist-name">Thomas Edward <br /> @wildwithyou</p>
            </div>
          </div>
          <div className="artist" style={{ backgroundImage: `url(${s1})`,backgroundRepeat:'no-repeat' }}>
            <div className="artist-info">
              <img src={id3} alt="Artist Profile" className="artist-image" />
              <p className="artist-name">Thomas Edward <br /> @wildwithyou</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
