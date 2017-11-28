var kysymysId = null;
var kyselyId = null;
function load() {
	$("[name='published']").bootstrapSwitch();
	$(".list-group").empty();
	$.ajax({
//        url: 'http://proto355.haaga-helia.fi:8080/ohjelmistopro/poll',
		url: 'http://localhost:8080/ohjelmistopro/poll',
        type: 'GET',
		dataType: 'json',
        success: function (data) {
			for (var i = 0; i < data.length; i++) {
				var name = data[i].name;
				$( "#kyselyt" ).append( "<button class=\"accordion btn btn-info col-md-12\">" + data[i].name + "</button>" );
				$( "#kyselyt" ).append( "<div class=\"panel\"><p><button name='" + data[i].name + "' class=\"btn btn-default col-md-12\" id=\"kysely"+data[i].id+"\" onclick=\"editPoll(this.name, this.id.substring(6,));\">Muokkaa kyselyä</button><br><button onclick=\"showQuestions(this.id, "+data[i].id+");\" id=\""+data[i].name+"\" class=\"btn btn-default col-md-12\">Näytä kysymykset</button><br><button class=\"btn btn-default col-md-12\">Näytä tilastot</button></p></div>" );
			}
			$("#kyselyt").append( "<i class=\"col-md-5\"></i><button data-toggle=\"modal\" data-target=\"#newpoll\" class=\"btn btn-primary\">Luo uusi kysely</button>" );
			var acc = document.getElementsByClassName("accordion");

			for (var i = 0; i < acc.length; i++) {
			  acc[i].onclick = function() {
				this.classList.toggle("active");
				var panel = this.nextElementSibling;
				if (panel.style.maxHeight){
				  panel.style.maxHeight = null;
				} else {
				  panel.style.maxHeight = panel.scrollHeight + "px";
				} 
			  }
			}

          },
          error: function (xhr, textStatus, errorThrown) {
            console.log(errorThrown);
          }
    });

	var ts = document.getElementById('typeselect');
	ts.addEventListener('change', function() {
		$('#vaihtoehdot').html("");
		if (this.value == 1) {
			// tekstikysymys
			$('#lisaaVaihtoehto').prop('disabled', true);
		} else if (this.value == 2) {
			// checkbox
			$('#lisaaVaihtoehto').prop('disabled', false);
		} else if (this.value == 3) {
			// skaala
			$('#lisaaVaihtoehto').prop('disabled', true);
			$('#vaihtoehdot').html("<br><input type=\"text\" class=\"form-control col-md-2\" name=\"min\" id=\"min\" placeholder=\"min\"><input class=\"form-control col-md-2\" type=\"text\" name=\"max\" id=\"max\"  placeholder=\"max\"><input class=\"form-control col-md-2\" type=\"text\" id=\"dist\"  name=\"dist\" placeholder=\"väli\">");
		} else if (this.value == 4) {
			// monivalinta
			$('#lisaaVaihtoehto').prop('disabled', false);
		}
	}, false);
}



var id = null;
function tallennaUusiKysely() {
	kysely = document.getElementById("newPollName").value;
		$.ajax({
//			url: 'http://proto355.haaga-helia.fi:8080/ohjelmistopro/poll',
			url: 'http://localhost:8080/ohjelmistopro/poll',
			type: 'POST',
			data: JSON.stringify({ name: kysely }),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			error: function (xhr, textStatus, errorThrown) {
				console.log(errorThrown);
			}
		});	
		$('#newpoll').modal('hide');
		load();		
}




function showAnswers() {
	$("#vastaukset").empty();
	$.ajax({
          url: 'answerjson.json',
          type: 'GET',
		  dataType: 'json',
          success: function (data) {
			for (var a = 0; a < data.length; a++) {
				$( "#vastaukset" ).append( "<a href=\"#\" id=\"vastaus"+data[a].ansId+"\" class=\"list-group-item list-group-item-action\">" + data[a].answer + "</a>" );
			}
		  	$("a").click(function(){
				$("a").attr("class", 'list-group-item list-group-item-action');		
				$(this).attr("class", 'list-group-item list-group-item-action active');
			});
          },
          error: function (xhr, textStatus, errorThrown) {
            console.log(errorThrown);
          }
    });	
}


function getQuestions(pollId) {
	$("#questionDiv").empty();
	$.ajax({
//      url: 'http://proto355.haaga-helia.fi:8080/ohjelmistopro/question/'+pollId+'',
		url: 'http://localhost:8080/ohjelmistopro/question/'+pollId+'',
        type: 'GET',
		dataType: 'json',
        success: function (data) {
			for (var q = 0; q < data.length; q++) {
				var kys = data[q].kysymys.split("|");
				$( "#questionDiv" ).append( "<a href=\"#\" data-dismiss=\"modal\" data-toggle=\"modal\" onclick=\"editQuestion(this.id.substring(7,), this.name);\" name=\""+kys[kys.length-1]+"\" id=\"kysymys"+data[q].kysymysId+"\" class=\"list-group-item list-group-item-action\">" + kys[kys.length-1] + "</a>" );
			}
        },
        error: function (xhr, textStatus, errorThrown) {
			console.log(errorThrown);
        }
    });	
}


function poistaKysely() {
	kyselyid = this.id;
		$.ajax({
//			url: 'http://proto355.haaga-helia.fi:8080/ohjelmistopro/poll/'+id+'',
			url: 'http://localhost:8080/ohjelmistopro/poll/'+id+'',
			type: 'DELETE',
			dataType: "json",
			error: function (xhr, textStatus, errorThrown) {
				alert("Kyselyä ei voida poistaa! Kyselyllä on tallennettuja kysymyksiä.");
				console.log(errorThrown);
			}
		});	
		$('#editpoll').modal('hide');
		load();
}

function muokkaaKysely(kyselyNimi) {
	kyselyid = this.id;
		$.ajax({
//			url: 'http://proto355.haaga-helia.fi:8080/ohjelmistopro/poll',
			url: 'http://localhost:8080/ohjelmistopro/poll',
			type: 'PUT',
			data: JSON.stringify({ name: kyselyNimi, id: kyselyid }),
			contentType: "application/json; charset=utf-8",
			dataType: "json",			
			error: function (xhr, textStatus, errorThrown) {
				console.log(errorThrown);
			}
		});	
		$('#editpoll').modal('hide');
		load();
}

function poistaKysymys() {
		$.ajax({
//			url: 'http://proto355.haaga-helia.fi:8080/ohjelmistopro/question/'+kyselyId+'/'+kysymysId+'',
			url: 'http://localhost:8080/ohjelmistopro/question/'+kyselyId+'/'+kysymysId+'',
			type: 'DELETE',
			dataType: "json",
			error: function (xhr, textStatus, errorThrown) {
				console.log(errorThrown);
			}
		});
		kysymysId = null;
		$('#questionModal').modal('hide');
		load();
}


function uusiKysymys(kyselyid, kysymys) {
		$.ajax({
//			url: 'http://proto355.haaga-helia.fi:8080/ohjelmistopro/question',
			url: 'http://localhost:8080/ohjelmistopro/question',
			type: 'POST',
			data: JSON.stringify({ kyselyid: kyselyid, kysymys: kysymys }),
			contentType: "application/json; charset=utf-8",
			dataType: "json",			
			error: function (xhr, textStatus, errorThrown) {
				console.log(errorThrown);
			}
		});	
		$('#questionModal').modal('hide');
		load();
}

function muutaKysymys(kyselyid, kysymysid, kysymys) {
		$.ajax({
//			url: 'http://proto355.haaga-helia.fi:8080/ohjelmistopro/question',
			url: 'http://localhost:8080/ohjelmistopro/question',
			type: 'PUT',
			data: JSON.stringify({ kyselyid: kyselyid, kysymysId: kysymysid, kysymys: kysymys }),
			contentType: "application/json; charset=utf-8",
			dataType: "json",			
			error: function (xhr, textStatus, errorThrown) {
				console.log(errorThrown);
			}
		});	
		$('#questionModal').modal('hide');
		load();
}



function editPoll(ename, eid) {
	id = eid;
	$('#editPollName').val(ename);
	$('#editpoll').modal('show');
}

function showQuestions(name, id) {
	kyselyId = id;
	$('#questionModalTitle').html(name);
	getQuestions(id);
	$('#showQuestions').modal('show');
}

function editQuestion(id, name) {
	kysymysId = id;
	var name = name.split("|");
	$('#kysymysteksti').val(name[name.length-1]);
	$('#questionModal').modal('show');
}

function addQuestion() {
	$('#questionModal').modal('show');	
}

function addOption() {
	var vaiht = $('#vaihtoehdot').append("<input type=\"text\" class=\"form-control vaihtoehto\" name=\"vaihtoehto[]\" placeholder=\"Vaihtoehto\">");
}

function tallennaKysymys() {
	var v = '';
	var tyyppi = document.getElementById("typeselect").value;
	var vaadittu = $('#vaadittu').is(":checked");
	var kysymysraw = document.getElementById("kysymysteksti").value;
	var kysymys;
	
	
	if (tyyppi == 1) {
		// tekstikysymys
		kysymys = tyyppi + "|" + kysymysraw;
		console.log(kysymys);
	} else if (tyyppi == 2) {
		// checkbox/radio
		v = '';
		var vaiht = document.getElementsByClassName("vaihtoehto");
		for(var i = 0; i < vaiht.length; i++) {
			v += vaiht[i].value + "|";
		}
		kysymys = tyyppi + "|" + vaiht.length + "|" + v + kysymysraw;
		console.log(kysymys);
	} else if (tyyppi == 3) {
		// skaala
		var min = document.getElementById("min").value;
		var max = document.getElementById("max").value;
		var dist = document.getElementById("dist").value;
		kysymys = tyyppi + "|" + min + "|" + max + "|" + dist + "|" + kysymysraw;
		console.log(kysymys);
	} else if (tyyppi == 4){
		// monivalinta
		v = '';
		var vaiht = document.getElementsByClassName("vaihtoehto");
		for(var i = 0; i < vaiht.length; i++) {
			v += vaiht[i].value + "|";
		}
		kysymys = tyyppi + "|" + vaiht.length + "|" + v + kysymysraw;
		console.log(kysymys);
	}

	if (kysymysId == null) {
		uusiKysymys(kyselyId, kysymys);
	} else {
		muutaKysymys(kyselyId, kysymysId, kysymys);
		kysymysId = null;
	}
}