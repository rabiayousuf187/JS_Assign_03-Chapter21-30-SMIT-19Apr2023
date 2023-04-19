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
    var table_num,
        table_length,
        table_result;

    // Initialize table num
    table_num = prompt("Enter a Number to show its multiplication table:")

    document.write("<h4>Multiplication table of " + table_num + ":</h4>");

    if (table_num !== null) {
        // Initialize table length
        table_length = prompt("Enter length of multiplication table:")

        document.write("<h4>Length " + table_length + ":</h4>");

        console.log(table_num, table_length);

        if (table_length !== null) {

            for (var a = 1; a <= table_length; a++) {
                table_result = table_num * a;
                document.write(table_num + " * " + a + " = " + table_result + "<br>");
            }
        }
        else {
            alert("You didn't enter Table length\nSession has been terminated.")
        }
    }
    else {
        alert("You Quit the Session.")
    }

}

function ques5() {
    // Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
    
    // declare
    var fruits = [];

    // Initialize table num
    fruits = ["apple", "banana", "mango", "orange", "strawberry"];

    document.write("<h4>Print Array Item using Loop: </h4>");

    // Display array items 
    for (var a = 0; a < fruits.length; a++) {
        document.write(fruits[a] + "<br>");
    }
    document.write("<br><br>");
    for (var b = 0; b < fruits.length; b++) {
        document.write("Elements at index " + b + " is " + fruits[b] + ".<br>");
    }
}

function ques6() {
    // Repeat Q1 using string concat() method.
    
    // declare
    var even, odd;


    counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];



    document.write("<h4>Generate Series:</h4>");

    // Display Counting 
    document.write("<h4>Counting: </h4>");
    for (var a = 1; a <= 15; a++) {
        document.write(a + ",");
    }
    document.write("<br><br>");

    // Display Reverse Counting 
    document.write("<h4>Reverse Counting: </h4>");
    for (var b = 10; b > 0; b--) {
        document.write(b + ",");
    }
    document.write("<br><br>");

    // Display Even 
    document.write("<h4>Even: </h4>");

    for (var b = 0; b <= 20; b++) {
        if ((b % 2) == 0) {
            even = b;
            console.log(even);
            document.write(even + ",");
        }

    }

    document.write("<br><br>");

    // Display Odd 
    document.write("<h4>Odd: </h4>");
    for (var b = 0; b <= 20; b++) {
        if ((b % 2) !== 0) {
            odd = b;
            console.log(odd);
            document.write(odd + ",");
        }

    }

    // Display Series 
    document.write("<h4>Series: </h4>");
    for (var b = 2; b <= 20; b += 2) {
        if ((b % 2) == 0) {
            even = b;
            console.log(even);
            document.write(even + "k,");
        }

    }
}

function ques7() {
    // Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 

    // declare
    var bakert_items,
        search_input,
        pos_search_input;


    bakert_items = ["cake", "apple pie", "cookie", "chips", "patties"];


    search_input = prompt("Welcome to My Bakery. What do you want to order sir/ma'am?\ncake , apple pie ,  cookie ,  chips ,  patties")
    search_input = search_input.toLowerCase();
    if (search_input != null) {
        // Index of match Item
        pos_search_input = bakert_items.indexOf(search_input);
        // index of match in array
        // if match posi... is >= 0
        // if not match posi... is = -1
        console.log(pos_search_input);
        if (pos_search_input >= 0) {
            alert(search_input + " is avaliable at index " + pos_search_input + " in our Bakery.");
            document.write(search_input + " is <b>avaliable</b> at index " + pos_search_input + " in our Bakery.");
        }
        // if not match posi... is = -1
        else {
            alert("We are sorry. " + search_input + " is not avaliable in our Bakery.");
            document.write("We are sorry. " + search_input + " is <b>not avaliable</b> in our Bakery.");
        }
    }
    else {
        alert("You Quit session.")
    }

}

function ques8() {
    // /Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;
   
   
    // declare
    var num, large_num = 0;


    num = [24, 53, 78, 91, 12];

    for (var a = 0; a < num.length; a++) {

        if (large_num < num[a]) {
            console.log(num[a]);
            large_num = num[a];
            console.log("num[a]", num[a]);

        }


    }
    console.log("large_num", large_num);
    document.write("<h4>Largest Number in Array:</h4><br>");
    document.write("Array items: 24 , 53 , 78 , 91 , 12 <br><br>");
    document.write("The Largest Number is " + large_num);

}

function ques9() {

    // /Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

    // declare
    var num, small_num;


    num = [24, 53, 78, 91, 12];

    for (var a = 1; a < num.length; a++) {

        if (num[0] > num[a]) {
            console.log(num[a]);
            small_num = num[a];
            console.log("num[a]", num[a]);

        }


    }
    console.log("small_num", small_num);
    document.write("<h4>Smallest Number in Array:</h4><br>");
    document.write("Array items: 24 , 53 , 78 , 91 , 12 <br><br>");
    document.write("The smallest Number is " + small_num);
}

function ques10() {
    // Write a program that takes user input. Convert and show the input in capital letters.
    
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
