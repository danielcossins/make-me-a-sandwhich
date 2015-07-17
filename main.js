/*
  ...........YOUR MISSION...........

  Make me a sandwich.
  
  1. Create a Sandwich object.
  2. Create 6 keys on the object all defaulted to a value of false
     a. pickle: false
     b. lettuce: false
     c. tomato: false
     d. ketchup: false
     e. mustard: false
     f. mayo: false
  3. Create different functions where each one can change the value of only one of the keys on a Sandwich object to "true".
  4. Create a function named "makeMeASandwich".
  5. That function should take 6 arguments - one for each condiment on the sandwich.
  6. If any of those 6 argument values are true, put that condiment on the sandwich.
  7. Write to the document something like this...
    "My sandwich has pickle, ketchup, mustard on it"
*/
var sandwich = {
  pickle: false,
  lettuce: false,
  tomato: false,
  ketchup: false,
  mustard: false,
  mayo: false
};

function changeFood(sammich){
  /*if(Math.random()*2>1){
    sammich.pickle = true;
  }
  
  if(Math.random()*2>1){
    sammich.lettuce = true;
  }
  
  if(Math.random()*2>1){
    sammich.tomato = true;
  }
  
  if(Math.random()*2>1){
    sammich.ketchup = true;
  }
  
  if(Math.random()*2>1){
    sammich.mustard = true;
  }
  
  if(Math.random()*2>1){
    sammich.mayo = true;
  }*/
  if(prompt("Do you want pickle? Type 'yes' if you do:   ")==="yes"){
    sammich.pickle = true;
  }
  
  if(prompt("Do you want lettuce? Type 'yes' if you do:   ")==="yes"){
    sammich.lettuce = true;
  }
  
  if(prompt("Do you want tomato? Type 'yes' if you do:   ")==="yes"){
    sammich.tomato = true;
  }
  
  if(prompt("Do you want ketchup? Type 'yes' if you do:   ")==="yes"){
    sammich.ketchup = true;
  }
  
  if(prompt("Do you want mustard? Type 'yes' if you do:   ")==="yes"){
    sammich.mustard = true;
  }
  
  if(prompt("Do you want mayo? Type 'yes' if you do:   ")==="yes"){
    sammich.mayo = true;
  }
  return sammich;
}

function makeMeASandwich(sammich){//sammich.pickle, sammich.lettuce, sammich.tomato, sammich.ketchup, sammich.mustard, sammich.mayo){
  var pickle = "";
  var lettuce = "";
  var tomato = "";
  var ketchup = "";
  var mustard = "";
  var mayo = "";
  if(sammich.pickle){
    pickle = " pickle";
  }
  if(sammich.lettuce){
    lettuce=" lettuce";
  }
  if(sammich.tomato){
    tomato=" tomato";
  }
  if(sammich.ketchup){
    ketchup=" ketchup"
  }
  if(sammich.mustard){
    mustard=" mustard";
  }
  if(sammich.mayo){
    mayo=" mayo";
  }
  document.write("Make me a sammich with"+pickle+lettuce+tomato+ketchup+mustard+mayo+" on it, woman.");
}



//makeMeASandwich(changeFood(sandwhich));
makeMeASandwich(changeFood(sandwich));