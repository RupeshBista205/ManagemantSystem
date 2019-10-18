const userMap = new Map();

let User = (function usersAccounts() {
    let email = "";
    let password = "";
    let logIn = false;
    return {
        //This is used for sign up
        signUp: function(email, password, confirmpassword) {
            //check that this email id already in our map. If it is there then it means that some user is already associated with this email id
            if(userMap.has(email) === false){
                //If email is not there in map then check if password matches the confirmation password and match should be case insensitive
                if(password === confirmpassword){
                    //add the email and password in map
                    userMap.set(email, password);
                    console.log("User has succesfully signed up");
                }
                else{
                    //password does not match with confirmation password
                    console.log("Password does not match with confirmation password please check and enter again")
                    return false;
                }
            }
            else{
                //a user is already associated with this email id
                console.log("A user is already associated with this email.")
            }
            return true;
        },

        //This is used for changing the password
        passwordChange: function(email, oldPass, newPass){
            if(login){
                //if old password is same to password in our map corresponding to user email id
                if(userMap.get(email)===oldPass){
                    password = newPass;
                    //update the password for that mail id
                    userMap.set(email, newPass);
                    console.log("Password has been changed successully");
                    return true;
                }
                else{
                    //if old password is not same to password in our map corresponding to user email id
                    console.log("Password can't be changed , old password doesn't match with password in our system");
                    return false;
                }
            }
            else{
                console.log("user is not authorized to change the password");
            } 
        },

        //This is used for sign in
        signIn: function(email, password){
            //this is used to check that email id existed in our map. If it is existed then match the password corresponding to this email in map to password entered by user
            if(userMap.has(email) && (password === userMap.get(email))){
                console.log("User is successfully logged in");
                //make it true that user is successfully logged in
                logIn = true;
            }
            else{
                //when email is not there in map or if it is there in map then password does not match with password corresponding to that email in map
                console.log("Username or password is incorrect");
                logIn = false;
            }
            return logIn;
        },

        //This is used for sign out
        signOut: function(){
            //login is true then make it false to logout the user
            if(logIn === true){
                logIn = false;
                console.log("user is successfully logged out");
            }
            else{
                console.log("User is not logged in");
            }
        
        },
    };
}());

let email = "rupesh@gmail.com";
let password = "rupesh";
let confirmpassword = "rupesh";
let oldPass = "rupesh";
let newPass = "rupesh_new";

console.log(User.signUp(email, password, confirmpassword));
console.log(User.signIn(email, password));
console.log(User.passwordChange(email, oldPass, newPass));
console.log(User.signOut());