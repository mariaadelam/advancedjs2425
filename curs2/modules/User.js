class User{
    #varsta; //private property
    _email; //protected property
    constructor(id,nume){
        //setam proprietatile
        this.id = id;
        this.nume = nume;
    }

    set email(myemail){
        console.log('Sunt in setter email');

        this._email = myemail;
        
    }

    get email(){
        return this._email;
    }

    set varsta(age){
        console.log('Sunt in setter varsta');
        this.#varsta = age;
    }

    get varsta(){
        return this.#varsta;
    }
    datepersonale(){
        console.log(`Salut numele meu este ${this.nume}, adresa de email este ${this._email} si am ${this.#varsta} ani.`);
    }
    mananca (claorii){
        console.log(`Mananca ${claorii} pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} pe zi`);
    }
}
export {User}
