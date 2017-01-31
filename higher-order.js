// function fn(greeting){
//   console.log("${} world.");
// }

function repeat(fn, n){
  for (var i=0;i<n;i++){
    fn();
  }
}

function hello(){
  console.log("Hello world");
}

function goodbye(){
  console.log("Goodbye world");
}

repeat(hello, 5);
repeat(goodbye, 5);

/* loop through n number of times and call fn() each time.
