
var settings = require("./settings")
const data = require("./data.js")
AmCharts.makeChart( "mapdiv", {
  /**
   * this tells amCharts it's a map
   */
  "type": "map",
  "theme": "light",


  /**
   * create data provider object
   * map property is usually the same as the name of the map file.
   * getAreasFromMap indicates that amMap should read all the areas available
   * in the map data and treat them as they are included in your data provider.
   * in case you don't set it to true, all the areas except listed in data
   * provider will be treated as unlisted.
   */
  "dataProvider" : {
    

    "map": "worldLow",
    "areas": data.countries,
    "selectedColor" : "#AED6F1"
  },

  /**
   * create areas settings
   * autoZoom set to true means that the map will zoom-in when clicked on the area
   * selectedColor indicates color of the clicked area.
   */
  "areasSettings": {    
    "selectedColor": "#AED6F1",
    "autoZoom": false
  },

  "zoomControl": {
     "zoomControlEnabled": true,
     "homeButtonEnabled": true
  },

  "legend": {
    "divId": "legend",
    "data": [
      {"title": "Country has right to be forgotten legislation or precedent", "color": settings.yes},
      {"title": "Country's right to be forgotten is in progress or inconsistent", "color": settings.maybe},
      {"title": "Country has no right to be forgotten", "color": settings.no}

    ],
    "align": "right",
    "position": "bottom",
    "maxColumns": 1,
    "right": 20,
    "width": 700
  },


  /**
   * let's say we want a small map to be displayed, so let's create it
   */
  //"smallMap": {}
} );