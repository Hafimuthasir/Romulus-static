import React from 'react'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { bowsertruck,bowsertruck2,datm,datum2,datum3 } from '../assets'
import { useState } from 'react'


const images = [bowsertruck, datm, datum2, bowsertruck2, datum3];

function Gallery() {

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      nextArrow: (
        <ArrowForwardIosIcon
          sx={{ color: "black", "&:hover": { color: "chocolate" } }}
        />
      ),
      prevArrow: (
        <ArrowBackIosNewIcon
          sx={{ color: "black", "&:hover": { color: "chocolate" } }}
        />
      ),
      beforeChange: (current, next) => setImageIndex(next),
    };

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className={`${styles.sectionHeadText} text-center`}>Gallery</div>
      </motion.div>
      <p className={`${styles.sectionSubText}text-secondary text-center`}>
        A Glimpse of Our Accomplishments : Our Gallery of Cutting-Edge Solutions
      </p>

      <div className="App">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SectionWrapper(Gallery,"gallery")