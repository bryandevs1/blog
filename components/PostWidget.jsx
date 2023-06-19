import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    // <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mt-48 mb-8">
    //   <h3 className="text-xl mb-8 font-semibold border-b pb-4 aside-title">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
    //   {relatedPosts.map((post, index) => (
    //     <div key={index} className="flex items-center w-full mb-4">
    //       <div className="w-16 flex-none">
    //         <Image
    //           loader={grpahCMSImageLoader}
    //           alt={post.title}
    //           height="60px"
    //           width="60px"
    //           unoptimized
    //           className="align-middle rounded-full"
    //           src={post.featuredImage.url}
    //         />
    //       </div>
    //       <div className="flex-grow ml-4">
    //         <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
    //         <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="card aside-card mt-32 mb-8">
    <h3 className="headline headline-2 aside-title">
      <span className="span">{slug ? 'Related Posts' : 'Recent Posts'}</span>
    </h3>

    <ul className="popular-list">
      {relatedPosts.map((post, index) => (
        <li key={post.id}>
          <div className="popular-card " key={index}>
            <figure className="card-banner img-holder" style={{ '--width': 64, '--height': 64 }}>
              <img
                src={post.featuredImage.url}
                width="64"
                height="64"
                loading="lazy"
                alt={post.title}
                className="img-cover"
              />
            </figure>

            <div className="card-content">
              <h4 className="headline headline-4 card-title">
              <Link href={`/post/${post.slug}`}>
                <a className="link hover-2">
                  {post.title}
                </a>
              </Link>
              </h4>

              <div className="warpper">
                <p className="card-subtitle">{moment(post.createdAt).format('MMM DD, YYYY')}</p>

                <time className="publish-date" dateTime={post.date}>
                {moment(post.createdAt).format('h:mm:ss')}
                </time>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default PostWidget;
