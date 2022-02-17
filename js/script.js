

// Handle Income

function getIncomeValue(){
    const incomeTxt = document.getElementById('income');
    const income = parseInt(incomeTxt.value);
    return income;

};

function getExpensesValue(){
    const foodTxt = document.getElementById('food');
    const food = parseInt(foodTxt.value);
    const rentTxt = document.getElementById('rent');
    const rent = parseInt(rentTxt.value);
    const othersTxt = document.getElementById('others');
    const others = parseInt(othersTxt.value);

    const totalExp = food + rent + others;
    return totalExp;
};

document.getElementById('calculate').addEventListener('click', function(){
    
    const income = getIncomeValue();
    const expense = getExpensesValue();
    const balance = income - expense;

    // get Total Expenses
    const totalExpenseTxt = document.getElementById('totalExpenses');
    totalExpenseTxt.innerText= getExpensesValue();

    // Get Balance
    const balanceTxt = document.getElementById('balance');
    balanceTxt.innerText = balance;
});


document.getElementById('saveBtn').addEventListener('click', function(){

    const income = getIncomeValue();
    const expense = getExpensesValue();
    const balance = income - expense;

    // Get Save Input
    const saveTxt = document.getElementById('saveInput');
    const save = parseInt(saveTxt.value);

    const savings = income * save/100;

    const savingTxt = document.getElementById('savingAmount');
    savingTxt.innerText = savings;

    const remainingTxt = document.getElementById('remainingAmount');
    remainingTxt.innerText = balance - savings;
});