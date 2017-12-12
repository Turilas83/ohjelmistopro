var kysymysId = null;
var kyselyId = null;

function load() {
	$("[name='published']").bootstrapSwitch();
	$(".list-group").empty();
	$.ajax({
				url : 'http://localhost:8080/ohjelmistopro/poll',
				type : 'GET',
				dataType : 'json',
				success : function(data) {
					for (var i = 0; i < data.length; i++) {
						var name = data[i].name;
						$("#kyselyt").append(
								"<button class=\"accordion btn btn-info col-md-12\">"
										+ data[i].name + "</button>");
						$("#kyselyt")
								.append(
										"<div class=\"panel\"><p><button name='"
												+ data[i].name
												+ "' class=\"btn btn-default col-md-12\" id=\"kysely"
												+ data[i].id
												+ "\" onclick=\"editPoll(this.name, this.id.substring(6,));\">Muokkaa kyselyä</button><br><button onclick=\"showQuestions(this.id, "
												+ data[i].id
												+ ");\" id=\""
												+ data[i].name
												+ "\" class=\"btn btn-default col-md-12\">Näytä kysymykset</button><br><button onclick=\"showAnswers('"
												+ data[i].name
												+ "',"
												+ data[i].id
												+ ")\" class=\"btn btn-default col-md-12\">Näytä tilastot</button></p></div>");
					}
					$("#kyselyt")
							.append(
									"<div class=\"createbutton\"><i><button data-toggle=\"modal\" data-target=\"#newpoll\" class=\"btn btn-success\">Luo uusi kysely</button></i></div>");
					var acc = document.getElementsByClassName("accordion");

					for (var i = 0; i < acc.length; i++) {
						acc[i].onclick = function() {
							this.classList.toggle("active");
							var panel = this.nextElementSibling;
							if (panel.style.maxHeight) {
								panel.style.maxHeight = null;
							} else {
								panel.style.maxHeight = panel.scrollHeight
										+ "px";
							}
						}
					}

				},
				error : function(xhr, textStatus, errorThrown) {
					console.log(errorThrown);
				}
			});

	var ts = document.getElementById('typeselect');
	ts
			.addEventListener(
					'change',
					function() {
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
							$('#vaihtoehdot')
									.html(
											"<br><input type=\"text\" class=\"form-control vaihtoehto\" name=\"min\" id=\"min\" placeholder=\"min\"><input class=\"form-control vaihtoehto\" type=\"text\" name=\"max\" id=\"max\"  placeholder=\"max\"><input class=\"form-control vaihtoehto\" type=\"text\" id=\"dist\"  name=\"dist\" placeholder=\"väli\">");
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
		url : 'http://localhost:8080/ohjelmistopro/poll',
		type : 'POST',
		data : JSON.stringify({
			name : kysely
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		error : function(xhr, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
	$('#newpoll').modal('hide');
	load();
}
var canvasid;
var pietitle = '';
var pielabels = [];
var piedata = [];
function showAnswers(pollname, id) {
	var questions = [];
	var arr = [];
	var wincontent = '';
	var win = window.open("http://localhost:8080/ohjelmistopro/admin/answer");

	win[win.addEventListener ? 'addEventListener' : 'attachEvent'](
			(win.attachEvent ? 'on' : '') + 'load', function(e) {
				win.focus();
				win.document.title = pollname + " - vastaukset";
				var doc = win.document;
				var newDiv = doc.createElement("div");
				newDiv.id = 'answercontainer';
				newDiv.innerHTML = wincontent;
				doc.body.appendChild(newDiv);
				for (var m = 0; m < arr.length; m++) {
					pie(win, arr[m][0], arr[m][1], arr[m][2], arr[m][3]);
				}

			}, false);

	$.ajax({
		url : 'http://localhost:8080/ohjelmistopro/question/' + id + '',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
			if (data.length > 0) {
				questions = data;
			} else {
				questions = null;
			}
		},
		error : function(xhr, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
	$
			.ajax({
				url : 'http://localhost:8080/ohjelmistopro/answer/' + id + '',
				type : 'GET',
				dataType : 'json',
				success : function(data) {
					if (data.length > 0 && questions != null) {
						for (var a = 0; a < data.length; a++) {
							var splitted = questions[a].kysymys.split("|");
							var kysymys = splitted[splitted.length - 1];
							wincontent += "<hr><h4>" + kysymys + "</h4>";
							var lastquestionid = data[a].questionId;

							var options = [];
							for (var e = 0; e < data.length; e++) {
								if (lastquestionid == data[e].questionId) {
									options.push(data[e].answer);
								}
							}
							var aa = [], bb = [], prev;
							options.sort();

							for (var o = 0; o < options.length; o++) {
								if (options[o] !== prev) {
									aa.push(options[o]);
									bb.push(1);
								} else {
									bb[bb.length - 1]++;
								}
								prev = options[o];
							}

//							if (splitted[0] != 3) {
								wincontent += "<canvas style=\"border: 1px solid black; float: right; margin-right: 20%;\" id=\"canvas"
										+ lastquestionid
										+ "\" width=\"400\" height=\"250\"></canvas><br>";

								canvasid = "canvas" + lastquestionid;
								pietitle = kysymys;
								pielabels = aa.reverse();
								piedata = bb.reverse();
								arr.push([ canvasid, pietitle, pielabels,
										piedata ]);
//							}

							for (var l = 0; l < data.length; l++) {
								if (lastquestionid == data[l].questionId) {

									var date = new Date(data[l].stamp);
									var theyear = date.getFullYear();
									var themonth = date.getMonth() + 1;
									var theday = date.getDate();
									var theMinutes = (date.getMinutes() < 10 ? '0'
											: '')
											+ date.getMinutes();
									var theHour = date.getHours();
									var timestamp = "(" + theday + "."
											+ themonth + "." + theyear + " "
											+ theHour + ":" + theMinutes + ")";

									if (questions[a].kysymys.substring(0, 1) == 3) {
										wincontent += "<img src=\"http://localhost:8080/ohjelmistopro/resources/emoji/"
												+ data[l].answer
												+ ".png\">&nbsp;<i>"
												+ timestamp + "</i><br>";
									} else {
										wincontent += "" + data[l].answer
												+ "&nbsp;<i>" + timestamp
												+ "</i><br>";
									}
								}

							}

						}
					} else {
						wincontent = "<p>tyhjä</p>";
					}
				},
				error : function(xhr, textStatus, errorThrown) {
					console.log(errorThrown);
				}
			});
}

function getQuestions(pollId) {
	$("#questionDiv").empty();
	$
			.ajax({
				url : 'http://localhost:8080/ohjelmistopro/question/' + pollId
						+ '',
				type : 'GET',
				dataType : 'json',
				success : function(data) {
					for (var q = 0; q < data.length; q++) {
						var kys = data[q].kysymys.split("|");
						$("#questionDiv")
								.append(
										"<a href=\"#\" onclick=\"editQuestion(this.id.substring(7,), this.name);\" name=\""
												+ kys[kys.length - 1]
												+ "\" id=\"kysymys"
												+ data[q].kysymysId
												+ "\" class=\"list-group-item list-group-item-action\">"
												+ kys[kys.length - 1] + "</a>");
					}
				},
				error : function(xhr, textStatus, errorThrown) {
					console.log(errorThrown);
				}
			});
}

function poistaKysely() {
	kyselyid = this.id;
	$
			.ajax({
				url : 'http://localhost:8080/ohjelmistopro/poll/' + id + '',
				type : 'DELETE',
				dataType : "json",
				error : function(xhr, textStatus, errorThrown) {
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
		url : 'http://localhost:8080/ohjelmistopro/poll',
		type : 'PUT',
		data : JSON.stringify({
			name : kyselyNimi,
			id : kyselyid
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		error : function(xhr, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
	$('#editpoll').modal('hide');
	load();
}

function poistaKysymys() {
	$.ajax({
		url : 'http://localhost:8080/ohjelmistopro/question/' + kyselyId + '/'
				+ kysymysId + '',
		type : 'DELETE',
		dataType : "json",
		error : function(xhr, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
	kysymysId = null;
	$('#questionModal').modal('hide');
	load();
}

function uusiKysymys(kyselyid, kysymys) {
	$.ajax({
		url : 'http://localhost:8080/ohjelmistopro/question',
		type : 'POST',
		data : JSON.stringify({
			kyselyid : kyselyid,
			kysymys : kysymys
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		error : function(xhr, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
	$('#questionModal').modal('hide');
	load();
}

function muutaKysymys(kyselyid, kysymysid, kysymys) {
	$.ajax({
		url : 'http://localhost:8080/ohjelmistopro/question',
		type : 'PUT',
		data : JSON.stringify({
			kyselyid : kyselyid,
			kysymysId : kysymysid,
			kysymys : kysymys
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		error : function(xhr, textStatus, errorThrown) {
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
	$('#kysymysteksti').val(name[name.length - 1]);
	$('#questionModal').modal('show');
}

function addQuestion() {
	$('#questionModal').modal('show');
}

function addOption() {
	var vaiht = $('#vaihtoehdot')
			.append(
					"<input type=\"text\" class=\"form-control vaihtoehto\" name=\"vaihtoehto[]\" placeholder=\"Vaihtoehto\">");
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
		for (var i = 0; i < vaiht.length; i++) {
			v += vaiht[i].value + "|";
		}
		kysymys = tyyppi + "|" + vaiht.length + "|" + v + kysymysraw;
		console.log(kysymys);
	} else if (tyyppi == 3) {
		// skaala
		var min = document.getElementById("min").value;
		var max = document.getElementById("max").value;
		var dist = document.getElementById("dist").value;
		kysymys = tyyppi + "|" + min + "|" + max + "|" + dist + "|"
				+ kysymysraw;
		console.log(kysymys);
	} else if (tyyppi == 4) {
		// monivalinta
		v = '';
		var vaiht = document.getElementsByClassName("vaihtoehto");
		for (var i = 0; i < vaiht.length; i++) {
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

function pie(win, canvasid, pietitle, pielabels, piedata) {
	var canvas = win.document.getElementById(canvasid);
	if (canvas != null) {
		var ctx = canvas.getContext('2d');

		new Chart(ctx, {
			type : 'pie',
			data : {
				labels : pielabels,
				datasets : [ {
					label : "",
					backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
					data : piedata
				} ]
			},
			options : {
				tooltips: {
			        enabled: true
			    },
			    hover: {
			        animationDuration: 0
			    },
				responsive : false,
				animation : {
					duration : 0
				},
				title : {
					display : true,
					text : pietitle
				}
			}
		});
	}
}