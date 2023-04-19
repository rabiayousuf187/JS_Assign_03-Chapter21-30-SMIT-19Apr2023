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
    let  in_string;

    in_string = prompt("Enter Any Content to Convert into Title Case:");
    
    if (in_string != null && in_string != null)
    {
       document.write("<h4>Convert into Title Case:</h4>");
       document.write("User Input: " + in_string + "<br>");

    
        var first_letter = in_string.substr(0,1);      //only 1st letter uppercase
        var first_letter_upper = first_letter.toLocaleUpperCase();
        console.log(first_letter_upper);
        
        var remain_letters = in_string.substr(1);      //
        console.log(remain_letters);

        var remain_letters_lower = remain_letters.toLowerCase();         //only remain letters lowercase
        console.log(remain_letters_lower);

        var updated_string = first_letter_upper + remain_letters_lower;
       document.write("Title Case: " + updated_string);
    }
    else
    {
        alert("You Quit Session.");
    }
}

function ques12() {
    // /Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.
    
    var num = 35.36 ;

        num = num.toString();

               document.write("<h4>Remove Decimal:</h4>");
               document.write("Initial Number: " + num + "<br>");

               var dot_index = num.indexOf(".");

               var before_dot = num.slice( 0 , dot_index );
               console.log(before_dot);

               var after_dot = num.slice( dot_index + 1 );
               console.log(after_dot);
                
                var rem_dot_num = before_dot + after_dot;
               document.write("Result: " + rem_dot_num );
               document.write("<br><br>Result Type: " + typeof rem_dot_num );
}

function ques13() {
    // Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
    // Note: 
    // ASCII code of ! is 33 
    // ASCII code of , is 44 
    // ASCII code of . is 46 
    // ASCII code of @ is 64
    
    // declare
    var username;

        
        


    // var num ;
    username = prompt("Enter Username:");

    var include_at_rate = username.indexOf("@"),
        include_excla_mar = username.indexOf("!"),
        include_dot = username.indexOf("."),
        include_com = username.indexOf(",");
        console.log(include_at_rate);

    if(username != null)
    {
        if( include_at_rate >= 0 || include_com >= 0 || include_dot >= 0 || include_excla_mar >= 0)
        {
            alert("Please Enter a valid username");
            username = prompt("Enter a Valid Username:");
        }
        else
        {
            alert("username is valid");
        }
    }
    else
    {
        alert("You didn't enter Any username.")
    }
    
}

function ques14() {
    // You have an array 
    // A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. 
    // After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. 
    // Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. 
    // Example:
    
     // declare
     let  bakert_items,
     search_input,
     pos_search_input;


     bakert_items = [ "cake" ,  "apple pie",  "cookie" ,  "chips" ,  "patties" ];


     search_input = prompt("Welcome to My Bakery. What do you want to order \nsir/ma'am?\ncake , apple pie ,  cookie ,  chips ,  patties");
     search_input = search_input.toLowerCase();
     if (search_input != null && search_input != "")
     {
         // Index of match Item
         pos_search_input = bakert_items.indexOf(search_input);
         // index of match in array
         // if match posi... is >= 0
         // if not match posi... is = -1
         console.log(pos_search_input);
         if ( pos_search_input >= 0 )
         {
             alert(search_input + " is avaliable at index " + pos_search_input + " in our Bakery.");
             document.write(search_input + " is <b>avaliable</b> at index " + pos_search_input + " in our Bakery.");
         }
         // if not match posi... is = -1
         else
         {
             alert("We are sorry. " + search_input + " is not avaliable in our Bakery.");
             document.write("We are sorry. " + search_input + " is <b>not avaliable</b> in our Bakery.");
         }
     }
     else
     {
         alert("You Quit session.")
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
    
    // Input
    var password,
        first_letter,
        letter_check_low,
        letter_check_upp,
        spec_char_check,
        first_let_num;

    var pattern_lower = /[a-z][0-9]/g; 
    var pattern_upper = /[A-Z][0-9]/g; 
    var pattern_Spec_char = /[^a-z][^A-Z][^0-9]/g; 


        password = prompt("Enter Your Password\nIt must at least 6 characters long\nIt should not start with a number\nIt should contain alphabets and numbers");

       
        if (password != null )
        {
             // 1.   Check Password length  == 6
            if( password.length == 6 )
            {
                alert("Fisrt check Passed!\n Password Length is: " + password.length);

                first_letter = password.charCodeAt(0);
                first_let_num = password.split("");
                console.log(`first_let_num = password.split("") ===== `, first_let_num = password.split(""));


            // 2.   Check Second Letter not a number
                if( ( first_letter >= 48 ) && ( first_letter <= 57 )  )
                {
                    alert("Second Check Fail!\n First character is a number!");
                    document.write("<h4>Password Validation</h4>");
                    document.write("Enter Password: " + password);
                    document.write("<br>Second Check Fail!\n First character is <b>" + first_let_num[0] + "</b> a number!");
                    document.write("<br>Please Enter a Valid Password");
                }
                else if(    (( first_letter >= 65 ) &&  ( first_letter <= 90 )) || 
                            (( first_letter >= 97 ) &&  ( first_letter <= 122 ))
                        )
                {
                    alert("Second Check Passed!\n First character is not a number!");
                    
            // 3.   Check Last Condition Letter and number only
                    
                    // RegExp
                    ///Regex for A-Z a-z 0-9
                    // true if regex match
                    // false if regex not match
     
                    letter_check_low = pattern_lower.test(password);      //true if match as per regex otherwise viseversa
                    letter_check_upp = pattern_upper.test(password);      //true if match as per regex otherwise viseversa
                    spec_char_check = pattern_Spec_char.test(password);
                    if( (letter_check_low == true || letter_check_upp == true) && spec_char_check == false)                                          
                    {
                    
                        console.log("Valid Password.");
                        document.write("<h4>Password Validation</h4>");
                        document.write("Entered Password: " + password);
                        document.write("<br><b>Valid Password</b>");

                        
                    }
                    else
                    {
                        console.log("Invalid Password.");
                        document.write("<h4>Password Validation:</h4>");
                        document.write("Entered Password: " + password);
                        document.write("<br><b>Invalid Password, Your Password!<br> must contain only alphabets and numbers,<br>and not Special Character</b>");
                        document.write("<br><br>Please Enter a Valid Password");
                    }


                }
                else
                {
                    alert("Second Check Fail!\nYour First Letter may be a Special Character.")
                }
            }
            else
            {
                alert("First Check Fail!\nPassword Length is not equal to 6\nYour password length: " + password.length);
                console.log("First Check Fail!\nPassword Length is not equal to 6\nYour password length: " + password.length);
                document.write("<h4>Password Validation</h4>");
                document.write("Entered Password: " + password);
                document.write("<br>First Check Fail!\nPassword Length is not equal to 6<br>Your password length: " + password.length);
                document.write("<br>Please Enter a Valid Password");
            }
            
        }
       
}

function ques16() {
    // Write a program to convert the following string to an array using string split method. 
    // var university = “University of Karachi”; 
    // Display the elements of array in your browser.
    
    // Input
    var university = "University of Karachi",
        letter_arr = new Array ();


        // Input // profeSSor aLi nAqvi is a gReaT cOMputer sciEntIST.

        document.write("<h4>Split String:</h4>");
        document.write("Your given string is: " + university);
        document.write("<h4>After Split String:</h4>");

        for(var i = 0; i < university.length ; i++)
        {
            letter_arr[i] = university[i].split("");
            document.write(letter_arr[i] + "<br>");
    
        }
}
function ques17() {
    // Write a program to display the last character of a user input.
    
    // Input
    var input,
        letter_arr = [],
        last_char_index;


     input = prompt("Enter the Content\nI will Show You the Last Character");

        if (input != null && input != "")
        {

            document.write("<h4>Display Last Character:</h4>");
            document.write("User Input: " + input);

            //last char index
            letter_arr = input.split("");
            last_char_index = input.length - 1;
            document.write("<br>Last Character of input: " + input[last_char_index]);
  

        }
        else
        {
            alert("You Quit session.")
        }

}
function ques18() {
    // You have a string “The quick brown fox jumps over the lazy dog”. 
    // Write a program to count number of occurrences of word “the” in given string.
    
    // Input
    var input = "The quick brown fox jumps over the lazy dog",
        word_arr = [],
        count = 0;


        document.write("<h4>Count Number of Occurrences of Word:</h4>");
        document.write("User string: " + input);
        input = input.toLowerCase();
        word_arr = input.split(" ");
        

        //last char index
        for (var i = 0 ; i < word_arr.length ; i++)
        {
            console.log(word_arr.length, i);
            if( word_arr[i]  == "the" )
            {
                count++; 
            }
            if( i == word_arr.length-1 )
            {
                document.write("<br>There are " + count + " occurrence(s) of word 'the'");
                break;
            }
            
        }

}
