import React from 'react';
import './SliderIndicator.css'

const SliderIndicator = (props) => {

  const { index, activeIndex, onClick } = props;

  return (
    <li>
      <a
        className={
          index === activeIndex
          ? "slider-indicator slider-indicator-active"
          : "slider-indicator"
        }
        alt="project slide"
        onClick={onClick}
      ></a>
    </li>
  );
}

export default SliderIndicator;
