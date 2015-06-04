<%-- 
    Document   : report
    Created on : May 7, 2015, 2:50:23 PM
    Author     : NK
--%>

<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!-- amCharts javascript sources -->
<script type="text/javascript" src="/js/amcharts.js"></script>
<script type="text/javascript" src="/js/pie.js"></script>
<script type="text/javascript" src="/js/light.js"></script>

<!-- amCharts javascript code -->
<script type="text/javascript">
    function reportByMonth(){
        AmCharts.makeChart( "chartdiv", {
            "type": "pie",
            "theme": "light",
            "innerRadius": 50,
            "legend": {
              "markerType": "circle",
              "position": "right",
              "marginRight": 80,
              "autoMargins": false
            },
            "dataProvider": [ 
            <% 
                List<Object> month = (List<Object>)request.getAttribute("month");
                for (Object oo : month){
                    Object[] o = (Object[]) oo;
            %>
                {
                  "income": "<%= (String)request.getAttribute(o[1]+"") %>",
                  "dollars": <%= o[0] %>
                },
            <%}%>
            ],
            "valueField": "dollars",
            "titleField": "income",
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
            "export": {
              "enabled": true,
              "libs": {
                "path": "http://www.amcharts.com/lib/3/plugins/export/libs/"
              }
            }
          } );
    }
    
    function report(){
        AmCharts.makeChart( "chartdiv", {
            "type": "pie",
            "theme": "light",
            "innerRadius": 50,
            "legend": {
              "markerType": "circle",
              "position": "right",
              "marginRight": 80,
              "autoMargins": false
            },
            "dataProvider": [ 
            <% 
                List<Object> all = (List<Object>)request.getAttribute("all");
                for (Object oo : all){
                    Object[] o = (Object[]) oo;
            %>
                {
                  "income": "<%= (String)request.getAttribute(o[1]+"") %>",
                  "dollars": <%= o[0] %>
                },
            <%}%>
            ],
            "valueField": "dollars",
            "titleField": "income",
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
            "export": {
              "enabled": true,
              "libs": {
                "path": "http://www.amcharts.com/lib/3/plugins/export/libs/"
              }
            }
          } );
    }
</script>
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
        <li role="presentation"><a href="/report">Report</a></li>
        <li role="presentation"><a href="/report/expense">Expense</a></li>
        <li role="presentation" class="active"><a href="/report/income">Income</a></li>
    </ul>
    
    </br>
    <tr>
        <td>Expense overview for:</td>
        <td>
            <select class="selectpicker" name="bulan" id="bulan">
                <option value="0">All</option>
                <option value="1">This Month</option>                
            </select>
        </td>        
        <td>
            <button class="btn btn-primary" onclick="gantiChart()">Show</button>
        </td>
    </tr>
    
    <div id="chartdiv"></div>    
</div>
<%@include file="../footer.jsp" %>
