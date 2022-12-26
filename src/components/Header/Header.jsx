import { NavLink } from "react-router-dom";
import style from './header.module.scss';

const activeClass = ({ isActive }) => isActive ? style.active : style.menu;

function Header() {
    return (
        <div className={style.container}>
            <div className={style.nav}>
                <NavLink to='/' className={activeClass}>
                    <div className={style.logo}>
                        <img className={style.img} src="assets/dictionary.png" alt="dict" />
                        <div>Dictionary App</div>
                    </div>
                </NavLink>
                <NavLink end to='/' className={activeClass}>Home</NavLink>
                <NavLink end to='list' className={activeClass}>Words</NavLink>
                <NavLink end to='/testwords' className={activeClass}>Game</NavLink>
            </div>
        </div>
    );
}

export default Header;