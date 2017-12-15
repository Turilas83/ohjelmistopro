var questions = [];
// ruokakyselyn id = 4
let kyselyId = 4;
function getData() {
	var lomake = document.forms[0];

	var gethttp = new XMLHttpRequest();
	
	gethttp.onreadystatechange = function() {
		if (gethttp.readyState == XMLHttpRequest.DONE) {
			var data = gethttp.response;
				
			for (var i = 0; i < data.length; i++) {
				var kysTyyppi = data[i].kysymys.substring(0, 1);
				if (kysTyyppi == 1) {
					// tekstikysymys
					questions.push("kysymys" + data[i].kysymysId);
					var splitted = data[i].kysymys.split("|");
					var kysymys = splitted[splitted.length - 1];
					lomake.innerHTML += "<p>" + kysymys + "</p>";
					lomake.innerHTML += "<input required type=\"text\" value=\"\" name=\"" + ("kysymys" + data[i].kysymysId) + "\" placeholder=\"vastaus\">";
				} else if (kysTyyppi == 2) {
					// radio button. yksi valinta

					questions.push("kysymys" + data[i].kysymysId);
					var splitted = data[i].kysymys.split("|");
					var kysymys = splitted[splitted.length - 1];
					lomake.innerHTML += "<p id=\""+ data[i].kysymysId +"\">" + kysymys + "</p>";
					var vaihtoehtoja = splitted[1];
					var aloitus = 2;
					for (var v = 0; v < vaihtoehtoja; v++) {
						lomake.innerHTML += "<input required type=\"radio\" name=\"" + ("kysymys" + data[i].kysymysId) + "\" value=\"" + splitted[aloitus + v] + "\">" + splitted[aloitus + v] + "<br>";
					}

				} else if (kysTyyppi == 3) {
					// hymiöt 1-5
												
					questions.push("kysymys" + data[i].kysymysId);
					var splitted = data[i].kysymys.split("|");
					var kysymys = splitted[splitted.length - 1];
					lomake.innerHTML += "<p>" + kysymys + "</p>";
					lomake.innerHTML += "<label><input type=\"radio\" name=\"" + ("kysymys" + data[i].kysymysId)+ "\" value=\"1\"/><img src=\"./emoji/1.png\"></label><label><input type=\"radio\" name=\"" + ("kysymys" + data[i].kysymysId)+ "\" value=\"2\"/><img src=\"./emoji/2.png\"></label><label><input type=\"radio\" name=\"" + ("kysymys" + data[i].kysymysId)+ "\" value=\"3\"/><img src=\"./emoji/3.png\"></label><label><input type=\"radio\" name=\"" + ("kysymys" + data[i].kysymysId)+ "\" value=\"4\"/><img src=\"./emoji/4.png\"></label><label><input type=\"radio\" name=\"" + ("kysymys" + data[i].kysymysId)+ "\" value=\"5\"/><img src=\"./emoji/5.png\"></label>";
				} else if (kysTyyppi == 4) {
					// monivalinta
					questions.push("checkbo" + data[i].kysymysId);
					var splitted = data[i].kysymys.split("|");
					var kysymys = splitted[splitted.length - 1];
					lomake.innerHTML += "<p>" + kysymys + "</p>";
					var vaihtoehtoja = splitted[1];
					var aloitus = 2;
					for (var m = 0; m < vaihtoehtoja; m++) {
						lomake.innerHTML += "<input type=\"checkbox\" name=\"" + ("kysymys" + data[m].kysymysId) + "\" value=\"" + splitted[aloitus + m] + "\">" + splitted[aloitus + m] + "<br>";
					}
				}
			}
			lomake.innerHTML += "<br /><br /><button type=\"submit\">Lähetä</button>";					
		}
	}
// 	gethttp.open("GET", "http://proto355.haaga-helia.fi:8080/ohjelmistopro/question/"+kyselyId);
	gethttp.open("GET", "http://localhost:8080/ohjelmistopro/question/"+kyselyId);
	gethttp.responseType = 'json';
	gethttp.send();
}
  
// event listener lähetyspainikkeelle
document.forms[0].addEventListener("submit", function(e) {
	var err = false;
	var cBArr = [];

	var answer = null;
	e.preventDefault();
	var values = e.form;

	for (var k = 0; k < questions.length; k++) {

		if (questions[k].substring(0, 7) == "slider1") {
			answer = document.querySelector("input[type=range]").value;
		} else if (questions[k].substring(0, 7) == "checkbo") {
			var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
				
			checkboxes.forEach(function(cb){
				cBArr.push(cb.value);
			});
			answer = cBArr.join();
		} else {
			answer = document.querySelector('input[name=' + questions[k] + ']:checked').value; 
		}
		qid = questions[k].substring(7, );
		kyselyId = "" + kyselyId;
		if (sendAnswer(kyselyId, qid, answer)) {
			// TODO
		}
	}
	kiitos();
});
	
	
	
// vastausten lähettäminen
function sendAnswer(pid, qid, answer) {
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == XMLHttpRequest.DONE) {
			xmlhttp.response != null ? console.log(xmlhttp.response) : null;
		}
	}
//	xmlhttp.open("POST", "http://proto355.haaga-helia.fi:8080/ohjelmistopro/answer");
	xmlhttp.open("POST", "http://localhost:8080/ohjelmistopro/answer");
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.responseType = 'json';
	xmlhttp.send( JSON.stringify({ pollId: pid, questionId: qid, answer: answer }) );
}
	
// kiitosviesti, kun vastaukset ovat lähteneet
function kiitos() {
	document.body.innerHTML = "<div id=\"kiitti\"><h1>Kiitos!</h1><p>Mahtavaa, että käytit aikaasi kyselyyn vastaamiseen!</p></div>";
	return;
}
