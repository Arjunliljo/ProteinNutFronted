import { motion } from "framer-motion";
import { RoundButton } from "../../UI/Buttons";
import styles from "./HeaderButtonsContainer.module.css";
function HeaderButtonsContainer() {
  return (
    <div className={styles.headerBtnContainer}>
      <motion.div
        className="your-class-name"
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <RoundButton />
      </motion.div>
      <motion.div
        className="your-class-name"
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <RoundButton />
      </motion.div>
    </div>
  );
}

export default HeaderButtonsContainer;
