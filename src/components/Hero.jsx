import { motion } from "framer-motion";

import { styles } from "../styles";
import { Button } from "@mui/material";

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`hidden lg:block absolute inset-0 top-[100px] md:top-[130px] max-w-7xl mx-auto px-8 md:px-14 flex flex-col items-start gap-5`}
      >
        <div >
          {/* <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text text-gradient' >Muthasir</span>
          </h1> */}
          <p
            // style={{ fontSize: "16px", fontWeight: "bold" }}
            className={
              "leading-[20px] md:leading-[47px] font-semibold text-black text-[14px] md:text-[44px]"
            }
          >
            Join the Fuel Efficiency <br></br>Revolution with <br></br>
            <span>Romulus </span>
            Oil & Gas.
          </p>
        </div>

        <a href="#contact">
          <Button sx={{mt:4}} className="h-8" variant="contained">
            Join Now
          </Button>
        </a>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about"></a>
      </div>
    </section>
  );
};

export default Hero;
