import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useObserver from "../../../Hooks/useObserver";
import { setIsHome } from "../../../App/generalSlice/generalSlice";
import { StyledSectionOne } from "../../../UI/HomeStyle/SectionOne";
import { MainHeading as StyledMainHeading } from "./StyledComponents/MainHeading";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import BottomCircle from "./BottomCircle";
import { StyledCircleDummy } from "./Components/StyledCircleDummy";

function HomeSectionOne() {
  const targetRef = useRef(null);
  const dispatch = useDispatch();
  const spanRef = useRef(null);
  
  useObserver(targetRef, (isVisible) => dispatch(setIsHome(isVisible)), 1);

  // State to manage the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of texts for sliding animation
  const slides = [
    "Crunchy Energy",
    "Smooth Power",
    "Nutty Boost",
    "Creamy Energy"
  ];

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  // GSAP animation for smoother transitions
  useEffect(() => {
    if (spanRef.current) {
      gsap.fromTo(
        spanRef.current,
        { opacity: 0, y: -50 }, // Start above with opacity 0
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "bounce.out" // Add bounce effect
        }
      );
    }
  }, [currentSlide]);

  return (
    <StyledSectionOne ref={targetRef}>
      <StyledMainHeading>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Boost your energy
        </motion.div>
        <motion.div
          style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ opacity: { duration: 0.7 }, scale: { duration: 0.7 } }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
            With{" "}
            <div style={{ display: 'inline-block', position: 'relative', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              <span
                ref={spanRef}
                style={{ display: 'inline-block', marginLeft: '5px' }}
              >
                {slides[currentSlide]}
              </span>
            </div>
          </span>
        </motion.div>
      </StyledMainHeading>
      <BottomCircle />
      <StyledCircleDummy />
    </StyledSectionOne>
  );
}

export default HomeSectionOne;
