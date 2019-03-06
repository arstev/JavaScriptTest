
var inputStr = 'aka';

console.log('Palindrome',isPalendrome(inputStr));

function isPalendrome(input) {
 
  let ret = false; 
  debugger;
  let output = "";
  for(let char of input){
    output = char + output;
  }


  for (var i = input.length - 1; i >= 0; i--){        
    output += input[i];

     input[i]
     for (var i = 0 ; i < input.length; i++){        
        output[i] == input[i];
    
         input[i]
       
      } 
   
  }    

  console.log('reverse',output);

  if ( output === input) {
   ret = true;
  }

  return ret;

}
