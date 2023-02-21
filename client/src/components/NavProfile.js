import styles from "../styles/NavProfile.module.css";

function NavProfile({ sidebarOpen }) {
  return (
    <li className={`${styles.profile} ${sidebarOpen && styles.sideBarOpen}`}>
      <div className={styles.profileDetails}>
        <img
          src="https://devtahsin.com/images/b1438b5abcd4975d3658.jpg"
          alt="profileImg"
          className={styles.profileImg}
        />
        <div className="name_job">
          <div className={styles.name}>Tahsin Ahmed</div>
          <div className={styles.job}>Web Developer</div>
        </div>
      </div>
      <i className={`bx bx-log-out ${styles.log_out}`} id="log_out"></i>
    </li>
  );
}

export default NavProfile;
