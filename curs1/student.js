class Student {
   nota1;
   nota2;
  constructor(id, nume, prenume, varsta) {
      this.id = id;
      this.nume = nume;
      this.prenume = prenume;
      this.varsta = varsta;
  }
  saluta() {
      console.log(`Buna, numele meu este ${this.nume} ${this.prenume} si am varsta de ${this.varsta} ani`);
  }
  examen(nota1, nota2) {
      this.nota1 = nota1;
      this.nota2 = nota2;
      console.log(`Am fost la examen si am luat notele ${this.nota1}, ${this.nota2}`);
  }
  calcMedia() {
    let media = (this.nota1 + this.nota2) / 2;
    this.media = media;
    console.log(`Media pentru studentul ${this.nume} ${this.prenume} este ${this.media}`);
  }

}
export {Student};