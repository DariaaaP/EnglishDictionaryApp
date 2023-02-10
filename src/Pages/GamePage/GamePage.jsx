import { observer, inject } from 'mobx-react';

import GameCards from '../../components/GameCards/GameCards.jsx';
import Errors from '../../components/Errors/Errors.jsx';
import Preloader from '../../components/Preloader/Preloader.jsx';

const GamePage = ({ wordsStore }) => {

    const preloading = wordsStore.loading ? <Preloader /> : null;
    const error = wordsStore.errors ? <Errors /> : null;
    const content = !(wordsStore.loading || wordsStore.errors) ? <GameCards words={wordsStore.words} /> : null;

    return (
        <div>
            {error}
            {preloading}
            {content}
        </div>
    )
}

export default inject(['wordsStore'])(observer(GamePage));