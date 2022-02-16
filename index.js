
function forStringValuedation(value , message){
    if(isNaN(value)){
        alert (`${message} input is not a number \n please Enter a Number.`);
        // console.log(`${message} input is not a number \n please Enter a Number.`)
    }else{
        console.log("number");
    }
}

document.getElementById('balance-calculate').addEventListener('click', function(event){
    // input income and expensess with valuedation 
    const income = document.getElementById('income').value;
    forStringValuedation(income , "income");
    const food = document.getElementById('food').value;
    forStringValuedation(food , "food");
    const rent = document.getElementById('rent').value;
    forStringValuedation(rent , "rent");
    const cloths = document.getElementById('cloths').value;
    forStringValuedation(cloths , "cloths");

   
   console.log();
})