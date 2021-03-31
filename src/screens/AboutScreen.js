import React, { Fragment } from 'react';
import Header from '../components/Header';
import './AboutScreen.scss';

const AboutScreen = () => {
  return (
    <Fragment>
      <Header current='about' />
      <main id='about'>
        <h1 className='lg-heading'>
          About <span className='text-secondary'>Me</span>
        </h1>
        <h2 className='sm-heading'>Let me tell you a few things...</h2>

        <div className='about-info'>
          <img
            src='/images/portrait.jpg'
            alt='Abdumalik Khojimirzaev'
            className='bio-image'
          />
          <div className='bio'>
            <h3 className='text-secondary'>BIO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, enim quidem alias distinctio tenetur dolor
              voluptates doloremque deleniti quae ipsum recusandae odit sit
              animi optio temporibus dignissimos odio eius? Nihil.
            </p>
          </div>
        </div>
      </main>
      <footer className='main-footer'>Copyright &copy; 2021</footer>
    </Fragment>
  );
};

export default AboutScreen;
