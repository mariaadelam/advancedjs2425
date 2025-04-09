import { User } from "../modules/User.js";
// Modificam nume, email, varsa
let user = new User('1','ion','ion@ion.com',22);
user.doarme(7);
console.log(user);
user.nume = 'Dan';
user._email = 'ion@ion.ro';
user.email = 'dan@dan.com';
user.varsta = 25;
console.log(user);
user.datepersonale();