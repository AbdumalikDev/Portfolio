import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const ProjectScreen = () => {
  return (
    <Fragment>
      <Header current='projects' />
      <main id='projects'>
        <h1 className='lg-heading'>
          My <span className='text-secondary'>Work</span>
        </h1>
        <h2 className='sm-heading'>Checkout some of my projects...</h2>

        <div className='projects'>
          <div className='item'>
            <Link to='https://sheltered-taiga-34517.herokuapp.com/'>
              <img src='/images/project1.png' alt='project1' />
            </Link>
            <Link
              to='https://sheltered-taiga-34517.herokuapp.com/'
              className='btn-light'
            >
              <i className='fas fa-eye'></i> Project
            </Link>
            <Link
              to='https://github.com/AbdumalikDev/OnlineShopFront'
              className='btn-dark'
            >
              <i className='fab fa-github'></i> GitHub
            </Link>
          </div>
          <div className='item'>
            <Link to='/onlinemarket'>
              <img src='/images/project2.png' alt='project2' />
            </Link>
            <Link to='/onlinemarket' className='btn-light'>
              <i className='fas fa-eye'></i> Project
            </Link>
            <Link
              to='https://github.com/AbdumalikDev/OnlineShopFront'
              className='btn-dark'
            >
              <i className='fab fa-github'></i> GitHub
            </Link>
          </div>
        </div>
      </main>
      <footer className='main-footer'>Copyright &copy; 2021</footer>
    </Fragment>
  );
};

export default ProjectScreen;
