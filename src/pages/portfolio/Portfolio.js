import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Portfolio.css';

import { spamEmail, turingMachine, neuralNetwork, taxiQlearning } from '../../assets';

import { Navbar, TitleBar10, ShowcaseSection } from '../../components';

const Portfolio = () => {

  const Portfolio = [
    { title: "Email Spam Classifier", image: spamEmail, link: "https://main.dtn9qqhok2y1r.amplifyapp.com/" },
    { title: "Taxi Q Learning", image: taxiQlearning, link: "https://github.com/AhmedElghamriny/Reinforcement-Learning-Taxi-OpenAI-Gym" },
    { title: "Neural Networks from Scratch", image: neuralNetwork, link: "https://github.com/AhmedElghamriny/Neural-Network" },
    { title: "Turing Machine Simulator CLI", image: turingMachine, link: "https://github.com/AhmedElghamriny/Turing-Machine-Simulator-CLI" }
  ];

  // Continue

  return (
    <div className="portfolio">
      <Navbar />
      <TitleBar10 title="Portfolio" backgroundColor="black" color="white" />
      <div className="portfolio-content">
        <ShowcaseSection 
          className="burger_menu_trigger"
          title="" 
          backgroundColor="black" 
          numCards={4} 
          width="30rem" 
          height="30rem"
          cardData={Portfolio}  
        />
      </div>
    </div>
  );
};

export default Portfolio;
