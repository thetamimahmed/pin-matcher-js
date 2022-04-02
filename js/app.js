function generatePin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        document.getElementById('display-pin').value = pin;
    }else{
        return generatePin();
    }
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const numbers = event.target.innerText;
    const typedNumbers = document.getElementById('typed-numbers');
    if(isNaN(numbers)){
        if(numbers == 'C'){
            typedNumbers.value = '';
        }
    }else{
        typedNumbers.value += numbers;
    }
    
})

function verifyPin(){
    const inputPin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    if(inputPin == typedNumbers){
        document.getElementById('notify-success').style.display = 'block';
        document.getElementById('notify-fail').style.display = 'none';
    }else{
        document.getElementById('notify-fail').style.display = 'block';
        document.getElementById('notify-success').style.display = 'none';
    }
}
