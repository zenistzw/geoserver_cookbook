function init(){
  map = new OpenLayers.Map({
    div: "myMap",
    allOverlays: true,
    layers: [
      new OpenLayers.Layer.Vector("Filtered Countries",{
        strategies: [new OpenLayers.Strategy.Fixed()],
        protocol: new OpenLayers.Protocol.WFS({
          url: "http://10.211.55.21:8080/geoserver/wfs",
          featureType: "countries",
          featureNS: "http://www.naturalearth.com/",
          geometryName: "the_geom"
        }),
        styleMap: new OpenLayers.StyleMap({
          strokeWidth: 3,
          strokeColor: "#000000",
          strokeWidth: 1,
          fillColor: "#78c679",
          fillOpacity: 1
        }),
        filter: new OpenLayers.Filter.Logical({
          type: OpenLayers.Filter.Logical.AND,
          filters: [
            new OpenLayers.Filter.Spatial({
              type: OpenLayers.Filter.Spatial.DWITHIN,
              value: new OpenLayers.Geometry.Point(12, 42),
              distance: 8
            })
          ]
        })
      })
    ],
    center: [12.48, 42.60],
    zoom: 4
  });
  map.addControl(new OpenLayers.Control.LayerSwithcher());
}