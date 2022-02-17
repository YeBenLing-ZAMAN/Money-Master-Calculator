
// Number and empty input valedation section  
function forStringValuedation(amount, message) {
    if (isNaN(amount)) {
        alert(`${message} input is not a number \nplease Enter a Number.`);
        return false
    } else if (amount == '') {
        alert(`${message} please Enter a Number.`);
        return false
    }
    else if ((parseFloat(amount) < 0)) {
        alert(`${message} input is a negative \nplease Enter a postive Number.`);
        return false
    } else {
        return true;
    }
}

// get input section 
function getInput(idField) {
    const amount = document.getElementById(idField).value;
    const inputValue = forStringValuedation(amount, idField);
    if (inputValue == true) {
        return amount;
    } else {
        return '';
    }
}

// part -01 income and expenses handle 

document.getElementById('balance-calculate').addEventListener('click', function () {

    // input income and expensess with valuedation 
    const income = parseFloat(getInput('income'));
    const food = parseFloat(getInput('food'));
    const rent = parseFloat(getInput('rent'));
    const cloths = parseFloat(getInput('cloths'));

    // expenses calcution

    if ((isNaN(income) == false) && (isNaN(food) == false) && (isNaN(rent) == false) && (isNaN(cloths) == false)) {
        const totalExpenses = (food) + (rent) + (cloths);
        const expenses = document.getElementById('expenses');
        expenses.innerText = totalExpenses;
        console.log("i am tagert");

        if (totalExpenses > (income)) {
            // notify expenses is large than income 
            alert("income is less then expenses");
        } else {
            // balance calution 
            const totalBalance = (income) - totalExpenses;
            const balance = document.getElementById('balance');
            balance.innerText = totalBalance;
        }
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



