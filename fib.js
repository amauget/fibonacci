/* Create both a recursive and iterative solution to the fibonacci sequence */

function fibs(n){ 
  if(n < 3){
    return n = 1;
  }
  else{
    return n = (fibonacci(n-1) + fibonacci(n-2));
  }
}

function fibsRec(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fibsRec(7))

// run in cmd line: node fib.js