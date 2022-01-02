import React from 'react';
import { Carousel } from "../components/carousel/Carousel";
import { WindowWidthInterface } from '../components/carousel/interfaces';


/**
 * This component is used to manage all other components that 
 * need to be shown on home page 
 * @param windowWidth {Number} - width of the screen props
 */
const Home: React.FC<WindowWidthInterface> = ({ windowWidth }) => {
  return (
    <div className="wrapper">
      <Carousel windowWidth={windowWidth} />
    </div>
  );
}

export default Home;
