import { observer, inject } from 'mobx-react';

import ListWords from '../../components/TableWords/TableWords.jsx';
import Preloader from '../../components/Preloader/Preloader.jsx';
import Errors from '../../components/Errors/Errors.jsx';

const TablePage = ({ wordsStore }) => {

    const preloading = wordsStore.loading ? <Preloader /> : null;
    const error = wordsStore.errors ? <Errors /> : null;
    const content = !(wordsStore.loading || wordsStore.errors) ? <ListWords /> : null;

    return (
        <div>
            {error}
            {preloading}
            {content}
        </div>
    )
}

export default inject(['wordsStore'])(observer(TablePage));