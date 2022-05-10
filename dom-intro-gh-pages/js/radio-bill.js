// get a reference to the sms or call radio buttons

const callTotals = document.querySelector(".callTotalTwo");
const smsTotals = document.querySelector(".smsTotalTwo");
const totalCosts = document.querySelector(".totalTwo");


//get a reference to the add button
const checkedRadioBtn = document.querySelector(".radioBillAddBtn")

//create a variable that will keep track of the total bill

var callsTotal1 = 0;
var smsTotal1 = 0;
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function radioBillTotal() {
    // get the value entered in the billType textfield

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = (checkedRadioBtn.value).toLowerCase();

        // billItemType will be 'call' or 'sms'

        if (billItemType === "call") {
            callsTotal1 += 2.75
        }
        else if (billItemType === "sms") {
            smsTotal1 += 0.75;
        }
    }


    //update the totals that is displayed on the screen.
    callTotals.innerHTML = callsTotal1.toFixed(2);
    smsTotals.innerHTML = smsTotal1.toFixed(2);

    var totalCost = callsTotal1 + smsTotal1;
    console.log(totalCosts)
    totalCosts.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50) {
        // adding the danger class will make the text red
        totalCosts.classList.add("danger");
    }
    else if (totalCost >= 30) {
        totalCosts.classList.add("warning");
    }
}

checkedRadioBtn.addEventListener('click', radioBillTotal);
