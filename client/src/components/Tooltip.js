import styles from "../styles/Tooltip.module.css";

function Tooltip({ children, sidebarOpen, showTooltip }) {
  return (
    <span
      className={`${styles.tooltip} ${
        !sidebarOpen && showTooltip ? styles.show : ""
      } ${sidebarOpen && styles.hide}`}
    >
      {children}
    </span>
  );
}

export default Tooltip;
