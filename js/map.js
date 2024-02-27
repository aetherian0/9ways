var map_4d9bb5c87e19d4abc6b77f1566fdb901 = L.map(
    "map_4d9bb5c87e19d4abc6b77f1566fdb901",
    {
        center: [9.072264, 7.491302],
        crs: L.CRS.EPSG3857,
        maxBounds: [[8.8, 7.15], [9.2, 7.8]],
        zoom: 12,
        zoomControl: true,
        preferCanvas: false,
    }
);





var tile_layer_c45759a1bbf41c725c08e6101bc74912 = L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    { "attribution": "\u0026copy; \u003ca href=\"https://www.openstreetmap.org/copyright\"\u003eOpenStreetMap\u003c/a\u003e contributors", "detectRetina": false, "maxNativeZoom": 19, "maxZoom": 19, "minZoom": 12, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false }
);


tile_layer_c45759a1bbf41c725c08e6101bc74912.addTo(map_4d9bb5c87e19d4abc6b77f1566fdb901);


var circle_marker_c7b38b76efc1dd157494bf1c9e3665f2 = L.circleMarker(
    [9.2, 7.15],
    { "bubblingMouseEvents": true, "color": "#3388ff", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#3388ff", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3 }
).addTo(map_4d9bb5c87e19d4abc6b77f1566fdb901);


circle_marker_c7b38b76efc1dd157494bf1c9e3665f2.bindTooltip(
    `<div>
                     Upper Left Corner
                 </div>`,
    { "sticky": true }
);


var circle_marker_69d0d8a8879dbd5436610096bf6982ae = L.circleMarker(
    [8.8, 7.15],
    { "bubblingMouseEvents": true, "color": "#3388ff", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#3388ff", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3 }
).addTo(map_4d9bb5c87e19d4abc6b77f1566fdb901);


circle_marker_69d0d8a8879dbd5436610096bf6982ae.bindTooltip(
    `<div>
                     Lower Left Corner
                 </div>`,
    { "sticky": true }
);


var circle_marker_0643e6208df5c3c07c938147ec42d947 = L.circleMarker(
    [8.8, 7.8],
    { "bubblingMouseEvents": true, "color": "#3388ff", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#3388ff", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3 }
).addTo(map_4d9bb5c87e19d4abc6b77f1566fdb901);


circle_marker_0643e6208df5c3c07c938147ec42d947.bindTooltip(
    `<div>
                     Lower Right Corner
                 </div>`,
    { "sticky": true }
);


var circle_marker_bb29fea1c6970d98fc16f38c9c47b41e = L.circleMarker(
    [9.2, 7.8],
    { "bubblingMouseEvents": true, "color": "#3388ff", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#3388ff", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 1.0, "radius": 10, "stroke": true, "weight": 3 }
).addTo(map_4d9bb5c87e19d4abc6b77f1566fdb901);


circle_marker_bb29fea1c6970d98fc16f38c9c47b41e.bindTooltip(
    `<div>
                     Upper Right Corner
                 </div>`,
    { "sticky": true }
);


var feature_group_4b8af7d55b568bd2a9126660b8449922 = L.featureGroup(
    {}
);


var marker_26ee9970fc2eac17f8070391e58952ee = L.marker(
    [9.05942, 7.3913],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_963e75674faaa4fdb1486715cc4ddf93 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "blue", "prefix": "fa" }
);
marker_26ee9970fc2eac17f8070391e58952ee.setIcon(icon_963e75674faaa4fdb1486715cc4ddf93);


var popup_1f744a08162d187635222624c4191684 = L.popup({ "maxWidth": 400 });



var html_2a061b21647f1ec0237c5b71cc87a769 = $(`<div id="html_2a061b21647f1ec0237c5b71cc87a769" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Nizamiye Hospital</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_1f744a08162d187635222624c4191684.setContent(html_2a061b21647f1ec0237c5b71cc87a769);



marker_26ee9970fc2eac17f8070391e58952ee.bindPopup(popup_1f744a08162d187635222624c4191684)
    ;




var marker_dd8e47f53216cc59b531e27e5efdbd8b = L.marker(
    [9.07616, 7.42585],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_be529c5740e82554f9eeadb571bf2530 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "blue", "prefix": "fa" }
);
marker_dd8e47f53216cc59b531e27e5efdbd8b.setIcon(icon_be529c5740e82554f9eeadb571bf2530);


var popup_771f0c579d898bceb6e98e261869af53 = L.popup({ "maxWidth": 400 });



var html_ec2a9275772d95ac3129df99dc2c6185 = $(`<div id="html_ec2a9275772d95ac3129df99dc2c6185" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Jabi lake Mall</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_771f0c579d898bceb6e98e261869af53.setContent(html_ec2a9275772d95ac3129df99dc2c6185);



marker_dd8e47f53216cc59b531e27e5efdbd8b.bindPopup(popup_771f0c579d898bceb6e98e261869af53)
    ;




var marker_f79d7365029332e91f68ffb7923309ef = L.marker(
    [9.081637, 7.525149],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_ad9ac9a758aeb48f9c8782f0cd09567f = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "blue", "prefix": "fa" }
);
marker_f79d7365029332e91f68ffb7923309ef.setIcon(icon_ad9ac9a758aeb48f9c8782f0cd09567f);


var popup_a09f3b23bff6d0e99fb0fbe6bd94ccfa = L.popup({ "maxWidth": 400 });



var html_1c83f30e8de054a986862b35b6316067 = $(`<div id="html_1c83f30e8de054a986862b35b6316067" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">National Childrens Park & Zoo Abuja</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_a09f3b23bff6d0e99fb0fbe6bd94ccfa.setContent(html_1c83f30e8de054a986862b35b6316067);



marker_f79d7365029332e91f68ffb7923309ef.bindPopup(popup_a09f3b23bff6d0e99fb0fbe6bd94ccfa)
    ;




var marker_35d0ad9028e3c99d3a24e2b04e1c5192 = L.marker(
    [9.0743181, 7.4947183],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_3403ba2d3b779063f09e30e1ed70283b = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "blue", "prefix": "fa" }
);
marker_35d0ad9028e3c99d3a24e2b04e1c5192.setIcon(icon_3403ba2d3b779063f09e30e1ed70283b);


var popup_1022ab046d9ea883771cf20b8e6cf877 = L.popup({ "maxWidth": 400 });



var html_b3affd025fb6b2ce29811f055d533e77 = $(`<div id="html_b3affd025fb6b2ce29811f055d533e77" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Transcorp Hilton Abuja</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_1022ab046d9ea883771cf20b8e6cf877.setContent(html_b3affd025fb6b2ce29811f055d533e77);



marker_35d0ad9028e3c99d3a24e2b04e1c5192.bindPopup(popup_1022ab046d9ea883771cf20b8e6cf877)
    ;




var marker_b820304256ac4882cf3c69873b8b03fc = L.marker(
    [9.0138702, 7.3964713],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_5e02bef481e14d8aaaadfddf9937c836 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "blue", "prefix": "fa" }
);
marker_b820304256ac4882cf3c69873b8b03fc.setIcon(icon_5e02bef481e14d8aaaadfddf9937c836);


var popup_1fc7dba9513f855c3f686553838e6b6a = L.popup({ "maxWidth": 400 });



var html_a7236734c2e0a0b37eb1e96b54256e08 = $(`<div id="html_a7236734c2e0a0b37eb1e96b54256e08" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Nile University of Nigeria</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_1fc7dba9513f855c3f686553838e6b6a.setContent(html_a7236734c2e0a0b37eb1e96b54256e08);



marker_b820304256ac4882cf3c69873b8b03fc.bindPopup(popup_1fc7dba9513f855c3f686553838e6b6a)
    ;




var marker_a606576cb6164c69fb9763416cec69b1 = L.marker(
    [9.07844, 7.45669],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_1745f08c5af1e689738233b153e000c9 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_a606576cb6164c69fb9763416cec69b1.setIcon(icon_1745f08c5af1e689738233b153e000c9);


var popup_5d7c61eb82ef8d8cbc2280c42649edff = L.popup({ "maxWidth": 400 });



var html_d98f4fc7c65b3019f99eaa09de2e3e4f = $(`<div id="html_d98f4fc7c65b3019f99eaa09de2e3e4f" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Nnamdi Azikiwe Expy Stop</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_5d7c61eb82ef8d8cbc2280c42649edff.setContent(html_d98f4fc7c65b3019f99eaa09de2e3e4f);



marker_a606576cb6164c69fb9763416cec69b1.bindPopup(popup_5d7c61eb82ef8d8cbc2280c42649edff)
    ;




var marker_8ea265c7549973bf7618cd31e519d5dd = L.marker(
    [9.046681, 7.45331],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_f31ef91875c46d2940502bd08f75cf95 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_8ea265c7549973bf7618cd31e519d5dd.setIcon(icon_f31ef91875c46d2940502bd08f75cf95);


var popup_2af10cb6e3443230b05441a8c1cf25d4 = L.popup({ "maxWidth": 400 });



var html_176a7f9daa27e1ab427acc090acfaa18 = $(`<div id="html_176a7f9daa27e1ab427acc090acfaa18" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Herbert Macaulay Way Stop</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_2af10cb6e3443230b05441a8c1cf25d4.setContent(html_176a7f9daa27e1ab427acc090acfaa18);



marker_8ea265c7549973bf7618cd31e519d5dd.bindPopup(popup_2af10cb6e3443230b05441a8c1cf25d4)
    ;




var marker_d9f2455cd0ebdac465b83a08becee8cc = L.marker(
    [9.02272, 7.56979],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_34725b8d2adcef3d2bdc3cc81708eb8d = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_d9f2455cd0ebdac465b83a08becee8cc.setIcon(icon_34725b8d2adcef3d2bdc3cc81708eb8d);


var popup_fa8873642da5f482f62d28e4b17843ac = L.popup({ "maxWidth": 400 });



var html_cf95938e620e08c67daadfc8238d6868 = $(`<div id="html_cf95938e620e08c67daadfc8238d6868" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Abuja-Keffi Expressway Stop</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_fa8873642da5f482f62d28e4b17843ac.setContent(html_cf95938e620e08c67daadfc8238d6868);



marker_d9f2455cd0ebdac465b83a08becee8cc.bindPopup(popup_fa8873642da5f482f62d28e4b17843ac)
    ;




var marker_4fd1b4efa9c5ecf7f55a6f6142c2e71e = L.marker(
    [8.96113, 7.2436],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_e94063b509dd953d67debef9f60c308a = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_4fd1b4efa9c5ecf7f55a6f6142c2e71e.setIcon(icon_e94063b509dd953d67debef9f60c308a);


var popup_bdc24c74599a6e6b804baf6e328e1e6b = L.popup({ "maxWidth": 400 });



var html_9912a457251219bcab1ec952901b3286 = $(`<div id="html_9912a457251219bcab1ec952901b3286" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Umaru Musa Yar'Adua Expressway Stop</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_bdc24c74599a6e6b804baf6e328e1e6b.setContent(html_9912a457251219bcab1ec952901b3286);



marker_4fd1b4efa9c5ecf7f55a6f6142c2e71e.bindPopup(popup_bdc24c74599a6e6b804baf6e328e1e6b)
    ;




var marker_79de04573001527be4bb805f38017aa1 = L.marker(
    [8.95349, 7.26371],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_7aaff7c5e08aeeb09d98a3bf57b839b9 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_79de04573001527be4bb805f38017aa1.setIcon(icon_7aaff7c5e08aeeb09d98a3bf57b839b9);


var popup_ef75ff34985400c2bbff325fac74d197 = L.popup({ "maxWidth": 400 });



var html_4564c42ed9d22eaf826f3c256321e47b = $(`<div id="html_4564c42ed9d22eaf826f3c256321e47b" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Umaru Musa Yar'Adua Expressway Stop 2</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_ef75ff34985400c2bbff325fac74d197.setContent(html_4564c42ed9d22eaf826f3c256321e47b);



marker_79de04573001527be4bb805f38017aa1.bindPopup(popup_ef75ff34985400c2bbff325fac74d197)
    ;




var marker_48f887f039834f341cf73466a182e842 = L.marker(
    [8.97266, 7.36307],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_90e73e3a485e5e507cfea527e259be56 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_48f887f039834f341cf73466a182e842.setIcon(icon_90e73e3a485e5e507cfea527e259be56);


var popup_7e743384461125cb96fd7248b642ad82 = L.popup({ "maxWidth": 400 });



var html_a455e5d41ac9022a5b13ba01d8a33799 = $(`<div id="html_a455e5d41ac9022a5b13ba01d8a33799" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Umaru Musa Yar'Adua Expressway Stop 3</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_7e743384461125cb96fd7248b642ad82.setContent(html_a455e5d41ac9022a5b13ba01d8a33799);



marker_48f887f039834f341cf73466a182e842.bindPopup(popup_7e743384461125cb96fd7248b642ad82)
    ;




var marker_3011ad406038000456661fe43fb69fc4 = L.marker(
    [9.00804, 7.41695],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_d26ce26012b9eb6bde70c8e7d13111d1 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_3011ad406038000456661fe43fb69fc4.setIcon(icon_d26ce26012b9eb6bde70c8e7d13111d1);


var popup_e6f8ca2098d795a2d6e5076cda59304a = L.popup({ "maxWidth": 400 });



var html_11252789f90e8f0c3851c5194c6da3fa = $(`<div id="html_11252789f90e8f0c3851c5194c6da3fa" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Umaru Musa Yar'Adua Expressway Stop 4</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_e6f8ca2098d795a2d6e5076cda59304a.setContent(html_11252789f90e8f0c3851c5194c6da3fa);



marker_3011ad406038000456661fe43fb69fc4.bindPopup(popup_e6f8ca2098d795a2d6e5076cda59304a)
    ;




var marker_1a5f094832ea11f3b31876490b30faaf = L.marker(
    [9.03556, 7.44823],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_3ecbc187d4192decc7b48c1490fea2ed = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_1a5f094832ea11f3b31876490b30faaf.setIcon(icon_3ecbc187d4192decc7b48c1490fea2ed);


var popup_3039ed97c8a360fce0b8577f1f9040c7 = L.popup({ "maxWidth": 400 });



var html_9f14d6e53fdb7c174bde921bff91ddc5 = $(`<div id="html_9f14d6e53fdb7c174bde921bff91ddc5" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Abuja City Gate</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_3039ed97c8a360fce0b8577f1f9040c7.setContent(html_9f14d6e53fdb7c174bde921bff91ddc5);



marker_1a5f094832ea11f3b31876490b30faaf.bindPopup(popup_3039ed97c8a360fce0b8577f1f9040c7)
    ;




var marker_877f737d0e7e535bfc31f9df796ed954 = L.marker(
    [9.02931, 7.46921],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_0cea8713c098fd1d11fb8b5fa0fe061c = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_877f737d0e7e535bfc31f9df796ed954.setIcon(icon_0cea8713c098fd1d11fb8b5fa0fe061c);


var popup_401f96483dc8b6493a6c53b9da62a40c = L.popup({ "maxWidth": 400 });



var html_32d8cbbce247f0c7d299edf5d8148e94 = $(`<div id="html_32d8cbbce247f0c7d299edf5d8148e94" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Moshood Abiola Way Stop</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_401f96483dc8b6493a6c53b9da62a40c.setContent(html_32d8cbbce247f0c7d299edf5d8148e94);



marker_877f737d0e7e535bfc31f9df796ed954.bindPopup(popup_401f96483dc8b6493a6c53b9da62a40c)
    ;




var marker_808ffa72d0aea5360661cdad2ab4b080 = L.marker(
    [9.06691, 7.45256],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_718f28a74da22022325e61f5cb52ba45 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_808ffa72d0aea5360661cdad2ab4b080.setIcon(icon_718f28a74da22022325e61f5cb52ba45);


var popup_4ed9f3837ad0e0302e616d76bfdc56e4 = L.popup({ "maxWidth": 400 });



var html_e5632ef0f20d8c58b513001c946e24ba = $(`<div id="html_e5632ef0f20d8c58b513001c946e24ba" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Herbert Macaulay Way Stop 2</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_4ed9f3837ad0e0302e616d76bfdc56e4.setContent(html_e5632ef0f20d8c58b513001c946e24ba);



marker_808ffa72d0aea5360661cdad2ab4b080.bindPopup(popup_4ed9f3837ad0e0302e616d76bfdc56e4)
    ;




var marker_08a3691d16794ecd65d863b6288956a4 = L.marker(
    [9.05485, 7.48441],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_4c2ce27aecf024cc2fd730110a948444 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_08a3691d16794ecd65d863b6288956a4.setIcon(icon_4c2ce27aecf024cc2fd730110a948444);


var popup_ef74f13e74a7e919e88aa887d3d1adab = L.popup({ "maxWidth": 400 });



var html_c4dcfd1b7b77b843246fea1fc7f0e956 = $(`<div id="html_c4dcfd1b7b77b843246fea1fc7f0e956" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Nigerian National Petroleum Cooperation Towers</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_ef74f13e74a7e919e88aa887d3d1adab.setContent(html_c4dcfd1b7b77b843246fea1fc7f0e956);



marker_08a3691d16794ecd65d863b6288956a4.bindPopup(popup_ef74f13e74a7e919e88aa887d3d1adab)
    ;




var marker_b3557077259fa792ceab81dd113fc68d = L.marker(
    [9.07054, 7.49532],
    {}
).addTo(feature_group_4b8af7d55b568bd2a9126660b8449922);


var icon_69e6e665d37c6ffab9a99a71ee7f7e92 = L.AwesomeMarkers.icon(
    { "extraClasses": "fa-rotate-0", "icon": "bus-simple", "iconColor": "white", "markerColor": "red", "prefix": "fa" }
);
marker_b3557077259fa792ceab81dd113fc68d.setIcon(icon_69e6e665d37c6ffab9a99a71ee7f7e92);


var popup_894b1737023367e1b58fb56af54ea814 = L.popup({ "maxWidth": 400 });



var html_a7125fbcfa2238b3ac108a3ccfc0a0d0 = $(`<div id="html_a7125fbcfa2238b3ac108a3ccfc0a0d0" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">Shehu Shagari Wy</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`)[0];
popup_894b1737023367e1b58fb56af54ea814.setContent(html_a7125fbcfa2238b3ac108a3ccfc0a0d0);



marker_b3557077259fa792ceab81dd113fc68d.bindPopup(popup_894b1737023367e1b58fb56af54ea814)
    ;




feature_group_4b8af7d55b568bd2a9126660b8449922.addTo(map_4d9bb5c87e19d4abc6b77f1566fdb901);


var locate_control_7e129a07238a4a55720d4e5bc54ab79d = L.control.locate(
    {}
).addTo(map_4d9bb5c87e19d4abc6b77f1566fdb901);



var mouse_position_fa3d06a17359bcbbb5478409f3763337 = new L.Control.MousePosition(
    { "emptyString": "Unavailable", "lngFirst": false, "numDigits": 5, "position": "bottomright", "prefix": "", "separator": " : " }
);
mouse_position_fa3d06a17359bcbbb5478409f3763337.options["latFormatter"] =
    undefined;
mouse_position_fa3d06a17359bcbbb5478409f3763337.options["lngFormatter"] =
    undefined;
map_4d9bb5c87e19d4abc6b77f1566fdb901.addControl(mouse_position_fa3d06a17359bcbbb5478409f3763337);


var layer_control_92e0a1d8648657a4c0731aaec0545d42_layers = {
    base_layers: {
        "openstreetmap": tile_layer_c45759a1bbf41c725c08e6101bc74912,
    },
    overlays: {
        "Bus stops": feature_group_4b8af7d55b568bd2a9126660b8449922,
    },
};
let layer_control_92e0a1d8648657a4c0731aaec0545d42 = L.control.layers(
    layer_control_92e0a1d8648657a4c0731aaec0545d42_layers.base_layers,
    layer_control_92e0a1d8648657a4c0731aaec0545d42_layers.overlays,
    { "autoZIndex": true, "collapsed": true, "position": "topright" }
).addTo(map_4d9bb5c87e19d4abc6b77f1566fdb901);



L.Control.geocoder(
    { "collapsed": false, "defaultMarkGeocode": true, "position": "topright" }
).on('markgeocode', function (e) {
    map_4d9bb5c87e19d4abc6b77f1566fdb901.setView(e.geocode.center, 11);
}).addTo(map_4d9bb5c87e19d4abc6b77f1566fdb901);