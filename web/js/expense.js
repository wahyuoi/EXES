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
    "expense": "Food",
    "dollars": 256.9
  }, {
    "expense": "Entertainment",
    "dollars": 131.1
  }, {
    "expense": "Transportation",
    "dollars": 115.8
  }, {
    "expense": "Clothes",
    "dollars": 109.9
  }, {
    "expense": "Car",
    "dollars": 108.3
  }, {
    "expense": "Sports",
    "dollars": 65
  }, {
    "expense": "House",
    "dollars": 40
  } ],
  "valueField": "dollars",
  "titleField": "expense",
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "export": {
    "enabled": true,
    "libs": {
      "path": "http://www.amcharts.com/lib/3/plugins/export/libs/"
    }
  }
} );
