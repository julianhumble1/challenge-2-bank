export default class Credit {
    #date;

    getDate() {
        return this.#date;
    };

    constructor(date) {
        this.#date = date;
    }
}