import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className='main-footer'>Copyright &copy; {year} </footer>;
};

export default Footer;
