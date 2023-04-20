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

    let input_num = prompt("Enter Negative Number to Display:\n1. Round OFF\n2. Floor Value\n3. Ceil Value\ne.g: -3.142");

    if( input_num != null && +input_num < 0)
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
        alert("You didn't Answer or Your input number is not a negative integer.")
    }
}
function ques3(){
    /// 3. Write a program that displays the absolute value of a
        //     number.
        //     E.g. absolute value of -4 is 4 & absolute value of 5 is 5

        let input_num = prompt("Enter Number to Display Absolute Value:\ne.g: -4");

        if( input_num != null && +input_num < 0)
        {
            let absolute_val = Math.abs(+input_num );
    
            document.write("<h4>Absolute Value:</h4>");
            document.write("<br>The absolute value of <b>" + input_num + "</b> is <b>" + absolute_val + "</b> ");
            
        }
        else if( input_num != null && +input_num > 0)
        {
            let absolute_val = +input_num;
    
            document.write("<h4>Absolute Value:</h4>");
            document.write("<br>The absolute value of <b>" + input_num + "</b> is <b>" + absolute_val + "</b> ");
            
        }
        else
        {
            alert("You didn't Answer or Your input number is not a negative integer.")
        }
}
function ques4(){
    // 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

    function fun_dics_val(){
        let gen_ran = fun_gen_ran();
        let rand_dics_val = Math.round(gen_ran);

        console.log(rand_dics_val);
        return rand_dics_val;
    }

    function fun_gen_ran(){

        let gen_ran_dics = Math.random() * 6;
        console.log(gen_ran_dics);
        
        gen_ran_dics = Math.ceil(gen_ran_dics);
        console.log(gen_ran_dics);

        return gen_ran_dics;
    }

    let dics_val = fun_dics_val();
    console.log(dics_val);

    // document.write ("<h4>Random Dics Value:</h4>");
    // document.write("<br>random dice value: <b>" + dics_val + "</b>");
}

function ques5(){
    // Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
    function fun_coin_val(){

        let gen_ran = fun_gen_ran();
        let rand_coin_val = Math.round(gen_ran);

        console.log(rand_coin_val);
        return rand_coin_val;

    }


    function fun_gen_ran(){

        let gen_ran_coin = Math.random() * 2;
        console.log(gen_ran_coin);
        
        gen_ran_coin = Math.ceil(gen_ran_coin);
        console.log(gen_ran_coin);

        return gen_ran_coin;

    }

    let coin_val = fun_coin_val();
    console.log(coin_val);

    document.write ("<h4>Coin Toss:</h4>");
    document.write("<br>Random Value: <b>" + coin_val + "</b>");


    if ( coin_val == 1 )
    {
        document.write("<br>random coin value: <b>Tails</b>");  
    }
    else if( coin_val == 2 )
    {
        console.log(coin_val);
        document.write("<br>random coin value: <b>Heads</b>");
    }
    else if ( coin_val == 0)
    {

      alert("Try Again");
      document.write("<br>Your value is invalid.");
        
    }
}
function ques6(){
    // 6. Write a program that shows a random number between 1 and 100 in your browser.

    function fun_rand_val(){

        let gen_ran = fun_gen_ran();
        let rand_val_1_100 = Math.round(gen_ran);

        console.log(rand_val_1_100);
        return rand_val_1_100;

    }


    function fun_gen_ran(){

        let gen_ran_1_100 = Math.ceil(Math.random() * 100);
        console.log(gen_ran_1_100);

        return gen_ran_1_100;

    }

    let rand_val = fun_rand_val();
    console.log(rand_val);

    document.write ("<h4>Random Values Between 1 -- 100:</h4>");

    if( ( rand_val >= 1 ) && ( rand_val <= 100 ) )
    {
        document.write("<br>Random Number between 1 and 100: <b>" + rand_val + "</b>");
    }
    else 
    {
      alert("Try Again");
      document.write("<br>Your Random value is Out of Range: <b>" + rand_val + "</b>");
    }

}
function ques7(){
    // Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 
    // a. 50 
    // b. 50kgs 
    // c. 50.2kgs 
    // d. 50.2kilograms

    let parse_num;
    
    function fun_parse_num()
    {

        parse_num = parseFloat( input_num );            //return first num from the string till end of the num 
        return parse_num;

    }

    let input_num = prompt("Enter Your Weight in kilograms:\na. 50\nb. 50kgs \nc. 50.2kgs\nd. 50.2kilograms");
    console.log(parse_num);            

    if( input_num != null && input_num != "")
    {
        parse_num = fun_parse_num( input_num );  
        console.log(parse_num);            

        document.write("<h4>User Weight:</h4>");
        document.write("The weight of user is " + parse_num + "</b> kilograms");

    }
    else
    {
        alert("You didn't Answer or Your input number is not a positive integer.")
    }
}
   
function ques8(){
    // Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

    let input_num;
    let random_secret_num;

    function compare_secret_num()
    {

        random_secret_num = Math.ceil(Math.random() * 10);
        console.log("random_secret_num ", random_secret_num );
        
        if( random_secret_num == +input_num) 
        {
            alert("Congratulation!\nYour Number is Match with Random Number");
        }
        else
        {
            alert("Try Again\nYour Input Number is not Match");
        }         
        
        
    }
    
    input_num = prompt("Enter a Number between 1 and 10:");
    console.log("input_num ==== ", input_num );
 
    if( input_num != null )
    {
        if( +input_num <= 0 )
        {
           
            alert("Invalid Number! Input Number is less than or equal to 0");

        }
        else if ( ( +input_num >= 1 ) && ( +input_num <= 10 ) )
        {
            // alert("Your Input Number is between 1 and 10");

            compare_secret_num( +input_num );  
            // console.log(secret_result);            

        }
        else
        {
            alert("Invalid NUmber! Input Number is greater than 10")
        }

    }
    else
    {
        alert("You didn't Answer or Your input number is not a positive integer.")
    }

}
