import React from 'react'
import Typewriter from 'typewriter-effect'
import './feature.css'
export const Features = () => {
    return (
        <div className="features-section" id="features">
           <h1 className="feature-heading">Features</h1>  
           <div className="features">
           <div className="first">
               <Typewriter
           
            options={{
                strings: [` <p><span className="blue-text">"</span>Do you want to be <i>LEGENDARY</i> in your field <span className="blue-text">"</span></p>`, ` <p><span className="blue-text">"</span>Do you want to be <i>ICONIC</i> in your work <spa className="blue-text">"</spa></p>`,`<p><span className="blue-text">"</span>Do you want to become the <i>ULTIMATE PERFORMER</i><span className="blue-text">"</span></p>`], 
                autoStart: true,
                loop: true,
                cursor:'',
                delay:20,
                deleteSpeed:20,
                pauseFor:500
              }}
               />
               
           </div>
          
           <div className="second">
               <p><span className="blue-text">In this event,</span>You are going to</p>
           </div>
           <div className="feature-info">
               <div className="feature-one">
                   <div className="feature-long">Finally <span className="blue-text">break</span> through from the habits that have been hloding you back</div>
                   <div className="feature-small">Understand what truely <span className="blue-text">iconic</span> feels like</div>
               </div>
               <div className="feature-two">
                   <div className="feature-small">Learn how to <span className="blue-text">beat</span> the <span className="blue-text">mediocrity</span> matrix</div>
               <div className="feature-long">Acquire brand new <span className="blue-text">game-changing</span> insights and ways of thinking</div>
               
               </div>
           </div>
           </div>
        </div>
    )
}
