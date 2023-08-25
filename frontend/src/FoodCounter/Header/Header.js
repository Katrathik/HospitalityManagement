import header from './../image/header1.jpg';
import './Header.css';
import {BsFillPlayCircleFill} from 'react-icons/bs'
function Header() {
  return (
    <div className='header'>
      <div className='header_txt'>
        <span className='span'>Healthy and Tasty Food🍒</span>
        <h1 className='header_title'>
          Fastest <span>ONLINE</span> Food Delivery System
        </h1>
        <p>
          Experience gastronomic delight at our restaurant. From mouthwatering
          dishes crafted by our expert chefs to a warm and inviting ambiance, we
          invite you to indulge your palate. Join us for a memorable dining
          experience that captures the essence of exquisite cuisine.
        </p>
				<div className='header_ads'>
					<div className='header_getStart'>Get Started</div>
					<div className='header_video'><BsFillPlayCircleFill/><span className='header_watch'>Watch Video</span></div>
				</div>
      </div>

      <div className='header_img'>
        <img src={header}></img>
      </div>
    </div>
  );
}

export default Header;
