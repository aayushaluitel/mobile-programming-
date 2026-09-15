let balance = 10000;
let password = "1234";
let verified = false;

function verifyPin() {
    let pin = document.getElementById("userPin").value;

    if (pin === password) {
        verified = true;
        document.getElementById("output").innerHTML =
            "Access granted.";
    } else {
        verified = false;
        document.getElementById("output").innerHTML =
            "Access denied.";
    }
}

function showBalance() {
    if (verified === true) {
        document.getElementById("output").innerHTML =
            "Available Balance: Rs. " + balance;
    } else {
        document.getElementById("output").innerHTML =
            "Verify your PIN first.";
    }
}

function withdrawCash() {
    let amount = Number(
        document.getElementById("transactionAmount").value
    );

    if (verified === false) {
        document.getElementById("output").innerHTML =
            "Verify your PIN first.";
    }

    else if (amount <= 0) {
        document.getElementById("output").innerHTML =
            "Amount is not valid.";
    }

    else if (amount % 100 !== 0) {
        document.getElementById("output").innerHTML =
            "Use multiples of Rs. 100.";
    }

    else if (amount > balance) {
        document.getElementById("output").innerHTML =
            "You do not have enough balance.";
    }

    else {
        balance -= amount;

        document.getElementById("output").innerHTML =
            "Cash withdrawn. Remaining Balance: Rs. " + balance;
    }
}

function depositCash() {
    let amount = Number(
        document.getElementById("transactionAmount").value
    );

    if (verified === false) {
        document.getElementById("output").innerHTML =
            "Verify your PIN first.";
    }

    else if (amount <= 0) {
        document.getElementById("output").innerHTML =
            "Amount is not valid.";
    }

    else if (amount % 100 !== 0) {
        document.getElementById("output").innerHTML =
            "Use multiples of Rs. 100.";
    }

    else {
        balance += amount;

        document.getElementById("output").innerHTML =
            "Deposit completed. New Balance: Rs. " + balance;
    }
}
