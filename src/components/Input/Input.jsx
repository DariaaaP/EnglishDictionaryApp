import style from './input.module.scss';

function Input(props) {
    return (
        <input className={style.input} type="text" defaultValue={props.value} onChange={props.function} />
    );
}

export default Input;