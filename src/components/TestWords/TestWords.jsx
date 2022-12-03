import Card from '../Card/Card.jsx';
import datas from './../../data/data.json';
import style from "./testwords.module.scss"

function TestWords() {
    return (
        <div className={style.container}>
            {datas.map((item, index) =>
                <Card key={index} transcription={item.transcription} englishWord={item.english} translate={item.russian} />
            )}
        </div>
    );
}

export default TestWords;