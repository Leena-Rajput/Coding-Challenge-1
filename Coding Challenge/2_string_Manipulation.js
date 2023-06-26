function manipulateString(inputString, callback) {
    const manipulatedString = inputString.toUpperCase();

    callback(manipulatedString)
}

function logString(manipulatedString) {
    console.log("The manipulated String is: ${manipulatedString}");

}
manipulateString("hello, word",logString)

