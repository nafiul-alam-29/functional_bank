

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldValueById('deposit-input');
    const previousDeposit = getElementValueById('deposit-amount');
    
    const newDepositTotal = previousDeposit + newDepositAmount;

    const previousBalanceTotal = getElementValueById('balance-amount')
    const currentBalance = previousBalanceTotal + newDepositAmount;
    

    setTextElementValueById('deposit-amount',newDepositTotal);
    setTextElementValueById('balance-amount',currentBalance);
    
})