//////////////////////////////////////////////////////////////////////////////////////////////// - [ 1. USER OBJECT ]

// let userOne = {
//     email: 'email@exmaple.com',
//     name: 'UserOne',
//     login() {
//         console.log(this.email, 'has logged in successfully.')
//     },
//     logout() {
//         console.log(this.email, 'has logged out successfully.')
//     }
// };

/////////////////////////////////////////////////////////////////////////////////////////////// - [ 2. USER CLASSES ]

// class User {
//     //for creating a new user
//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//     }
//     login() {
//         console.log(this.email, 'logged in successfully.')
//     }
//     logout() {
//         console.log(this.email, 'logged out successfully.')
//     }
// }

// let userOne = new User('testing@example.com', 'UserGOD');
// let userTwo = new User('testing2@example.com', 'UserGODDESS');

// userOne.login();
// userTwo.logout();

///////////////////////////////////////////////////////////////////////////////////////////// - [ 3. METHOD CHAINING ]

// class User {
//     //for creating a new user
//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login() {
//         console.log(this.email, 'logged in successfully.')
//         return this; //returning the specific user
//     }
//     logout() {
//         console.log(this.email, 'logged out successfully.')
//         return this; //returning the specific user
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'score is now', this.score)
//         return this; //returning the specific user
//     }
// }

// let userOne = new User('testing@example.com', 'UserGOD');
// let userTwo = new User('testing2@example.com', 'UserGODDESS');

// userOne.login().updateScore().updateScore().logout();

///////////////////////////////////////////////////////////////////////////////////////////// - [ 4. INHERITANCE ]

// class User {
//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login() {
//         console.log(this.email, 'logged in successfully.')
//         return this;
//     }
//     logout() {
//         console.log(this.email, 'logged out successfully.')
//         return this; 
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'score is now', this.score)
//         return this; 
//     }
// }

// class Admin extends User { //associate User properties to Admin
//     deleteUser(user) {
//         users = users.filter(u => {
//             return u.email != user.email; //true keep user, false remove
//         })
//     }
// }

// ////
// let userOne = new User('testing@example.com', 'UserGOD');
// let userTwo = new User('testing2@example.com', 'UserGODDESS');
// let admin = new Admin('admin@example.com', 'Admin');
// let users = [userOne, userTwo, admin];

// admin.deleteUser(userTwo);

// console.log(users)

///////////////////////////////////////////////////////////////////////////////////////////// - [ 5. CONSTRUCTORS ]

// function User(email, name) {
//     this.email = email;
//     this.name = name;
//     this.online = false;
//     this.login = function(){
//         console.log(this.email, 'has logged in.')
//     }
//     this.logout = function(){
//         console.log(this.email, 'has logged out.')
//     }
// }

// let userOne = new User('testing@example.com', 'UserGOD');
// let userTwo = new User('testing2@example.com', 'UserGODDESS');

// console.log(userOne);
// userTwo.login();

///////////////////////////////////////////////////////////////////////////////////////////// - [ 6. PROTOTYPE ]
// smart bois use proto properties

// function User(email, name) {
//     this.email = email;
//     this.name = name;
//     this.online = false;
// }

// //user action prototypes
// User.prototype.login = function(){
//     this.online = true;
//     console.log(this.email, 'has logged in.')
// }
// User.prototype.logout = function() {
//     this.online = false;
//     console.log(this.email, 'has logged out.')
// }

// ////

// let userOne = new User('testing@example.com', 'UserGOD');
// let userTwo = new User('testing2@example.com', 'UserGODDESS');

// console.log(userOne);
// userTwo.login();

/////////////////////////////////////////////////////////////////////////////// - [ 7. PROTOTYPE INHERITANCE ]

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

//user action prototypes
User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in.')
}
User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out.')
}

function Admin(...args) {
    User.apply(this, args); //borrow the user class keys
    this.role = 'Super User';
}

Admin.prototype = Object.create(User.prototype); //borrow User functions for Admin

Admin.prototype.deleteUser = function(u) {
    users = users.filter(user => {
        return user.email != u.email; //true keep user, false remove
    });
};


let userOne = new User('testing@example.com', 'UserGOD');
let userTwo = new User('testing2@example.com', 'UserGODDESS');
let admin = new Admin('admin@example.com', 'Admin');

let users = [userOne, userTwo, admin];

console.log(admin);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////