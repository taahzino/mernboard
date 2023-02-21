import styles from "../styles/NavSearch.module.css";
import Tooltip from "./Tooltip";

function NavSearch({ sidebarOpen, setSidebarOpen }) {
  return (
    <li>
      <i
        className={`bx bx-search ${sidebarOpen && styles.show} ${
          styles.bxSearch
        }`}
        onClick={() => {
          setSidebarOpen(true);
        }}
      ></i>
      <input type="text" placeholder="Search..." />
      <Tooltip>Search</Tooltip>
    </li>
  );
}

export default NavSearch;
