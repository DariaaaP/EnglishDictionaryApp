import { useState, useEffect } from 'react';

import datas from '../../data/data.json';
import style from './listwords.module.scss';
import styleBtn from '../../components/Button/button.module.scss'
import Button from '../../components/Button/Button.jsx';
import Word from '../../components/Word/Word';


function ListWords() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        setWords(datas)
    }, [])

    function editWords(id, english, transcription, russian) {
        const copyWords = [...words];
        const resultWords = copyWords.map(item => {
            if (item.id === id) {
                item.english = english
                item.transcription = transcription
                item.russian = russian
                return item
            }
            return item
        })
        setWords(resultWords)
    }

    if (!words) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={style.table}>
            <div className={style.table__string}>
                <div className={style.table__title}>Words</div>
                <div className={style.table__title}>Transcription</div>
                <div className={style.table__title}>Translate</div>
            </div>
            {
                words.map((item) =>
                    <Word key={item.id} items={item} editWords={editWords}></Word>)
            }
            <Button class={styleBtn.btn_add} text='New word' />
        </div>

    );
}

export default ListWords;