var chart = AmCharts.makeChart("chartdiv", {
	"type": "serial",
	"categoryField": "date",
	"dataDateFormat": "YYYY-MM",
	"theme": "light",
	"categoryAxis": {
		"minPeriod": "MM",
		"parseDates": true
	},
	"chartCursor": {
		"categoryBalloonDateFormat": "MMM YYYY"
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
			"text": "This Year's Report"
		}
	],
	"dataProvider": [
		{
			"date": "2014-01",
			"column-1": 800,
			"column-2": 500
		},
		{
			"date": "2014-02",
			"column-1": 600,
			"column-2": 700
		},
		{
			"date": "2014-03",
			"column-1": 200,
			"column-2": 300
		},
		{
			"date": "2014-04",
			"column-1": 100,
			"column-2": 300
		},
		{
			"date": "2014-05",
			"column-1": 200,
			"column-2": 100
		},
		{
			"date": "2014-06",
			"column-1": 300,
			"column-2": 200
		},
		{
			"date": "2014-07",
			"column-1": 600,
			"column-2": 800
		},
		{
			"date": "2014-08",
			"column-1": 300,
			"column-2": 700
		},
		{
			"date": "2014-09",
			"column-1": 200,
			"column-2": 300
		},
		{
			"date": "2014-10",
			"column-1": 100,
			"column-2": 300
		},
		{
			"date": "2014-11",
			"column-1": 300,
			"column-2": 300
		},
		{
			"date": "2014-12",
			"column-1": 700,
			"column-2": 700
		},
	]
});
