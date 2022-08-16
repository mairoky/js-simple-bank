// Deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositElement.innerText = currentDepositTotal;

    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBanlanceTotal = previousBalanceTotal + newDepositAmount;
    balanceElement.innerText = currentBanlanceTotal;

    depositField.value = '';
});

// Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawElement.innerText = currentWithdrawTotal;

    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBanlanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = currentBanlanceTotal;

    withdrawField.value = '';
});