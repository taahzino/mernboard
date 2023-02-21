import styles from "../styles/Main.module.css";

function Main({ sidebarOpen, title, children }) {
  return (
    <div class={`${sidebarOpen && styles.sidebarExpanded} ${styles.main}`}>
      <div class={styles.text}>{title}</div>
      {children}
    </div>
  );
}

export default Main;
