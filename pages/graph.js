import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(FusionCharts);
if (typeof window === 'undefined') {
    global.window = {}
}
const dataSource = {
  "chart": {
    "caption": "Deaths reported because of mosquito bites in India",
    "subcaption": "(As per government records)",
    "showvalues": "0",
    "numvisibleplot": "12",
    "plottooltext": "<b>$dataValue</b> people died because of mosquito bites in $label",
    "theme": "fusion"
  },
  "categories": [
    {
      "category": [
        {
          "label": "1994"
        },
        {
          "label": "1995"
        },
        {
          "label": "1996"
        },
        {
          "label": "1997"
        },
        {
          "label": "1998"
        },
        {
          "label": "1999"
        },
        {
          "label": "2000"
        },
        {
          "label": "2001"
        },
        {
          "label": "2002"
        },
        {
          "label": "2003"
        },
        {
          "label": "2004"
        },
        {
          "label": "2005"
        },
        {
          "label": "2006"
        },
        {
          "label": "2007"
        },
        {
          "label": "2008"
        },
        {
          "label": "2009"
        },
        {
          "label": "2010"
        },
        {
          "label": "2011"
        },
        {
          "label": "2012"
        },
        {
          "label": "2013"
        },
        {
          "label": "2014"
        },
        {
          "label": "2015"
        },
        {
          "label": "2016"
        },
        {
          "label": "2017"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "value": "15622"
        },
        {
          "value": "10612"
        },
        {
          "value": "15820"
        },
        {
          "value": "26723"
        },
        {
          "value": "35415"
        },
        {
          "value": "25555"
        },
        {
          "value": "81803"
        },
        {
          "value": "47950"
        },
        {
          "value": "42396"
        },
        {
          "value": "19435"
        },
        {
          "value": "9780"
        },
        {
          "value": "23243"
        },
        {
          "value": "28619"
        },
        {
          "value": "8477"
        },
        {
          "value": "3503"
        },
        {
          "value": "14278"
        },
        {
          "value": "30522"
        },
        {
          "value": "61518"
        },
        {
          "value": "24819"
        },
        {
          "value": "16437"
        },
        {
          "value": "21171"
        },
        {
          "value": "1690"
        },
        {
          "value": "2418"
        },
        {
          "value": "11253"
        }
      ]
    }
  ]
};

class MyComponent extends Component {
   render() {
     if (typeof window === 'undefined') {
       global.window = {}
     }
      return (
      <ReactFusioncharts
         type = "scrollline2d"
         width = '100%'
         height = '100%'
         dataFormat = "JSON"
         dataSource = {dataSource} />
      );
   }
}

export default MyComponent;
