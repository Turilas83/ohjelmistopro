<%@page contentType="text/html;charset=UTF-8"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin panel</title>
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/styles.min.css">
<script
	src="${pageContext.request.contextPath}/resources/js/jquery.min.js"></script>
<script
	src="${pageContext.request.contextPath}/resources/bootstrap/js/bootstrap.min.js"></script>
<link
	href="${pageContext.request.contextPath}/resources/css/bootstrap-switch.css"
	rel="stylesheet">
<script
	src="${pageContext.request.contextPath}/resources/js/bootstrap-switch.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/scripts.js"></script>
<script
	src="${pageContext.request.contextPath}/resources/js/Chart.min.js"></script>

</head>

<body>
	<div id="container">
		<div id="polls">
			<h4>Kyselyt</h4>
			<div class="list-group" id="kyselyt"></div>
		</div>
	</div>


	<%@include file="questionModal.jsp"%>
	<%@include file="pollModal.jsp"%>
	<%@include file="answers.jsp"%>

	<script>
		window.onload = function() {
			load();
		}
	</script>

</body>
</html>


