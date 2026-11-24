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
    [[53.7, 67.8], [70.3, 70.3], [72.1, 57.9], [55.6, 55.4]],   // flat-roofed house east of Vhaiyar Dukan, set along the road
    [[22, 45.5], [32, 45.5], [32, 50.5], [22, 50.5]],           // the white tin-roofed house on the north pond's bank
    [[-20.5, 2.5], [-9.5, 2.5], [-9.5, 16], [-20.5, 16]],       // Ujan Vati Stur, up the lane to the north
    [[24.5, 71], [27, 71], [27, 73.4], [24.5, 73.4]]            // the little tin shed between Sufan Bikash Ghor and the lane
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
    [[99.7, 87.6], [110.4, 86.4], [113.9, 91.7], [112.2, 98.8], [103.3, 100.6], [98, 96.5]]
  );
  // how the houses near the office really look from above (one storey, mostly tin); the games override their random
  // height and roof for the building that contains `at`
  M.looks = [
    { at: [26.5, 48], h: 3.3, tin: true, roof: "#c4c9cc" },   // the white tin house on the north pond
    { at: [46.5, 45.4], h: 3.4, tin: true, roof: "#8a3a2c" }, // the long red-tin building behind Vhaiyar Dukan
    { at: [63, 63], h: 3.4, tin: false, roof: "#d6ccb6" },    // the flat-roofed house east of Vhaiyar Dukan
    { at: [-15, 9], h: 3.3, tin: true, roof: "#7c4b3a" },     // Ujan Vati Stur, rusty tin
    { at: [79.2, 9], h: 2.7, tin: true, roof: "#8e989e" },    // the school's wash block
    // across the road from Sufan Palace, after the street photos: the yellow house (red trim along the roof, red sunshades
    // over the windows, a black tank and a stair room on the flat roof), the brown-tin house beside it, and the corner shop:
    // white walls, green tin, open to the road and hung with chips. Optional fields: wall colour, trim colour, tank and
    // stair at a point, shop (open front toward the nearest road)
    { at: [166, 40], h: 3.3, tin: false, roof: "#c9c4b8", wall: "#e6d47a", trim: "#a8432e", tank: [173, 43], stair: [167.5, 42] },
    { at: [186, 40], h: 3.4, tin: true, roof: "#6e4636" },
    { at: [160.6, 31], h: 2.6, tin: true, roof: "#4f9e86", wall: "#efece0", shop: true },
    { at: [25.7, 72.2], h: 2.3, tin: true, roof: "#7a5a44", wall: "#b9b2a2" }   // the tin shed by Sufan Bikash Ghor
  ];
  // small things on the ground the game draws: benches, bamboo fences, a concrete gate frame, a brick ring well, patches
  // of red earth (dirt) and concrete (slab), a brick-lined drain, brick walls, boundary walls (bwall; `jali` is how many
  // meters from the start carry the pierced band, `col` and `base` recolour it), metal gates (gate, and tingate under a
  // tin roof), barbed wire, a haystack, a drying sheet, a brick-heaped tank lid, electric poles, a tin-sheet fence,
  // areca palms, papaya trees, a log pile and bamboo clumps; `open` is
  // ground the game keeps trees off
  M.props = [
    { k: "bench", p: [[154.6, 31.6], [156.4, 33.2]] },
    { k: "fence", p: [[157.5, 33.4], [150, 34.5], [146.8, 40], [146.5, 52]] },
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
    { k: "tinfence", p: [[-9, 241.6], [-8, 233], [0.5, 233], [-0.1, 237.2]] },
    { k: "tinfence", p: [[-0.3, 239.4], [-0.6, 243], [-9, 241.6]] },
    { k: "epole", at: [-2.4, 243.9] },
    { k: "areca", at: [[-1.8, 234.6], [-4.2, 234.2], [-6.6, 235.4], [-2.6, 237.6], [-5.2, 238], [-7.4, 239.2], [-2.2, 241.2], [-4.6, 240.8], [-6.8, 241.4]] }
  );
  M.open = [[[150, 27.5], [195, 27.5], [195, 34.4], [150, 34.4]], [[112.4, 27], [135, 27], [135, 35.2], [112.4, 35.2]],
            [[31.6, 87.8], [46.7, 87.8], [46.7, 106.7], [31.6, 106.7]],
            [[21.2, 155], [35.2, 155], [35.2, 178], [24, 178], [18.9, 171]],
            [[15.8, 179.5], [18.3, 179.5], [18.3, 185.1], [15.8, 185.1]], [[34.2, 171], [40, 171], [40, 176], [34.2, 176]], [[-9.4, 232.6], [0.9, 232.6], [-0.2, 243.4], [-9.4, 242]]];
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
    [[124, -19], [145, -19], [145, 18], [134, 18], [124, 9]],
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
    [[60, 13], [106, 12], [122, 24], [118, 48], [60, 48]]               // behind the school, to the south
  ];
})(window.KOTALPUR);
