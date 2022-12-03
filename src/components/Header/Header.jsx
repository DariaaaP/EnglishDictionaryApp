
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ListWords from "../ListWords/ListWords.jsx";
import TestWords from "../TestWords/TestWords.jsx";
import MainPage from "../Mainpage/MainPage.jsx"

import style from './header.module.scss';

function Header() {
    return (
        <Router>
            <div className={style.container}>
                <div className={style.logo}>
                    <img className={style.img} src="assets/dictionary.png" alt="dict" />
                    <div>Dictionary App</div>
                </div>
                <div className={style.nav}>
                    <Link to='/home' className={style.menu}>Home</Link>
                    <Link to='list' className={style.menu}>Words</Link>
                    <Link to='/testwords' className={style.menu}>Cards</Link>
                </div>
            </div>

            <Routes>
                <Route path='/home' element={<MainPage />} />
                <Route path='/list' element={<ListWords />} />
                <Route path='/testwords' element={<TestWords />} />
            </Routes>
        </Router>
    );
}

export default Header;