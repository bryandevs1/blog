import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FeaturedPostCard } from '../components';
import { getFeaturedPosts } from '../services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (sliderContainerRef.current) {
      const totalSliderVisibleItems = Number(
        getComputedStyle(sliderContainerRef.current).getPropertyValue('--slider-items')
      );
      const totalSlidableItems = sliderContainerRef.current.childElementCount - totalSliderVisibleItems;
  
      let currentSlidePos = 0;
  
      const moveSliderItem = () => {
        const sliderItems = sliderContainerRef.current.children;
        if (sliderItems.length > 0) {
          const slideWidth = sliderItems[0].offsetWidth;
          sliderContainerRef.current.style.transform = `translateX(-${currentSlidePos * slideWidth}px)`;
        }
      };
  
      /**
       * NEXT SLIDE
       */
      const slideNext = () => {
        const slideEnd = currentSlidePos >= totalSlidableItems;
  
        if (slideEnd) {
          currentSlidePos = 0;
        } else {
          currentSlidePos++;
        }
  
        moveSliderItem();
      };
  
      /**
       * PREVIOUS SLIDE
       */
      const slidePrev = () => {
        if (currentSlidePos <= 0) {
          currentSlidePos = totalSlidableItems;
        } else {
          currentSlidePos--;
        }
  
        moveSliderItem();
      };
  
      // Add event listeners if the buttons exist
      const nextButton = sliderContainerRef.current.querySelector('[data-slider-next]');
      const prevButton = sliderContainerRef.current.querySelector('[data-slider-prev]');
  
      if (nextButton && prevButton) {
        nextButton.addEventListener('click', slideNext);
        prevButton.addEventListener('click', slidePrev);
  
        return () => {
          // Remove event listeners
          nextButton.removeEventListener('click', slideNext);
          prevButton.removeEventListener('click', slidePrev);
        };
      }
    }
  }, []);

  return (
    <section className="topics" id="topics" aria-labelledby="topic-label">
      <div className="container">
        <div className="card topic-card">
          <div className="card-content">
            <h2 className="headline headline-2 section-title card-title" id="topic-label">
              Featured topics
            </h2>
            <p className="card-text">
              Don't miss out on the latest news about cryptocurrency trading and other topics..
            </p>
            <div className="btn-group">
              <button className="btn-icon" aria-label="previous" data-slider-prev>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} className="butfai" />
              </button>
              <button className="btn-icon" aria-label="next" data-slider-next>
                <FontAwesomeIcon icon={faArrowAltCircleRight} className="butfai" />
              </button>
            </div>
          </div>
          <div className="slider" data-slider>
            <ul className="slider-list" ref={sliderContainerRef}>
              {dataLoaded &&
                featuredPosts.map((post, index) => (
                  <li className="slider-item" key={post.id}>
                    <a href="#" className="slider-card">
                      <figure className="slider-banner img-holder" style={{ '--width': 507, '--height': 618 }}>
                        <img
                          src={post.featuredImage.url}
                          width="507"
                          height="618"
                          loading="lazy"
                          alt={post.title}
                          className="img-cover"
                        />
                      </figure>
                      <div className="slider-content">
                        <span className="slider-title">{post.title}</span>
                        <p className="slider-subtitle">{post.excerpt} Articles</p>
                      </div>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
