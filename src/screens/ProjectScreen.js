import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Project from '../components/layout/Project';

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
          <Project
            src='project1.png'
            hostLink='https://sheltered-taiga-34517.herokuapp.com'
            githubLink='https://github.com/AbdumalikDev/ToDoListApp'
          />

          <Project
            src='project2.png'
            hostLink='/onlinemarket'
            githubLink='https://github.com/AbdumalikDev/OnlineShop'
          />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ProjectScreen;
