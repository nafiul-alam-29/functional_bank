document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithDrawAmont = getInputFieldValueById('withdraw-input')
    const previousWithdrawAmount = getElementValueById('withdraw-amount')

    const newWithTotal = newWithDrawAmont + previousWithdrawAmount;

    setTextElementValueById('withdraw-amount',newWithTotal);
    const previousBalanceTotal = getElementValueById('balance-amount');
    const newBalanceTotal = previousBalanceTotal - newWithTotal;
    

    setTextElementValueById('balance-amount',newBalanceTotal)
})
   
    

   