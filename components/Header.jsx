// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { getCategories } from '../services';
// import next from 'next';
// import Image from 'next/dist/client/image';


// const Header = () => {
//   useEffect(() => {
//     const hamburger = document.querySelector(".hamburger");
//     const navLinks = document.querySelector(".nav-links");
//     const links = document.querySelectorAll(".nav-links li");

//     const handleToggle = () => {
//       const navbar = document.getElementById('navbar');
//       navbar.classList.toggle('active');
//       document.body.classList.toggle('no-scroll');
//     };

//     const handleScroll = () => {
//       const navbar = document.getElementById('navbar');
//       let prevScrollpos = window.pageYOffset;
//       let scrollingUp = false;

//       const updateNavbarVisibility = () => {
//         if (scrollingUp) {
//           navbar.style.top = '0';
//         } else {
//           navbar.style.top = `-${navbar.offsetHeight}px`;
//         }
//       };

//       window.addEventListener('scroll', () => {
//         const currentScrollPos = window.pageYOffset;
//         scrollingUp = currentScrollPos < prevScrollpos;
//         prevScrollpos = currentScrollPos;
//         updateNavbarVisibility();
//       });
//     };

//     hamburger.addEventListener('click', () => {
//       navLinks.classList.toggle("open");
//       links.forEach(link => {
//         link.classList.toggle("fade");
//       });

//       hamburger.classList.toggle("toggle");
//       handleToggle();
//     });

//     handleScroll();
//   }, []);

//   return (
    
//     <nav className="flex-grow mb-10" id="navbar">
//       <div className="m-8 logos">
//         {/* <Image 
//           src='/assets/img/logos.png'
//           alt='Logo'
//           className='logoimg'
//           layout='fill'
//         /> */}
//         Payv3rse
//       </div>
//       <div className="hamburger" id="navbarToggle">
//         <div className="line1"></div>
//         <div className="line2"></div>
//         <div className="line3"></div>
//       </div>
//       <ul className="nav-links" id="navlinks">
//         <li className="dropdown">
//           <a href="#" className="dropdown-toggle">Sell</a>
//           <ul className="sub-items">
//             <li><a href="#"><i className="fa-square-plus"></i>Chat with us on Whatsapp</a></li>
//             <li><a href="#">Customer Representative</a></li>
//           </ul>
//         </li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Services</a></li>
//         <li><a href="#">Blog</a></li>
//         <li><a href="#">FAQs</a></li>
//         <li><a href="#">Testimonials</a></li>
//         <a href="https://wa.me/+2347043455724"><li><button className="join-button">Start Trading</button></li></a>
//       </ul>
//     </nav>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import logos from '../public/assets/img/logos.png';


function Header() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    const handleToggle = () => {
      const navbar = document.getElementById('navbar');
      navbar.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    };

    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      let prevScrollpos = window.pageYOffset;
      let scrollingUp = false;

      const updateNavbarVisibility = () => {
        if (scrollingUp) {
          navbar.style.top = '0';
        } else {
          navbar.style.top = `-${navbar.offsetHeight}px`;
        }
      };

      window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;
        scrollingUp = currentScrollPos < prevScrollpos;
        prevScrollpos = currentScrollPos;
        updateNavbarVisibility();
      });
    };

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle("open");
      links.forEach(link => {
        link.classList.toggle("fade");
      });

      hamburger.classList.toggle("toggle");
      handleToggle();
    });

    handleScroll();
  }, []);

  return (
    <nav className="flex-grow" id="navbar">
      <div className="m-8 logos">
        <img src={logos} alt="Logo Image" />
        Payv3rse
      </div>
      <div className="hamburger" id="navbarToggle">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className="nav-links" id="navlinks">
        <li className="dropdown bg-white">
          <a href="#" className="dropdown-toggle">Sell</a>
          <ul className="sub-items">
            <li><a href="#"><i className="fa-square-plus"></i>Chat with us on Whatsapp</a></li>
            <li><a href="#">Customer Representative</a></li>
          </ul>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Testimonials</a></li>
        <a href="https://wa.me/+2347043455724"><li><button className="join-button">Start Trading</button></li></a>
      </ul>
    </nav>
  );
}

export default Header;