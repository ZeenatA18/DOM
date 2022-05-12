// get a reference to the sms or call radio buttons
const callSettings = document.querySelector(".callTotalSettings");
const smsSettings = document.querySelector(".smsTotalSettings");
const total = document.querySelector(".totalSettings");

// get refences to all the settings fields
const callSetting = document.querySelector(".callCostSetting");
const smsSetting = document.querySelector(".smsCostSetting");
const warnings = document.querySelector(".warningLevelSetting");
const criticals = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
const buttonAdd = document.querySelector(".billSettingBtn");

//get a reference to the 'Update settings' button
const updateBtn = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var call = 0
var sms = 0
var warning1 = 0
var critical1 = 0

// create a variables that will keep track of all three totals.
var callSet = 0;
var smsSet = 0

//add an event listener for when the 'Update settings' button is pressed
updateBtn.addEventListener("click", function () {
    call = Number(callSetting.value);
    sms = Number(smsSetting.value);
    warning1 = Number(warnings.value);
    critical1 = Number(criticals.value);
    if (Number(total.innerHTML) < Number(critical1)){
        buttonAdd.disabled = false;
    }


    total.classList.remove("warning")
    total.classList.remove("danger")

})

//add an event listener for when the add button is pressed
buttonAdd.addEventListener('click', settingsBillTotal)

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.


function settingsBillTotal() {
    // get the value entered in the billType textfield

    var checkedbuttonAdd = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (checkedbuttonAdd) {
        var billItemTypeWithSettings = (checkedbuttonAdd.value).toLowerCase();

        if (billItemTypeWithSettings === "call" ) {
            callSet += call
        }
        else if (billItemTypeWithSettings === "sms" ) {
            smsSet += sms
        }
    }

    callSettings.innerHTML = callSet.toFixed(2);
    smsSettings.innerHTML = smsSet.toFixed(2);
    var costs = callSet + smsSet;
    total.innerHTML = costs.toFixed(2);
  

    if (costs >= critical1) {
        
        total.classList.add("danger");

        total.classList.remove("warning")

    }
    else if (costs >= warning1) {

        total.classList.add("warning");

        total.classList.remove("danger")

    }
    // console.log(typeof checkedbuttonAdd.disabled)
    if (Number(costs) >= Number(critical1)){
        buttonAdd.disabled = true;
    }

   

}