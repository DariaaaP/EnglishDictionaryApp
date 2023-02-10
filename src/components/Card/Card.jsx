import { useEffect, useRef } from "react";
import { observer, inject } from "mobx-react";
import Button from "../Button/Button.jsx";
import styleBtn from "./../Button/button.module.scss";
import style from "./card.module.scss";

function Card(props) {
    const { id, english, russian, transcription, countWords, isOpened, isActive } = props;

    const ref = useRef();

    useEffect(() => {
        if (isActive && ref.current) {
            ref.current.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive]);

    return (
        <div className={style.card}>
            <div className={style.about}>
                <div className={style.title}>{english}</div>
                <div className={style.transcription}>{transcription}</div>
            </div>
            {isOpened ? <div className={style.translate}> {russian}</div> : <Button onButtonClick={countWords(id)} class={styleBtn.btn} text='Translate' refs={ref} />
            }
        </div>
    );
}

export default inject(["wordsStore"])(observer(Card));