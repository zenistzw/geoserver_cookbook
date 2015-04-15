function init(){
  var sld = '<StyledLayerDescriptor version="1.0.0">';
  sld += '<NamedLayer>';
  sld += '<Name>NaturalEarth:countries</Name>';
  sld += '<UserStyle>';
  sld += '<IsDefault>1</IsDefault>';
  sld += '<FeatureTypeStyle>';
  sld += '<Rule>';
  sld += '<PointSymbolizer>';
  sld += '<Graphic>';
  sld += '<Mark>';
  sld += '<WellKnownName>circle</WellKnownName>';
  sld += '<Fill>';
  sld += '<CssParameter name="fill">#FF0000</CssParameter>';
  sld += '</Fill>';
  sld += '</Mark>';
  sld += '<Size>3</Size>';
  sld += '</Graphic>';
  sld += '</PointSymbolizer>';
  sld += '</Rule>';
  sld += '</FeatureTypeStyle>';
  sld += '</UserStyle>';
  sld += '</NamedLayer>';
  sld += '</StyledLayerDescriptor>';

  var sld2 = '<StyledLayerDescriptor version="1.0.0">';
  sld2 += '<NamedLayer>';
  sld2 += '<Name>NaturalEarth:countries</Name>';
  sld2 += '<UserStyle>';
  sld2 += '<IsDefault>1</IsDefault>';
  sld2 += '<FeatureTypeStyle>';
  sld2 += '<Rule>';
  sld2 += '<PointSymbolizer>';
  sld2 += '<Graphic>';
  sld2 += '<Mark>';
  sld2 += '<WellKnownName>circle</WellKnownName>';
  sld2 += '<Fill>';
  sld2 += '<CssParameter name="fill">#00FF00</CssParameter>';
  sld2 += '</Fill>';
  sld2 += '</Mark>';
  sld2 += '<Size>3</Size>';
  sld2 += '</Graphic>';
  sld2 += '</PointSymbolizer>';
  sld2 += '</Rule>';
  sld2 += '</FeatureTypeStyle>';
  sld2 += '</UserStyle>';
  sld2 += '</NamedLayer>';
  sld2 += '</StyledLayerDescriptor>';


  var map = new OpenLayers.Map({
    div: "myMap",
    //We don't want any layers as base map
    allOverlays: true,
    projection: "EPSG:3857",
    maxExtent: new OpenLayers.Bounds(-20037508, -20037508, 20037508, 20037508.34),
    maxResolution: 156543.0339,
    units: 'm',
    layers: [
      new OpenLayers.Layer.WMS(
        "Far away places",
        "http://10.211.55.21:8080/geoserver/wms",
        {
          layers: "NaturalEarth:populatedplaceswm",
          format: "image/png",
          transparent: true,
          cql_filter: "BEYOND(geom, POINT(1389413 5145697),1000000, meters)",
          sld_body: sld
        }
      ),
      new OpenLayers.Layer.WMS(
        "Near places",
        "http://10.211.55.21:8080/geoserver/wms",
        {
          layers: "NaturalEarth:populatedplaceswm",
          format: "image/png",
          transparent: true,
          cql_filter: "DWITHIN(geom, POINT(1389413 5145697),1000000, meters)",
          sld_body: sld2,
        }
      )
    ],
    center: [12.48, 42.60],
    zoom: 4
  });
  map.addControl(new OpenLayers.Control.LayerSwitcher());
}