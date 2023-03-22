function ques1(){
    // 1. Declare 3 variables in one statement

    let name, phone_no, age;

    document.write("let name, phone_no, age;");
}

function ques2(){
    // Declare 5 legal & 5 illegal variable names.

	let num_1, studentFirstName, _lastName,
    $salePrice,
    studentFullName;
    
    // let  num 1, 1_studentFirstName, 1,
    // %salePrice,
    // for;

    document.write("<h2>Declare 5 legal & 5 illegal variable names.</h2><br>")
    document.write("<b>5 Legal Variable s: </b><span>let num_1, studentFirstName, _lastName,    $salePrice,studentFullName;</span><br><br>")
    document.write("<b>5 Illegal Variable s:</b><span> let num 1, 1_studentFirstName, 1,%salePrice, for;</span><br>")

}

function ques3(){
//     3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

document.write("<h2>Rules for naming JS variables</h2><br>");

        document.write("a) Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable<br>");

        document.write("b) Variables must begin with a letter, $ or _. For example $name, _name or name<br>");

        document.write("c) Variable names are case sensitive<br>");

        document.write("d) Variable names should not be JS keywords");



}