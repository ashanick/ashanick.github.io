import React from 'react'
// import {Link} from 'react-router-dom'
import Card from '../shared/components/UIElements/Card'
import './HomePage.css'
import ctwImage from '../../src/images-src/mentor.JPG'
import stemImage from '../../src/images-src/STEM.JPG'

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 5
    }}
  />
);

const HomePage = () => {
  return (
    <>
      <div className='homepage'>
        <Card className='homepage__part1'>
          <h2>Focus Areas: Algae, pyrolysis, energy efficiency, training workshops</h2>
          <ColoredLine color="red" />
          <h2>Current work</h2>
          <ul className='homepage-part1__ul'>
            <li>
            Mentoring the implementation of a STEM lab at St. Joseph Boys High School, Bangalore.
            </li>
            <li>Mentor and advisor, gait analysis and cutomized insoles for individuals with diabetes and knee and back pain.</li>
          </ul>
          <h2>Areas of strength</h2>
          <ul className='homepage-part1__ul'>
            <li>Investing and mentoring in climate startups to move the product from lab to pilot prototyping</li>
            <li>Seeking, identifying, and implementing at new customer base for newbie startups.</li>
          </ul>
          <h2>Some writeups</h2>
          <ul className='homepage-part1__ul'>
            <li>
              <a href="https://www.educationworld.in/team-r-factor/" target="_blank">Gold at First Lego League Championship @ Australia with project "Smart Stove"</a>
            </li>
            <li>
              <a href="https://www.thehindu.com/features/metroplus/Reaching-for-the-stars/article15379073.ece" target="_blank">Reaching for the stars with Nickelodeon's Young Astronauts Program</a>
            </li>
          </ul>
        </Card>
        <Card className='homepage__content'>
          {/* <div className='homepage-image__image'> */}
            <h2>Education</h2>
            <ul className='homepage-part1__ul'>
              <li>Master in Education, Teachers College Columbia University.</li>
              <li>Bachelor of Science, Statistics, Mumbai University</li>
            </ul>
            <h2>Professional Development Courses</h2>
            <ul className='homepage-part1__ul'>
              <li>Terra.do, Learning for Action.</li>
              <li>MIT Sloan Product Design Online Course</li>
            </ul>
            <h2>Relevant Hobbies</h2>
          <ul className='homepage-part1__ul'>
            <li>Creating websites using React, Next, and MERN stack for individuals and small startups. Example : 
              <a href='https://venturetraveller.com/' target='_blank'>Venture Traveller</a></li>
            <li>Mentoring high school students on STEM projects (Award winning Intel Science Fair, 2016, 2017)</li>
          </ul>
            {/* </div> */}
        </Card>
      </div>
  
      <div className='homepage'>
        <Card className='homepage__experience'>
          <div style={{textAlign: 'center'}}>
            <h1>Entrepreneurship & Professional Experience</h1>
          </div>
          <div className='homepage__part2'>
            <Card className='homepage-part2__card'>
              <div className="user-item__image">
                <img src={ctwImage} alt='ctw' />
              </div>
              <div className="user-item__info">
                <h3>Children's Technology Workshop</h3>
                <p>With a vision of nurturing students in a dynamic and engaging environment using the best of breed resources,  
                  I founded CTW in 2008. Then it was the first of Mumbai's K-12 STEM Robotics co-curricular and afterschool program. 
                  In 2009, I expanded to incorporate participation in robotics and high school competitions, both local and international. 
                  Specifically:
                </p>
                <ul>
                  <li>Conducted programs at top 15 schools in Mumbai</li>
                  <li>Coached and mentored nearly 2000 students at competitions</li>
                  <li>2016: Introduced First Robotics Competition to India</li>
                </ul>
                <h4>Towards raising ingenious, innovative, and independent thinkers</h4>
              </div>
            </Card>

            <Card className='homepage-part2__card'>
              <div className="user-item__image">
                  <img src={stemImage} alt='ctw' />
              </div>
              <div className="user-item__info">
                <h3>STEM High School Projects</h3>
                <p>
                  Independent student projects, a few latest examples:
                </p>
                <ul>
                  <li>"Breathe Easy" (Filtering mask fror asbestos)  won Google's 90 ways to change the world</li>
                  <li>Student awards at Intel Phoenix 2016 (2-dimensions positionality Math problem), and Pittsburgh 2017 (Preventing backache in cyclists)</li>
                  <li>Chemical free and resourceful agricultural tech using IOT @ Lego Robotics at Costa Rica 2018</li>
                </ul>
                <h4>Students learning journey became my personal inspiration</h4>
              </div>
            </Card>
            <Card className='homepage-part2__card'>
              <div className="user-item__info">
                <h3>Other Professional</h3>
                <h4>Math Tutoring</h4>
                <ul>
                  <li>Creative Problem Solving, grades 4-9</li></ul>
                <h4>Math Educator</h4>
                <ul>
                  <li>Math @ MaryMount School of New York</li>
                  <li>Math @ Brearley School of New York</li>
                  <li>Robotics @ Manhattan Youth</li>
                </ul>
                <h4>Professional Development Workshops in Math</h4>
                <ul>
                  <li>Sanskriti School, Delhi, 2008</li>
                  <li>IIT Bombay, 2008</li>
                  <li>Jamnabhai Narsee School, 2008</li>
                  <li>Bombay International School, 2009</li>
                  <li>Homi Bhabha Centennial, 2009</li>
                </ul>
                <h4>Software Developer</h4>
                <ul>
                  <li>Software Developer Ingres as consultant @ Cosmair Inc.</li>
                  <li>Software Developer COBOL and Ingres @ Bharat Petroleum</li>
                </ul>
                <h4>Volunteer Experiences</h4>
                <ul>
                  <li>STEM Centre @ St. Joseph Boys High School</li>
                  <li>Bangalore Environment Trust</li>
                  <li>Agastya Foundation</li>
                  <li>Each One Teach One</li>
                </ul>
              </div>
            </Card>
          </div>
        </Card>
        <Card>
          <div className='footer__area'>
            <h3 style={{color: 'red'}}>Created using basic React by me, Asha Sundararajan on April 20th, 2022. You can find me on 
              <a href='https://www.linkedin.com/in/asha-sundararajan-98158b31/' target='_blank'> LinkedIn</a> and robotics videos on 
              <a href='https://youtu.be/U6FhTyviqQg' target='_blank'> YouTube.</a></h3>
          </div>
        </Card>
      </div>
    </>
  )
}

export default HomePage