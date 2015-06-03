<%-- 
    Document   : report
    Created on : May 7, 2015, 2:50:23 PM
    Author     : NK
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!-- amCharts javascript sources -->
<script type="text/javascript" src="/js/amcharts.js"></script>
<script type="text/javascript" src="/js/serial.js"></script>
<script type="text/javascript" src="/js/light.js"></script>

<!-- amCharts javascript code -->
<script>
    var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "dataProvider": [
        {
        "date": "2015-10-02",
        "value": 5
    }, 
    {
        "date": "2015-10-03",
        "value": 15
    }, 
    {
        "date": "2015-10-04",
        "value": 13
    }, {
        "date": "2015-10-05",
        "value": 17
    }, {
        "date": "2015-10-06",
        "value": 15
    }, {
        "date": "2015-10-09",
        "value": 19
    }, {
        "date": "2015-10-10",
        "value": 21
    }, {
        "date": "2015-10-11",
        "value": 20
    }, {
        "date": "2015-10-12",
        "value": 20
    }, {
        "date": "2015-10-13",
        "value": 19
    }, {
        "date": "2015-10-16",
        "value": 25
    }, {
        "date": "2015-10-17",
        "value": 24
    }, {
        "date": "2015-10-18",
        "value": 26
    }, {
        "date": "2015-10-19",
        "value": 27
    }, {
        "date": "2015-10-20",
        "value": 25
    }, {
        "date": "2015-10-23",
        "value": 29
    }, {
        "date": "2015-10-24",
        "value": 28
    }, {
        "date": "2015-10-25",
        "value": 30
    }, {
        "date": "2015-10-26",
        "value": 72,
        "customBullet": "/img/redstar.png"
    }, {
        "date": "2015-10-27",
        "value": 43
    }, {
        "date": "2015-10-30",
        "value": 31
    }, {
        "date": "2015-11-01",
        "value": 30
    }, {
        "date": "2015-11-02",
        "value": 29
    }, {
        "date": "2015-11-03",
        "value": 27
    }, {
        "date": "2015-11-04",
        "value": 26
    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "dashLength": 4,
        "position": "left"
    }],
    "graphs": [{
        "bulletSize": 14,
        "customBullet": "/img/star.png",
        "customBulletField": "customBullet",
        "valueField": "value",
         "balloonText":"<div style='margin:10px; text-align:left;'><span style='font-size:13px'>[[category]]</span><br><span style='font-size:18px'>Value:[[value]]</span>",
    }],
    "marginTop": 20,
    "marginRight": 70,
    "marginLeft": 40,
    "marginBottom": 20,
    "chartCursor": {
        "graphBulletSize": 1.5
    },
    "autoMargins": false,
    "dataDateFormat": "YYYY-MM-DD",
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "axisAlpha": 0,
        "gridAlpha": 0,
        "inside": true,
        "tickLength": 0
    },
    "export": {
        "enabled": true
    }
});

    
</script>

<!-- css core-->
<link rel="stylesheet" href="/css/report.css">
<%@include file="../navmenu.jsp" %>

<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Reports</h1>
    <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="report.jsp">Report</a></li>
        <li role="presentation"><a href="expense.jsp">Expense</a></li>
        <li role="presentation"><a href="income.jsp">Income</a></li>
    </ul>
    <div id="chartdiv"></div>
    <h5 align="right" style="padding-right: 100px;"><strong>Total: 1,113,000</strong></h5>
</div>
<%@include file="../footer.jsp" %>
