// Hand-placed additions to the OpenStreetMap data (kotalpur-map.js) around Sufan Bikash Ghor, drawn by eye from
// satellite views and the user's photos: the ponds and houses OpenStreetMap is missing, the primary school and its
// field, the paddy round it, the yellow house and corner shop across from Sufan Palace, and the concrete lane beside it. Same units as the map: meters from the map pin,
// y points south. Loaded right after kotalpur-map.js by both games (2D and 3D).
(function (M) {
  // the walled house south of the office, across the lane (street photos at 24.83573, 91.953079): one storey with a
  // second over its south half, its front (the first edge) facing west onto the lane. OpenStreetMap only has a 4 m box
  M.buildings[235] = [[33, 90], [33, 103.5], [45.5, 103.5], [45.5, 90]];
  M.walled = { at: [39.2, 96.7] }; // the game gives it a model of its own
  // further down the lane (street photos at 24.835134, 91.952972): the cream house with pink bands, under big trees, its
  // west face (the first edge) to the lane. OpenStreetMap has a 4 x 6 m box here; the game gives it a model of its own
  M.buildings[258] = [[23.6, 159], [23.6, 167], [33.6, 167], [33.6, 159]];
  M.pinkHouse = { at: [28.6, 163] };
  // just south of it (street photos at 24.834932, 91.952926, placed by the Street View panoramas along the lane): the
  // tin-roofed house, a plastered block on the lane with a bare-brick wing running east (an L, a lean-to along its back),
  // then a grey lean-to kitchen and a bamboo shed behind. OpenStreetMap had two small boxes here; the game draws all four
  M.buildings[315] = [[18.2, 174.1], [18.2, 181.9], [23.8, 181.9], [23.8, 174.1]];
  M.buildings[316] = [[23.8, 174.1], [23.8, 182.9], [32, 182.9], [32, 180.1], [34.5, 180.1], [34.5, 174.1]];
  M.buildings.push([[18.6, 181.9], [18.6, 184.7], [22.6, 184.7], [22.6, 181.9]], [[22.2, 185.1], [22.2, 189.1], [27.2, 189.1], [27.2, 185.1]]);
  M.tinHouse = { at: [[21, 178], [29, 177.1], [20.6, 183.3], [24.7, 187.1]] }; // the block, the wing, the kitchen, the shed
  // Kotalpur Government Primary School, as the satellite shows it: one long storey, the veranda (the first edge) facing
  // east onto the walled playing field. OpenStreetMap has it a little narrower and tilted
  M.buildings[95] = [[85.3, 5.8], [85.5, -18.6], [74.4, -18.8], [74.2, 5.6]];
  // the long yellow house across the road from Sufan Palace (OpenStreetMap has one 33 m block for it and its neighbour)
  M.buildings[248] = [[156.8, 34.4], [176, 34.4], [176, 45.5], [156.8, 45.5]];
  M.buildings.push(
    [[82.5, 6.8], [82.5, 11.2], [76, 11.2], [76, 6.8]],         // the small wash block behind the school's south end
    [[177, 34.4], [194.7, 34.4], [194.7, 46], [177, 46]],       // across the road from Sufan Palace: the brown-tin house
    [[158.9, 29.2], [162.4, 29.2], [162.4, 32.8], [158.9, 32.8]],   // and the little green-tin shop on the corner
    [[63.5, 57.8], [63.5, 63.6], [72.2, 63.6], [72.2, 57.8]],   // the white room with a tank east of Vhaiyar Dukan; the rest of its plot is a walled site
    [[22, 45.5], [32, 45.5], [32, 50.5], [22, 50.5]],           // the white tin-roofed house on the north pond's bank
    [[-20.5, 2.5], [-9.5, 2.5], [-9.5, 16], [-20.5, 16]],       // Ujan Vati Stur, up the lane to the north
    [[23.55, 68.65], [26.05, 68.65], [26.05, 71.05], [23.55, 71.05]] // the little tin shed on the junction corner, against Sufan Bikash Ghor's north wall
  );
  M.water.push(
    // behind Vhaiyar Dukan, between the white house and the red-roofed building
    [[23.2, 36.1], [39.5, 35.5], [39.5, 46.2], [39.2, 54.4], [33.5, 54.4], [33, 45], [23.2, 44.5]],
    // further north, past the trees: the big pond just west of the school
    [[26.2, -3.3], [30.9, -6.9], [45.1, -5.7], [47.5, 8.5], [45.6, 24], [38, 25.6], [28.5, 22.7], [25.7, 8.5]],
    // west of the office: three ponds in the trees along the west path
    [[-33.3, 46.7], [-25, 45.5], [-22.6, 51.5], [-23.8, 60.9], [-27.4, 66.9], [-34.5, 68], [-36.2, 60.9], [-35.1, 51.5]],
    [[-38.8, 109.5], [-31.7, 105.9], [-19.9, 104.7], [-18.7, 110.7], [-20.5, 121.3], [-18.7, 127.2], [-22.3, 133.1], [-29.4, 135.5], [-35.3, 131.9], [-37.7, 123.7], [-39.4, 116.6]],
    [[-35.3, 145], [-24.6, 143.8], [-22.3, 149.7], [-23.4, 161.5], [-35.3, 161.5], [-36.5, 152]],
    // east, past the fields, just south of the road
    [[99.7, 87.6], [110.4, 86.4], [113.9, 91.7], [112.2, 98.8], [103.3, 100.6], [98, 96.5]],
    // at Kotalpur Central Jame Mosque, from the satellite (Street View doesn't reach it): the walled pond in the yard east of
    // the prayer hall, and the long pond in the trees south of the yard, a bamboo jetty off its west bank
    [[269.5, 116], [280.8, 115.6], [282.2, 127.6], [270, 128]],
    [[278, 162], [296, 161.5], [300, 165], [302, 180], [302, 210], [299, 219], [282, 219.5], [277.5, 214], [276.5, 185], [277, 166]]
  );
  // how the houses near the office really look from above (one storey, mostly tin); the games override their random
  // height and roof for the building that contains `at`
  M.looks = [
    { at: [-15, 9], h: 3.3, tin: true, roof: "#7c4b3a" },     // Ujan Vati Stur, rusty tin
    { at: [79.2, 9], h: 2.7, tin: true, roof: "#8e989e" },    // the school's wash block
    // across the road from Sufan Palace, after the street photos: the yellow house (red trim along the roof, red sunshades
    // over the windows, a black tank and a stair room on the flat roof), the brown-tin house beside it, and the corner shop:
    // white walls, green tin, open to the road and hung with chips. Optional fields: wall colour, trim colour, tank and
    // stair at a point, shop (open front toward the nearest road)
    { at: [166, 40], h: 3.3, tin: false, roof: "#c9c4b8", wall: "#e6d47a", trim: "#a8432e", tank: [173, 43], stair: [167.5, 42] },
    { at: [186, 40], h: 3.4, tin: true, roof: "#6e4636" },
    { at: [160.6, 31], h: 2.6, tin: true, roof: "#4f9e86", wall: "#efece0", shop: true }
  ];
  // round Vhaiyar Dukan, after the Street View panoramas at the junction and east of the shop (Dec 2022); the game
  // gives each its own model: the plank kiosk against Sufan Bikash Ghor's north wall, the cream house across the
  // concrete lane with a banner frame on its roof, the long bare-brick shed under rusty tin behind the shop, and the
  // white room with a water tank at the back of the brick-walled building site east of the shop
  M.dukanArea = { kiosk: [24.8, 69.85], banner: [27, 48], brickShed: [46.5, 45.4], site: [67.8, 60.7] };
  // small things on the ground the game draws: benches, bamboo fences, a concrete gate frame, a brick ring well, patches
  // of red earth (dirt) and concrete (slab), a brick-lined drain, brick walls, boundary walls (bwall; `jali` is how many
  // meters from the start carry the pierced band, `col` and `base` recolour it), metal gates (gate, tingate under a
  // tin roof, roofgate under a concrete canopy), barbed wire, a haystack, a drying sheet, a brick-heaped tank lid, electric poles, a signboard, a tin-sheet fence,
  // areca palms, papaya trees, a log pile, bamboo clumps, banana plants, a creeper over a fence, a red-and-white culvert parapet, a gourd trellis (macha), a triangular road sign (rsign), a yellow arrow sign (ysign) and a bamboo jetty into a pond; `open` is
  // ground the game keeps trees off
  M.props = [
    { k: "bench", p: [[154.6, 31.6], [156.4, 33.2]] },
    { k: "fence", p: [[157.5, 33.4], [150, 34.5], [145.2, 40]] },
    { k: "posts", p: [[164.6, 32.4], [169.6, 32.4]] },
    { k: "well", at: [173.5, 31.4] },
    { k: "dirt", p: [[163.6, 28.6], [170.6, 28.6], [169.4, 34.3], [164.8, 34.3]] },
    // the open drain along the north side of that concrete lane, lined with low brick walls
    { k: "drain", p: [[30.3, 64.3], [14.1, 54.3]] },
    // the concrete lane off the road along Sufan Palace's north side (the third street photo): a concrete apron at the
    // road, red earth on to a brick compound wall with logs piled at its foot, a bit of bamboo fence and bamboo on the right
    { k: "slab", p: [[135.4, 31.8], [128, 31.9], [128, 34.7], [135.2, 34.6]] },
    { k: "dirt", p: [[128, 31.9], [112.4, 32.2], [112.4, 34.6], [128, 34.7]] },
    { k: "wall", p: [[112, 26.5], [112, 40]], h: 2.1 },
    { k: "logs", p: [[112.7, 30.6], [112.7, 35.4]] },
    { k: "fence", p: [[127.5, 31.2], [119.5, 31.4]] },
    { k: "bamboo", at: [130.6, 29] }, { k: "bamboo", at: [123.8, 29.2] }, { k: "bamboo", at: [116.6, 29.6] }
  ];
  // the walled house's grounds: its boundary wall (pale blue below, a pierced jali band on top along the front), the
  // white gate in front of the veranda, the opening in front of the garage, and papaya trees in the yard
  M.props.push(
    { k: "bwall", p: [[31.8, 95.6], [31.8, 88], [46.5, 88]], jali: 9 },
    { k: "bwall", p: [[46.5, 88], [46.5, 106.5], [31.8, 106.5], [31.8, 103.3]] },
    { k: "bwall", p: [[31.8, 98.4], [31.8, 99.3]], jali: 1 },
    { k: "gate", p: [[31.8, 95.6], [31.8, 98.4]] },
    { k: "papaya", at: [32.4, 92.2] }, { k: "papaya", at: [32.5, 94.6] }, { k: "papaya", at: [46, 105.6] },
    // the cream house's grounds: a cream wall with a pink foot along the lane and round the south side, the gate under
    // its red tin roof at the north end of the lane wall, barbed wire on bamboo posts along the north and east, and a
    // haystack and rice drying on a sheet outside the south wall
    { k: "bwall", p: [[21.24, 158.1], [19.16, 170.7], [33.8, 170.7]], col: "#e6dca6", base: "#cf5f7c" },
    { k: "tingate", p: [[21.7, 155.3], [21.24, 158.1]] },
    { k: "wire", p: [[21.7, 155.3], [35, 155.3], [35, 170.7], [33.8, 170.7]] },
    { k: "hay", at: [37, 173.4] }, { k: "sheet", p: [[24.6, 171.4], [27.4, 171.4], [27.4, 173.2], [24.6, 173.2]] },
    // by the tin-roofed house: a concrete tank lid heaped with bricks against its lane wall, and an electric pole
    { k: "tank", p: [[16.8, 180.3], [18.1, 180.3], [18.1, 182.7], [16.8, 182.7]] }, { k: "epole", at: [16.3, 184.1] },
    // where the lane meets the road (street photos at 24.834345, 91.952744): a fence of old tin sheets on wooden legs
    // round a plot of areca palms, a gap for a gate in its lane side, a pole at its south-east corner
    // round Vhaiyar Dukan: the building site's low bare-brick walls (open on the road side) and its heaps of sand, the
    // electric poles at the junction, and the school's yellow signboard on the lane's east edge, seen from both the junction
    // and the panorama south of the office (it hangs about halfway between them)
    { k: "wall", h: 1.3, p: [[58.5, 68.1], [54.8, 67.6], [54.8, 57.8], [63.5, 57.8]] },
    { k: "wall", h: 1.3, p: [[64.5, 69], [72.4, 70.2], [72.2, 63.6]] },
    { k: "hay", at: [60.2, 64.2], col: "#c8b07e", s: .8 }, { k: "hay", at: [57.6, 60.6], col: "#b9a57c", s: .6 },
    { k: "epole", at: [47.5, 76.8] }, { k: "epole", at: [28, 71.2] },
    { k: "sign", p: [[35.5, 77.4], [37.7, 78.4]], text: ["প্রভাতী বিদ্যানিকেতন", "ভর্তি চলছে"] },
    // south of the bare-brick house (the Street View panorama at 24.835849, 91.952999, Dec 2022): a bamboo trellis for
    // gourds over a muddy patch, and a triangular road sign at its corner on the lane, facing the junction
    { k: "macha", p: [[21.6, 86.6], [19.8, 97.5], [9.5, 96.5], [10.5, 85.5]] },
    { k: "rsign", at: [22.1, 86.1], face: [34, 69.7] },
    { k: "jetty", p: [[275.6, 177.1], [283.2, 177.1]] },
    // across the road from Sufan Palace, after the Street View panoramas at 24.836198, 91.954074 and 24.836025, 91.954051
    // (Dec 2022): a bare-brick wall with square pillars round the plot south of the bamboo fence, a brick-paved path east
    // beside it with a pole at its mouth, then the compound with the roofed green gate: a cream wall up to the gate, and
    // south of it a wall of white and green tiles with a pierced band on top, bending away from the road. Bamboo stands
    // thick along the west side of the road south of the Palace, behind a bamboo fence
    { k: "wall", h: 1.7, p: [[145.2, 40], [144.6, 54.2], [162, 54.2]] },
    { k: "dirt", p: [[143.4, 54.5], [166, 54.5], [166, 56.6], [143.4, 56.6]] }, { k: "epole", at: [143.6, 57.3] },
    { k: "bwall", col: "#ece4c8", p: [[162, 56.9], [144.2, 56.9], [144.2, 59.8]] },
    { k: "roofgate", p: [[144.2, 59.8], [144.2, 62.8]] },
    { k: "bwall", col: "#e9ede6", base: "#2f7a5a", jali: 14, p: [[144.2, 62.8], [144.2, 70.5], [150, 76.5]] },
    { k: "fence", p: [[133.2, 49], [132.5, 76.4]] },
    { k: "bamboo", at: [130.5, 58] }, { k: "bamboo", at: [129.5, 64] }, { k: "bamboo", at: [131, 70] }, { k: "bamboo", at: [128.5, 76] },
    // from the bend north-east of the Palace (Street View at 24.836340, 91.954102): bamboo fence posts on the east side of
    // the road going south, a creeper smothering the bamboo fence at the corner, a bamboo clump over a heap of cut logs
    // inside it, and the electric poles on the west side of the road going north
    { k: "fence", p: [[145.8, 34.4], [145.2, 40]] },
    { k: "creeper", p: [[150, 34.5], [154.8, 33.8]] },
    { k: "bamboo", at: [148, 38.2] }, { k: "logs", p: [[148.2, 40.2], [150.6, 39.4]] },
    { k: "epole", at: [150.3, 12] }, { k: "epole", at: [150.4, -4] },
    // round Mamur Dukan's junction (Street View at 24.835934, 91.954038 and west along the lane at 24.835952, 91.953793):
    // the road north crosses the drain on a little culvert with red-and-white parapets, a yellow arrow sign by the east one
    // and a tall pole; a gourd trellis in the plot on the north-east corner; the drain runs on along the north side of the
    // lane under thick bamboo to the west, and banana plants stand on the south side west of the grey wall
    { k: "parapet", p: [[132.2, 77], [132.2, 80.1]] }, { k: "parapet", p: [[142.1, 78.4], [142.1, 81.4]] },
    { k: "ysign", at: [142.6, 81.5], face: [137, 85.2] }, { k: "epole", at: [142.5, 77.4] },
    { k: "macha", p: [[143.2, 76.9], [149.6, 77.6], [149.4, 80.2], [143.1, 79.9]] },
    { k: "drain", p: [[97, 74.4], [131.3, 79.4]] }, { k: "drain", p: [[143.4, 81.1], [150.5, 82.1]] },
    { k: "bamboo", at: [98, 72.8] }, { k: "bamboo", at: [103, 73.3] }, { k: "bamboo", at: [108, 74.2] },
    { k: "bamboo", at: [113, 74.8] }, { k: "bamboo", at: [118, 75.6] }, { k: "bamboo", at: [123, 76.3] },
    { k: "banana", at: [[114, 88.4], [117, 89], [120, 89.6], [115.5, 90.8], [118.8, 91.3]] },
    // round the primary school (the satellite, and Street View from the road at 24.836340, 91.954102 and 24.836863, 91.954271,
    // Dec 2022; the lanes to the school have none): the field wall runs on past its north-east corner round a narrow strip,
    // and by the path near the road a concrete drain, a bamboo clump and a sheet of rice drying on the stubble
    { k: "bwall", col: "#e4e1d6", p: [[122, -18.9], [127.5, -18.9], [127.5, -10.8]] },
    { k: "drain", p: [[136.2, 18.6], [141.2, 23.1]] }, { k: "bamboo", at: [139.2, 16.8] },
    { k: "sheet", p: [[134, 13.8], [137.2, 13.8], [137.2, 15.6], [134, 15.6]] },
    { k: "tinfence", p: [[-9, 241.6], [-8, 233], [0.5, 233], [-0.1, 237.2]] },
    { k: "tinfence", p: [[-0.3, 239.4], [-0.6, 243], [-9, 241.6]] },
    { k: "epole", at: [-2.4, 243.9] },
    { k: "areca", at: [[-1.8, 234.6], [-4.2, 234.2], [-6.6, 235.4], [-2.6, 237.6], [-5.2, 238], [-7.4, 239.2], [-2.2, 241.2], [-4.6, 240.8], [-6.8, 241.4]] }
  );
  M.open = [[[150, 27.5], [195, 27.5], [195, 34.4], [150, 34.4]], [[112.4, 27], [135, 27], [135, 35.2], [112.4, 35.2]],
            [[31.6, 87.8], [46.7, 87.8], [46.7, 106.7], [31.6, 106.7]],
            [[21.2, 155], [35.2, 155], [35.2, 178], [24, 178], [18.9, 171]],
            [[15.8, 179.5], [18.3, 179.5], [18.3, 185.1], [15.8, 185.1]], [[34.2, 171], [40, 171], [40, 176], [34.2, 176]], [[-9.4, 232.6], [0.9, 232.6], [-0.2, 243.4], [-9.4, 242]],
            [[22.2, 85.7], [20.4, 98.3], [8.7, 97.3], [9.8, 84.6]], [[143.4, 53.8], [166, 53.8], [166, 57.2], [143.4, 57.2]]];
  // the school's grounds: the white-walled playing field in front (yard; edge `gate` is the open corner where the path
  // leaves), the flag pole, and two haystacks out by the paddy
  M.school = {
    at: [79.8, -6.5],
    yard: [[85.5, -18.9], [122, -18.9], [122, -2.5], [111, -2.5], [105, 4.6], [85.3, 4.6]], gate: 3,
    flag: [90.5, -12.5],
    hay: [[127, 2], [130, 4.6]]
  };
  // the lane north-west from the junction by Sufan Bikash Ghor (street photos taken at 24.835951, 91.952983, looking west):
  // a strip of concrete about 3 m wide with grass either side, as far as the next junction. Road 27 is split there so only
  // that stretch is concrete; the game keeps the road's full width for driving and draws only `concrete` meters each
  // side of the line as concrete
  {
    const r = M.roads[27], at = (x, y) => r.p.findIndex(q => q[0] === x && q[1] === y), a = at(-40.9, 28.5), b = at(34, 69.7);
    M.roads[27] = { k: r.k, p: r.p.slice(0, a + 1) };
    M.roads.push({ k: r.k, p: r.p.slice(a, b + 1), concrete: 1.5 }, { k: r.k, p: r.p.slice(b) });
  }
  // the footpath from the field's corner across the paddy to the road (2 m wide each side of the line)
  M.roads.push({ k: "track", p: [[108, 1], [120, 11], [134, 20.8], [142.6, 28.6]] });
  // paddy around the school (north of it and east of the field) and round the walled house; the games draw them and
  // keep trees off them
  M.fields = [
    [[45, -19.5], [145, -19.5], [145, -60], [45, -60]],
    [[131, -19], [145, -19], [145, 18], [134, 18], [131, 10]],
    // round the walled house south of the office: north of it up to the road, east of it, and south of it
    [[36, 77.5], [62, 79.8], [62, 112], [29.5, 112], [29.5, 107.2], [47.2, 107.2], [47.2, 87.4], [34.8, 87.4]]
  ];
  // thick village woods around the office (the satellite is mostly treetops here); the games plant extra trees inside
  // these, skipping roads, houses, ponds and the open ground in front of the office. The paddy fields east of the
  // lane, south of the road, are left open on purpose.
  M.groves = [
    [[-56, 22], [9, 55], [22, 64], [24, 77], [17, 128], [-56, 130]],    // west of the office, round the three ponds
    [[-45, -15], [52, -15], [52, 10], [24, 30], [8, 50], [-40, 26]],    // north, up to the second pond
    [[28, 106], [62, 110], [100, 126], [100, 178], [22, 178]],          // south of the house across the lane
    [[80, 100], [136, 96], [136, 178], [102, 178]],                     // south-east, past the east pond
    [[60, 13], [106, 12], [122, 24], [118, 48], [60, 48]],              // behind the school, to the south
    [[108, 2], [111, -1.5], [123, -1.5], [130.5, -5], [131, 7], [120, 6.5]], // the trees off the field's open south-east corner (satellite)
    [[214, 102], [249, 102], [249, 136], [284, 136], [290, 128], [306, 150], [306, 225], [228, 225], [214, 170]] // round the mosque's yard and the long pond
  ];
})(window.KOTALPUR);
