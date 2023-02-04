import { useContext, useState } from 'react';
import { Context } from '../../Context/Context.jsx';

import style from './tablewords.module.scss';
import styleBtn from '../../components/Button/button.module.scss'
import Button from '../Button/Button.jsx';
import Word from '../Word/Word.jsx';
import NewWordTable from '../NewWordTable/NewWordTable.jsx';


function ListWords() {
    const { words } = useContext(Context);
    const [add, newAdd] = useState(false);

    const AddNewWordInput = () => {
        newAdd(!add);
    }

    const ChangeStateButton = (add) => {
        newAdd(add);
    }

    return (
        <>
            <div className={style.table}>
                <div className={style.table__string}>
                    <div className={style.table__title}>Words</div>
                    <div className={style.table__title}>Transcription</div>
                    <div className={style.table__title}>Translate</div>
                </div>
                {
                    words?.map((word) => <Word key={word.id} {...word}></Word>)
                }
                {add && <NewWordTable onButtonClick={ChangeStateButton}></NewWordTable>}
                {add ? <Button class={styleBtn.btn_add} text='Cancel' onButtonClick={AddNewWordInput} /> : <Button class={styleBtn.btn_add} text='New word' onButtonClick={AddNewWordInput} />}
            </div>
        </>
    );
}

export default ListWords;