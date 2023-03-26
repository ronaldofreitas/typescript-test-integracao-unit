
export default class User {
    /*
    id?: string;
    name: string;
    username: string;
    email: string;
    constructor(name:string, username:string, email:string) {
        this.name = name
        this.username = username
        this.email = email
    }
    */
    
    constructor(
        public name: string,
        public username: string,
        public email: string,
        public id?: string,
    ) {
        this.name = name
        this.username = username
        this.email = email
        this.id = id
    }

    static create(name: string, username: string, email: string) {
        const user = new User(name, username, email)
        return user
    }

    /*
    get getName() {
        return this.name
    }

    get getUsername() {
        return this.email
    }

    get getEmail() {
        return this.email
    }
    */
}