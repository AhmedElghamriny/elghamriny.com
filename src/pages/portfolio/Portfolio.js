import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Portfolio.css';

import { Navbar, TitleBar10, ShowcaseSection } from '../../components';

const Portfolio = () => {

  const generativeModels = [
    { title: "Model 1", image: "/path/to/image1.jpg", link: "/model1" },
    { title: "Model 2", image: "/path/to/image2.jpg", link: "/model2" },
  ];

  const classificationModels = [
    { title: "Classifier 1", image: "/path/to/classifier1.jpg", link: "/classifier1" },
    { title: "Classifier 2", image: "/path/to/classifier2.jpg", link: "/classifier2" },
    { title: "Classifier 3", image: "/path/to/classifier3.jpg", link: "/classifier3" },
  ];

  const nlpModels = [
    { title: "NLP 1", image: "/path/to/NLP1.jpg", link: "/NLP1" },
    { title: "NLP 2", image: "/path/to/NLP2.jpg", link: "/NLP2" },
    { title: "NLP 3", image: "/path/to/NLP3.jpg", link: "/NLP3" },
  ];

  // Continue

  return (
    <div className="portfolio">
      <Navbar />
      <TitleBar10 title="Portfolio" backgroundColor="black" color="white" />
      <div className="portfolio-content">
        <ShowcaseSection 
          className="burger_menu_trigger"
          title="Generative AI Models" 
          backgroundColor="black" 
          numCards={2} 
          width="30rem" 
          height="30rem"
          cardData={generativeModels}  
        />
        <ShowcaseSection 
          title="Classification Models" 
          backgroundColor="black" 
          numCards={3} 
          width="30rem" 
          height="30rem" 
        />
        <ShowcaseSection 
          title="NLP Models" 
          backgroundColor="black" 
          numCards={3} 
          width="30rem" 
          height="30rem" 
        />
        <ShowcaseSection 
          title="Anomaly Detection Models" 
          backgroundColor="black" 
          numCards={2} 
          width="30rem" 
          height="30rem" 
        />
        <ShowcaseSection 
          title="Reinforcement Learning Models" 
          backgroundColor="black" 
          numCards={2} 
          width="30rem" 
          height="30rem" 
        />
        <ShowcaseSection 
          title="Regression Models" 
          backgroundColor="black" 
          numCards={3} 
          width="30rem" 
          height="30rem" 
        />
        <ShowcaseSection 
          title="Other Projects" 
          backgroundColor="black" 
          numCards={6} 
          width="30rem" 
          height="30rem" 
        />
      </div>
    </div>
  );
};

export default Portfolio;
