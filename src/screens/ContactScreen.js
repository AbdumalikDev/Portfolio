import React, { Fragment } from 'react';
import Header from '../components/Header';

const ContactScreen = () => {
  return (
    <Fragment>
      <Header current='contact' />
      <main id='contact'>
        <h1 className='lg-heading'>
          Contact <span className='text-secondary'>Me</span>
        </h1>
        <h2 className='sm-heading'>This is how you can reach me...</h2>

        <div className='boxes'>
          <div>
            <span className='text-secondary'>Email: </span>
            hojimirzaevabdumalik@gmail.com
          </div>
          <div>
            <span className='text-secondary'>Phone: </span>
            (+998) 97-178-47-49
          </div>
          <div>
            <span className='text-secondary'>Address: </span>
            Namangan, Tashkent, Uzbekistan
          </div>
        </div>
      </main>
      <footer className='main-footer'>Copyright &copy; 2021</footer>
    </Fragment>
  );
};

export default ContactScreen;
