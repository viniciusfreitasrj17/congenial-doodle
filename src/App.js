import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const Action = () => {

  return (
    <motion.div
      style={{ textAlign: 'center' }}
      className="item"
      initial={{ scale: 0, /*opacity: 0*/ }}
      animate={{
        rotate: 360,
        scale: 1,
        /*opacity: shouldShowActions ? 1 : 0*/
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        rotate: { duration: 1.2 }
        /*opacity: { duration: 0.2 }*/
      }}
    > 
      <img 
        src='https://github.githubassets.com/images/modules/logos_page/Octocat.png' 
        style={{ width: '150px', height: '150px' }} 
      /> 
    </motion.div>
  )
}

const ActionReverse = () => {

  return (
    <motion.div
      style={{ textAlign: 'center' }}
      className="item"
      initial={{ scale: 1, /*opacity: 0*/ }}
      animate={{
        rotate: 360,
        scale: 0,
        /*opacity: shouldShowActions ? 1 : 0*/
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        rotate: { duration: 1.2 }
        /*opacity: { duration: 0.2 }*/
      }}
    > 
      <img 
        src='https://github.githubassets.com/images/modules/logos_page/Octocat.png' 
        style={{ width: '150px', height: '150px' }} 
      /> 
    </motion.div>
  )
}

function App() {

  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);
  const [el1, setEl1] = useState('');
  const [el2, setEl2] = useState('');
  const [el3, setEl3] = useState('');

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
          <Action />
        )
      } else setEl1(<ActionReverse />)


      if (lastYPos >= 370 && lastYPos < 909) {
        setEl2(
          <Action />
        )
      } else setEl2(<ActionReverse />)


      if (lastYPos >= 910) {
        setEl3(
          <Action />
        )
      } else setEl3(<ActionReverse />)
    }

    handleElement();

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  // useEffect(() => {

  // }, [lastYPos])

  return (
    <div>
      <div className='container'>
        {el1}
      </div>
      <div className='container'>
        {el2}
      </div>
      <div className='container'>
        {el3}
      </div>
    </div>
  );
}

export default App;
