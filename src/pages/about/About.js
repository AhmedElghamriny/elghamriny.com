import React from 'react'

import './About.css'

import { Navbar, TitleBar10 } from '../../components'

import { aboutImage, jacksonPollockPainting } from '../../assets'

const About = () => {
  return (
    <div className='about'>
      <Navbar/>
      <TitleBar10 title="About" backgroundColor="black" color="white" />
      <div className='about-content'>
        <div className='about_section-1'>
          <div className='about_section-1_image'>
            <img src={aboutImage} alt='image of man learning'/>
          </div>
          <div className='about_section-1_text'>
            <div className='about_main-text_section-1'>
              <h2>Who am I?</h2><br></br>
              <p>I'm a Computer Science graduate from Dalhousie University with a passion for machine learning. I am driven by a deep curiosity about how data and mathematics shape our world and a desire to harness data to build intelligent, transformative systems. I find alot of excitement in developing models that can learn, adapt, and make predictions (as we humans do) with the challenge of solving complex problems through algorithms and insights.</p>
            </div>
            <div className='about_main-text_section-2'>
              <h2>Skills and Technologies</h2><br></br>
              <ul>
                <li><b>Programming Languages:</b> Python, Java, C++, C, SQL, HTML, CSS, JavaScript, PHP</li>
                <li><b>Front-end:</b></li>
                <li><b>Back-end:</b></li>
                <li><b>ML Frameworks:</b> PyTorch, Tensorflow, scikit-learn</li>
                <li><b>Visualization Tools: </b>Matplotlib, Seaborn, Power BI, Excel</li>
                <li><b>Other Frameworks and Tools:</b> React.js, Node.js, Flask, SQL Workbench, VSCode</li>
              </ul>
            </div>
          </div>
        </div>

      <div className='about_section-2'>
        <div className='about_section-2_A'>
          <div className='about_section-2_A-1'>
            <h2>Goals</h2><br></br>
            <p>My personal and career goals are aligned with one another. My main goal is to become a highly skilled AI/ML engineer who helps businesses and communities unlock the full potential of data and intelligent systems. In the long term, I envision founding a company dedicated to crafting machine learning software that empowers users, supports small businesses, and transforms industries. Through continuous learning and hands-on experience, I am committed to achieving a deep expertise in machine learning and AI, bridging my technical knowledge with meaningful impact.</p>
          </div>
          <div className='about_section-2_A-2'>
            <h2>Interests Beyond Work</h2><br></br>
            <p>Beyond my work in AI and machine learning, I have a diverse set of personal interests that keep me grounded and continually inspired. I’m passionate about natural bodybuilding, where I enjoy pushing my physical limits. Running is another discipline I incorporate into my routine. I'm also interested in mathematics beyond its applications in AI.</p>
          </div>
        </div>
        <div className='about_section-2_B'>
          <img src={jacksonPollockPainting} alt='jackson pollocks painting'/>
          <p className='painting_sentence-1'>"NOT DELIBERATE, NOT RANDOM, SOMEWHERE IN BETWEEN"</p>
          <p className='painting_sentence-2'>Painting by Jackson Pollock</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About