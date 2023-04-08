import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { github } from "../assets";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Icon } from "@mui/material";
import SavingsIcon from '@mui/icons-material/Savings';
import DiscountIcon from '@mui/icons-material/Discount';
import ModalExample from "./Modal";

const ExperienceCard = ({ experience }) => {

  const [showModal, setShowModal] = React.useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.classList.add('overflow-hidden');
    
    document.querySelector('#content').classList.add('opacity-50');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.classList.remove('overflow-hidden');
    document.querySelector('#content').classList.remove('opacity-50');
  };

  return (
    <div className="p-5 rounded w-full md:w-auto" style={{width:"100%"}}>
      <div className="flex flex-col items-center justify-center"> 
        {experience.icon == "margin" ?<TrendingUpIcon sx={{ fontSize: 68, color: 'chocolate' }}/>:experience.icon == "save"?<SavingsIcon sx={{ fontSize: 68, color: 'chocolate' }}/>:<DiscountIcon sx={{ fontSize: 68, color: 'chocolate' }}/>}
        <h3 className='text-[black] text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-black text-[15px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      <br></br>

</div>

  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>
          Why we are different ?
        </h2>
        <p className={`${styles.sectionSubText} `}>
          Romulus offers a UNIQUE DISTRIBUTION MODEL AND CUSTOMER OFFERING
        </p>
      </motion.div>

      <div className='mt-8 flex flex-col'>
        {/* <VerticalTimeline> */}
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
          </div>
        {/* </VerticalTimeline> */}
      </div>


    </>
  );
};

export default SectionWrapper(Experience, "work");
