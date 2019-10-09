function getNumber(num){
    let sum=0;
    var input_v = document.getElementById("input");
    console.log(num, 'number');
    console.log(input_v.value, 'number');
    switch(num){
        case 1: 
          input_v.value += '1' ;
          break;
        case 2: 
          input_v.value += '2' ;
          break;
        case 3: 
          input_v.value += '3' ;
          break;
        case 4: 
         input_v.value += '4' ;
         break;
        case 5: 
         input_v.value += '5' ;
         break;
        case 6: 
         input_v.value += '6' ;
         break;
        case 7: 
         input_v.value += '7' ;
         break;
        case 8: 
         input_v.value += '8' ;
         break;
        case 9:
          input_v.value += '9' ;
          break;
        case 0: 
          input_v.value += '0' ; 
    }
}


function getOperand(operand){
    var input_var = document.getElementById('input');
    switch(operand){
        case'+': 
         input_var.value += '+';
         break;
        case'-': 
          input_var.value += '-';
          break;
        case'x': 
         input_var.value += '*';
         break;
        case'/':
          input_var.value += '/';
          break;
        case'+/-': 
         input_var.value += '-' + input_var.value;
    }    
}

function clearScreen() {
    document.getElementById('input').value = "" ;
    document.getElementById('answer').value = "" ;
}

function backSpace(){
    var input_var = document.getElementById('input');
    var x = input_var.value;
    if (x.length > 0) {
        x= x.substring(0, x.length-1);  //for remov the last charc of the string
        input_var.value = x;6
}

}
function brackets(){
    var i = 0;
    var input_var = document.getElementById('input');
    if (i==0){
        input_var.value += '(' ;
        i=1;
    }else if (i==1){
        input_var.value += ')' ;
        i=0; 
    } 

}

let result= 0;
function getValue(){
  var input_var = document.getElementById('input').value;
  console.log(input_var);
  // for 2 operators
 
 if(input_var.includes('+') ){
    let v = input_var.split('+');
    let numberOne = parseInt(v[0]);
    let numberTwo = parseInt(v[1]);
    let sum = numberOne + numberTwo;
    result=sum;
    console.log(sum, 'V')
   
 }else if(input_var.includes('-')){
    let w = input_var.split('-');
  
    let number1 = parseInt(w[0]);
    let number2 = parseInt(w[1]);
    let sub = number1 - number2;
    result=sub;
    console.log(sub, 'W')

 } else if (input_var.includes('/')) {
     
    let X = input_var.split('/');
    let num1 = parseInt(X[0]);
    let num2 = parseInt(X[1]);
    let divide = num1 / num2;
    result= divide;
    console.log(divide, 'x')

 }else if (input_var.includes('*')){
    let y = input_var.split('*');
    let n1 = parseInt(y[0]);
    let n2 = parseInt(y[1]);
    let multiiply = n1 * n2;
    result=multiiply;
    console.log(multiiply, 'y')
 }
//  document.getElementById('answer').value = result;
//   //for 3 operators
//   i=0;
//   if (i==0){
//     input_var.value += '+' ;
//     i=1;
//     }else if (i==1){
//     input_var.value += '-' ;
//     i=2; 
//     }else if (i==2){
//     input_var.value += '*';
//     i=3;
//     }else if(i==3){
//     input_var.value += '/';
//     i=0;
//     }

//   } 


  if(input_var.includes('+') ){
    
    let v = input_var.split('+');
    input_var.indexOf()
    let numberOne = parseInt(v[0]);
    let numberTwo = parseInt(v[1]);

    let sum = numberOne + numberTwo;
    result=sum;
    console.log(sum, 'V')
  }
}
