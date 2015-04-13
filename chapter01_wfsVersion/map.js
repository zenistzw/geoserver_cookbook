function init(){
  map = new OpenLayers.Map({
    div: "myMap",
    //We don't want any layers as base map
    allOverlays: true,
    //Add Bule-Marble Layer
    layers: [
      new OpenLayers.Layer.WMS(
        "NASA Bule Marble",
        "http://10.211.55.21:8080/geoserver/wms",
        {
          layers: "NaturalEarth:blueMarble",
          format: "image/png",
          transparent: false
        }
      ),
      new OpenLayers.Layer.Vector("World countries",{
        strategies: [new OpenLayers.Strategy.BBOX()],
        protocol: new OpenLayers.Protocol.WFS.v1_1_0({
          url: "http://10.211.55.21:8080/geoserver/wfs",
          featureType: "countries",
          featureNS: "http://www.naturalearthdata.com/",
          //Mind the geometry column name
          geometryName: "the_geom",
          outputFormat: "JSON"
        }),
        styleMap: new OpenLayers.StyleMap({
          strokeWidth: 3,
          strokeColor: "#FF0000",
          strokeWidth: 1,
          fillColor: "#ee9900",
          fillOpacity: 0.3
        }),
      })
    ],
    center: [12.48, 42.60],
    zoom: 4
  });
  map.addControl(new OpenLayers.Control.LayerSwitcher());
}