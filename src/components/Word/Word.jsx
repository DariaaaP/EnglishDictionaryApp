import { useState, useEffect } from 'react';
import { observer, inject } from "mobx-react";

import style from '../TableWords/tablewords.module.scss';
import styleBtn from '../../components/Button/button.module.scss';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';


const Word = ({ wordsStore, item }) => {

    const [state, setState] = useState('');

    useEffect(() => {
        setState(item);
    }, [item])

    const [isEdit, setIsEdit] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const [warning, setWarning] = useState({
        englishInput: false,
        transcriptionInput: false,
        russianInput: false,
    })

    function Validation(e) {
        const ru = /^[а-яёА-ЯЁ]*$/ig;
        const eng = /^[\w\\:\]\\[]*$/ig;
        const num = /[0-9]/;
        // eslint-disable-next-line default-case
        switch (e.target.name) {
            case 'english':
                setWarning({
                    ...warning,
                    englishInput: (e.target.value === "" || !eng.test(e.target.value) || num.test(e.target.value)) ? true : false,
                });
                break;

            case 'transcription':
                setWarning({
                    ...warning,
                    transcriptionInput: (e.target.value === "" || !eng.test(e.target.value) || num.test(e.target.value)) ? true : false,
                });
                break;

            case 'russian':
                setWarning({
                    ...warning,
                    russianInput: (e.target.value === "" || num.test(e.target.value) || !(ru.test(e.target.value))) ? true : false,
                });
                break;
        }
    }

    const clickChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
        Validation(e);
    }

    const returnState = () => setIsEdit(!isEdit);

    const returnWarn = () => {
        setWarning(false);
    }

    useEffect(() => {
        if (warning.englishInput || warning.russianInput || warning.transcriptionInput) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [warning.englishInput, warning.russianInput, warning.transcriptionInput]);


    const clickCancel = () => {
        returnState();
        returnWarn();
        setState({
            ...item,
        });
    }

    const clickSave = () => {
        wordsStore.editWords(state);
        returnState(!isEdit);
    };

    const clickDelete = () => {
        wordsStore.deleteWords(item.id);
    };

    return (
        <>
            {(warning.englishInput || warning.russianInput || warning.transcriptionInput) && <div className={style.table__error}>

                {(warning.englishInput) && <div><span className={style.warning}>Warning! </span>Поле <span className={style.context}>Words</span> не должно быть пустым, содержать цифры и русские буквы</div>}

                {(warning.transcriptionInput) && <div><span className={style.warning}>Warning! </span>Поле <span className={style.context}>Transcription</span> не должно быть пустым, содержать цифры и русские буквы</div>}

                {(warning.russianInput) && <div><span className={style.warning}>Warning! </span>Поле <span className={style.context}>Translate</span> не должно быть пустым, содержать цифры или буквы латиницы</div>}
            </div>}
            <div className={style.table__string}>
                <div className={style.table__word}>{isEdit ? <Input class={(warning.englishInput) && 'red'} value={state.english} function={clickChange} name="english" /> : item.english}</div>

                <div className={style.table__word}>{isEdit ? <Input class={(warning.transcriptionInput) && 'red'} value={state.transcription} function={clickChange} name="transcription" /> : item.transcription}</div>

                <div className={style.table__word}>{isEdit ? <Input class={(warning.russianInput) && 'red'} value={state.russian} function={clickChange} name="russian" /> : item.russian}</div>

                <div className={style.buttons}>
                    {isEdit ? <Button class={styleBtn.btn} onButtonClick={clickSave} text='Save' disabled={!formValid} /> : <Button class={styleBtn.btn} onButtonClick={returnState} text='Edit' />}
                    {isEdit ? <Button class={styleBtn.btn} onButtonClick={clickCancel} text='X' /> : <Button class={styleBtn.btn} onButtonClick={clickDelete} text='X' />}
                </div>
            </div>
        </>
    );
}

export default inject(["wordsStore"])(observer(Word));