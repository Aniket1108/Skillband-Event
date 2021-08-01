import React from 'react'
import './Timing.css'

const Timing = () => {
    return (
        <div className='timing-section' id="timing">
            <h1 className='timing-heading'>Timings</h1>
            <div className="date-time">
                <div className="date">
                    <h3 className="dateh">8</h3>
                    <p className="datep">August</p>
                </div>
                <div className="time">
                    <div className="time1">
                        <h1 className="start-time">7:00 <span>PM</span> </h1><button className="time-btn">IST</button> 
                    </div>
                    <div className="time2">
                        <h1 className="end-time">8:00 <span>PM</span> </h1><button className="time-btn">IST</button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timing
