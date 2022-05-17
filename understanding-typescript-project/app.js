var userInput;
var userName;
userInput = 5;
userInput = 'Conner';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('an error ocurred!', 500);
