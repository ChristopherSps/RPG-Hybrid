/* Function pickAttribute
 * Rolls dice for an attribute and populates page. No save.
 * @param none
 * @return none
 */
function pickAttribute(){
  let rollFor=document.getElementById("rollFor");
  let attribute=document.getElementById("attribute");
  attribute.innerText = attributes[whichAttribute][0];
  let rollBox=document.getElementById("roll");
  rollBox.innerHTML=random();  
}

/* Function Keep
 * Pulls dice roll value from page to save in array.
 * Then rolls next attribute. 
 * @param none
 * @return none
 */
function keepOld(){
  if (rollCount > maxRolls){
      rollButton.innerText = "No Rerolls Left";
  }
  let sum = parseInt(document.getElementById("roll").innerText);
  attributes[whichAttribute][1] = sum;
  alert("Your "+ attributes[whichAttribute][0] + " is now "+ attributes[whichAttribute][1]);
  if (whichAttribute == 5) {
    stats();
  }
  else {
    whichAttribute++;
    pickAttribute();
  }
}

/* Function Keep
 * Pulls dice roll value from page to save in array.
 * Then rolls next attribute. 
 * @param none
 * @return random integer 3 to 18
 */
function random(){
  let sum = 0;
  for (let roll = 1; roll <= 3; roll ++){
    let rolled = Math.floor(Math.random()*6)+1;
    sum += rolled;
  }
  return sum;
}

/* Function reRoll
 * Re-calls Pick Attribute without advancing attribute
 * Then rolls next attribute. 
 * @param none
 * @return random integer 3 to 18
 */
function reRoll(){
  rollCount++;
  if (rollCount < maxRolls){
    rollButton.innerText = "Reroll "+rollCount+" of "+maxRolls;
    pickAttribute();
  }
  else if (rollCount == maxRolls){
    rollButton.innerText = "No Rerolls Left";
    pickAttribute();
  }
  else {
    rollButton.innerText = "No Rerolls Left";
    keep();
  }
}

function allDone(){
  alert("All Done with your stats");
}

function stats(){
  document.body.innerHTML="<h1>Your Character Stats</h1>"
  var statTable = document.createElement("table");
  var labels = statTable.insertRow();
  for (let thead = 0; thead < 6; thead++){
    var th1 = document.createElement("th");
    th1.innerHTML = attributes[thead][0];
    labels.appendChild(th1);
  }
  var values = statTable.insertRow();
  for (let tcell = 0; tcell < 6; tcell++){
    var Cell = values.insertCell();
    Cell.innerHTML = attributes[tcell][1];
  }
  document.body.appendChild(statTable);
}


function allDone(){
  alert("All Done with your stats");
}

function stats() {
  document.body.innerHTML="<h1>Your Character Stats</h1>";
  var statTable = document.createElement("table");
  var labels = statTable.insertRow();
  for (let thead = 0; thead < 6; thead++) {
    var th1 = document.createElement("th");
    th1.innerHTML = attributes[thead][0];
    labels.appendChild(th1);
    }
  var values = statTable.insertRow();
  for (let tcell = 0; tcell < 6; tcell++) {
    var Cell = values.insertCell();
    Cell.innerHTML = attributes[tcell][1];
    }
  document.body.appendChild(statTable);
  classOptions();
}

/* Function Class Options
 * @param none (attributes is global)
 * @return classList array
 * This function references a list of classes
 * And selects those that match the requirements
 * Based on the player's rolled attributes
 * attributes = attribute, current value
 * classReq = attributes[index], minimum value to qualify, classes[index]
 */
function classOptions(){
  let classList = []; //Gives the possible characters(classes) we could be, Christan Bale, Ben Affleck
  let strengthRoll = attributes[0][1];
  let minRoll = 11; //We are saying that minRoll is 11 according to the current airTable database, will be subject to change;
  //for (let att6 = 0; att6 < attributes.length; att6++ ){
  for (let att6 = 0; att6 < attributes.length; att6++ ){
    if (attributes[att6][1] >= classReq[att6][1]){
      choices.push(classes[classReq[att6][2]][0]);
    }
  }
  alert("You could be: "+JSON.stringify(choices));
}
