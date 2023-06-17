import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useMediaQuery } from "react-responsive";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const MobileMediaQuery = ({ children }: any) => {
    const isMobile = useMediaQuery({ maxWidth: 1 });
    return !isMobile ? children : null;
  };
  const PCMediaQuery = ({ children }: any) => {
    const isMobile = useMediaQuery({ minWidth: 501 });
    return !isMobile ? children : null;
  };
  return (
    <nav className={styles.navbar}>
      <NavLink id="logo" to="/" className={styles.brand}>
        Biblioteca <span>Virtual</span>
      </NavLink>
      <MobileMediaQuery>
        <ul className={styles.links_list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/register">Sobre</NavLink>
          </li>
        </ul>
      </MobileMediaQuery>
      <PCMediaQuery>
        <a href="#">
          <AiOutlineMenu />
        </a>
      </PCMediaQuery>
    </nav>
  );
};

export default Navbar;
