
// Number and empty input valedation section  
function forStringValuedation(amount, message) {
    if (isNaN(amount) || (amount == '')) {
        alert(`${message} input is not a number \n please Enter a Number.`);
    } else {
        return amount;
    }
}

// get input section 
function getInput(idField) {
    const amount = document.getElementById(idField).value;
    forStringValuedation(amount, idField);
    return amount;
}

document.getElementById('balance-calculate').addEventListener('click', function (event) {
    // input income and expensess with valuedation 
    const income = getInput('income');
    const food = getInput('food');
    const rent = getInput('rent');
    const cloths = getInput('cloths');

    // expenses calcution
    const totalExpenses = parseFloat(food) + parseFloat(rent) + parseFloat(cloths);
    const expenses = document.getElementById('expenses');
    expenses.innerText = totalExpenses;

    if (totalExpenses > parseFloat(income)) {
        alert("income is less then expenses");
    } else {
        // balance calution 
        const totalBalance = parseFloat(income) - totalExpenses;
        const balance = document.getElementById('balance');
        balance.innerText = totalBalance;
    }



});




document.getElementById('save').addEventListener('click', function (event) {
    const income = getInput('income');
    const totalBalance = document.getElementById('balance').innerText;
    
    // saving section 
    const incomePercetage = document.getElementById('percentage').value;
    const saving = parseFloat(income) * parseFloat(incomePercetage) / 100;

    // show remaing-balance and save-amount
    document.getElementById('save-amount').innerText = saving;
    document.getElementById('remaing-balance').innerText = totalBalance - saving;
});

