function ques1(){
    // /Write a program that takes a positive integer from user & display the following in your browser. 
    // a. number 
    // b. round off value of the number 
    // c. floor value of the number 
    // d. ceil value of the number
    
    let input_num = prompt("Enter Number to Display:\n1. Round OFF\n2. Floor Value\n3. Ceil Value\ne.g:3.142");
    if( input_num != null && +input_num > 0)
    {
        let round = Math.round( +input_num );
        let floor = Math.floor( +input_num );
        let ceil = Math.ceil( +input_num );

        document.write("<b>number:</b> " + +input_num);
        document.write("<br><b>round off value:</b> " + round);
        document.write("<br><b>floor value:</b> " + floor);
        document.write("<br><b>ceil value:</b> " + ceil);
    }
    else
    {
        alert("You didn't Answer or Your input number is not a positive integer.")
    }
}
function ques2(){
    // Write a program that takes a negative floating point number from user & display the following in your browser. 
    // a. number 
    // b. round off value of the number 
    // c. floor value of the number 
    // d. ceil value of the number
}
function ques3(){
    // Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5


    // initialize
    string_array = ["Barein" , "Ruby" , "Marry" , "Rosella"];
    document.writeln(`let string_arry = [];`);
    document.writeln(`string_array = ["Barein" , "Ruby" , "Marry" , "Rosella"];`);
    // console.log(string_array);
}
function ques4(){
    // Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

    let number_arry = [];
    
    // initialize
    number_array = [999 , 500 , 1000 , 5 , 0 , 65];
    document.writeln(`let number_arry = [];`);
    document.writeln(`number_array = [999 , 500 , 1000 , 5 , 0 , 65];`);
    console.log(number_array);
    
}
function ques5(){
    // Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
    let boolean_arry = [];
    
    // initialize
    boolean_array = [true , false];
    document.writeln(`let boolean_arry = [];`);
    document.writeln(`boolean_array = [true , false];`);
    console.log(boolean_array);
}
function ques6(){
    // Write a program that shows a random number between 1 and 100 in your browser.

}
function ques7(){
    // Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 
    // a. 50 
    // b. 50kgs 
    // c. 50.2kgs 
    // d. 50.2kilograms
}
   
function ques8(){
    // Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.


}
