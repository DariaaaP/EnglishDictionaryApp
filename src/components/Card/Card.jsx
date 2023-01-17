import Button from "../Button/Button.jsx";
import styleBtn from "./../Button/button.module.scss";
import style from "./card.module.scss";

function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.about}>
                <div className={style.title}>{props.english}</div>
                <div className={style.transcription}>{props.transcription}</div>
            </div>
            {props.isOpened ? <div className={style.translate}> {props.russian} </div> : <Button onButtonClick={props.countWords(props.id)} class={styleBtn.btn} text='Translate' />
            }
        </div>
    );
}

export default Card;