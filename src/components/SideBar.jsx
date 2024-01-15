import Logo from "./Logo";
import AppNav from "./AppNav";
import Styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={Styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={Styles.footer}>
        <p className={Styles.copyright}>
          &copy;{new Date().getFullYear()} Copyright WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
