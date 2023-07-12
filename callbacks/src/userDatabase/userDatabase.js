/**
 * This UserDatabase object represents a list of all our rewards program users
 * 
 * Can you find and fix the bugs so that the expected behavior is achieved?
 */

const UserDatabase=
  users = []

  // SOLUTION: this keyword is not bound to the UserDatabase since this was an arrow function
  // SOLUTION: change the arrow function into a normal function
  function addUser(name, id, phone){
    users.push({ name, id , phone, hasCoupon: false, hasUsedCoupon: false});
  }
  // what is wrong with this function?
  function loadFromFile() {
    const usersFromFile = require("./usersdb.json");
    this.users = usersFromFile;
  }
  

module.exports = UserDatabase;

// you can use these console logs to help you debug addUser()
console.log(UserDatabase.users);
UserDatabase.addUser("John Doe", 1234, "+1 (111) 111-1111");
console.log(UserDatabase.users);


// you can use these console logs to help you debug loadFromFile()
UserDatabase.loadFromFile();
console.log(UserDatabase.users);


