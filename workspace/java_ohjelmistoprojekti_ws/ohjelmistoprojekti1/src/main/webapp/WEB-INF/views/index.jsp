<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Kysely</title>
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
</head>
<body>
	<script type="text/javascript">
		function getKysely() {
			$
					.ajax({
						type : 'GET',
						url : '/',
						dataType : 'json',
						async : true,
						success : function(data) {
							console.log(data);
						},
					//				$.each( data, function( key, val ) {
					//					var kysely = $("<section class='Olio'/>").appendTo("#kysely");
					//					$("<h2/>").text(val.name).appendTo(kysely);
					//				});
					})
					.error(
							function() { //palvelinyhteys aiheutti virheen
								$(
										"<p class='Error'>Virhe: Palvelin ei palauta JSON-dataa. Tarkista tietokantayhteys.</p>")
										.appendTo("#kysely");
							});
		}
	</script>

	<button type="button" onclick="getKysely()" id="show">Näytä
		kysely</button>

	<div>

		<h5>Kyselyn nimi:</h5>
		<p id="kysely"></p>
		<h6>Kysymys 1:</h6>
		<p id="kysymys1"></p>
	</div>
	<br>
	<br>
	<form action="" method="POST">
		<p>Kyselyn nimi:</p>
		<input type="text" name="pollName"> <br>
		<p>THE kysymys:</p>
		<input type="text" name="question1"><br> <br> <input
			type="submit" value="Tallenna kysely">
	</form>

</body>
</html>