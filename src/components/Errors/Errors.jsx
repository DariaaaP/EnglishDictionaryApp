import style from './errors.module.scss';

function Errors() {
    return (
        <div className={style.container}>
            <img src="/assets/errors.gif" alt="Error" />
            <p className={style.message}><span className={style.warning}>Oooooopse!</span> Something went wrong ...</p>
        </div>
    );
}

export default Errors;