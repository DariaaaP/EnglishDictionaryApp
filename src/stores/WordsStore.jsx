import { makeAutoObservable } from 'mobx';

const getWords = () =>
    fetch(`/api/words`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((response) => response);

export default class WordsStore {
    words = [];
    loading = true;
    errors = false;


    constructor() {
        makeAutoObservable(this);
    }

    loadWords = async () => {
        try {
            this.loading = true;
            const data = await getWords();
            this.words = data;
        }
        catch (errors) {
            this.words = [];
            this.errors = true;
        }
        finally {
            this.loading = false;
        }
    };

    addWords = async (word) => {
        this.loading = true;
        await fetch(`/api/words/add`, {
            method: 'POST',
            body: JSON.stringify(word),
        })
            .then(() => {
                getWords();
            })
            .catch(() => {
                this.errors = true;
            })
            .finally(() => {
                this.loadWords();
            })
    };


    deleteWords = async (id) => {
        let isDelete = window.confirm("Вы точно хотите удалить это слово?");
        if (isDelete) {
            this.loading = true;
            await fetch(`/api/words/${id}/delete`, {
                method: 'POST'
            })
                .then(() => {
                    getWords();
                })
                .catch(() => {
                    this.errors = true;
                })
                .finally(() => {
                    this.loadWords();
                })
        }
    };

    editWords = async (word) => {
        this.loading = true;
        await fetch(`/api/words/${word.id}/update`, {
            method: 'POST',
            body: JSON.stringify(word),
        })
            .then(() => {
                getWords();
            })
            .catch(() => {
                this.errors = true;
            })
            .finally(() => {
                this.loadWords();
            })
    };
}