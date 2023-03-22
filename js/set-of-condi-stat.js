function ques1(){
        //         Write a program that takes a character (number or string)
        // in a variable & checks whether the given input is a
        // number, uppercase letter or lower case letter. (Hint: ASCII
        // codes:- A=65, Z=90, a=97, z=122).
        
     // Enter any Character(number or string) 
	var input = prompt("Enter any Character(number or string):\nTo Check given input is a number, uppercase letter or lower case letter:");

	//Check wether the user cancel the Prompt or not
	if(input != null)
	{	
		//ASCII CODE 
		var A = 65, Z = 90, a = 97, z = 122; 

		var in_con_accii = input.charCodeAt(0);
		console.log(in_con_accii);

		// FOR NUMBER
		if ( +input === 1 || +input === 2 || +input === 3 || +input === 4 || +input === 5 || 
		+input === 6 || +input === 7 || +input === 8 || +input === 9 || +input === 0 )
		{
			console.log( input + " Number");
			document.write("<h4>Number:</h4>");
			document.write("The given input " + "<b>" + input + "</b>" + " is a number.");
		}
		// FOR CAPITAL LETTER
		else if ( ( in_con_accii >= A ) && ( in_con_accii <= Z ) )
		{
			console.log( input + " Capital Letter");
			document.write("<h4>Capital Letter:</h4>");
			document.write("The given input " + "<b>" + input + "</b>" + " is Capital Letter, which ASCII Code is " + in_con_accii + ".");
		}
		// FOR SMALL LETTER
		else if ( ( in_con_accii >= a ) && ( in_con_accii <= z ) )
		{
			console.log( input + "Small Letter");
			document.write("<h4>Small Letter:</h4>");
			document.write("The given input " + "<b>" + input + "</b>" + " is a Small Letter, which ASCII Code is " + in_con_accii + ".");
		}
		// FOR OTHERs
		else
		{
			alert("Invalid Input:\nYou didn't Enter any letter or number.");
		}
	}
	else
	{
		//cancel the prompt
		alert("You didn't answer.");
	}
}

function ques2(){

        //         Write a JavaScript program that accept two integers and
        // display the larger. Also show if the two integers are equal.

     // Enter any Character(number or string) 
	alert("Enter Two Numbers:\nCheck Which one is Greater Smaller Or Equal to each other:");

	// first_number 
	var first_number = prompt("Enter First Number:")

	//Check wether you cancel the prompt or not
	if (first_number == null){
		alert("You didn't Enter the First Number\nThis section is terminated\nRestart Again!");
	}
	else {

			var second_number = prompt("Enter Second Number:")

			//Check wether you cancel the prompt or not
			if (second_number == null){
				alert("You didn't Enter the Second Number\nThis section is terminated\nRestart Again!");
			}
		else{
				//Successfully Enter Both Values
				alert("You have Successfully Enter Both Values.");

				//Greater
				if (+first_number > +second_number){

					document.write("Greater:<br>");
					document.write("First Number " + +first_number + " is greater than Second Number " + +second_number + ".");
				}
				//Smaller
				else if (+first_number < +second_number){

					document.write("Smaller:<br>");
					document.write("First Number " + +first_number + " is smaller than Second Number " + +second_number + ".");
				}
				// Equal
				else if (+first_number == +second_number){

					document.write("Equal:<br>");
					document.write("First Number " + +first_number + " is Equal to Second Number " + +second_number + ".");
				}
			}
	}
}

function ques3(){
        // Welcome to JS Land... Happy Coding!

        var js_coding = "Welcome to JS Land... \nHappy Coding!";
        
        alert(js_coding);


}
function ques4(){
        // messages in sequence:
        var sequence = "Welcome to JS Land..." , 
            prevent_dia = "Happy Coding!";              // dialog line cannot appear
            
        alert(sequence);
        alert(prevent_dia);

}
function ques5(){
        // messages in sequence:
        var browser = "Hello... I can run through my web browser's console";
        
        alert(browser);

}
function ques6(){
        console.log("window.location======", window.location);
        let url = "/task_6/index.html";
        // let url = window.location.host + "/task_6/index.html";
        console.log("window.locatio host======", url);
        window.open(url,"_blank");
}
function ques7(){
        console.log("window.location======", window.location);
        let url = "/task_7/index.html";
        // let url = window.location.host + "/task_7/index.html";
        console.log("window.locatio host======", url);
        window.open(url,"_blank");
}