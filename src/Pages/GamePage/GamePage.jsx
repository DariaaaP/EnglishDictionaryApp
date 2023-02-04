import { useContext } from 'react';
import { Context } from '../../Context/Context.jsx';
import GameCards from '../../components/GameCards/GameCards.jsx';
import Errors from '../../components/Errors/Errors.jsx';

import Preloader from '../../components/Preloader/Preloader.jsx';

const GamePage = () => {
    const { loading, errors } = useContext(Context);

    const preloading = loading ? <Preloader /> : null;
    const error = errors ? <Errors /> : null;
    const content = !(loading || errors) ? <GameCards /> : null;

    return (
        <div>
            {error}
            {preloading}
            {content}
        </div>
    )
}

export default GamePage;