function ques1() {
    // Write a program that takes two user inputs for first and last name 
    // using prompt and merge them in a new variable titled fullName. 
    // Greet the user using his full name.

    let first_name,
        last_name,
        fullName;

    first_name = prompt("Enter Your First Name:");
    last_name = prompt("Enter Your Last Name:");

    if (first_name != null) {

        if (last_name != null) {

            fullName = first_name + " " + last_name;
            if (+first_name <= 0 || +first_name > 0 || +last_name <= 0 || +last_name > 0) {
                alert("Invalid Input in First Name or Last Name.")
            }
            else {
                alert("Hello " + fullName + "!\nWelcome in Web Development Portal")
            }

        }
        else {
            alert("You didn't enter Last Name.\nSession Terminated.");
        }
    }
    else {
        alert("You didn't enter First Name.\nSession Terminated.");
    }
}

function ques2() {

    // 2. Write a program to take a user input about his favorite 
    // mobile phone model.Find and display the length of user input in your browser

    let  mob_model;

    mob_model = prompt("Enter Your Favorite Mobile Phone Model:\nI will tell You length of Input");
    console.log(mob_model);

    if (mob_model != null && mob_model != "")
    {
       document.write("<h4>String Length:</h4>");
       document.write("My Favorite phone is: " + mob_model + "<br>");
       document.write("Length of string: " + mob_model.length);
    }
    else
    {
        alert("You Quit Session.");
    }
}

function ques3() {
    // Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
   
    // declare
    let  string = "Pakistani";

    let n_index = string.indexOf("n"); 

     document.write("<h4>Character Index:</h4>");

     document.write("<b>String: " + string + "</b><br>");
     document.write("<b>Index of 'n': " + n_index);
}

function ques4() {

    // Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

    // declare
    let  string = "Hello World";

    let last_l_index = string.lastIndexOf("l"); 

     document.write("<h4>Character Index:</h4>");

     document.write("<b>String: " + string + "</b><br>");
     document.write("<b>Index of 'l': " + last_l_index);

}

function ques5() {
    // Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
    
    // declare
    var  string = "Pakistani";

    var char_at_index = string.charAt(3); 

     document.write("<h4>Extract Character:");
     document.write("  Using charAt(n):</h4>");

     document.write("<b>String: " + string + "</b><br>");
     document.write("<b>Character at index 3: " + char_at_index );
}

function ques6() {
    // Write a program that takes two user inputs for first and last name 
    // using prompt and merge them in a new variable titled fullName. 
    // Greet the user using his full name.

    let first_name,
        last_name,
        fullName;

    first_name = prompt("Enter Your First Name:");
    last_name = prompt("Enter Your Last Name:");

    if (first_name != null) {

        if (last_name != null) {

            fullName = first_name.concat(" ",last_name);
            console.log(fullName);
            if (+first_name <= 0 || +first_name > 0 || +last_name <= 0 || +last_name > 0) {
                alert("Invalid Input in First Name or Last Name.")
            }
            else {
                alert("Hello " + fullName + "!\nWelcome in Web Development Portal")
            }

        }
        else {
            alert("You didn't enter Last Name.\nSession Terminated.");
        }
    }
    else {
        alert("You didn't enter First Name.\nSession Terminated.");
    }
}

function ques7() {
    // Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 

    // declare
    let  city = "Hydrabad",
    replace = "Islam";

document.write("<h4>City Name Replace:</h4>");
document.write("City: " + city);

city = city.replace("Hydr",replace);
document.write("<br>After replacement: " + city);
}

function ques8() {
    // /Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;
   
    let message = "Ali and Sami are best friends. They play cricket and football together.";

    document.write("<h4>Replace elements Using RegEx:</h4>");
    document.write("message: " + message);

    message = message.replace(/and/gi,"&");
    document.write("<br><br>After replacement: " + message);
}

function ques9() {

    // /Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
    let num = "472";

    document.write("<h4>String into Number:</h4>");
    document.write("Value: " , num);
    document.write("<br>Type: " , typeof num);

    num = parseInt(num , 10);
    document.write("<br><br>Value: " , num);
    document.write("<br>Type: " , typeof num);
}

function ques10() {
    // Write a program that takes user input. Convert and show the input in capital letters.
    
    let in_string;

    in_string = prompt("Enter Any Content to Convert into Upper Case:");
    
    if (in_string != null && in_string != "")
    {
        document.write("<h4>Convert into Upper Case:</h4>");
        document.write("User Input: " + in_string + "<br>");

        var uppercase_str = in_string.toUpperCase();
        document.write("Upper Case: " + uppercase_str);
    }
    else
    {
        alert("You Quit Session.");
    }
       
}

function ques11() {
    // Write a program that takes user input. Convert and show the input in title case.
    // declare
    var number_for_multi = 5,
        result = 1;

    console.log("Print Multiples of 5 Ranging 1 to 100:");
    document.write("<h4>Print Multiples of 5 Ranging 1 to 100:</h4>");
    for (var a = 1; result < 100; a++) {
        console.log(a);
        result = a * number_for_multi;
        document.write(result + ",");
    }
}

function ques12() {
    // /Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.
    
    // declare
    var number_for_multi = 5,
        result = 1;

    console.log("Print Multiples of 5 Ranging 1 to 100:");
    document.write("<h4>Print Multiples of 5 Ranging 1 to 100:</h4>");
    for (var a = 1; result < 100; a++) {
        console.log(a);
        result = a * number_for_multi;
        document.write(result + ",");
    }
}

function ques13() {
    // Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
    // Note: 
    // ASCII code of ! is 33 
    // ASCII code of , is 44 
    // ASCII code of . is 46 
    // ASCII code of @ is 64
    
    // declare
    var number_for_multi = 5,
        result = 1;

    console.log("Print Multiples of 5 Ranging 1 to 100:");
    document.write("<h4>Print Multiples of 5 Ranging 1 to 100:</h4>");
    for (var a = 1; result < 100; a++) {
        console.log(a);
        result = a * number_for_multi;
        document.write(result + ",");
    }
}

function ques14() {
    // You have an array 
    // A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. 
    // After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. 
    // Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. 
    // Example:
    
    // declare
    var number_for_multi = 5,
        result = 1;

    console.log("Print Multiples of 5 Ranging 1 to 100:");
    document.write("<h4>Print Multiples of 5 Ranging 1 to 100:</h4>");
    for (var a = 1; result < 100; a++) {
        console.log(a);
        result = a * number_for_multi;
        document.write(result + ",");
    }
}

function ques15() {
    // Write a program to take password as an input from user. 
    // The password must qualify these requirements: 
    // a. It should contain alphabets and numbers 
    // b. It should not start with a number 
    // c. It must at least 6 characters long If the password does not meet above requirements, 
    // prompt the user to enter a valid password. 
    // For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
    
    // declare
    var number_for_multi = 5,
        result = 1;

    console.log("Print Multiples of 5 Ranging 1 to 100:");
    document.write("<h4>Print Multiples of 5 Ranging 1 to 100:</h4>");
    for (var a = 1; result < 100; a++) {
        console.log(a);
        result = a * number_for_multi;
        document.write(result + ",");
    }
}

function ques16() {
    // Write a program to convert the following string to an array using string split method. 
    // var university = “University of Karachi”; 
    // Display the elements of array in your browser.
    
    // declare
    var number_for_multi = 5,
        result = 1;

    console.log("Print Multiples of 5 Ranging 1 to 100:");
    document.write("<h4>Print Multiples of 5 Ranging 1 to 100:</h4>");
    for (var a = 1; result < 100; a++) {
        console.log(a);
        result = a * number_for_multi;
        document.write(result + ",");
    }
}
function ques17() {
    // Write a program to display the last character of a user input.
    
    // declare
    var number_for_multi = 5,
        result = 1;

    console.log("Print Multiples of 5 Ranging 1 to 100:");
    document.write("<h4>Print Multiples of 5 Ranging 1 to 100:</h4>");
    for (var a = 1; result < 100; a++) {
        console.log(a);
        result = a * number_for_multi;
        document.write(result + ",");
    }
}
function ques18() {
    // You have a string “The quick brown fox jumps over the lazy dog”. 
    // Write a program to count number of occurrences of word “the” in given string.
    
    // declare
    var number_for_multi = 5,
        result = 1;

    console.log("Print Multiples of 5 Ranging 1 to 100:");
    document.write("<h4>Print Multiples of 5 Ranging 1 to 100:</h4>");
    for (var a = 1; result < 100; a++) {
        console.log(a);
        result = a * number_for_multi;
        document.write(result + ",");
    }
}
