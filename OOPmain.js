/*
map is used to store the key-value pairs. it work like a dictionary. We are using it to store username
and password
*/
const userMap = new Map();

class User{
    
    constructor(email, password, confirmpassword){
        this.email = email;
        this.password = password;
        this.confirmpassword = confirmpassword;
        this.logIn = false;
    };

    //this method is used for sign-up
    signUp(){
        //check that this email id already in our map. If it is there then it means that some user is already associated with this email id
        if(userMap.has(this.email) === false){
            //If email is not there in map then check if password matches the confirmation password and match should be case insensitive
            if(this.password === this.confirmpassword){
                //add the email and password in map
                userMap.set(this.email, this.password);
                console.log("User has succesfully signed up");
            }
            else{
                //password does not match with confirmation password
                console.log("Password does not match with confirmation password please check and enter again")
            }
        }
        else{
            //a user is already associated with this email id
            console.log("A user is already associated with this email.")
        }
    };

     //this method is used to change the password
    passwordChange(oldPass, newPass){
        //check that user is logged in or not
        if(this.logIn){
             //if old password is same to password in our map corresponding to user email id
            if(userMap.get(this.email)===oldPass){
                this.password = newPass;
                //set the new password for this mail id
                userMap.set(this.email, newPass);
                console.log("Password has been changed successully");
            }
            else{
                //if old password is not same to password in our map corresponding to user email id
                console.log("Password can't be changed , old password doesn't match with password in our system");
            }
        }
        else{
            console.log("user is not authorized to change the password");
        }   
    };

    //this method is used for sign-in
    signIn(){
        //this is used to check that email id existed in our map. If it is existed then match the password corresponding to this email in map to password entered by user
        if(userMap.has(this.email) && (this.password === userMap.get(this.email))){
            console.log("User is successfully logged in");
            //make it true that user is successfully logged in
            this.logIn = true;
        }
        else{
            //when email is not there in map or if it is there in map then password does not match with password corresponding to that email in map
            console.log("Username or password is incorrect");
            this.logIn = false;
        }
        // console.log("login is this: " + typeof(this.logIn)); //Use to check the boolean value.
        return this.logIn;
    };

    //this method is used for sign-out
    signOut(){
        //login is true then make it false to logout the user
        if(this.logIn){
            this.logIn = false;
            console.log("user is successfully logged out");
        }
        else{
            console.log("User is not logged in");
        }
    
    };
    
}

let rupesh = new User("rupesh@gmail.com", "rupesh", "rupesh");
rupesh.signUp();
rupesh.signIn();
rupesh.signOut();