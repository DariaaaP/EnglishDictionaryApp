import { useContext } from 'react';
import { Context } from '../../Context/Context.jsx';
import ListWords from '../../components/TableWords/TableWords.jsx';

import Preloader from '../../components/Preloader/Preloader.jsx';
import Errors from '../../components/Errors/Errors.jsx';

const TablePage = () => {
    const { loading, errors } = useContext(Context);

    const preloading = loading ? <Preloader /> : null;
    const error = errors ? <Errors /> : null;
    const content = !(loading || errors) ? <ListWords /> : null;

    return (
        <div>
            {error}
            {preloading}
            {content}
        </div>
    )
}

export default TablePage;