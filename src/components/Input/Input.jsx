import { useState } from 'react';

function Input(props) {

    const [isChanged, setIsChanged] = useState(false);

    function onInputChange() {
        setIsChanged(!isChanged);
        console.log("Поле меняется");
    }

    return (
        <input className="input" type="text" defaultValue={props.value} onChange={onInputChange} />
    );
}

export default Input;