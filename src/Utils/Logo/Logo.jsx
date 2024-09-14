import styles from "./Logo.module.css";
function Logo({ style }) {
  return (
    <div className={styles.logoContainer} style={style}>
      <img
        src="https://placeholderlogo.com/img/placeholder-logo-1.png"
        alt="logo of proteing nut"
      />
    </div>
  );
}

export default Logo;
