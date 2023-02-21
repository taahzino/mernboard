import Tooltip from "./Tooltip";
import styles from "../styles/NavItem.module.css";
import { useState } from "react";

function NavItem({ link, text, icon, sidebarOpen }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <li
      onMouseEnter={() => {
        setShowTooltip(true);
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
      }}
    >
      <button className={styles.button}>
        <i className={icon}></i>
        <span className={`${styles.links_name} ${sidebarOpen && styles.show}`}>
          {text}
        </span>
      </button>
      <Tooltip showTooltip={showTooltip} sidebarOpen={sidebarOpen}>
        {text}
      </Tooltip>
    </li>
  );
}

export default NavItem;
