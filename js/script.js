

// get Income Value
function getIncomeValue(){
    const incomeTxt = document.getElementById('income');
    const income = parseInt(incomeTxt.value);

    // get Income Validation
    if(incomeTxt.value == ''){
        document.getElementById('failedI').style.display = 'block';
    }else if(income < 0 || income == 0){
        document.getElementById('failedI2').style.display = 'block';
    }
    else{
        document.getElementById('failedI').style.display = 'none';
    };


    return income;

};

// get Expense Value
function getExpensesValue(){
    const foodTxt = document.getElementById('food');
    const food = parseInt(foodTxt.value);
    const rentTxt = document.getElementById('rent');
    const rent = parseInt(rentTxt.value);
    const othersTxt = document.getElementById('others');
    const others = parseInt(othersTxt.value);

    const totalExp = food + rent + others;

    // get Expense Validation
    if(foodTxt.value == ''){
        document.getElementById('failedF').style.display = 'block';
    }else if(rentTxt.value == ''){
        document.getElementById('failedR').style.display = 'block';
    }else if(othersTxt.value == ''){
        document.getElementById('failedO').style.display = 'block';
    }else if(food < 0 || food == 0){
        document.getElementById('failedF2').style.display = 'block';
    }else if(rent < 0 || rent == 0){
        document.getElementById('failedR2').style.display = 'block';
    }else if( others < 0 || others == 0){
        document.getElementById('failedO2').style.display = 'block';
    }
    else{
        document.getElementById('failedF').style.display = 'none';
        document.getElementById('failedF2').style.display = 'none';
        document.getElementById('failedR').style.display = 'none';
        document.getElementById('failedR2').style.display = 'none';
        document.getElementById('failedO').style.display = 'none';
        document.getElementById('failedO2').style.display = 'none';
    };

    
    return totalExp;
};

// Handle Calculation
document.getElementById('calculate').addEventListener('click', function(){
    
    // get Income Expense Function
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

// Handle Savings 
document.getElementById('saveBtn').addEventListener('click', function(){

    const income = getIncomeValue();
    const expense = getExpensesValue();
    const balance = income - expense;

    // Get Save Input
    const saveTxt = document.getElementById('saveInput');
    const save = parseInt(saveTxt.value);

    const savings = income * save/100;

    // get Save Amount
    const savingTxt = document.getElementById('savingAmount');
    savingTxt.innerText = savings;

    const remainingTxt = document.getElementById('remainingAmount');
    remainingTxt.innerText = balance - savings;
});