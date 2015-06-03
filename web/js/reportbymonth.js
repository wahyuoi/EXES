var chart = AmCharts.makeChart("chartdiv", {
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
            "text": "Report for March 2014"
        }
    ],
    "dataProvider": [
        {
            "date": "2014-03-01",
            "column-1": 8,
            "column-2": 5
        },
        {
            "date": "2014-03-02",
            "column-1": 6,
            "column-2": 7
        },
        {
            "date": "2014-03-03",
            "column-1": 2,
            "column-2": 3
        },
        {
            "date": "2014-03-04",
            "column-1": 1,
            "column-2": 3
        },
        {
            "date": "2014-03-05",
            "column-1": 2,
            "column-2": 1
        },
        {
            "date": "2014-03-06",
            "column-1": 3,
            "column-2": 2
        },
        {
            "date": "2014-03-07",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-08",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-09",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-10",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-11",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-12",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-13",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-14",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-15",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-16",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-17",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-18",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-19",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-20",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-21",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-22",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-23",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-24",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-25",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-26",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-27",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-28",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-29",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-30",
            "column-1": 6,
            "column-2": 8
        },
        {
            "date": "2014-03-31",
            "column-1": 6,
            "column-2": 8
        }
    ]
});
