import { useState, useEffect } from 'react';

import style from '../../Pages/ListWords/listwords.module.scss';
import styleBtn from '../../components/Button/button.module.scss';
import Button from '../../components/Button/Button.jsx';
import Input from '../../components/Input/Input.jsx';


function Word({ items, editWords }) {
    const { id, english, transcription, russian } = items;
    const [isEdit, setIsEdit] = useState(false);

    const returnState = () => setIsEdit(!isEdit);
    const returnWarn = () => {
        setWarningEnglish(false);
        setWarningTranscription(false);
        setWarningTranslation(false);
    }

    const [valueWord, setValueWord] = useState('');
    const [valueTranscription, setValueTranscription] = useState('');
    const [valueTranslate, setValueTranslate] = useState('');

    const [warningEnglish, setWarningEnglish] = useState(false);
    const [warningTranscription, setWarningTranscription] = useState(false);
    const [warningTranslation, setWarningTranslation] = useState(false);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (warningEnglish || warningTranscription || warningTranslation) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [warningEnglish, warningTranscription, warningTranslation]);

    useEffect(() => {
        setValueWord(english);
        setValueTranscription(transcription);
        setValueTranslate(russian);
    }, [english, transcription, russian])

    const blurHandler = (e) => {
        const ru = /[а-яА-ЯЁё-і]/;
        const num = /[0-9]/;
        // eslint-disable-next-line default-case
        switch (e.target.name) {
            case 'english':
                (e.target.value === "" || ru.test(e.target.value) || num.test(e.target.value)) ? setWarningEnglish(true) : setWarningEnglish(false);
                break;

            case 'transcription':
                (e.target.value === "" || ru.test(e.target.value) || num.test(e.target.value)) ? setWarningTranscription(true) : setWarningTranscription(false);
                break;

            case 'translation':
                (e.target.value === "" || num.test(e.target.value)) ? setWarningTranslation(true) : setWarningTranslation(false);
                break;
        }
    }

    function handleClickWord(e) {
        setValueWord(e.target.value);
    }
    function handleClickTranscription(e) {
        setValueTranscription(e.target.value);
    }
    function handleClickTranslate(e) {
        setValueTranslate(e.target.value);
    }

    function saveWords() {
        returnState();
        returnWarn();
        editWords(id, valueWord, valueTranscription, valueTranslate);

    }

    function returnStates() {
        returnState();
        returnWarn();
        setValueWord(english);
        setValueTranscription(transcription);
        setValueTranslate(russian);
    }

    return (
        <>
            {(warningEnglish || warningTranscription || warningTranslation) && <div className={style.table__error}>
                {(warningEnglish) && <div><span className={style.warning}>Warning! </span>Поле <span className={style.context}>Words</span> не должно быть пустым, содержать цифры и русские буквы</div>}

                {(warningTranscription) && <div><span className={style.warning}>Warning! </span>Поле <span className={style.context}>Transcription</span> не должно быть пустым, содержать цифры и русские буквы</div>}

                {(warningTranslation) && <div><span className={style.warning}>Warning! </span>Поле <span className={style.context}>Translate</span> не должны быть пустым и содержать цифры</div>}
            </div>}
            <div className={style.table__string}>
                <div className={style.table__word}>{isEdit ? <Input class={(warningEnglish) && 'red'} bluer={e => blurHandler(e)} value={valueWord} function={handleClickWord} name="english" /> : english}</div>

                <div className={style.table__word}>{isEdit ? <Input class={(warningTranscription) && 'red'} bluer={e => blurHandler(e)} value={valueTranscription} function={handleClickTranscription} name="transcription" /> : transcription}</div>

                <div className={style.table__word}>{isEdit ? <Input class={(warningTranslation) && 'red'} bluer={e => blurHandler(e)} value={valueTranslate} function={handleClickTranslate} name="translation" /> : russian}</div>

                <div className={style.buttons}>
                    {isEdit ? <Button class={styleBtn.btn} onButtonClick={saveWords} disabled={!formValid} text='Save' /> : <Button class={styleBtn.btn} onButtonClick={returnStates} text='Edit' />}
                    {isEdit ? <Button class={styleBtn.btn} onButtonClick={returnStates} text='X' /> : <Button class={styleBtn.btn} onButtonClick="" text='X' />}
                </div>
            </div>
        </>
    );
}

export default Word;