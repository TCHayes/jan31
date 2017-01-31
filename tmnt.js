var arr = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];


var filtered = arr.filter(function(item){
  return item[0] >= 0 && item[1] >= 0;
});

console.log(filtered);
