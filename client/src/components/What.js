import React from 'react'
import './what.css'
import itstime from "../image/its-your-time.svg"

export const What = () => {
    return (
        <div className='what'>
            {/* <div className="what-heading">What are you waiting for .......</div>   */}
            {/* <div className="what-text">
              <div className="what-text-right">
              <p>Its your
              <span className="blue-text extra-large">Time</span>
               and your
              <span className="blue-text extra-large">Chance</span>
              </p>
              </div>
          </div> */}
            <div className="itsyourtime">
                <img src={itstime} alt="" />
            </div>
        </div>

    )
}
