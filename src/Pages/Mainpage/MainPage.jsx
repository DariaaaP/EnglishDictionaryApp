import { observer, inject } from 'mobx-react';

import Preloader from '../../components/Preloader/Preloader.jsx';
import Errors from '../../components/Errors/Errors.jsx';

import style from "./mainpage.module.scss";

function MainPage({ wordsStore }) {

    const preloading = wordsStore.loading ? <Preloader /> : null;
    const error = wordsStore.errors ? <Errors /> : null;
    const content = !(wordsStore.loading || wordsStore.errors) ? (<div className={style.container}>
        <h1>Welcome to English Dictionary App</h1>
        <img src="assets/dict.webp" alt="dictionary_img" />
    </div>) : null;

    return (
        <div>
            {error}
            {preloading}
            {content}
        </div>
    )
}

export default inject(['wordsStore'])(observer(MainPage));