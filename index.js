//negativeToPositive
let a= -5
function negative(a){
  if(a>0){  
    console.log(a*-1)
  }else {console.log(a)}
}
negative(a)

//checkPositive or Negative
function checkPositive(a){
    if(a>0){
      return 'positive';
    }else if(a!=0){
      return'negative'
    }else {
      return 'equal to 0'
    }
  }
  checkPositive(0)

  //check odd or even
  function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }
  even_or_odd(5)

  //check true false
  function rost(a,b){
    if(a > 0 && b > 0){
      return 'true';
    }else{
      return 'false'
    }
  }
  rost(4,0)

  //c is between a and b
  function cOrasida(a,b,c){
    if(a > c && c> b){
      return 'true';
    }else if(a < c && c< b){
      return 'true'
    }else{
      return 'false'
    }
  }
  cOrasida(0,4,2)

  
