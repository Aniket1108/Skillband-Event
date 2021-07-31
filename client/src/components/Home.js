import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-scroll";

import brand from "../image/brand.png";
import './home.css'


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handelMenu = () => {
    console.log('opened');
    setMenuOpen(!menuOpen)
    console.log(menuOpen);

  }

  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };


  const url = "https://skillband-event.herokuapp.com/register"
  const [data, setData] = useState({
    fullname: "",
    email: ""
  })

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      fullname: data.fullname,
      email: data.email
    })
      .then(res => {
        console.log(res.data);
        console.log(res.data.message)
        togglePopup()
        alert("user resister succesfully")
      })
  }


  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }


  return (
    <div className="home">
      <div className="navbar-wrapper">
        <div className="skill-navbar">
          <img src={brand} alt="logo" />
          <ul className={menuOpen ? 'menu-items open' : 'menu-items'}>
            <Link to="timing">
            <li>Timings</li> 
            </Link> 
            <Link to="speaker">
            <li>Speakers</li>
            </Link>
            <Link to="features">
              <li>Features</li>
            </Link>
            <li> <button className="book-btn" onClick={togglePopup}>Book Free Ticket</button></li>
          </ul>
          <div className="hamburger" onClick={() => handelMenu()}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div id="" className="timing-wrapper">
        <div className="timing">
          <h3 className="blue-text">8 August 2021</h3>
          <h3>7:00 PM - 8:00 PM <span className='blue-text'> IST</span> </h3>
          <h1>The <span className='blue-text extra-large'>Ultimate</span> </h1>
          <h1>Performer</h1>
          <div className='intro'>
            <p>
              <span className="blue-text">"</span> Free Live legendary <i>LEADERSHIP</i> and
              <i> PERSONAL DEVELOPMENT</i>
            </p>
            <p>trainig event. <span className="blue-text">"</span></p>
          </div>
        </div>
        <div className='button-box'>
          <button className="book-btn" onClick={togglePopup}>BOOK FREE TICKET</button>
          <button className="know-btn">Know more</button>
        </div>
      </div>


      {popup && (
        <div className="popup">
          <div onClick={togglePopup} className="overlay"></div>
          <div className="popup-content">
            <h3 className="heading">Book your free ticket for The Ultimate performer</h3>
            <p className="content">
              Takes less than 1 min to register it,  and guess what it’s FREE
            </p>


            <form className="form" onSubmit={(e) => submit(e)}>

              <input type="text" placeholder="Name"
                onChange={(e) => handle(e)} id="fullname" value={data.fullname}
                required />

              <input type="email" placeholder="email@email.com"
                onChange={(e) => handle(e)} id="email" value={data.email}
                required />

              <button onSubmit className="ticketbutton">Get Ticket</button>
            </form>


            <div>

              <p className="emailticket">On clicking here , you will recieve the event ticket to your email</p>
              {/* <div className="close-popup" onClick={togglePopup}>
                            CLOSE
                        </div> */}
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Home;
