const numberButtons = document.querySelector('[data-number]')
const operationButtons = document.querySelector('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-del]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[ data-current-operand]');

const calculator = {
    currentNum: null,
    previousNum: 0,
    operator: null,
    displayValue: '0',
};
button1.addEventListener('click' , function() {

}

button1.addEventListener('click' , () => {

})


function add(num1,num2) {
    let total= 0;
    total = num1 + num2;
    return total;
}

function sub(num1,num2) {
    let total = 0;
    total = num1 - num2;
    return total;
}

function mult(num1,num2) {
    let total = 0;
    total = num1 * num2;
    return total;
}

function div(num1,num2) {
    let total = 0;
    total = num1 / num2;
    return total;
}

function operate(num1,op,num2) {
    if ( op === '+' )
        return add(num1,num2);
}



const button1 = document.querySelectorAll('[data-number]');

console.log(button1);

button1.forEach( element => {
    //Add an eventListender to every element

    //Define what eventListener should do
});

//        ('click' , () => {

// }))

