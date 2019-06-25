try {

    console.log('Start of try runs'); // (1) <--

    // ...no errors here

    console.log('End of try runs'); // (2) <--

} catch (err) {

    console.log('Catch is ignored, because there are no errors'); // (3)

}

console.log("...Then the execution continues");

// Have error
try {

    console.log('Start of try runs'); // (1) <--

    lalala;

    console.log('End of try runs'); // (2) <--

} catch (err) {

    console.log('Erro' + err); // (3)

}

try {
    console.log('try');
    if (confirm('Make an error?')) BAD_CODE();
} catch (e) {
    console.log('catch');
} finally {
    console.log('finally');
}