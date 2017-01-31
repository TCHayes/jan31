 var arr = [[0, 0], [0, 5, 4, 2], [-1, -3], [-3, 1], [2, -4], [3, 2]];

//Filtered example
// var filtered = arr.filter(function(item){
//   return item[0] >= 0 && item[1] >= 0;
// });

//Filtering the array without hardcoding in the indices

var filtered = arr.filter(function(item){
  return item.every(function(x){
    return x >= 0;
  })

  });

//we want to filter the two dimensional array, if any of the items are negative in the inner arrays that one wont pass the filter
console.log(filtered);

//Map example
var totalSteps = arr.map(function(item){
  return Math.abs(item[0]) + Math.abs(item[1]);
});
//console.log(totalSteps);

//forEach example
totalSteps.forEach(function(item){
  //console.log(item);
});

//ES6 forEach Version...
//totalSteps.forEach(item => console.log(item));
