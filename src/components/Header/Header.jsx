
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

function Header() {
    return (
        <Router>
            <div className={style.container}>
                <div className={style.nav}>
                    <NavLink to='/' className={({ isActive }) =>
                        (isActive ? (style.active) : style.menu)}>
                        <div className={style.logo}>
                            <img className={style.img} src="assets/dictionary.png" alt="dict" />
                            <div>Dictionary App</div>
                        </div>
                    </NavLink>
                    <NavLink to='/' className={({ isActive }) =>
                        (isActive ? (style.active) : style.menu)}>Home</NavLink>
                    <NavLink to='list' className={({ isActive }) =>
                        (isActive ? (style.active) : style.menu)}>Words</NavLink>
                    <NavLink to='/testwords' className={({ isActive }) =>
                        (isActive ? (style.active) : style.menu)}>Game</NavLink>
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