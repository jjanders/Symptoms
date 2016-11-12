var JSONsrc = JSON.parse('{"symptoms": {"description": ["SYMPTOMS: Please indicate any symptoms you experienced regularly at any time prior to your injury (pre-injury) and symptoms you experienced after your injury (post-injury). Leave any necessary comments."], "symptomObj": [{"symptomName": "Headaches", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "If so, what medications are you taking and how often?"} }, {"symptomName": "Pressure in head", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Nausea/vomiting", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Sensitivity to light", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Sensitivity to noise", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Dizziness/vertigo", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Slowed down", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "In a fog", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Not right", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Difficulty concentration", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Memory difficulties", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Fatigued or low energy", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Confused", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Irritable", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Sad", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Nervous", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Anxious", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Drowsy", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Sleeping more than usual", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "If so, have you been napping, and how much?"} }, {"symptomName": "Sleeping less than usual", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Balance problems", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Neck pain", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }] } }'); 
var desc = document.getElementById('desc');
desc.innerHTML = JSONsrc["symptoms"]["description"];


var tablerow = document.createElement('tr');
var t1 = document.createElement('th');
t1.innerHTML = "Symptom Name";
var t2 = document.createElement('th');
t2.innerHTML = "Pre-Injury";
var t3 = document.createElement('th');
t3.innerHTML = "Post-Injury";


tablerow.appendChild(t1);
tablerow.appendChild(t2);
tablerow.appendChild(t3);
container.appendChild(tablerow);
//if (checkbox.value == 0){;
for(i=0; i < JSONsrc["symptoms"]["symptomObj"].length; i++){
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	var td3 = document.createElement('td');
	var td4 = document.createElement('td');


	var checkbox = document.createElement('input');
	checkbox.type = 'checkbox';


	var checkbox2 = document.createElement('input');
	checkbox2.type = 'checkbox';


	var inputString = document.createElement('input');
	inputString.type = 'string';


	td1.innerHTML = JSONsrc["symptoms"]["symptomObj"][i].symptomName;
	if(JSONsrc["symptoms"]["symptomObj"][i].pre.type = checkbox){
	td2.appendChild(checkbox);
	}
	if(JSONsrc["symptoms"]["symptomObj"][i].post.type = checkbox){
	td3.appendChild(checkbox2);
	}


	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	if(JSONsrc["symptoms"]["symptomObj"][i].info.text != ""){
	td4.innerHTML = JSONsrc["symptoms"]["symptomObj"][i].info.text;
	td4.appendChild(inputString);
	tr.appendChild(td4);
	}
	container.appendChild(tr);


}
