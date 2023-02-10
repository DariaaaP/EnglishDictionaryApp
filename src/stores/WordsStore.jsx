import { makeAutoObservable } from 'mobx';
import { ApiRequests } from '../ApiRequests/ApiRequests.jsx';

const apiRequests = new ApiRequests();

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
            const data = await apiRequests.getWords();
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
        await apiRequests.addWords(word)
            .then(() => {
                apiRequests.getWords();
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
            await apiRequests.deleteWords(id)
                .then(() => {
                    apiRequests.getWords();
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
        await apiRequests.editWords(word)
            .then(() => {
                apiRequests.getWords();
            })
            .catch(() => {
                this.errors = true;
            })
            .finally(() => {
                this.loadWords();
            })
    };
}