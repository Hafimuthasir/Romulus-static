import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { earth } from "../assets";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';



const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className='w-[220px] h-[150px]'>
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className='bg-tertiary p-2 rounded-lg w-full h-full'
  >
    <div className='mt-1'>
      <h3 className='text-white font-bold text-[16px]'>{name}</h3>
    </div>

    <div className='mt-2'>
      <p className='text-secondary text-[12px]'>
        {description}
        </p>
    </div>

    <div className='mt-1 flex flex-wrap gap-1'>
      {tags.map((tag) => (
        <p
          key={`${name}-${tag.name}`}
          className={`text-[10px] ${tag.color}`}
        >
          #{tag.name}
        </p>
      ))}
    </div>

    <div className='absolute bottom-2 right-2'>
      <div
        onClick={() => window.open(source_code_link, "_blank")}
        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
        <img
          src={github}
          alt='source code'
          className='w-1/2 h-1/2 object-contain'
        />
      </div>
    </div>
  </Tilt>
</motion.div>


  );
};

const Works = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}>More work</p> */}
        <h2 className={`${styles.sectionHeadText}`}>
          Romulus is <span style={{ color: "#e15500" }}>Carbon</span> Posititve
          !
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          WE REDUCE THE CARBON FOOTPRINT OF CONSUMERS, GIVING BACK MORE TO THE
          ENVIRONMENT THAN WE TAKE
        </motion.p>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row gap-7">
        <img width="350" height="350" src={earth}></img>

        <div
          ref={ref}
          style={{ lineHeight: "3.7rem" }}
          className="text-black font-bold w-full flex-column items-center jusitfy-center p-5 lg:px-20"
        >
          <p className="text-[35px] mb-4">We Save</p>
          <h2 className="text-[25px]">
            {inView && (
              <CountUp
                style={{ color: "brown", fontSize: "80px" }}
                start={0}
                end={375}
                duration={3}
              />
            )}
            <span className={styles.sectionSubText}> Kgs/Month</span>
          </h2>
          <h2 className="text-[25px]">
            {inView && (
              <CountUp
                style={{ color: "darkcyan", fontSize: "80px" }}
                start={0}
                end={4.5}
                decimal="."
                decimals={1}
                duration={1.5}
              />
            )}{" "}
            <span className={styles.sectionSubText}>Tons/yr</span>
          </h2>
          <h2 className="text-[25px] ">
            {inView && (
              <CountUp
                style={{ color: "peru", fontSize: "80px" }}
                start={0}
                end={1.5}
                decimal="."
                decimals={1}
                duration={1.5}
              />
            )}{" "}
            <span className={styles.sectionSubText}>Tons per customer/yr</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
