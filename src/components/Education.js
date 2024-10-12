import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <>
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
      >
        <LiIcon reference={ref} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <h3 className="capitalize font-bold text-2xl">{type} &nbsp;</h3>
          <span className="capitalize font-medium text-dark/75">
            {time} | {place}
          </span>
          <p className="font-medium w-full">{info}</p>
        </motion.div>
      </li>
    </>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  return (
    <div className="my-16">
      <h2 className="font-bold text-8xl mb-16 text-center"> Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type={"Bachelor of Technology in Mechanical"}
            time={"2011-2015"}
            place={"Visakhapatnam - India"}
            info={"Vignan's Institute of Information Technology"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
