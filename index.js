
function forStringValuedation(value , message){
    if(isNaN(value) || (value =='')){
        alert (`${message} input is not a number \n please Enter a Number.`);
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

    // expenses calcution
    const totalExpenses = parseFloat(food) + parseFloat(rent) +parseFloat(cloths);
    const expenses = document.getElementById('expenses');
    expenses.innerText = totalExpenses ;

    // balance calution 
    const totalBalance = parseFloat(income) - totalExpenses;
    const balance = document.getElementById('balance');
    balance.innerText = totalBalance ;
   console.log();
})