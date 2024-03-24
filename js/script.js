const form = document.querySelector('#formBills')
const billInput = document.forms['formBills']['bill']
const button5 = document.forms['formBills']['5Button']
const button10 = document.forms['formBills']['10Button']
const button15 = document.forms['formBills']['15Button']
const button25 = document.forms['formBills']['25Button']
const button50 = document.forms['formBills']['50Button']
const customTip = document.forms['formBills']['custom']
const numberOfPeople = document.forms['formBills']['people']
const spanError = document.querySelector('#spanError')

let testHTML = ''
let currentNumber = ''



function calcButton() {
    let pFive = parseInt(billInput.value) / 100
    let pCalc = pFive * currentNumber
    let pResult = pCalc + parseInt(billInput.value)
    
    if (numberOfPeople >= 1, pFive >= 1, pCalc >= 1) {
        let tipAmount = pCalc / parseInt(numberOfPeople.value)
        let totalPerPerson = pResult / parseInt(numberOfPeople.value)
        resetValue = false
        testHTML = `
        <div class="resultsFlex">
            <div>
                <h2>Tip Amount</h2>
                <span class="perPerson">/ person</span>
            </div>
            <span class="resultAmount">$${tipAmount.toFixed(2)}</span>
        </div>
        <div class="resultsFlex">
            <div>
                <h2>Total</h2>
                <span class="perPerson">/ person</span>
            </div>
            <span class="resultAmount">$${totalPerPerson.toFixed(2)}</span>
        </div>
                
        <div class="resetWrapper">
             <button type="reset" class="resetButton">RESET</button>
        </div>
        `
        document.querySelector('#results').innerHTML = testHTML
    }
    
    if (!numberOfPeople.value || numberOfPeople.value <= 0) {
        numberOfPeople.classList.add("errorBorder")
        spanError.classList.add("error")
        spanError.classList.remove("hidden")
    } else if (numberOfPeople.value >= 1) {
        numberOfPeople.classList.remove("errorBorder")
        spanError.classList.remove("error")
        spanError.classList.add("hidden")
    }
    
    if (billInput.value <= 0) {
        billInput.classList.add("errorBorder")
    } else if (billInput.value > 0) {
        billInput.classList.remove("errorBorder")
    }
}

function changeValue5() {
    currentNumber = 5
    calcButton()
}
function changeValue10() {
    currentNumber = 10
    calcButton()
}
function changeValue15() {
    currentNumber = 15
    calcButton()
}
function changeValue25() {
    currentNumber = 25
    calcButton()
}
function changeValue50() {
    currentNumber = 50
    calcButton()
}
function changeValueCustom() {
    currentNumber = parseInt(customTip.value)
    calcButton()
}

button5.addEventListener('click', changeValue5)
button10.addEventListener('click', changeValue10)
button15.addEventListener('click', changeValue15)
button25.addEventListener('click', changeValue25)
button50.addEventListener('click', changeValue50)
customTip.addEventListener('blur', changeValueCustom)