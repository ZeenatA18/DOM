// get a reference to the sms or call radio buttons
const callSettings = document.querySelector(".callTotalSettings");
const smsSettings = document.querySelector(".smsTotalSettings");
const total = document.querySelector(".totalSettings");

// get refences to all the settings fields
const callSetting = document.querySelector(".callCostSetting");
const smsSetting = document.querySelector(".smsCostSetting");
const warning = document.querySelector(".warningLevelSetting");
const critical = document.querySelector(".criticalLevelSetting")

//get a reference to the add button
const checkedbuttonAdd = document.querySelector(".billSettingBtn")

//get a reference to the 'Update settings' button
const updateBtn = document.querySelector(".updateSettings")

// create a variables that will keep track of all the settings
var call = 0
var sms = 0 
var warning1 = 0
var critical1 = 0

// create a variables that will keep track of all three totals.
var callSet = 0
var smsSet = 0
var totals = 0

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

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
        var billItemType = (checkedbuttonAdd.value).toLowerCase();

        // billItemType will be 'call' or 'sms'

        if (billItemType === "call") {
            call += 2.75
        }
        else if (billItemType === "sms") {
            sms += 0.75;
        }
    }
}