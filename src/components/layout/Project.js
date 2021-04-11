import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
  return (
    <div>
      <Link target='_blank' to={{ pathname: props.hostLink }}>
        <img src={`/images/${props.src}`} alt='project1' />
      </Link>
      <Link
        target='_blank'
        to={{ pathname: props.hostLink }}
        className='btn-light'
      >
        <i className='fas fa-eye'></i> Project
      </Link>
      <Link
        target='_blank'
        to={{ pathname: props.githubLink }}
        className='btn-dark'
      >
        <i className='fab fa-github'></i> GitHub
      </Link>
    </div>
  );
};

export default Project;
