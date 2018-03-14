let latency = 200;
let id = 0;

function getId() {
  return ++id;
}

let contacts = [
  {
    id: getId(),
    firstName: 'Anabela Cristina',
    lastName: 'Ferreira Costa Da Silva',
    etal: false,
    title: 'De Portugal, em Português. Corso di livello iniziale e intermedio della lingua portoghese (A1-B2)',
    price: '25.00',
    isbn: '9788849155488',
    pages: '324',
    edition: '1',
    printurl: 'https://clueb.it/libreria/contesti-linguistici/de-portugal-em-portugues-corso-livello-iniziale-intermedio-della-lingua-portoghese-a1-b2/'
  },
  {
    id: getId(),
    firstName: 'Antonio Marcello',
    lastName: 'Caldarera',
    etal: false,
    title: 'Biochimica sistematica umana',
    price: '41.00',
    isbn: '9788849127812',
    pages: '496',
    edition: '2',
    printurl: 'https://clueb.it/libreria/clueb-economica/biochimica-sistematica-umanaseconda-edizione-economica/'
  },
  {
    id: getId(),
    firstName: 'Francesco',
    lastName: 'Vitucci',
    etal: false,
    title: 'Eserciziario orale di giapponese moderno. Livello elementare',
    price: '12.00',
    isbn: '9788849136326',
    pages: '80',
    edition: '2',
    printurl: 'https://clueb.it/libreria/senza%20categoria/eserciziario-orale-di-giapponese-moderno-nuova-edizionelivello-elementare/'
  },
  {
    id: getId(),
    firstName: 'Michèle Hélène',
    lastName: 'Bonte',
    etal: false,
    title: 'France radio. Société, langue et culture a travers les publicités radiodiffusées',
    price: '867-5309',
    isbn: '9788849125863',
    pages: '24.00',
    edition: '1',
    printurl: 'https://clueb.it/libreria/manuali-e-antologie/france-radiosociete-langue-et-culture-a-travers-les-publicites-radiodiffusees/'

  },
  {
    id: getId(),
    firstName: 'Felix',
    lastName: 'San Vicente',
    etal: true,
    title: 'Contrastiva. Grammatica della lingua spagnola',
    price: '32.00',
    isbn: '9788849136562',
    pages: '492',
    edition: '2',
    printurl: 'https://clueb.it/libreria/contesti-linguistici/contrastiva-grammatica-della-lingua-spagnola/'

  },
  {
    id: getId(),
    firstName: 'Felix',
    lastName: 'San Vicente',
    etal: true,
    title: 'Quaderno di esercizi della lingua spagnola',
    price: '29.00',
    isbn: '9788849155501',
    pages: '334',
    edition: '1',
    printurl: 'https://clueb.it/libreria/contesti-linguistici/quaderno-esercizi-della-lingua-spagnola/'

  },
  {
    id: getId(),
    firstName: 'Francesco',
    lastName: 'Campione',
    etal: false,
    title: 'La buona morte. Corso di formazione permanente sulla morte e il morire',
    price: '9.00',
    isbn: '9788849133820',
    pages: '80',
    edition: '1',
    printurl: 'https://clueb.it/libreria/lexis/lexis-tanatologia-psicologia-delle-situazioni-di-crisi-e-bioetica/la-buona-morte-corso-formazione-permanente-sulla-morte-morire/'
  }
];

export class WebAPI {
  isRequesting = false;

  getContactList() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = contacts.map(x =>  {
          return {
            id: x.id,
            firstName: x.firstName,
            lastName: x.lastName,
            etal: x.etal,
            title: x.title,
            price: x.price,
            isbn: x.isbn,
            pages: x.pages,
            edition: x.edition,
            printurl: x.printurl
          };});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getContactDetails(id) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = contacts.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  saveContact(contact) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(contact));
        let found = contacts.filter(x => x.id == contact.id)[0];

        if (found) {
          let index = contacts.indexOf(found);
          contacts[index] = instance;
        } else {
          instance.id = getId();
          contacts.push(instance);
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }
}

