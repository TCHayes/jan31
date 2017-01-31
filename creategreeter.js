/*



*/

function createGreeter (greeting) {
  return function(name){
    console.log(`${greeting} ${name}`);
  }
}
var helloGreeter = createGreeter('Hello');
helloGreeter('Anna');
var bonjour = createGreeter('bonjour');
bonjour("Sophia");
