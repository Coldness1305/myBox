function validateInput() {
    var myInput = document.getElementById("myText").value;
    var myOutput = document.getElementById("myOutput");
    //document.write("Hello World");
    if (myInput.length == 0)
        alert("Error Empty Input :c");
    myOutput.innerHTML = myInput;
    return true;
}