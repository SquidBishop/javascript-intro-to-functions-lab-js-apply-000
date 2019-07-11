function shout(string) {
  return string.toUpperCase() 
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
    var lowercase = 'I can\'t hear you!';
    lowercase.toLowerCase() === lowercase;
    //true
 
  var uppercase = 'YES INDEED!'
  uppercase.toUpperCase() === uppercase;
  // true
 
  var mixedCase = 'I love you, too.';
  mixedCase.toLowerCase() === mixedCase;
  // false
  mixedCase.toUpperCase() === mixedCase;
  // false
 
 if (lowercase) {
   return lowercase
 }
 else if (uppercase) {return uppercase
   
 }
 else (mixedCase) {return mixedCase
   
 }
}