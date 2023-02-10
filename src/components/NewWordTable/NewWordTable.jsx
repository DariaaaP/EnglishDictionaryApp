/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { observer, inject } from "mobx-react";

import style from '../TableWords/tablewords.module.scss';
import styleBtn from '../../components/Button/button.module.scss';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';


function NewWordTable({ onButtonClick, wordsStore }) {
    const [word, setWord] = useState({
        english: '',
        transcription: '',
        russian: '',
    });

    const [formValid, setFormValid] = useState(false);

    const empty = !word.english || !word.transcription || !word.russian;

    const [warning, setWarning] = useState({
        englishInput: false,
        transcriptionInput: false,
        russianInput: false,
    })

    useEffect(() => {
        if (empty || warning.englishInput || warning.russianInput || warning.transcriptionInput) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [empty, warning.englishInput, warning.russianInput, warning.transcriptionInput]);

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


    const handleChange = e => {
        setWord({
            ...word,
            [e.target.name]: e.target.value
        });
        Validation(e);
    }

    const ChangeStateButton = () => {
        onButtonClick(false);
    }

    const SeveralFunction = () => {
        ChangeStateButton();
        wordsStore.addWords(word);
    }


    return (
        <>
            {(warning.englishInput || warning.russianInput || warning.transcriptionInput) && <div className={style.table__error}>
                {(warning.englishInput) && <div><span className={style.warning}>Warning! </span>Поле <span className={style.context}>Words</span> не должно быть пустым, содержать цифры и русские буквы</div>}

                {(warning.transcriptionInput) && <div><span className={style.warning}>Warning! </span>Поле <span className={style.context}>Transcription</span> не должно быть пустым, содержать цифры и русские буквы</div>}

                {(warning.russianInput) && <div><span className={style.warning}>Warning! </span>Поле <span className={style.context}>Translate</span> не должно быть пустым, содержать цифры или буквы латиницы</div>}
            </div>}
            <div className={style.table__string}>
                <div className={style.table__word}><Input class={(warning.englishInput) && 'red'} value={word.english} function={handleChange} name="english" /></div>

                <div className={style.table__word}><Input class={(warning.transcriptionInput) && 'red'} value={word.transcription} function={handleChange} name="transcription" /></div>

                <div className={style.table__word}><Input class={(warning.russianInput) && 'red'} value={word.russian} function={handleChange} name="russian" /></div>

                <div className={style.buttons}>
                    <Button class={styleBtn.btn} onButtonClick={SeveralFunction} disabled={!formValid} text='Save' />
                </div>
            </div>
            {empty && <label className={style.label}>* Please complete all fields</label>}
        </>
    );
}

export default inject(["wordsStore"])(observer(NewWordTable));