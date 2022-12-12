
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import ListWords from "../ListWords/ListWords.jsx";
import TestWords from "../TestWords/TestWords.jsx";
import MainPage from "../Mainpage/MainPage.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";

import style from './header.module.scss';

const activeClass = ({ isActive }) => isActive ? style.active : style.menu;

function Header() {
    return (
        <Router>
            <div className={style.container}>
                <div className={style.nav}>
                    <NavLink to='/' className={activeClass}>
                        <div className={style.logo}>
                            <img className={style.img} src="assets/dictionary.png" alt="dict" />
                            <div>Dictionary App</div>
                        </div>
                    </NavLink>
                    <NavLink to='/' className={activeClass}>Home</NavLink>
                    <NavLink to='list' className={activeClass}>Words</NavLink>
                    <NavLink to='/testwords' className={activeClass}>Game</NavLink>
                </div>
            </div>

            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/list' element={<ListWords />} />
                <Route path='/testwords' element={<TestWords />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default Header;