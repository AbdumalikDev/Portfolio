import React, { Fragment } from 'react';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <Fragment>
      <Header current='home' />
      <main id='home'>
        <h1 className='lg-heading'>
          Abdumalik <span className='text-secondary'>Khojimirzaev</span>
        </h1>
        <h2 className='sm-heading'>
          FullStack Web Developer, MERN Stack Developer, Frontend & Backend
          Developer
        </h2>
        <div className='icons'>
          <a type='_blank' href='https://t.me/mern_dev'>
            <i className='fab fa-telegram fa-2x'></i>
          </a>
          <a
            type='_blank'
            href='https://www.facebook.com/abdumalik.hojimirzaev/'
          >
            <i className='fab fa-facebook fa-2x'></i>
          </a>
          <a
            type='_blank'
            href='https://www.linkedin.com/in/abdumalik-khojimirzaev-4216a3202/'
          >
            <i className='fab fa-linkedin fa-2x'></i>
          </a>
          <a type='_blank' href='https://github.com/AbdumalikDev'>
            <i className='fab fa-github fa-2x'></i>
          </a>
        </div>
      </main>
    </Fragment>
  );
};

export default HomeScreen;
