<%-- 
    Document   : report
    Created on : May 7, 2015, 2:50:23 PM
    Author     : NK
--%>

<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!-- amCharts javascript sources -->
<script type="text/javascript" src="/js/amcharts.js"></script>
<script type="text/javascript" src="/js/serial.js"></script>
<script type="text/javascript" src="/js/light.js"></script>
<script type="text/javascript">
    function report(){
        AmCharts.makeChart("chartdiv", {
	"type": "serial",
	"categoryField": "date",
	"dataDateFormat": "YYYY-MM",
	"theme": "light",
	"categoryAxis": {
		"minPeriod": "MM",
		"parseDates": true
	},
	"chartCursor": {
		"categoryBalloonDateFormat": "MM YYYY"
	},
	"trendLines": [],
	"graphs": [
		{
			"bullet": "round",
			"id": "AmGraph-1",
			"title": "Expense",
			"valueField": "column-1"
		},
		{
			"bullet": "square",
			"id": "AmGraph-2",
			"title": "Income",
			"valueField": "column-2"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"title": "Amount"
		}
	],
	"allLabels": [],
	"balloon": {},
	"legend": {
		"useGraphSettings": true
	},
	"titles": [
		{
			"id": "Title-1",
			"size": 15,
			"text": "Report for All Transactions"
		}
	],
	"dataProvider": [
		<% 
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM");

            List<Object> thisMonthIncome = (List<Object>) request.getAttribute("allIncome");
            List<Object> thisMonthExpense = (List<Object>) request.getAttribute("allExpense");
            int iLength = thisMonthIncome.size();
            int eLength = thisMonthExpense.size();
            int ii =0;
            int ee =0;
            while(ii!=iLength || ee!=eLength) {
                Object[] ex = null;
                Object[] in = null;
                Date exDate = null;
                Date inDate = null;
                if (ee < eLength){
                    ex = (Object[]) thisMonthExpense.get(ee);
                    exDate = (Date)ex[1];
                }
                if (ii < iLength){
                    in = (Object[]) thisMonthIncome.get(ii);
                    inDate = (Date)(in[1]);
                }                
                
                
                if (exDate == null || exDate.getMonth() > inDate.getMonth()){ // keduanya
        %>
                {
                    "date": "<%= format.format(inDate) %>",
                    "column-1": <%= 0 %>,
                    "column-2": <%= in[0] %>
                },                
                <% ++ii;} 
                    else if (inDate == null || exDate.getMonth() < inDate.getMonth()){ // expense %>
                {
                    "date": "<%= format.format(exDate) %>",
                    "column-1": <%= ex[0] %>,
                    "column-2": <%= 0 %>
                },
                <% ++ee;}  else { // income %>
                {
                    "date": "<%= format.format(inDate) %>",
                    "column-1": <%= ex[0] %>,
                    "column-2": <%= in[0] %>
                },
                <% ++ee;++ii;} %>
        <% } %>
	]
});
    }
</script>
<script type="text/javascript">
    function reportByMonth(){
        AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "categoryField": "date",
    "dataDateFormat": "YYYY-MM-DD",
    "theme": "light",
    "categoryAxis": {
        "parseDates": true
    },
    "chartCursor": {},
    "trendLines": [],
    "graphs": [
        {
            "bullet": "round",
            "id": "AmGraph-1",
            "title": "Expense",
            "valueField": "column-1"
        },
        {
            "bullet": "square",
            "id": "AmGraph-2",
            "title": "Income",
            "valueField": "column-2"
        }
    ],
    "guides": [],
    "valueAxes": [
        {
            "id": "ValueAxis-1",
            "title": "Amount"
        }
    ],
    "allLabels": [],
    "balloon": {},
    "legend": {
        "useGraphSettings": true
    },
    "titles": [
        {
            "id": "Title-1",
            "size": 15,
            "text": "Report for This Month"
        }
    ],
    "dataProvider": [
        <% 
            format = new SimpleDateFormat("yyyy-MM-dd");

            thisMonthIncome = (List<Object>) request.getAttribute("thisMonthIncome");
            thisMonthExpense = (List<Object>) request.getAttribute("thisMonthExpense");
            iLength = thisMonthIncome.size();
            eLength = thisMonthExpense.size();
            ii =0;
            ee =0;
            while(ii!=iLength || ee!=eLength) {
                Object[] ex = null;
                Object[] in = null;
                Date exDate = null;
                Date inDate = null;
                if (ee < eLength){
                    ex = (Object[]) thisMonthExpense.get(ee);
                    exDate = (Date)ex[1];
                }
                if (ii < iLength){
                    in = (Object[]) thisMonthIncome.get(ii);
                    inDate = (Date)(in[1]);
                }
                
                if (exDate == null || exDate.getDate() > inDate.getDate()){ // keduanya
        %>
                {
                    date": "<%= format.format(inDate) %>",
                    "column-1": <%= 0 %>,
                    "column-2": <%= in[0] %>
                },                
                <% ++ii;} 
                    else if (inDate == null || exDate.getDate() < inDate.getDate()){ // expense %>
                {
                    "date": "<%= format.format(exDate) %>",
                    "column-1": <%= ex[0] %>,
                    "column-2": <%= 0 %>
                },
                <% ++ee;}  else { // income %>
                {
                    "date": "<%= format.format(inDate) %>",
                    "column-1": <%= ex[0] %>,
                    "column-2": <%= in[0] %>
                },
                <% ++ee;++ii;} %>
        <% } %>
       
    ]
});
    }
</script>

<!-- amCharts javascript code -->
<script>
   function gantiChart(){
        var b = document.getElementById("bulan");        
        var valb = b.options[b.selectedIndex].value;        
     
        if (valb != "0") {
            reportByMonth();
        } else {
            report();
        }
    }
    report();
</script>

<!-- css core-->
<link rel="stylesheet" href="/css/report.css">
<%@include file="../navmenu.jsp" %>

<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">Reports</h1>
    <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="/report">Report</a></li>
        <li role="presentation"><a href="/report/expense">Expense</a></li>
        <li role="presentation"><a href="/report/income">Income</a></li>
    </ul>
    
    </br>
    
    <tr>
        <td>Select report for:</td>
        <td>
            <select class="selectpicker" name="bulan" id="bulan">
                <option value="0">All Transactions</option>
                <option value="1">This Month</option>                
            </select>
        </td>
        
        <td>
            <button class="btn btn-primary" onclick="gantiChart()">Show</button>
        </td>
    </tr>
    
    <div id="chartdiv"></div>
    <!--<h5 align="right" style="padding-right: 100px;"><strong>Total: 1,113,000</strong></h5>-->
</div>
<%@include file="../footer.jsp" %>
