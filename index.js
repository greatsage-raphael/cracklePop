//A program that prints out the numbers 1 to 100 (inclusive). 
function CracklePop(){
for(i = 1; i <= 100; i++){
    //If it's divisible by both 3 and 5, print CracklePop.
     if(i % 3 === 0 && i % 5 === 0){
        console.log("cracklePop")
    }
    //If the number is divisible by 3, print Crackle instead of the number.
    else if(i % 3 === 0){
        console.log("Crackle")
    }
    //If it's divisible by 5, print Pop. 
    else if(i % 5 === 0){
        console.log("Pop")
    }
    else{
        console.log(i)
    }
}
}

CracklePop()


 
 
