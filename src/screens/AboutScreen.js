import React, { Fragment } from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

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
              I am FullStack Web Developer. Nowadays, I am working as a
              freelancer on Upwork. I am a second-year student at TUIT in
              Software Engineering faculty. I am enthuastic to learn new things.
              And I know MERN stack. Clearly, I work on HTML5, CSS3, JavaScript,
              ReactJs, NodeJs, ExpressJS, MongoDB technologies and other
              frameworks such as Bootstrap, JQuery...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default AboutScreen;
