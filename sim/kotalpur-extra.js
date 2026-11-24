// Hand-placed additions to the OpenStreetMap data (kotalpur-map.js) around Sufan Bikash Ghor, drawn by eye from
// satellite views: the ponds and houses OpenStreetMap is missing. Same units as the map: meters from the map pin,
// y points south. Loaded right after kotalpur-map.js by both games (2D and 3D).
(function (M) {
  // the house south of the office, across the lane: OpenStreetMap only has a 4 m box for it
  M.buildings[235] = [[32.2, 90.7], [43.3, 93.6], [40.3, 105.2], [29.1, 102.3]];
  M.buildings.push(
    [[53.7, 67.8], [70.3, 70.3], [72.1, 57.9], [55.6, 55.4]],   // flat-roofed house east of Vhaiyar Dukan, set along the road
    [[22, 45.5], [32, 45.5], [32, 50.5], [22, 50.5]],           // the white tin-roofed house on the north pond's bank
    [[-20.5, 2.5], [-9.5, 2.5], [-9.5, 16], [-20.5, 16]]        // Ujan Vati Stur, up the lane to the north
  );
  M.water.push(
    // behind Vhaiyar Dukan, between the white house and the red-roofed building
    [[23.2, 36.1], [39.5, 35.5], [39.5, 46.2], [39.2, 54.4], [33.5, 54.4], [33, 45], [23.2, 44.5]],
    // further north, past the trees
    [[29, 15.5], [35, 13.4], [42.5, 13.8], [44.8, 17.5], [44, 23.2], [38, 25.2], [31, 24.6], [28.2, 20.5]],
    // west of the office: three ponds in the trees along the west path
    [[-33.3, 46.7], [-25, 45.5], [-22.6, 51.5], [-23.8, 60.9], [-27.4, 66.9], [-34.5, 68], [-36.2, 60.9], [-35.1, 51.5]],
    [[-38.8, 109.5], [-31.7, 105.9], [-19.9, 104.7], [-18.7, 110.7], [-20.5, 121.3], [-18.7, 127.2], [-22.3, 133.1], [-29.4, 135.5], [-35.3, 131.9], [-37.7, 123.7], [-39.4, 116.6]],
    [[-35.3, 145], [-24.6, 143.8], [-22.3, 149.7], [-23.4, 161.5], [-35.3, 161.5], [-36.5, 152]],
    // east, past the fields, just south of the road
    [[99.7, 87.6], [110.4, 86.4], [113.9, 91.7], [112.2, 98.8], [103.3, 100.6], [98, 96.5]]
  );
  // how the houses near the office really look from above (one storey, mostly tin); the games override their random
  // height and roof for the building that contains `at`
  M.looks = [
    { at: [26.5, 48], h: 3.3, tin: true, roof: "#c4c9cc" },   // the white tin house on the north pond
    { at: [46.5, 45.4], h: 3.4, tin: true, roof: "#8a3a2c" }, // the long red-tin building behind Vhaiyar Dukan
    { at: [63, 63], h: 3.4, tin: false, roof: "#d6ccb6" },    // the flat-roofed house east of Vhaiyar Dukan
    { at: [36.5, 98], h: 3.4, tin: true, roof: "#a7acae" },   // the grey-tin house across the lane from the office
    { at: [-15, 9], h: 3.3, tin: true, roof: "#7c4b3a" }      // Ujan Vati Stur, rusty tin
  ];
  // thick village woods around the office (the satellite is mostly treetops here); the games plant extra trees inside
  // these, skipping roads, houses, ponds and the open ground in front of the office. The paddy fields east of the
  // lane, south of the road, are left open on purpose.
  M.groves = [
    [[-56, 22], [9, 55], [22, 64], [24, 77], [17, 128], [-56, 130]],    // west of the office, round the three ponds
    [[-45, -15], [52, -15], [52, 10], [24, 30], [8, 50], [-40, 26]],    // north, up to the second pond
    [[28, 106], [62, 110], [100, 126], [100, 178], [22, 178]],          // south of the house across the lane
    [[80, 100], [136, 96], [136, 178], [102, 178]]                      // south-east, past the east pond
  ];
})(window.KOTALPUR);
