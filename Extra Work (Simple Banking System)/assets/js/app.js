var person1 = {
    name: "p1",
    accountNumber: 123,
    pin: 123,
    balance: 4000.00
}


var person2 = {
    name: "p2",
    accountNumber: 456,
    pin: 456,
    balance: 1000.00
}

var person3 = {
    name: "p3",
    accountNumber: 789,
    pin: 789,
    balance: 9000.00
}

function deposit() {
    let accountName = prompt("Please enter account name")
    let accountNumber = parseInt(prompt("Enter account number"))
    let pin = parseInt(prompt("Enter pin"))

    if (accountName == person1.name && accountNumber == person1.accountNumber && pin == person1.pin) {
        alert("Signed in as Person 1")
        let depositMoney = parseFloat(prompt("How much money are you depositing?"))
        person1.balance += depositMoney
        alert("Action successful. Your new balance is " + person1.balance)

    } else if (accountName == person2.name && accountNumber == person2.accountNumber && pin == person2.pin) {
        alert("Signed in as Person 2")
        let depositMoney = parseFloat(prompt("How much money are you depositing?"))
        person2.balance += depositMoney
        alert("Action successful. Your new balance is " + person2.balance)

    } else if (accountName == person3.name && accountNumber == person3.accountNumber && pin == person3.pin) {
        alert("Signed in as Person 3")
        let depositMoney = parseFloat(prompt("How much money are you depositing?"))
        person3.balance += depositMoney
        alert("Action successful. Your new balance is " + person3.balance)

    } else alert("Error signing in. Please check your credentials.")
}

var withdrawalTimes = 2

function withdraw() {
    let accountName = prompt("Please enter account name")
    let accountNumber = parseInt(prompt("Enter account number"))
    let pin = parseInt(prompt("Enter pin"))

    let withdrawalMinimum = 10
    let withdrawalMaximum = 10000

    if (accountName == person1.name && accountNumber == person1.accountNumber && pin == person1.pin) {
        alert("Signed in as Person 1")
        if (withdrawalTimes > 0) {
            let withdrawalMoney = parseFloat(prompt("How much money are you withdrawing?"))
            if (withdrawalMoney > withdrawalMinimum && withdrawalMoney <= withdrawalMaximum) {
                person1.balance -= withdrawalMoney
                withdrawalTimes -= 1
                alert("Action successful. Your new balance is " + person1.balance + ". You can now withdraw " + withdrawalTimes + " times.")
            } else alert("Minimum withdrawal amount is $10 & maximum withdrawal amount is $10000")
        } else if (withdrawalTimes <= 0) {
            alert("You have reached the maximum number withdrawal limit for today. Please try again tomorrow.")
        }
    } else if (accountName == person2.name && accountNumber == person2.accountNumber && pin == person2.pin) {
        alert("Signed in as Person 2")
        if (withdrawalTimes > 0) {
            let withdrawalMoney = parseFloat(prompt("How much money are you withdrawing?"))
            if (withdrawalMoney > withdrawalMinimum && withdrawalMoney <= withdrawalMaximum) {
                person2.balance -= withdrawalMoney
                withdrawalTimes -= 1
                alert("Action successful. Your new balance is " + person2.balance + ". You can now withdraw " + withdrawalTimes + " times.")
            } else alert("Minimum withdrawal amount is $10 & maximum withdrawal amount is $10000")
        } else if (withdrawalTimes <= 0) {
            alert("You have reached the maximum number withdrawal limit for today. Please try again tomorrow.")
        }
    } else if (accountName == person3.name && accountNumber == person3.accountNumber && pin == person3.pin) {
        alert("Signed in as Person 3")
        if (withdrawalTimes > 0) {
            let withdrawalMoney = parseFloat(prompt("How much money are you withdrawing?"))
            if (withdrawalMoney > withdrawalMinimum && withdrawalMoney <= withdrawalMaximum) {
                person3.balance -= withdrawalMoney
                withdrawalTimes -= 1
                alert("Action successful. Your new balance is " + person3.balance + ". You can now withdraw " + withdrawalTimes + " times.")
            } else alert("Minimum withdrawal amount is $10 & maximum withdrawal amount is $10000")
        } else if (withdrawalTimes <= 0) {
            alert("You have reached the maximum number withdrawal limit for today. Please try again tomorrow.")
        }
    } else alert("Error signing in. Please check your credentials.")
}

function balance() {
    let accountName = prompt("Please enter account name")
    let accountNumber = parseInt(prompt("Enter account number"))
    let pin = parseInt(prompt("Enter pin"))

    if (accountName == person1.name && accountNumber == person1.accountNumber && pin == person1.pin) {
        alert("Signed in as Person 1")
        alert("Your balance is " + person1.balance)
    } else if (accountName == person2.name && accountNumber == person2.accountNumber && pin == person2.pin) {
        alert("Signed in as Person 2")
        alert("Your balance is " + person2.balance)
    } else if (accountName == person3.name && accountNumber == person3.accountNumber && pin == person3.pin) {
        alert("Signed in as Person 3")
        alert("Your balance is " + person3.balance)
    } else alert("Error signing in. Please check your credentials and try again.")
}

function transfer() {
    let accountName = prompt("Please enter account name")
    let accountNumber = parseInt(prompt("Enter account number"))
    let pin = parseInt(prompt("Enter pin"))

    if (accountName == person1.name && accountNumber == person1.accountNumber && pin == person1.pin) {
        alert("Signed in as Person 1")

        let transferAccountName = prompt("Please enter the account name you are transferring money to")
        let transferAccountNumber = parseInt(prompt("Enter the account number you are transferring money to"))
        let transferAmount = parseFloat(prompt("Enter amount to transfer"))

        if (transferAmount <= (person1.balance - 500)) {
            if (transferAccountName == person2.name && transferAccountNumber == person2.accountNumber) {
                person2.balance += transferAmount
                person1.balance -= transferAmount
                alert("Action Successful. Your new balance is " + person1.balance)
            }
        } else if (transferAmount <= (person1.balance - 500)) {
            if (transferAccountName == person3.name && transferAccountNumber == person3.accountNumber) {
                person3.balance += transferAmount
                person1.balance -= transferAmount
                alert("Action Successful. Your new balance is " + person1.balance)
            }
        } else if (transferAmount > (person1.balance - 500)) {
            alert(`You don\'t have ${transferAmount} to transfer. Your current balance is ${person1.balance}`)
        }

    } else if (accountName == person2.name && accountNumber == person2.accountNumber && pin == person2.pin) {
        alert("Signed in as Person 2")

        let transferAccountName = prompt("Please enter the account name you are transferring money to")
        let transferAccountNumber = parseInt(prompt("Enter the account number you are transferring money to"))
        let transferAmount = parseFloat(prompt("Enter amount to transfer"))

        if (transferAmount <= (person2.balance - 500)) {
            if (transferAccountName == person1.name && transferAccountNumber == person1.accountNumber) {
                person1.balance += transferAmount
                person2.balance -= transferAmount
                alert("Action Successful. Your new balance is " + person2.balance)
            }
        } else if (transferAmount <= (person2.balance - 500)) {
            if (transferAccountName == person3.name && transferAccountNumber == person3.accountNumber) {
                person3.balance += transferAmount
                person2.balance -= transferAmount
                alert("Action Successful. Your new balance is " + person2.balance)
            }
        } else if (transferAmount > (person2.balance - 500)) {
            alert(`You don\'t have ${transferAmount} to transfer. Your current balance is ${person2.balance}`)
        }

    } else if (accountName == person3.name && accountNumber == person3.accountNumber && pin == person3.pin) {
        alert("Signed in as Person 3")

        let transferAccountName = prompt("Please enter the account name you are transferring money to")
        let transferAccountNumber = parseInt(prompt("Enter the account number you are transferring money to"))
        let transferAmount = parseFloat(prompt("Enter amount to transfer"))

        if (transferAmount <= (person3.balance - 500)) {
            if (transferAccountName == person1.name && transferAccountNumber == person1.accountNumber) {
                person1.balance += transferAmount
                person3.balance -= transferAmount
                alert("Action Successful. Your new balance is " + person3.balance)
            }
        } else if (transferAmount <= (person3.balance - 500)) {
            if (transferAccountName == person2.name && transferAccountNumber == person2.accountNumber) {
                person2.balance += transferAmount
                person3.balance -= transferAmount
                alert("Action Successful. Your new balance is " + person3.balance)
            }
        } else if (transferAmount > (person3.balance - 500)) {
            alert(`You don\'t have ${transferAmount} to transfer. Your current balance is ${person3.balance}`)
        }

    } else alert("Error signing in. Please check your credentials and try again.")
}

var condition = true
while (condition == true) {
    (function () {
        var op = prompt("Choose a number: \n 1. Deposit \n 2. Withdraw \n 3. Balance \n 4. Transfer \n 5. Quit")

        if (op == 1) {
            deposit()
        } else if (op == 2) {
            withdraw()
        } else if (op == 3) {
            balance()
        } else if (op == 4) {
            transfer()
        } else if (op == 5) {
            condition = false
            console.log(condition)
        }
    })()
}