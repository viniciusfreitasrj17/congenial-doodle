import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Action = ({ init, anim, rotate }) => {

  return (
    <motion.div
      style={{ textAlign: 'center' }}
      className="item"
      initial={{ scale: init }}
      animate={{
        rotate: rotate,
        scale: anim,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        rotate: { duration: 1.2 }
      }}
    > 
      <img 
        src='https://github.githubassets.com/images/modules/logos_page/Octocat.png' 
        style={{ width: '150px', height: '150px' }} 
      /> 
    </motion.div>
  )
}

const ArrowUp = ({init, anim}) => {

  return (
    <motion.div
      className='arrowUp'
      initial={{ scale: init, opacity: init }}
      animate={{
        scale: anim,
        opacity: anim,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        opacity: { duration: 1.2 },
        scale: { duration: 0.5 }
      }}
    > 
      <Link className='arrowUp' to="root" spy={true} smooth={true} offset={50} duration={1000} delay={100}/>
    </motion.div>
  )
}

function App() {

  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);
  const [el1, setEl1] = useState('');
  const [el2, setEl2] = useState('');
  const [el3, setEl3] = useState('');
  const [el4, setEl4] = useState('');

  useEffect(() => {
    function handleScroll() {
      const currentYPos = window.scrollY;
      const isScrollingUp = currentYPos < lastYPos;
      console.log(currentYPos, isScrollingUp, lastYPos)

      setShouldShowActions(isScrollingUp);
      setLastYPos(currentYPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    function handleElement() {
      if (lastYPos >= 0 && lastYPos < 369) {
        setEl1(
          <Action init={0} anim={1} rotate={360} />
        )
      } else setEl1(<Action init={1} anim={0} rotate={90} />)


      if (lastYPos >= 370 && lastYPos < 909) {
        setEl2(
          <Action init={0} anim={1} rotate={360} />
        )
      } else setEl2(<Action init={1} anim={0} rotate={90} />)


      if (lastYPos >= 910) {
        setEl3(
          <Action init={0} anim={1} rotate={360} />
        )
      } else setEl3(<Action init={1} anim={0} rotate={90} />)

      if (lastYPos >= 100) {
        setEl4(
          <ArrowUp init={0} anim={1} />
        )
      } else setEl4(<ArrowUp init={1} anim={0} />)
    }

    handleElement();

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  // useEffect(() => {

  // }, [lastYPos])

  return (
    <div  id='home'>
      <div className='container'>
        {el1}
      </div>
      <div className='container'>
        {el2}
      </div>
      <div className='container'>
        {el3}
      </div>
      {el4}
    </div>
  );
}

export default App;
