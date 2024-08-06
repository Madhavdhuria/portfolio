"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold onClick={()=>swiper.slidePrev()} className={iconsStyles}/>
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold onClick={()=>swiper.slideNext()}  className={iconsStyles}/>
      </button>
    </div>
  );
};

export default WorkSliderBtns;
