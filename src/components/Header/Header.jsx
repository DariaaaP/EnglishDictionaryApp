import style from './header.module.scss';

function Header() {
    return (
        <>
            <div className={style.container}>
                <div className={style.logo}>
                    <img className={style.img} src="assets/dictionary.png" alt="dict" />
                    <div>Dictionary App</div>
                </div>
                <div className={style.nav}>
                    <ul className={style.links}>
                        <li>Home</li>
                        <li>Words</li>
                        <li>Cards</li>
                        <li>Test</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;