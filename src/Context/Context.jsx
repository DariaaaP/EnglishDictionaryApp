import { useState, useEffect, createContext } from "react";

const Context = createContext();

function ContextProvider(props) {

    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false);

    const getWords = () => {
        setLoading(true);
        fetch('/api/words/')
            .then((response) => response.json())
            .then((response) => {
                setWords(response);
            })
            .catch((errors) => setErrors(errors))
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getWords();
    }, []);

    const editWords = (word) => {
        fetch(`/api/words/${word.id}/update`, {
            method: "POST",
            body: JSON.stringify(word),
        })
            .then(() => {
                getWords();
            })
            .catch((errors) => setErrors(errors));
    };

    const deleteWords = (id) => {
        fetch(`/api/words/${id}/delete`, {
            method: "POST",
        })
            .then(() => {
                getWords();
            })
            .catch((errors) => setErrors(errors));
    };

    const addWords = (word) => {
        fetch(`/api/words/add`, {
            method: "POST",
            body: JSON.stringify(word),
        })
            .then(() => {
                getWords();
            })
            .catch((errors) => setErrors(errors));
    };

    return (
        <Context.Provider
            value={{
                words,
                loading,
                errors,
                editWords,
                deleteWords,
                addWords,
            }}
        >
            {props.children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };