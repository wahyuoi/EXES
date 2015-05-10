<%-- 
    Document   : report
    Created on : May 7, 2015, 2:50:23 PM
    Author     : NK
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!-- amCharts javascript sources -->
<script type="text/javascript" src="/Exes/js/amcharts.js"></script>
<script type="text/javascript" src="/Exes/js/pie.js"></script>
<script type="text/javascript" src="/Exes/js/light.js"></script>

<!-- amCharts javascript code -->
<script type="text/javascript" src="/Exes/js/income.js"></script>

<!-- css core-->
<link rel="stylesheet" href="/Exes/css/report.css">
<%@include file="../navmenu.jsp" %>

<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Reports</h1>
    <ul class="nav nav-tabs">
        <li role="presentation"><a href="report.jsp">Report</a></li>
        <li role="presentation"><a href="expense.jsp">Expense</a></li>
        <li role="presentation" class="active"><a href="income.jsp">Income</a></li>
    </ul>
    <div id="chartdiv"></div>
    <h5 align="right" style="padding-right: 100px;"><strong>Total: 1,113,000</strong></h5>
</div>
<%@include file="../footer.jsp" %>
