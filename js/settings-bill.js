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
// var call = 0
// var sms = 0
// var warning1 = 0
// var critical1 = 0

// create a variables that will keep track of all three totals.
// var callSet = 0;
// var smsSet = 0

//giving DOM access to setting bill factory funtion called the instantiation
var settingFactory = BillWithSettings()

//add an event listener for when the 'Update settings' button is pressed
updateBtn.addEventListener("click", function () {

settingFactory.setCallCost(Number(callSetting.value));
settingFactory.setSmsCost(Number(smsSetting.value));
settingFactory.setWarningLevel(Number(warnings.value));
settingFactory.setCriticalLevel(Number(criticals.value));

addColor();
  

})

buttonAdd.addEventListener('click', settingsBillTotal)




function settingsBillTotal() {
 

    var checkedbuttonAdd = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (checkedbuttonAdd) {
        var billItemTypeWithSettings = (checkedbuttonAdd.value).toLowerCase();

        if (billItemTypeWithSettings === "call" ) {
         settingFactory.makeCall()        
        }else if (billItemTypeWithSettings === "sms" ) {
            settingFactory.sendSms()
        }
    }

    callSettings.innerHTML = settingFactory.getTotalCallCost().toFixed(2);
    smsSettings.innerHTML = settingFactory.getTotalSmsCost().toFixed(2);
    total.innerHTML = settingFactory.getTotalCost().toFixed(2);
  
addColor();
   

    }
    

   

function addColor(){
   document.querySelector("#addColor").classList.remove("warning")
   document.querySelector("#addColor").classList.remove("danger")

   document.querySelector("#addColor").classList.add(settingFactory.totalClassName())
}