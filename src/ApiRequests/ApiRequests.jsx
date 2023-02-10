export class ApiRequests {

    async getWords() {
        const response = await fetch(`/api/words`)
        return response.json();
    }

    editWords = async (word) => {
        await fetch(`/api/words/${word.id}/update`, {
            method: 'POST',
            body: JSON.stringify(word),
        })
    }

    addWords = async (word) => {
        await fetch(`/api/words/add`, {
            method: 'POST',
            body: JSON.stringify(word),
        });
    }

    deleteWords = async (id) => {
        await fetch(`/api/words/${id}/delete`, {
            method: 'POST'
        });
    }
}