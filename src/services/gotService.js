export default class GotService {
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api'                      //_apiBase - означає щоб ніхто не змінював
    }
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        }
        return await res.json();
    };
    getAllBooks(){                                                                     //оприділяє всіх персонажів
        return this.getResource('/books')
    }
    getBook(id){                                                                     //оприділяє одного персонажа
        return this.getResource(`/books/${id}`)
    }
}

// const got = new GotService();

// got.getAllBooks()
// .then(res => console.log(res));

// got.getBook(9)
// .then(res => console.log(res));