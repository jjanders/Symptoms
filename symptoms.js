var symptoms = {


description:[ "SYMPTOMS: Please indicate any symptoms you experienced regularly at any time prior to your injury (pre-injury) and symptoms you experienced after your injury (post-injury). Leave any necessary comments."
],


symptomObj:[
{ "symptomName":"Headaches", 
"pre":false , 
"post":false , 
"info":"" },
{ "symptomName":"Pressure in head",
 "pre":false,
 "post":false,
 "info":"" }, 
{ "symptomName":"Nausea/vomiting",
 "pre":false,
 "post":false,
 "info":"" }, 
{ 
"symptomName":"Sensitivity to light",
 "pre":false,
 "post":false, 
"info":"" },
 { 
"symptomName":"Sensitivity to noise",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Dizziness/vertigo",
 "pre":false,
 "post":false, 
"info":"" }, 
{ 
"symptomName":"Slowed down",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"\"In a fog\"",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"\"Not right\"",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Difficulty concentration",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Memory difficulties",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Fatigued or low energy",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Confused",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Irritable",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Sad",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Nervous",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Anxious",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Drowsy",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Sleeping more than usual",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Sleeping less than usual",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Balance problems",
 "pre":false,
 "post":false, 
"info":"" }, 
 { 
"symptomName":"Neck pain",
 "pre":false,
 "post":false, 
"info":"" } 
]};

document.getElementById("desc").innerHTML = symptoms.description;

for(i = 0; i < symptoms.symptomObj.length; i++){
document.body.onload = addSymptomName(i);
}

function addSymptomName(x) { 
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(symptoms.symptomObj[x].symptomName); 
  newDiv.appendChild(newContent); 
  var currentDiv = document.getElementById("symps"); 
  document.body.insertBefore(newDiv, currentDiv); 
}
localStorage.setItem("Results", JSON.stringify(symptoms));
document.getElementById("results").innerHTML=localStorage.getItem("Results");
