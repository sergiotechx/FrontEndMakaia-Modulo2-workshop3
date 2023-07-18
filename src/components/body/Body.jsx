import back1 from "/public/images/desktop/image-interactive.jpg"
import imgdesk1 from "/public/images/desktop/image-deep-earth.jpg"
import imgdesk2 from "/public/images/desktop/image-night-arcade.jpg"
import imgdesk3 from "/public/images/desktop/image-soccer-team.jpg"
import imgdesk4 from "/public/images/desktop/image-grid.jpg"
import imgdesk5 from "/public/images/desktop/image-from-above.jpg"
import imgdesk6 from "/public/images/desktop/image-pocket-borealis.jpg"
import imgdesk7 from "/public/images/desktop/image-curiosity.jpg"
import imgdesk8 from "/public/images/desktop/image-fisheye.jpg"
import imgmob1 from "/public/images/mobile/image-deep-earth.jpg"
import imgmob2 from "/public/images/mobile/image-night-arcade.jpg"
import imgmob3 from "/public/images/mobile/image-soccer-team.jpg"
import imgmob4 from "/public/images/mobile/image-grid.jpg"
import imgmob5 from "/public/images/mobile/image-from-above.jpg"
import imgmob6 from "/public/images/mobile/image-pocket-borealis.jpg"
import imgmob7 from "/public/images/mobile/image-curiosity.jpg"
import imgmob8 from "/public/images/mobile/image-fisheye.jpg"
import "./body.scss"
import { useState, useEffect } from 'react'
import Card from '../card/Card.jsx' 
let cardsInitDesk = [
  {
    id: 1,
    src: imgdesk1,
    text: 'DEEP EARTH'
  },
  {
    id: 2,
    src: imgdesk2,
    text: 'NIGHT ARCADE'
  },
  {
    id: 3,
    src: imgdesk3,
    text: 'SOCCER TEAM VR'
  },
  {
    id: 4,
    src: imgdesk4,
    text: 'THE GRID'
  },
  {
    id: 5,
    src: imgdesk5,
    text: 'FROM UP ABOVE VR'
  },
  {
    id: 6,
    src: imgdesk6,
    text: 'POCKET BOREALIS'
  },
  {
    id: 7,
    src: imgdesk7,
    text: 'THE CURIOSITY'
  },
  {
    id: 8,
    src: imgdesk8,
    text: 'MAKE IT FISHEYE'
  },
];
let cardsInitMob = [
  {
    id: 1,
    src: imgmob1,
    text: 'DEEP EARTH'
  },
  {
    id: 2,
    src: imgmob2,
    text: 'NIGHT ARCADE'
  },
  {
    id: 3,
    src: imgmob3,
    text: 'SOCCER TEAM VR'
  },
  {
    id: 4,
    src: imgmob4,
    text: 'THE GRID'
  },
  {
    id: 5,
    src: imgmob5,
    text: 'FROM UP ABOVE VR'
  },
  {
    id: 6,
    src: imgmob6,
    text: 'POCKET BOREALIS'
  },
  {
    id: 7,
    src: imgmob7,
    text: 'THE CURIOSITY'
  },
  {
    id: 8,
    src: imgmob8,
    text: 'MAKE IT FISHEYE'
  },
];

const Body = () => {
  const [cards, setCards] = useState([{}]);

  const handleResize = () => {
    setImages();
  }

  const setImages = () => {
    if (window.innerWidth < 800) {
      setCards(cardsInitMob);
      console.log("under 768");
    }
    else {
      setCards(cardsInitDesk);
      console.log("upper 768");
    }
  }

  useEffect(() => {
    setImages();
    window.addEventListener("resize", handleResize);

  }, );

  return (
    <div className="containerMain">
      <figure className="figureContainer">
        <img className="back1" src={back1} />
        <div className="divText">
          <h2>THE LEADER IN INTERACTIVE VR</h2>
          <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe, Our award-winning creations have transformed business through digital experiences that bind to their brand.</p>
        </div>
      </figure>
      <div className='BodyHeader'>
        <h2>OUR CREATIONS</h2>
        <button className="button">See All</button>
      </div>
      <div className='BodyContainer'>
      { console.log("que tengo",cards)}
      {
        
        cards?.map((card) => {
           return (
             <Card key={card.id} image={card.src} text={card.text} />
           )
         }
         )
       }

      </div>

    </div> 
  )
}

export default Body
