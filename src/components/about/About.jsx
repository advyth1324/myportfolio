import React from 'react'
import './about.css'
import ME from '../../assets/meabout.jpg'
import {FaAward} from 'react-icons/fa'
import {BsFillCameraReelsFill} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>intern</small>
            </article>
            
            
            <article className='about__card'>
              <BsFillCameraReelsFill className='about__icon'/>
              <h5>Passion</h5>
              <small>Director</small>
            </article>
            
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3 completed projects</small>
            </article>
          </div>

          <p>
            As an Engineering Student of Computer Science Core. I am passionate and committed to be part of developing,
            cutting-edge technology that solves real-world problems. I come armed with working knowledge in ability to
            contribute to innovative projects and I am raring to be part of a company that champions change through
            technology. I am also an aspiring film director who is passionate about film making I have experience in
            script writing, direction. I have made multiple short films.
          </p>



          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About