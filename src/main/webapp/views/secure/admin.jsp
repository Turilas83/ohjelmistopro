<%@page contentType="text/html;charset=UTF-8"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin panel</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/styles.min.css">
<script src="${pageContext.request.contextPath}/resources/js/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/resources/bootstrap/js/bootstrap.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-switch/3.3.4/css/bootstrap2/bootstrap-switch.css" rel="stylesheet">
<script	src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-switch/3.3.4/js/bootstrap-switch.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/scripts.js"></script>
</head>

<body onload="load();">
	<div id="container">
		<h1>Admin - paneeli</h1>
		<div id="polls">
			<h4>Kyselyt</h4>
			<div class="list-group" id="kyselyt"></div>
		</div>
	</div>


	<%@include file="pollModal.jsp"%>
	<%@include file="questionModal.jsp"%>

</body>
</html>


