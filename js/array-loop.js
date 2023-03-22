function ques1(){
//     1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser

var num_1 = 3, num_2 = 5, add;

        add = num_1 + num_2;
        document.write("<p>Sum of" + " " + num_1 + " and " + num_2 + " is " + add + "</p>");
        console.log("Sum of" + " " + num_1 + " and " + num_2 + " is " + add);


}

function ques2(){

//     2. Repeat task1 for subtraction, multiplication, division &
// modulus.

var num_1 = 3, num_2 = 5;
        var add, sub, mul, div, modulus;

        add = num_1 + num_2;
        document.write("<p>Sum of" + " " + num_1 + " and " + num_2 + " is " + add + "</p>");
        console.log("Sum of" + " " + num_1 + " and " + num_2 + " is " + add);

        sub = num_1 - num_2;
        document.write("<p>Subtraction of" + " " + num_1 + " and " + num_2 + " is " + sub + "</p>");
        console.log("Subtraction of" + " " + num_1 + " and " + num_2 + " is " + sub);

        mul = num_1 * num_2;
        document.write("<p>Multiplication of" + " " + num_1 + " and " + num_2 + " is " + mul + "</p>");
        console.log("Multiplication of" + " " + num_1 + " and " + num_2 + " is " + mul);

        div = num_1 / num_2;
        document.write("<p>Division of" + " " + num_1 + " and " + num_2 + " is " + div + "</p>");
        console.log("Division of" + " " + num_1 + " and " + num_2 + " is " + div);

        modulus = num_1 % num_2;
        document.write("<p>Modulus of" + " " + num_1 + " and " + num_2 + " is " + modulus + "</p>");
        console.log("Modulus of" + " " + num_1 + " and " + num_2 + " is " + modulus);
}

function ques3(){

//     3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

        var number;
        document.write("<p>Value of variable after variable declaration is: "+ number + "</p>") ;
        console.log("Value of variable after variable declaration is: " + number);

        number = 5;
        document.write("<p>Initial value: "+ number + "</p>") ;
        console.log("Initial value: " + number);
        
        ++number;
        document.write("<p>Value after Increment is: "+ number + "</p>") ;
        console.log("Value after Increment is: " + number);

        var add_7 = number + 7;
        number = add_7;
        document.write("<p>Value after addition is: "+ add_7 + "</p>") ;
        console.log("Value after addition is: " + add_7);

        --number;
        document.write("<p>Value after decrement is: "+ number + "</p>") ;
        console.log("Value after decrement is: " + number);

        var modulus = number % 3;
        document.write("<p>The Remainder is: "+ modulus + "</p>") ;
        console.log("The Remainder is: " + modulus);
}

function ques4(){
//     4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticketPrice = 600;  //1 ticket = 600PKR
var no_ticket_buy = 5, cost ;

cost = ticketPrice * no_ticket_buy;

document.write("<p>Total cost to buy 5 tickets to a movie is " + cost + "PKR</p>") ;
console.log("Total cost to buy 5 tickets to a movie is " + cost + "PKR");

}

function ques5(){
//     5. Write a script to display multiplication table of any
// number in your browser.

// Table of 4 or any number
var table_of_no = 4, result;  //table_of_no
        
document.write("Table of "+table_of_no+":<br>") ;
for(var a=1 ; a<= 10; a++)
{
    result = table_of_no * a;
    document.write(table_of_no + "*" + a + "=" + result + "<br>") ;
}

}

function ques6(){
//     6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var temp_celsius = 25,  
temp_fahrenheit = 70,
convert_into_fahrenheit,
convert_into_celsius;

convert_into_fahrenheit = (temp_celsius * 1.8) + 32;
document.write("Celsius convert into Fahrenheit <br> " + temp_celsius + "°C " + " is " + convert_into_fahrenheit + "°F" + "<br><br><br>") ;

convert_into_celsius = ((temp_fahrenheit - 32) * 5) / 9;
document.write("Fahrenheit convert into Celsius <br>" + temp_fahrenheit + "°F " + " is " + convert_into_celsius + "°C" + "<br>") ;

}

function ques7(){
//     7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// Item 1
var item_1_price = 100, 
item_1_quantity = 5,
// Item 2
item_2_price = 250,
item_2_quantity = 5,
shipping_charges = 1000;

var total_price_of_item_1,
total_price_of_item_2,
total_cost_of_order;

total_price_of_item_1 = item_1_price * item_1_quantity;

total_price_of_item_2 = item_2_price * item_2_quantity;

total_cost_of_order = total_price_of_item_1 + total_price_of_item_2 + shipping_charges;

document.write("<h1>Shopping Cart</h1<br><br><br></h1>");

document.write("<p>Price of item 1 " + "is " + item_1_price + "</p>");

document.write("<p>Quantity of item 1 " + "is " + item_1_quantity + "</p>");

document.write("<p>Price of  item 2 " + "is " + item_2_price + "</p>");

document.write("<p>Quantity of item 2 " + "is " + item_2_quantity + "</p>");

document.write("<p>Shipping Charges" + shipping_charges + "</p>");

document.write("<p>Total cost of your order is " + total_cost_of_order + "</p>");

}

function ques8(){
//     8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var total_marks = 950, 
            marks_obtained = 775,
            percentage;

            percentage = (marks_obtained / total_marks) * 100;

        document.write("<h1>Marks Sheet</h1<br><br><br></h1>");

        document.write("<p>Total marks: " + total_marks + "</p>");

        document.write("<p>Marks obtained: " + marks_obtained + "</p>");

        document.write("<p>Percentage: " + percentage + "%</p>");
}

function ques9(){
//     9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var us_dollars = 10,          /// us dollar
            saudi_riyal = 5,        /// saudi_riyal

            one_us_dollar_in_pkr = 104.80,  //1 us_dollar = 104.80 PKR
            one_saudi_riyal_in_pkr  = 28,   //1 saudi_riyal  = 28 PKR
            
            total_currency;

            total_currency =  ( (us_dollars * one_us_dollar_in_pkr ) + (saudi_riyal  * one_saudi_riyal_in_pkr ));

        document.write("<h1>Currency in PKR</h1<br><br><br><br></h1>");

        document.write("<p>Total Currency in PKR: " + total_currency + "</p>");

}

function ques10(){
//     10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var number = 15;
       
        var arthematic;

        arthematic = ( ( (number + 5) * 10 ) / 2 );

       
        document.write("<h4>Arthematic Sequence:</h4><h4>Steps:</h4>");

        document.write("Initialize a variable with some number:<br>") ;
        console.log("initialize a variable with some number: ");
        
        document.write("Add 5 with number:<br>") ;
        console.log("Add 5 with number:");

        document.write("Then Multiply by 10.<br>") ;
        console.log("Then Multiply by 10.");

        document.write("Divide the result by 2.<br>") ;
        console.log("Divide the result by 2");

        document.write("<br><br>Note:<br>Perform all calculations in a single expression.<br>") ;
        console.log("Note:\nPerform all calculations in a single expression");

//  Single Expression
        document.write("<br><br>Initialize number = " + number + "<br>");
        document.write("arthematic = ( ( (number + 5) * 10 ) / 2 );<br>");
        document.write("<br>Result = " + arthematic);
}

function ques11(){
//     11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var current_year = 2019, 
            birth_year = 2002;

        var birth_year_for_possible,
            age_1, age_2;

        birth_year_for_possible = birth_year + 1;

        //1st Possible Age
        age_1 = current_year - birth_year;

        //2nd Possible Age
        age_2 = current_year - birth_year_for_possible;


        document.write("<h1>Age Calculator</h1><br>");

        document.write("Current Year: " + current_year + "<br>");
        document.write("Birth Year: " + birth_year + "<br>");

        document.write("<p>They are either " + "<b>" + age_1  + "</b> or <b>"  + age_2 + "</b> years old.</p>");

}

function ques12(){
//     12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// radius
var radius = 100, 
pi = 3.142;

var circumference_of_a_circle,
area_of_a_circle;

// Circumference of a Circle
circumference_of_a_circle = 2 * pi * radius;

// Area of a Circle
area_of_a_circle = pi * (radius * radius);
// console.log((radius^2));

document.write("<h1>The Geometrizer:</h1><br>");

document.write("Radius of a Circle: " + radius + "<br>");
document.write("The Circumference of a circle: " + circumference_of_a_circle + "<br>");

document.write("The Area of a Circle: " + area_of_a_circle + "<br>");


}

function ques13(){
//     13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

//  Years
        var favorite_snack = "Chocolate",
            snacks_per_day = 5,
            current_age = 19, 
            estimated_max_age = 75;

        var one_year = 365;  ///days


        var current_age_in_days,
            estim_max_age_in_days,
            remain_days_in_life,
            remain_snacks_days_life,
            remain_snacks_in_life;


        // current_age_in_days
        current_age_in_days = current_age * one_year;

        // estim_max_age_in_days
        estim_max_age_in_days = estimated_max_age * one_year;

        // remaining_days_in_life 
        remain_days_in_life = estim_max_age_in_days - current_age_in_days;

        //snack takes in remaining_days_in_life  
        remain_snacks_days_life = remain_days_in_life * snacks_per_day;

        // remaining_snacks_in_life as year
        remain_snacks_in_life = remain_snacks_days_life / 365; 

        

        document.write("<h1>The Lifetime Supply Calculator</h1><br>");

        document.write("Favorite Snack: " + favorite_snack + "<br>");
        document.write("Current age: " + current_age + "<br>");
        document.write("Estimated Maximum Age: " + estimated_max_age + "<br>");
        document.write("Amount of Snacks per day: " + snacks_per_day + "<br>");

        document.write("You will need <b>" + remain_snacks_in_life + " " +favorite_snack + "</b> to last you until the ripe old age of <b>" + estimated_max_age + "</b>");

        
}