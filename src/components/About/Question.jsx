'use client';
import { questionArrow } from '@/assets';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Question = ({ data, index }) => {
  const [show, setShow] = useState(false);

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.7,
      },
    }),
    hidden: { opacity: 0, x: -30 },
  };

  return (
    <motion.li
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: '50px', once: true }}
      variants={variants}
      className="border border-yellow-500 p-1 rounded-lg"
    >
      <h1
        onClick={() => setShow(!show)}
        className={`flex items-center text-xl font-extralight text-gray-800 hover:text-yellow-600 tracking-wide cursor-pointer dark:text-white dark:hover:bg-zinc-700 dark:hover:text-yellow-600 ${
          show && 'border-b text-yellow-600'
        }`}
      >
        <motion.span
          animate={{ rotate: show ? 180 : 0 }}
          className="mr-2"
        >
          {questionArrow}
        </motion.span>
        <span>{data.question}</span>
      </h1>
      {show && (
        <motion.p
          initial={{ scaleY: 0, height: 0, opacity: 0 }}
          animate={{
            scaleY: show ? 1 : 0,
            height: show ? 'auto' : 0,
            opacity: show ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            type: 'spring',
            stiffness: show ? 250 : 50,
            opacity: { delay: show ? 0.2 : 0 },
          }}
          className="box-border origin-top pl-8 text-lg font-extralight tracking-wide text-gray-900 first-letter:pl-3 mt-2 dark:text-gray-200"
        >
          {data.answer}
        </motion.p>
      )}
    </motion.li>
  );
};

export default Question;