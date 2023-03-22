function ques1(){
        // 1. Write a program to take “city” name as input from user. If
        // user enters “Karachi”, welcome the user like this:
        // “Welcome to city of lights”
        
     var city = prompt("Enter The  City Name: ");

    if(city === "Karachi"){
        document.write("Welcome to city of lights");
    }
    else {
        document.write("You enter: " + city);
    }
}

function ques2(){
     // Enter a valid password.
     var error = "Error! Please enter a valid password.";

     alert(error);
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