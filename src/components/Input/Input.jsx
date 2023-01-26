import style from './input.module.scss';

function Input(props) {
    return (
        <input className={(props.class) ? style.warning : style.input} type="text" defaultValue={props.value} onChange={props.function} onBlur={props.bluer} name={props.name} />
    );
}

export default Input;