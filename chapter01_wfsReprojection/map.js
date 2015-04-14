function init(){
  map = new OpenLayers.Map({
    div: "myMap",
    //We don't want any layers as base map
    allOverlays: true,
    projection: "EPSG:4326",
    layers: [
      new OpenLayers.Layer.Vector("countries",{
        strategies: [new OpenLayers.Strategy.BBOX()],
        protocol: new OpenLayers.Protocol.WFS({
          url: "http://10.211.55.21:8080/geoserver/wfs",
          featureType: "countries",
          featureNS: "http://www.naturalearthdata.com/",
          //Mind the geometry column name
          geometryName: "the_geom",
          srsName: new OpenLayers.Projection("EPSG:4326"),
          srsNameInQuery: true
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