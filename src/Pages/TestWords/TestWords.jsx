import { useState } from 'react';
import Card from '../../components/Card/Card.jsx';
import Button from '../../components/Button/Button.jsx';
import datas from '../../data/data.json';
import style from "./testwords.module.scss";
import styleBtn from "../../components/Button/button.module.scss";

function TestWords() {
    const [countIndex, setCountIndex] = useState(1);

    const nextCard = () => {
        if (countIndex !== datas.length) {
            setCountIndex(countIndex + 1)
        } else if (countIndex === datas.length) {
            setCountIndex(1)
        }
    }

    const prevCard = () => {
        if (countIndex !== 1) {
            setCountIndex(countIndex - 1)
        } else if (countIndex === 1) {
            setCountIndex(datas.length);
        }
    }


    const words = datas.map((item) => {
        return (
            <Card
                key={item.id}
                id={item.id}
                {...item}
            />
        )
    })
    return (
        <div className={style.container}>
            <div className={style.MainInfo}>
                <Button onButtonClick={prevCard} class={styleBtn.btnImg} text={<img className={styleBtn.prevArrow} src="/assets/left.png" alt="left" />} />
                {words[countIndex - 1]}
                <Button onButtonClick={nextCard} class={styleBtn.btnImg} text={<img className={styleBtn.nextArrow} src="/assets/right.png" alt="right" />} />
            </div>
            <div className={style.CountCards}>
                <span className={style.NowCount}>{countIndex}</span>/{words.length}
            </div>
        </div>
    );
}

export default TestWords;