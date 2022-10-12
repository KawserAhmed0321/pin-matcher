function getpin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('3digit', pin);
        return getpin();

    }
}

function generatePin() {
    const pin = getpin();
    document.getElementById('pin-input').value = pin;
}


document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const cal = document.getElementById('key-number');

    if (isNaN(number)) {
        if (number == 'C') {
            cal.value = '';
        }

    }
    else {

        const previusNumber = cal.value;
        const newnumber = previusNumber + number;
        cal.value = newnumber;
    }

})

function varifyPin(){
    const pinInput=document.getElementById('pin-input').value;
    const keynumber = document.getElementById('key-number').value;
    const pinsuccess = document.getElementById('pin-success');
    const pinfail = document.getElementById('pin-fail');
    if (pinInput == keynumber){
        
        pinsuccess.style.display='block';
        pinfail.style.display = 'none';
    }
    else{
        
        pinfail.style.display='block';
        pinsuccess.style.display = 'none';
    }
}