import style from "./notfoundpage.module.scss";

function NotFoundPage() {
    return (
        <div className={style.page404}>
            <img className={style.pic404} alt="404" src="assets/404.webp" />
        </div>
    )
}

export default NotFoundPage;