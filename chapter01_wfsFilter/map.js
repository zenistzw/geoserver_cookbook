function init(){
  map = new OpenLayers.Map({
    div: "myMap",
    allOverlays: true,
    layers: [
      new OpenLayers.Layer.Vector("Low income Countries",{
        strategies: [new OpenLayers.Strategy.BBOX()],
        protocol: new OpenLayers.Protocol.WFS({
          url: "http://10.211.55.21:8080/geoserver/wfs",
          featureType: "countries",
          featureNS: "http://www.naturalearthdata.com/",
          geometryName: "the_geom"
        }),
        styleMap: new OpenLayers.StyleMap({
          strokeWidth: 3,
          strokeColor: "#000000",
          strokeWidth: 1,
          fillColor: "#ffffcc",
          fillOpacity: 1
        }),
        filter: new OpenLayers.Filter.Logical({
          type: OpenLayers.Filter.Logical.AND,
          filters: [
            new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.EQUAL_TO,
              property: "income_grp",
              value: "5. Low income"
            }),
          ]
        })
      }),
      new OpenLayers.Layer.Vector("Lower middle income Countries",{
        strategies: [new OpenLayers.Strategy.BBOX()],
        protocol: new OpenLayers.Protocol.WFS({
          url: "http://10.211.55.21:8080/geoserver/wfs",
          featureType: "countries",
          featureNS: "http://www.naturalearthdata.com/",
          geometryName: "the_geom"
        }),
        styleMap: new OpenLayers.StyleMap({
          strokeWidth: 3,
          strokeColor: "#000000",
          strokeWidth: 1,
          fillColor: "#421847",
          fillOpacity: 1
        }),
        filter: new OpenLayers.Filter.Logical({
          type: OpenLayers.Filter.Logical.AND,
          filters: [
            new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.EQUAL_TO,
              property: "income_grp",
              value: "4. Lower income"
            }),
          ]
        })
      }),
      new OpenLayers.Layer.Vector("Upper middle income Countries",{
        strategies: [new OpenLayers.Strategy.BBOX()],
        protocol: new OpenLayers.Protocol.WFS({
          url: "http://10.211.55.21:8080/geoserver/wfs",
          featureType: "countries",
          featureNS: "http://www.naturalearthdata.com/",
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
            new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.EQUAL_TO,
              property: "income_grp",
              value: "3. Upper middle income"
            }),
          ]
        })
      }),
      new OpenLayers.Layer.Vector("High income Countries",{
        strategies: [new OpenLayers.Strategy.BBOX()],
        protocol: new OpenLayers.Protocol.WFS({
          url: "http://10.211.55.21:8080/geoserver/wfs",
          featureType: "countries",
          featureNS: "http://www.naturalearthdata.com/",
          geometryName: "the_geom"
        }),
        styleMap: new OpenLayers.StyleMap({
          strokeWidth: 3,
          strokeColor: "#000000",
          strokeWidth: 1,
          fillColor: "#8f3830",
          fillOpacity: 1
        }),
        filter: new OpenLayers.Filter.Logical({
          type: OpenLayers.Filter.Logical.OR,
          filters: [
            new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.EQUAL_TO,
              property: "income_grp",
              value: "1. High income: OECD"
            }),
            new OpenLayers.Filter.Comparison({
              type: OpenLayers.Filter.Comparison.EQUAL_TO,
              property: "income_grp",
              value: "2. High income: nonOECD"
            })
          ]
        })
      })
    ],
    center: [12.48, 42.60],
    zoom: 4
  });
  map.addControl(new OpenLayers.Control.LayerSwitcher());
}