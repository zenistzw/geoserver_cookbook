function init(){
  var sld = '<StyledLayerDescriptor version="1.0.0">';
  sld += '<NamedLayer>';
  sld += '<Name>NaturalEarth:countries</Name>';
  sld += '<UserStyle>';
  sld += '<IsDefault>1</IsDefault>';
  sld += '<FeatureTypeStyle>';
  sld += '<Rule>';
  sld += '<PolygonSymbolizer>';
  sld += '<Stroke>';
  sld += '<CssParameter name="stroke">#000000</CssParameter>';
  sld += '<CssParameter name="stroke-width">1</CssParameter>';
  sld += '</Stroke>';
  sld += '<Fill>';
  sld += '<CssParameter name="fill">#FFFFCC</CssParameter>';
  sld += '<CssParameter name="fill-opacity">0.65</CssParameter>';
  sld += '</Fill>';
  sld += '</PolygonSymbolizer>';
  sld += '</Rule>';
  sld += '</FeatureTypeStyle>';
  sld += '</UserStyle>';
  sld += '</NamedLayer>';
  sld += '</StyledLayerDescriptor>';


  var map = new OpenLayers.Map({
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
      new OpenLayers.Layer.WMS(
        "Countries",
        "http://10.211.55.21:8080/geoserver/wms",
        {
          layers: "NaturalEarth:countries",
          format: "image/png",
          transparent: true,
          CQL_FILTER: "income_grp='1. High income: OECD' OR income_grp='2. High income: nonOECD'",
          sld_body: sld
        }
      )
    ],
    center: [12.48, 42.60],
    zoom: 4
  });
  map.addControl(new OpenLayers.Control.LayerSwitcher());
}