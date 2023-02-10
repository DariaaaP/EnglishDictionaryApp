import { useState } from 'react';
import { observer, inject } from 'mobx-react';


import style from './tablewords.module.scss';
import styleBtn from '../../components/Button/button.module.scss'
import Button from '../Button/Button.jsx';
import Word from '../Word/Word.jsx';
import NewWordTable from '../NewWordTable/NewWordTable.jsx';


function ListWords({ wordsStore }) {
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
                    wordsStore.words.map((word) => <Word key={word.id} item = {word}></Word>)
                }
                {add && <NewWordTable onButtonClick={ChangeStateButton}></NewWordTable>}
                {add ? <Button class={styleBtn.btn_add} text='Cancel' onButtonClick={AddNewWordInput} /> : <Button class={styleBtn.btn_add} text='New word' onButtonClick={AddNewWordInput} />}
            </div>
        </>
    );
}

export default inject(['wordsStore'])(observer(ListWords));