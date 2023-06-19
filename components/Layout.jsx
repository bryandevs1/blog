import React from 'react';
import Header from './Header';
import logos from '../assets/img/logos.png'
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header logos={logos}/>
    {children}
    <Footer />
  </>
);

export default Layout;
