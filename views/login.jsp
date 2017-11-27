<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page session="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Sisäänkirjautuminen</title>
<link rel="stylesheet" href="resources/styles/common.css" type="text/css" />
<link rel="stylesheet" href="resources/styles/form.css" type="text/css" />
</head>
<body>
<div id="sisalto">

<h1>KIRJAUDU SISÄÄN</h1>
<form action="j_spring_security_check" method="post">
	<fieldset>
		<table>
		<tr><td>USERNAME:</td><td><input type='text' name='j_username' value=''></td></tr>
		<tr><td>PASSWORD:</td><td><input type='password' name='j_password' /></td></tr>
		<tr><td>&nbsp;</td><td><button type="submit">Kirjaudu</button></td></tr>
		</table>
	</fieldset>
	</form>
	</div>

</body>
</html>