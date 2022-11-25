import data from './../../data/data.json';
import style from './words.module.scss';
import styleBtn from './../Button/button.module.scss'
import Button from '../Button/Button';

function ListWords() {
    return (
        <>
            <div className={style.table}>
                <div className={style.table__string}>
                    <div className={style.table__title}>Words</div>
                    <div className={style.table__title}>Transcription</div>
                    <div className={style.table__title}>Translate</div>
                </div>
                {data.map((item) =>
                    <div className={style.table__string}>
                        <div className={style.table__word}>{item.english}</div>
                        <div className={style.table__word}>{item.transcription}</div>
                        <div className={style.table__word}>{item.russian}</div>
                        <div className={style.buttons}>
                            <Button class={styleBtn.btn} text='Edit' />
                            <Button class={styleBtn.btn} text='X' />
                        </div>
                    </div>
                )}
                <Button class={styleBtn.btn_add} text='New word' />
            </div>
        </>
    );
}

export default ListWords;