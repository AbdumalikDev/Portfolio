import React, { Fragment } from 'react';
import { a } from 'react-router-dom';
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
            <a
              type='_blank'
              href='https://sheltered-taiga-34517.herokuapp.com/'
            >
              <img src='/images/project1.png' alt='project1' />
            </a>
            <a
              type='_blank'
              href='https://sheltered-taiga-34517.herokuapp.com/'
              className='btn-light'
            >
              <i className='fas fa-eye'></i> Project
            </a>
            <a
              type='_blank'
              href='https://github.com/AbdumalikDev/ToDoListApp'
              className='btn-dark'
            >
              <i className='fab fa-github'></i> GitHub
            </a>
          </div>
          <div className='item'>
            <a type='_blank' href='/onlinemarket'>
              <img src='/images/project2.png' alt='project2' />
            </a>
            <a type='_blank' href='/onlinemarket' className='btn-light'>
              <i className='fas fa-eye'></i> Project
            </a>
            <a
              type='_blank'
              href='https://github.com/AbdumalikDev/OnlineShopFront'
              className='btn-dark'
            >
              <i className='fab fa-github'></i> GitHub
            </a>
          </div>
        </div>
      </main>
      <footer className='main-footer'>Copyright &copy; 2021</footer>
    </Fragment>
  );
};

export default ProjectScreen;
