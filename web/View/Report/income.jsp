<%-- 
    Document   : report
    Created on : May 7, 2015, 2:50:23 PM
    Author     : NK
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!-- amCharts javascript sources -->
<script type="text/javascript" src="/js/amcharts.js"></script>
<script type="text/javascript" src="/js/pie.js"></script>
<script type="text/javascript" src="/js/light.js"></script>

<!-- amCharts javascript code -->
<script type="text/javascript" src="/js/income.js"></script>

<!-- css core-->
<link rel="stylesheet" href="/css/report.css">
<%@include file="../navmenu.jsp" %>

<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Reports</h1>
    <ul class="nav nav-tabs">
        <li role="presentation"><a href="report.jsp">Report</a></li>
        <li role="presentation"><a href="expense.jsp">Expense</a></li>
        <li role="presentation" class="active"><a href="income.jsp">Income</a></li>
    </ul>
    
    </br>
    <tr>
        <td>Income overview for:</td>
        <td>
            <select class="selectpicker" name="bulan" id="bulan">
                <option value="0">All</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
        </td>
        <td>
            <select class="selectpicker" name="tahun"  id="tahun">
                <option value="2014">2014</option>
                <option value="2015">2015</option>
            </select>
        </td>
        <td>
            <button class="btn btn-primary" onclick="gantiChart()">Show</button>
        </td>
    </tr>
    
    <div id="chartdiv"></div>
    <h5 align="right" style="padding-right: 100px;"><strong>Total: 1,113,000</strong></h5>
</div>
<%@include file="../footer.jsp" %>
