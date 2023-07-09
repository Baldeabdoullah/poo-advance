//------------------------
// LA POO EN JAVASCRIPT
// on reconnait un objet aux accolades
const obj = {
  pseudo: "from scratch",
  ville: "bordeiax",
  admin: false,

  direBonjour: function () {
    console.log("bonjour le suis " + this.pseudo);
  },

  //   direBonjour() {
  //     console.log("bonjour le suis " + obj.pseudo);
  //   },
};

//Ajouter
obj.age = 24;
obj["admin"] = true;
// console.log(obj);

//modifier
obj.pseudo = "FS";

//supprimer
delete obj.ville;
// console.log(obj);

// Checker si une propriete existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//parcourir l'objet
for (const key in obj) {
  //   console.log(key);
  //   console.log(key + " : " + obj[key]);
}

// console.log(obj.direBonjour());

// obtenir les clees  d'un objets
const values = Object.values(obj);
// console.log(values);

const nestedArray = Object.entries(obj);
console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poid: "75kg",
};

// fussionner les objets

const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

// Empecher les modification
const newObj = Object.seal(obj);
newObj.pseudo = "test";
newObj.adresse = "42 avenue du code";
// console.log(newObj);

//--------------------
// construire des objets

// fonction constructeur
function User(pseudo, ville) {
  (this.pseudo = pseudo), (this.ville = ville);
  this.getCity = function () {
    console.log(this.pseudo + " habite a " + this.ville);
  };
}
const user1 = new User("from scratch", "42 avenue du code");

const user2 = new User("denis", "Nantes");

// console.log(user2.getCity());
//--------------------------------------
//factory function
// function User3(pseudo, ville) {
//   return [pseudo, ville];
// }

// const User4 = User3("FSA", "nice");
// console.log(User4);

//-------------------
//les classes
class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  saymyname = function () {
    console.log("bonjour je suis avec" + this.pseudo);
  };
}

const User5 = new Utilisateur("Samia", "lyon");
Utilisateur.prototype.sayCity = function () {
  console.log("j'habite a " + this.ville);
};

Object.assign(Utilisateur.prototype, {
  methode1() {},
  methode2() {},
});

// console.log(User5);
//----------
// l'heritage

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + "dit:  " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("le chien court");
  }
}

const rintintin = new Dog("rintintin", 9);

console.log(rintintin);
