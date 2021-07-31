import React from 'react'
import Laksh from '../image/Lakshay.png'
import './Speaker.css'
const Speaker = () => {
    return (
        <div className="speaker" id="speaker">
            <h1 className="speaker-heading">Speaker</h1>
            <div className="speaker-wrapper">
            <div className="speaker-info">
                <div className="speaker-img">
                <img className="laksh" src={Laksh} alt="" width="100%" height="auto"/>
                </div>
                <div className="lakshspeech">
               <p ><span className="blue-text name">Lakshya kumar</span> is the world’s youngest inspirational speaker and leadership trainer . He had discovered many <b className="blue-text">unique</b> ways to achieve <b className="blue-text">success</b> , which are way different from the convectional methods. His <b className="blue-text">multi-tasking </b> tricks had proved to be game changers for many people </p>
               </div>
            </div>
            </div>
        </div>
    )
}

export default Speaker
