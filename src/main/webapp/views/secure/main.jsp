<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
   <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
    <%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Kyselyt</title>
</head>
<body>
<h1>SUOJATTU KYSELYSIVU</h1>
<h3>Sisäänkirjautuneena: <sec:authentication property="principal.username"/></h3>
<p><a href="../j_spring_security_logout" >Logout</a></p>
</body>
</html>