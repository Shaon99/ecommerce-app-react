import { useState } from "react";
import { motion } from "framer-motion";
import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <motion.section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <motion.p
          className='text-xl font-montserrat text-coral-red'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Summer collections
        </motion.p>

        <motion.h1
          className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </motion.h1>
        <motion.p
          className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </motion.p>

        <Button
          label='Shop now'
          iconURL={arrowRight}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
            >
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
