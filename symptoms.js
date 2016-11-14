var JSONsrc = JSON.parse('{"symptoms": {"description": ["SYMPTOMS: Please indicate any symptoms you experienced regularly at any time prior to your injury (pre-injury) and symptoms you experienced after your injury (post-injury). Leave any necessary comments."],"headers":["Symptoms","Pre-Injury","Post-Injury"], "symptomObj": [{"symptomName": "Headaches", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "If so, what medications are you taking and how often?"} }, {"symptomName": "Pressure in head", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Nausea/vomiting", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Sensitivity to light", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Sensitivity to noise", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Dizziness/vertigo", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Slowed down", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "&quot;In a fog&quot;", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "&quot;Not right&quot;", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Difficulty concentrating", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Memory difficulties", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Fatigued or low energy", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Confused", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Irritable", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Sad", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Nervous", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Anxious", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Drowsy", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Sleeping more than usual", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "If so, have you been napping, and how much?"} }, {"symptomName": "Sleeping less than usual", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Balance problems", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }, {"symptomName": "Neck pain", "pre": {"type": "checkbox"}, "post": {"type": "checkbox"}, "info": {"type": "string", "text": "Additional Comments"} }] } }'); 


var desc = document.getElementById('desc');
desc.innerHTML = JSONsrc["symptoms"]["description"];


var tablerow = document.createElement('tr');
var t1 = document.createElement('th');
t1.innerHTML = JSONsrc["symptoms"]["headers"][0];
var t2 = document.createElement('th');
t2.innerHTML = JSONsrc["symptoms"]["headers"][1];
var t3 = document.createElement('th');
t3.innerHTML = JSONsrc["symptoms"]["headers"][2];


tablerow.appendChild(t1);
tablerow.appendChild(t2);
tablerow.appendChild(t3);
container.appendChild(tablerow);


for(i=0; i < JSONsrc["symptoms"]["symptomObj"].length; i++){
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	var td3 = document.createElement('td');
	var td4 = document.createElement('td');


	var checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.id = "pre"+i;

	var checkbox2 = document.createElement('input');
	checkbox2.type = 'checkbox';
	checkbox2.id = "post"+i;

	var inputString = document.createElement('input');
	inputString.type = 'text';
	inputString.id = "text"+i;


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

var storeLocal = function(){
 var inputAll = document.querySelectorAll("input");
 	for(k = 0; k < inputAll.length; k++){
 		if (inputAll[k].type=='checkbox'){
 		   localStorage.setItem(inputAll[k].id,inputAll[k].checked);
 		} 		
 		else if (inputAll[k].type=='text'){
 		   localStorage.setItem(inputAll[k].id,inputAll[k].value);
 		}
 	}
}

var restoreLocal = function(){
	var inputAll = document.querySelectorAll("input");
	 for(k = 0; k < inputAll.length; k++){
 		if (inputAll[k].type=="checkbox"){
			if(localStorage.getItem(inputAll[k].id) == "false"){
				inputAll[k].checked = false;
			}
			else if(localStorage.getItem(inputAll[k].id) == "true"){
				inputAll[k].checked = true;
			}
 		}
 		 if(inputAll[k].type == "text"){
 		 	if(localStorage.getItem(inputAll[k].id) != ""){
 		 		inputAll[k].value = localStorage.getItem(inputAll[k].id);
 		 	}
 		 }
 	}
}

var clearLocal = function(){
	localStorage.clear();
}

var createSummary = function(){
location.href = "summary.html";
}

document.getElementById("save").addEventListener("click",storeLocal);
document.getElementById("check").addEventListener("click",restoreLocal);
document.getElementById("clear").addEventListener("click",clearLocal);
document.getElementById("summary").addEventListener("click",createSummary);
