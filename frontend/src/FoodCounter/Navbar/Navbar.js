import logo from './../image/logo.png';
import heart from './../image/heart.png';
import cart from './../image/cart.png';
import search from './../image/search.png';
import {useEffect} from 'react'
import './Navbar.css';
function Navbar() {
  useEffect(() => {
  document.querySelectorAll('li').forEach(item => {
    item.dataset.originalColor = item.style.color;

    item.addEventListener('mouseover', (e) => {
      e.preventDefault();
      item.style.color = 'grey';
      item.style.textDecoration='underline';
    });
    item.addEventListener('mouseout', (e) => {
      e.preventDefault();
      item.style.color = item.dataset.originalColor; 
      item.style.textDecoration='none';
    });
  });

  }, [])
  
  return (
    <div className='navbar'>
      <div className='nav_name'>
        <img src={logo} alt='foodCourt' />
        <h1 className='nav_heading'>
          Food<span>Zee</span>
        </h1>
      </div>
      <div>
        <ul className='nav_ins'>
          <li>Menu</li>
          <li>About Us</li>
          <li>Menu</li>
          <li>Restaurant</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='nav_logos'>
        <img className='search' src={search} alt='search' />
        <img className='heart' src={heart} alt='heart' />
        <img className='cart' src={cart} alt='cart' />
      </div>
      <div className='nav_login'>Login</div>
    </div>
  );
}

export default Navbar;
