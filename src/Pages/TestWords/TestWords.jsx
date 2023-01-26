import { useState } from 'react';
import Card from '../../components/Card/Card.jsx';
import Button from '../../components/Button/Button.jsx';
import datas from '../../data/data.json';
import style from "./testwords.module.scss";
import styleBtn from "../../components/Button/button.module.scss";

function TestWords() {
    const [countIndex, setCountIndex] = useState(1);
    const [openTranslate, setOpenTranslate] = useState([]);
    const [click, setClick] = useState(0);


    const nextCard = () => {
        if (countIndex !== datas.length) {
            setCountIndex(countIndex + 1)
        } else if (countIndex === datas.length) {
            setCountIndex(1);
        }
    }

    const prevCard = () => {
        if (countIndex !== 1) {
            setCountIndex(countIndex - 1)
        } else if (countIndex === 1) {
            setCountIndex(datas.length);
        }
    }

    const countLearnWords = (id) => () => {
        setOpenTranslate(openTranslate => [...openTranslate, id]);
        setClick(click => click + 1);
    }


    const handleRestart = () => {
        setOpenTranslate([]);
        setClick(0);
    }


    const words = datas.map((item, idx) => {
        let isOpened = false;
        if (openTranslate.includes(item.id)) {
            isOpened = true;
        }
        return (
            <Card
                key={item.id}
                id={item.id}
                {...item}
                countWords={countLearnWords}
                isOpened={isOpened}
                isActive={(idx + 1) === countIndex}
            />
        )
    })
    return (
        <div className={style.container}>
            <div className={style.MainInfo}>
                <Button onButtonClick={prevCard} class={styleBtn.btnImg} text={<img className={styleBtn.prevArrow} src="/assets/arrow2.png" alt="left" />} />
                {words[countIndex - 1]}
                <Button onButtonClick={nextCard} class={styleBtn.btnImg} text={<img className={styleBtn.nextArrow} src="/assets/arrow.png" alt="right" />} />
            </div>
            <div className={style.CountCards}>
                <span className={style.NowCount}>{countIndex}</span>/{words.length}
            </div>
            <div className={style.CountCards}>
                {(click === words.length) ? <span className={style.NowCount}>Вы изучили все слова!</span> : <p>Изучено слов: <span className={style.NowCount}>{click}</span></p>
                }
            </div>
            <div className={style.CountCards}>
                <Button class={styleBtn.btn_add} text='Again' onButtonClick={handleRestart} />
            </div>
        </div>
    );
}

export default TestWords;