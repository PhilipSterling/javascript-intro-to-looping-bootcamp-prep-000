function forLoop(array) {
  for (let i = 0; i < 25; i++){
    if(i === 1)
    array.push(`I am ${i} strange loop.`)
    else
    array.push(`I am ${i} strange loops.`)
  }
  return array
}
function whileLoop(n) {
  while(n > 0){
   console.log(n) 
   n--
  }
  return "done"
}

function doWhileLoop(n) {
  var i = 0
  function incrementVariable() {
  i = i + 1;
  return i;
}
  do{
    
  }while()
}