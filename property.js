document.getElementById('scheduleVisit').addEventListener('click', function() {
    toggleModal(true); // Opens the modal for scheduling a visit
});

document.getElementById('saveProperty').addEventListener('click', function() {
    alert('Property saved to your cart!');
});

function shareProperty() {
    console.log('Shared via WhatsApp and Email');
}

function sendQuery() {
    const query = document.getElementById('queryBox').value;
    console.log('Query sent: ', query);
}

function calculateLoan() {
    const price = document.getElementById('price').value;
    const downPayment = document.getElementById('downPayment').value;
    const interestRate = document.getElementById('interestRate').value;
    const term = document.getElementById('term').value;

    const principal = price - downPayment;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = term * 12;

    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const monthlyTax = 216; // Sample value
    const monthlyInsurance = 60; // Sample value

    const totalMonthlyPayment = monthlyPayment + monthlyTax + monthlyInsurance;

    document.getElementById('loanResult').innerHTML = `Monthly Payment: ₹${totalMonthlyPayment.toFixed(2)}`;
}

function toggleModal(show) {
    const modal = document.getElementById('visitModal');
    modal.style.display = show ? 'block' : 'none';
}

function scheduleVisit() {
    const date = document.getElementById('visitDate').value;
    const time = document.getElementById('visitTime').value;
    alert(`Visit scheduled on ${date} at ${time}`);
    toggleModal(false);
}
