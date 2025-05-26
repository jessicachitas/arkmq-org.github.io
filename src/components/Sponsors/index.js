import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import Cloud from "@site/static/img/cloud-arrow-up-solid.png";
import Kubernetes from "@site/static/img/box-open-solid.png";
import Operator from "@site/static/img/user-solid.png";
import Example from "@site/static/img/copy-solid.png";
import CI from "@site/static/img/arrow-right-solid.png";

export default function Sponsors() {
  return (
    <>
      {/* ----------------------------- Install Section ---------------------------- */}
      <div className="sponsor viewport blue-theme" id="sponsor">
      
        <div className="sponsor-carousel">
          <h1 className="sponsor-title">Thank you to our Sponsors!</h1>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <img src={Cloud} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Kubernetes} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Operator} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Example} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CI} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
