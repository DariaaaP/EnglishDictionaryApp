import { useState } from 'react'

import datas from './../../data/data.json';
import style from './listwords.module.scss';
import styleBtn from './../Button/button.module.scss'
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';


function ListWords() {
    const [isEdit, setIsEdit] = useState();

    const returnState = () => setIsEdit(!isEdit);


    return (
        <div className={style.table}>
            <div className={style.table__string}>
                <div className={style.table__title}>Words</div>
                <div className={style.table__title}>Transcription</div>
                <div className={style.table__title}>Translate</div>
            </div>
            {datas.map((item, index) =>
                <div className={style.table__string} key={index} number={index}>
                    <div className={style.table__word}>{isEdit === index ? <Input value={item.english} /> : item.english}</div>
                    <div className={style.table__word}>{isEdit === index ? <Input value={item.transcription} /> : item.transcription}</div>
                    <div className={style.table__word}>{isEdit === index ? <Input value={item.russian} /> : item.russian}</div>
                    <div className={style.buttons}>
                        {isEdit === index ? <Button class={styleBtn.btn} onButtonClick={setIsEdit} text='Save' number={index} /> : <Button class={styleBtn.btn} onButtonClick={setIsEdit} text='Edit' number={index} />}
                        {isEdit === index ? <Button class={styleBtn.btn} onButtonClick={returnState} number={index} text='X' /> : <Button class={styleBtn.btn} onButtonClick="" text='X' />}
                    </div>
                </div>
            )}
            <Button class={styleBtn.btn_add} text='New word' />
        </div>
    );
}

export default ListWords;