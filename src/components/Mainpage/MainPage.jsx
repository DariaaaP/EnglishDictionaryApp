import style from "./mainpage.module.scss"

function MainPage() {
    return (
        <div className={style.container}>
            <h1>Welcome to English Dictionary App</h1>
            <img src="assets/dict.webp" alt="dictionary_img" />
        </div>
    );
}

export default MainPage;