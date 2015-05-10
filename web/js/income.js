var chart = AmCharts.makeChart( "chartdiv", {
  "type": "pie",
  "theme": "light",
  "innerRadius": 50,
  "legend": {
    "markerType": "circle",
    "position": "right",
    "marginRight": 80,
    "autoMargins": false
  },
  "dataProvider": [ {
    "income": "Salary",
    "dollars": 15000
  }, {
    "income": "Deposit",
    "dollars": 99000
  }, {
    "income": "Invest",
    "dollars": 999000
  } ],
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
