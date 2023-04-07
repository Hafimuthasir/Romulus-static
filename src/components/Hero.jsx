import { motion } from "framer-motion";

import { styles } from "../styles";

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* <div className='w-5 h-5 rounded-full bg-[#915EFF]' /> */}
          {/* <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}
        </div>

        <div>
          <br></br><br></br>
          {/* <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text text-gradient' >Muthasir</span>
          </h1> */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
Join the Fuel Efficiency Revolution with Romulus Oil & Gas, the Eco-Friendly Cloud Petrol Pump Saving 1.5 Million Tonnes of Carbon per Year. Streamline Your Business and Reduce Waste with Our Innovative Diesel Delivery Solutions.          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>

        </a>
      </div>
    </section>
  );
};

export default Hero;
