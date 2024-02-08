import React from 'react'
import "./Learning.Module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from  '@fortawesome/fontawesome-free-regular';
import studentpic from "../Images/student.png"

const Learning = () => {

    
  return (
    <div id="main-container">
        <div className="left-container">
            <h5>Your School's Solution</h5>
            <div className="main-heading">
                <h1>Unified Platform for <br/> Streamlined School <br /> Management</h1>
            </div>
            <div className="para">
                <p>All-in-one school management software for streamlined 
                    <br /> operations and enhanced communication</p>
            </div>
            <div className="email">
                
                <input className="put-email" type="email" placeholder="Your email address" />
                <button className="button">GET STARTED</button>
            </div>
        </div>
        <div className="middle-container">
            <div>
                <img src={studentpic} alt="School Solution Image"/>
            </div>
            <div className="attend">
                <FontAwesomeIcon className='fa-regular' icon={faCalendarAlt} />
                <div className="insight-text">
                    <h4>Track Attendance</h4>
                    <p>Get real-time <br /> Insights</p>
                </div>
            </div>
        </div>
        <div className="right-container">
            <div className="computer">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-office-computer-screen-desktop-graph-chart-statics-12447.png?f=webp&w=128" alt="computer index" />
                <img className="circle-ind02" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQwuHpdhQ5afInK2R6DSInEiQEhiIqCt59ib1wKQs4a6eKx3occ" alt="circle index" />
            </div>
            <div className="index">
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRH1_1ex-whJmIl53l0B2LuCDERyazrUUE2fGne3YicRXjuL8RG" alt="index" />
                <p>Grow Your School, <br /> Blossom Result</p>
            </div>
            <div className="micke">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsa-6scmYoDL7hL53kthHZwYbAadlpG2tXjCbW69WLJWWBlLg1" alt="mick sound" />
            </div>

        </div>
    </div>
    
  )
}

export default Learning