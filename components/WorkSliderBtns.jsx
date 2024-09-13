"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ ContainerStyles, btnStyles, IconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={ContainerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={IconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={IconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;