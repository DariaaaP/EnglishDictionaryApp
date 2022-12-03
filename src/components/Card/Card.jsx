import { useState } from "react";
import Button from "../Button/Button.jsx";
import styleBtn from "./../Button/button.module.scss";
import style from "./card.module.scss";

function Card(props) {
    const [isPressed, setIsPressed] = useState(0);

    function onButtonClick() {
        setIsPressed(!isPressed);
    }


    return (
        <div className={style.card}>
            <div className={style.about}>
                <div className={style.title}>{props.englishWord}</div>
                <div className={style.transcription}>{props.transcription}</div>
            </div>
            {isPressed ? <div className={style.translate}> {props.translate} </div> : <Button onButtonClick={onButtonClick} class={styleBtn.btn} text='Translate' />
            }
        </div>
    );
}

export default Card;