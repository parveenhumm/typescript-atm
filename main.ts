#! /usr/bin/env node 
// This line tells the operating system to use Node.js to run the script.

import inquirer from "inquirer" ;
// imports the inquirer library, which allows you to create interactive command-line prompts for user input.

console.log("Please insert your card");
 
let accountBalance = 30000 ;

let pinCode = 8855;

let codeAnswer = await inquirer.prompt(
    // await keyword ensures that the script waits for the user to input pin before proceedin.
    [
        {
         name : "UserEnteredPinCode" ,
         message : "Please Enter Your Pin Code" ,
         type : "number" ,
        }
    ]
  );
    // pin verfication 
   if(codeAnswer.UserEnteredPinCode === pinCode){
    console.log("You Have Entered Correct Pin Code");   

     let operationAnswer = await inquirer.prompt(
        [
            { 
                name : "operation" ,
                message : "Please select operation to performed " ,
                type : "list" ,
                choices : [ "Withdraw" , "Check Balance" , "Fast Cash"]
            }
        ]
     );  
        
        if(operationAnswer.operation == "Withdraw"){

        let amountAns = await inquirer.prompt(
            [
                {
                  name : "amount" ,                 
                  message : "Enter amount" ,
                  type : "number" ,
                } 
            ] 
        );   if(amountAns.amount <= accountBalance){
                  accountBalance  -= amountAns.amount ;
                  console.log(`Your remainaing balanace is : ${accountBalance}` );
             } else{
                console.log(`Sorry! Your account balance is insufficient for the transaction`);
            }
        }else if(operationAnswer.operation === "Check Balance"){
        console.log(`Your Balance is : ${accountBalance} `);

      } else if(operationAnswer.operation === "Fast Cash"){

        let fastOption = await inquirer.prompt(
            [
                {
                     name : "fast" ,
                     type : "list" ,
                     message : "Please select the options given below :" ,
                     choices : ["5000" , "10000" , "15000" , "20000" , "25000"] ,
                }
            ]
            );if(fastOption.fast == 5000 && accountBalance >=  5000 ){
                    let result1 = accountBalance - 5000 ;
                    console.log(`your remaining balance is : ,"${result1}"`);
                }else if(fastOption.fast == 10000 && accountBalance >=  10000){
                    let result2 = accountBalance - 10000 ;
                    console.log(`your remaining balance is : ,"${result2}"`);
                }else if(fastOption.fast == 15000 && accountBalance >=  15000){
                    let result3 = accountBalance - 15000 ;
                    console.log(`your remaining balance is : ,"${result3}"`);
                }else if(fastOption.fast == 20000 && accountBalance >=  20000){
                    let result4 = accountBalance - 20000 ;
                    console.log(`your remaining balance is : ,"${result4}"`);
                }else if(fastOption.fast == 25000 && accountBalance >=  25000){
                    let result5 = accountBalance - 25000 ;
                    console.log(`your remaining balance is : ,"${result5}"`);
                }
            }else {
                console.log(`Sorry! Your account balance is insufficient for the transaction`);
            }
        
}else{
console.log(`Sorry! Enter Correct Pin Code`);
}
