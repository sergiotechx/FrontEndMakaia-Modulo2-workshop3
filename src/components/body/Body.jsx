import React from 'react'
import back1 from"/public/images/desktop/image-interactive.jpg"
import "./body.scss"

const Body = () => {
  return (
    <div className="containerMain">
        <figure className="figureContainer">
            <img className="back1"src={back1}/>
            <div className="divText">
                <h2>THE LEADER IN INTERACTIVE VR</h2>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe, Our award-winning creations have transformed business through digital experiences that bind to their brand.</p>
            </div>
        </figure>
        <div></div>
      
    </div>
  )
}

export default Body
