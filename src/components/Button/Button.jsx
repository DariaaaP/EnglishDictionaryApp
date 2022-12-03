function Button(props) {

    function onClick() {
        if (props.onButtonClick !== "") {
            props.onButtonClick(props.number);
        }
    }

    return (
        <button onClick={onClick} className={props.class}>{props.text}</button>
    );
}

export default Button;