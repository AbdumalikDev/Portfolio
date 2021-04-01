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
            <Link to=''>
              <img src='/images/project.png' alt='project1' />
            </Link>
            <Link to='' className='btn-light'>
              <i className='fas fa-eye'></i> Project
            </Link>
            <Link className='btn-dark'>
              <i className='fab fa-github'></i> GitHub
            </Link>
          </div>
          <div className='item'>
            <Link to=''>
              <img src='/images/project.png' alt='project2' />
            </Link>
            <Link to='' className='btn-light'>
              <i className='fas fa-eye'></i> Project
            </Link>
            <Link className='btn-dark'>
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
