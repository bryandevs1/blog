/* eslint-disable no-use-before-define */

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';


const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className=" mt-10 bottom-0 left-0 right-0 w-full  pointer-events-none overflow-hidden" style={{ transform: 'translateZ(0)' }}>


      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-5xl font-semibold">Let's keep in touch!</h4>
            <h5 className="text-2xl mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-8 flex gap-6 lg:mb-0 mb-6">
              <button className="bg-transparent text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <SocialIcon network="twitter" style={{ height: 35, width: 35 }} />
              </button>
              <button className="bg-transparent text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <SocialIcon network="whatsapp" style={{ height: 35, width: 35 }} />
              </button>
              <button className="bg-transparent text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <SocialIcon network="facebook" style={{ height: 35, width: 35 }} />
              </button>
              <button className="bg-transparent text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <SocialIcon network="telegram" style={{ height: 35, width: 35 }} />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-3xl font-semibold mb-2">
                  Categories
                </span>
                <ul className="list-unstyled">
                  <li>
                  {categories.map((category, index) => (
                    <Link key={index} href={`/category/${category.slug}`}>
                      <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b-0'} pb-3 mb-0 font-bold border-gray-700 hover:text-blue-600 hover:cursor-pointer`}>{category.name}</span>
                    </Link>
                     ))}
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-3xl font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-2xl" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-2xl" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-2xl" href="#">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-2xl" href="#">
                      Trade Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 border-blueGray-300" />

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-2xl text-blueGray-500 font-semibold mb-5 py-1">
              © {currentYear} Payv3rse
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
