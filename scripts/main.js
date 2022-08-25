const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const conPassword = document.querySelector('#cpassword');
const btn = document.querySelector('#btn');

const getUserInfo = (e) => {   //we pass event to the function to preventDefault which stops the page from loading
    e.preventDefault();

    let validFname = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;  
    validFname = validFname.test(fname.value);

    let validLname = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;  
    validLname = validLname.test(lname.value);
    
    let validEmail =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    validEmail = validEmail.test(email.value);

    let validPassword  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    validPassword = validPassword.test(password.value);


    if(validFname === false){
        const message = document.querySelector('#fvalid');
        message.textContent = "Your name should contain 2 characters atleast and should not contain a special character or a number and it cannot be empty.";
    }
    else{
        console.log(`First Name: ${fname.value}`);
    }

    if(validLname === false){
        const message = document.querySelector('#lvalid');
        message.textContent = "Your name should contain 2 characters atleast and should not contain a special character or a number and it cannot be empty.";
    }
    else{
        console.log(`Last Name: ${lname.value}`);
    }

    if(validEmail == false){
        const message = document.querySelector('#evalid');
        message.textContent = "Please, match the given format.";   
    }

    else{
        console.log(`Email: ${email.value}`);
    }

    if(validPassword == false){
        const message = document.querySelector('#pvalid');
        message.textContent = "You password should be at least 6 characters long, and must contain a number and a special character.";   
    }

    if(password != conPassword){
        const message = document.querySelector('#cpvalid');
        message.textContent = "Password doesn't match.";          
    }
}

btn.addEventListener('click', getUserInfo);

