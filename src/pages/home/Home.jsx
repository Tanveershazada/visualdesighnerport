import React from 'react'
import Profile from '../../assets/tanveer.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css";

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt="" className='home__img' />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"><span>I'm Tanveer Shah.</span> Web Developer</h1>

          <p className="home__description">
          I craft engaging user interfaces using HTML, CSS, and JavaScript, striving to deliver seamless and intuitive experiences. I collaborate with designers and backend developers to ensure the integration of visually appealing designs with functional backend systems, ultimately enhancing user satisfaction and engagement. My role involves continuously refining and optimizing the frontend codebase to meet evolving user needs and technological advancements.
          </p>

          <Link to='/about' className='button home__button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className='color__block'></div>
    </section>
  )
}

export default Home