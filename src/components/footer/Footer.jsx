
import './footer.scss';
import logoo from '/public/images/logo.svg';
import iTwitter from '/public/images/icon-twitter.svg';
import iFacebook from '/public/images/icon-facebook.svg';
import iInstagram from '/public/images/icon-instagram.svg';
import iPinterest from '/public/images/icon-pinterest.svg';

const Footer = () => {
  return (
    <section className="sectionFooter">
      <article className="iconos">
        <div className='iconLoop'>
          <img className="logo" src={logoo} alt="Logo" />
        </div>
        <ul className="iconList">
          <li><img src={iFacebook} alt="Facebook" className="icon" /></li>
          <li><img src={iTwitter} alt="Twitter" className="icon" /></li>
          <li><img src={iPinterest} alt="Pinterest" className="icon" /></li>
          <li><img src={iInstagram} alt="Instagram" className="icon" /></li>
        </ul>
      </article>
      <article className="navbarFooter">
          <ul className='navList'>
              <li key='1'>About</li>
              <li key='2'>Careers</li>
              <li key='3'>Events</li>
              <li key='4'>Products</li>
              <li key='5'>Support</li>
          </ul>
          <div className='text' >
            <h2>@ 2021 Loopstudios. All rights reserved.</h2>
          </div>   
      </article>
    </section>
  );
}

export default Footer; 

