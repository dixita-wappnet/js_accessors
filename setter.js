class user {

    constructor(username, password)
    {
        this.username = username;
        this.password = password;
    }

    login()
    {
        alert('You are successfully login')
    }

    //setter accessor 

    set name(newName)
    {
        this.username = newName
    }
}

let user1 = new user("Himanshu", '123@him');
console.log(user1)

// access login method
user1.login()

console.log(user1.name);

// change the value of username of user1 object
user1.username = "Dixita"

console.log(user1.name);

