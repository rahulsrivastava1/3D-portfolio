import React, { useState, useEffect } from 'react';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, technologies_phone } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const techArray = isMobile === true ? technologies_phone : technologies;

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {techArray.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {isMobile === true ? <img src={technology.icon} /> :
            <BallCanvas icon={technology.icon} />}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");