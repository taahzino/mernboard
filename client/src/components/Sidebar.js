import styles from "../styles/Sidebar.module.css";
import NavItem from "./NavItem";
import NavProfile from "./NavProfile";
import NavSearch from "./NavSearch";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className={`${styles.sidebar} ${sidebarOpen && styles.open}`}>
      <div className={styles.logoDetails}>
        <i className={`bx bxl-nodejs ${styles.icon}`}></i>
        <div className={styles.logo_name}>MernBoard</div>
        <i
          className={`bx ${sidebarOpen ? "bx-menu-alt-right" : "bx-menu"} ${
            styles.logoDetailsButton
          }`}
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        ></i>
      </div>
      <ul className={`${styles.navList}`}>
        <NavSearch sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <NavItem
          text="Dashboard"
          icon="bx bx-grid-alt"
          sidebarOpen={sidebarOpen}
        />
        <NavItem text="User" icon="bx bx-user" sidebarOpen={sidebarOpen} />
        <NavItem text="Messages" icon="bx bx-chat" sidebarOpen={sidebarOpen} />
        <NavItem
          text="Analytics"
          icon="bx bx-pie-chart-alt-2"
          sidebarOpen={sidebarOpen}
        />
        <NavItem text="Media" icon="bx bx-folder" sidebarOpen={sidebarOpen} />
        <NavItem text="Order" icon="bx bx-cart-alt" sidebarOpen={sidebarOpen} />
        <NavItem text="Saved" icon="bx bx-heart" sidebarOpen={sidebarOpen} />
        <NavItem text="Setting" icon="bx bx-cog" sidebarOpen={sidebarOpen} />

        <NavProfile sidebarOpen={sidebarOpen} />
      </ul>
    </div>
  );
}

export default Sidebar;
