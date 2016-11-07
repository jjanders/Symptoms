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
"symptomName":"SYMPTOMNAME",
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

