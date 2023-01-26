function Button(props) {
    function onClick() {
        if (props.onButtonClick !== "") {
            props.onButtonClick(props.number);
        }
    }

    return (
        <button ref={props.refs} onClick={onClick} className={props.class} disabled={props.disabled}>{props.text}</button>
    );
}

export default Button;