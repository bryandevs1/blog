import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getCategories } from '../services';

const Heading = () => {
  return (
    <>
      <h2 className="headline headline-2 section-title">
        <span className="span">Editor's Choice</span>
      </h2>
      <p className="section-text">Don't miss the latest trends</p>
    </>
  );
};

const Body = ({ post, categories }) => {
  return (
    <div className="post-main -mt-10 mb-20">
      <ul className="grid-list">
        <li key={post.id}>
          <div className="recent-post-card">
            <figure
              className="card-banner img-holder"
              style={{ '--width': 271, '--height': 258 }}
            >
              <img src={post.featuredImage.url} />
            </figure>

            <div className="card-content cursor-pointer">
              {post.categories.map((category, index) => (
                <a className="card-badge cursor-pointer">
                  <Link key={index} href={`/category/${category.slug}`}>
                    <span className="mr-2">{category.name}</span>
                  </Link>
                </a>
              ))}

              <h3 className="headline headline-3 card-title">
                <p className="link hover-2">
                  <Link href={`/post/${post.slug}`}>{post.title}</Link>
                </p>
              </h3>

              <p className="card-text">{post.excerpt}</p>
              <div className="card-wrapper">
                <div className="card-tag">
                  {post.categories.map((category, index) => (
                    <a key={index} className="span hover-2">
                      #{category.name}
                    </a>
                  ))}
                </div>

                <div className="wrapper">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                  <span className="span"></span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

const PostCard = ({ post }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <>
      <Body post={post} categories={categories} />
    </>
  );
};

export default PostCard;






