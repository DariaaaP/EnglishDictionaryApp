import { useState, useEffect } from 'react';

import style from '../../Pages/ListWords/listwords.module.scss';
import styleBtn from '../../components/Button/button.module.scss';
import Button from '../../components/Button/Button.jsx';
import Input from '../../components/Input/Input.jsx';

function Word({ items, editWords }) {
    const { id, english, transcription, russian } = items;
    const [isEdit, setIsEdit] = useState(false);

    const returnState = () => setIsEdit(!isEdit);

    const [valueWord, setValueWord] = useState('');
    const [valueTranscription, setValueTranscription] = useState('');
    const [valueTranslate, setValueTranslate] = useState('');


    useEffect(() => {
        setValueWord(english)
        setValueTranscription(transcription)
        setValueTranslate(russian)
    }, [english, transcription, russian])

    function handleClickWord(e) {
        setValueWord(e.target.value)
    }
    function handleClickTranscription(e) {
        setValueTranscription(e.target.value)
    }
    function handleClickTranslate(e) {
        setValueTranslate(e.target.value)
    }

    function saveWords() {
        returnState();
        editWords(id, valueWord, valueTranscription, valueTranslate);

    }

    return (
        <div className={style.table__string}>
            <div className={style.table__word}>{isEdit ? <Input value={valueWord} function={handleClickWord} /> : english}</div>
            <div className={style.table__word}>{isEdit ? <Input value={valueTranscription} function={handleClickTranscription} /> : transcription}</div>
            <div className={style.table__word}>{isEdit ? <Input value={valueTranslate} function={handleClickTranslate} /> : russian}</div>
            <div className={style.buttons}>
                {isEdit ? <Button class={styleBtn.btn} onButtonClick={saveWords} text='Save' /> : <Button class={styleBtn.btn} onButtonClick={returnState} text='Edit' />}
                {isEdit ? <Button class={styleBtn.btn} onButtonClick={returnState} text='X' /> : <Button class={styleBtn.btn} onButtonClick="" text='X' />}
            </div>
        </div>
    );
}

export default Word;