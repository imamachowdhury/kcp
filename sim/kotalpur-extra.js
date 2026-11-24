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
    [[23.55, 68.65], [26.05, 68.65], [26.05, 71.05], [23.55, 71.05]], // the little tin shed on the junction corner, against Sufan Bikash Ghor's north wall
    [[255.5, -423], [274, -423], [274, -414.5], [255.5, -414.5]], // Helimia Government Primary School, red tin over cream walls
    [[370.2, -391.1], [374, -389.2], [371.8, -384.7], [368, -386.6]], // east of the Eidgah lane on road 17: the green-shuttered shop
    [[361.6, -395.2], [365.9, -393.2], [363.9, -389.1], [359.7, -391.2]] // and the rusty tin-and-plank shed across the footpath
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
    // Atharia High School and College: cream two-storey blocks with maroon pillars round the field, the old one by the
    // road under dark tin; and Helimia school's red tin
    { at: [183, -420], h: 6.6, tin: false, roof: "#c9c4b8", wall: "#e8d48a", trim: "#7a2e2a" },
    { at: [219, -398], h: 6.6, tin: false, roof: "#c9c4b8", wall: "#e8d48a", trim: "#7a2e2a" },
    { at: [246, -431], h: 6.8, tin: true, roof: "#6d625a", wall: "#e9dcb0" },
    { at: [265, -418.7], h: 3.4, tin: true, roof: "#b5474a", wall: "#efe3c0" },
    { at: [371, -387.9], h: 2.7, tin: true, roof: "#8a6b52", wall: "#4f8f86", shop: true },
    { at: [362.8, -392.2], h: 2.6, tin: true, roof: "#7d5a44", wall: "#8a6a55" },
    { at: [173.3, 627.7], h: 3.4, tin: false, roof: "#bdbab0", wall: "#d5e2c2", tank: false }, // At-Tayeeba Jame Mosque
    { at: [741.6, -196.8], h: 2.9, tin: true, roof: "#86705e", wall: "#cfc8b8" }, // Kadam gach tala's shop row
    { at: [650.1, -235.8], h: 3.3, tin: false, roof: "#9a9c98", wall: "#dfe4e2", stair: [652, -237] }, // the turquoise-shuttered house, a brick stair room on top
    { at: [465, -386], h: 7.4, tin: false, roof: "#cfccc4", wall: "#a8a397", stair: [461, -381] }, // Moskapur Jame Masjid, bare grey plaster
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
  // areca palms, papaya trees, a log pile, bamboo clumps, banana plants, a creeper over a fence, a red-and-white culvert parapet, a gourd trellis (macha), a triangular road sign (rsign), a yellow arrow sign (ysign), a school gate with its name board (archgate), a wall painted with folk art (mural), a row of lock-up shops with a name board (market), an old landmark tree on a brick platform (bigtree), steel rods out of a roof (rebar), a cloth banner strung over a lane (banner) and a bamboo jetty into a pond; `open` is
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
    // Atharia High School and College where the road north meets the Moskapur road (Street View at 24.840807, 91.955093,
    // Feb 2025): the blue gate with the school's name on its stepped board, between walls painted with folk art; and
    // east of it Helimia Government Primary School behind a maroon wall with white railings and a yellow-framed gate
    { k: "mural", p: [[197.4, -488.9], [205.4, -481.9], [214.3, -474.3], [223.9, -468.1], [231.4, -463.2]] },
    { k: "archgate", p: [[231.7, -463], [234.7, -461]], text: ["পড় তোমার প্রভুর নামে", "আতহারিয়া উচ্চ বিদ্যালয় ও কলেজ", "স্থাপিত : ১৯৪৩ খ্রিস্টাব্দ", "মচুকপুর, হেতিমগঞ্জ, গোলাপগঞ্জ, সিলেট"] },
    { k: "mural", seed: 92, p: [[235, -460.8], [243, -455.6], [252.6, -449.4], [255.6, -447.6]] },
    { k: "archgate", col: "#8a3a30", p: [[256.2, -447.3], [259.6, -445.2]], text: ["", "হিলিমিয়া সরকারি প্রাথমিক বিদ্যালয়", "", ""] },
    { k: "bwall", col: "#efe6cf", base: "#7a2f2a", jali: 20, p: [[260, -445], [263, -443.2], [273.4, -437.4], [276, -435.9]] },
    // Moskapur Jame Masjid's market on road 17, from Street View: a row of shutters under a white name board, the
    // mosque's name painted on its west end
    { k: "market", p: [[449.9, -364.2], [459.9, -359.5]], d: 5, open: 3, text: "মচুকপুর জামে মসজিদ মার্কেট", endText: "মচুকপুর জামে মসজিদ" },
    // further east on road 17: the house whose front on the road is all turquoise shutters, a brown barred gate in the second bay
    // Borhan Agro's gate on the south lane: white pillars, a wire-mesh gate into the trees
    { k: "gate", p: [[84.5, 375], [84.9, 379.4]] },
    // At-Tayeeba Jame Mosque on the south lane, from Street View: one storey of pale green plaster with steel rods standing
    // up from the roof over each column, and a stub of brick wall at the lane
    { k: "rebar", h: 3.4, p: [[168.4, 620.6], [168.4, 624.3], [168.4, 628], [168.4, 631.6], [168.4, 634.9], [178.2, 620.6], [178.2, 634.9]] },
    { k: "wall", h: .8, p: [[166.4, 636.5], [166.6, 641]] },
    // Kadam gach tala, the junction named after it: the old tree on its round brick platform, red at the foot, and the row of
    // shops down the lane under one rusty tin roof, green plank shutters behind a verandah
    { k: "bigtree", at: [731, -211] },
    { k: "market", p: [[739.69, -210.04], [732.29, -187.24]], d: .2, n: 7, h: 2.9, roof: false, band: "", shutter: "#3f7a52", upper: "#cfc8b8", lower: "#b9b0a0", awning: "#7c6656" },
    { k: "market", p: [[658.95, -240.31], [646.95, -245.21]], d: .2, n: 5, gate: 1, roof: false, awning: false, band: "", shutter: "#4fbfa9", upper: "#dfe4e2", lower: "#d3d9d7" },
    { k: "tinfence", p: [[-9, 241.6], [-8, 233], [0.5, 233], [-0.1, 237.2]] },
    { k: "tinfence", p: [[-0.3, 239.4], [-0.6, 243], [-9, 241.6]] },
    { k: "epole", at: [-2.4, 243.9] },
    { k: "areca", at: [[-1.8, 234.6], [-4.2, 234.2], [-6.6, 235.4], [-2.6, 237.6], [-5.2, 238], [-7.4, 239.2], [-2.2, 241.2], [-4.6, 240.8], [-6.8, 241.4]] }
  );
  M.open = [[[150, 27.5], [195, 27.5], [195, 34.4], [150, 34.4]], [[112.4, 27], [135, 27], [135, 35.2], [112.4, 35.2]],
            [[31.6, 87.8], [46.7, 87.8], [46.7, 106.7], [31.6, 106.7]],
            [[21.2, 155], [35.2, 155], [35.2, 178], [24, 178], [18.9, 171]],
            [[15.8, 179.5], [18.3, 179.5], [18.3, 185.1], [15.8, 185.1]], [[34.2, 171], [40, 171], [40, 176], [34.2, 176]], [[-9.4, 232.6], [0.9, 232.6], [-0.2, 243.4], [-9.4, 242]],
            [[22.2, 85.7], [20.4, 98.3], [8.7, 97.3], [9.8, 84.6]], [[143.4, 53.8], [166, 53.8], [166, 57.2], [143.4, 57.2]],
            [[158, -484], [196, -484], [212, -471], [230, -465], [232, -432], [196, -430], [158, -434]]]; // Atharia college's field
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
  // the path from the Moskapur road through Atharia college's gate into its grounds
  M.roads[9] = { k: "track", p: M.roads[9].p };
  // the footpath from the field's corner across the paddy to the road (2 m wide each side of the line)
  M.roads.push({ k: "track", p: [[108, 1], [120, 11], [134, 20.8], [142.6, 28.6]] });
  // the lane up past Moskapur Jame Masjid's west wall, off road 17 (from the satellite and Street View)
  M.roads.push({ k: "track", p: [[445.5, -360.3], [447, -375], [450, -400], [452, -418]] });
  // paddy around the school (north of it and east of the field) and round the walled house; the games draw them and
  // keep trees off them
  M.fields = [
    [[45, -19.5], [145, -19.5], [145, -60], [45, -60]],
    [[131, -19], [145, -19], [145, 18], [134, 18], [131, 10]],
    // round the walled house south of the office: north of it up to the road, east of it, and south of it
    [[36, 77.5], [62, 79.8], [62, 112], [29.5, 112], [29.5, 107.2], [47.2, 107.2], [47.2, 87.4], [34.8, 87.4]],
    // both sides of the road north to Atharia (the satellite, and Street View along it, Dec 2022): open paddy almost all
    // the way, broken by a few wooded homesteads, the cleared lot east of the road and the trees round Moskapur
    [[0, -172], [95, -172], [95, -140], [137.5, -138.8], [139, -127.2], [140.4, -115.4], [141.8, -103.6], [143.2, -91.7], [144.5, -80.2], [145.4, -68.4], [146, -60.5], [0, -60]],
    [[0, -230], [98, -230], [98, -245], [131.6, -243.7], [131.8, -232.1], [132, -220.5], [132.1, -208.9], [132.7, -196.9], [133.5, -185.4], [134.3, -173.9], [0, -172]],
    [[112, -257], [131.3, -267.2], [131.4, -259.3], [112, -269]],
    [[0, -383], [134.2, -383.1], [132.9, -371.4], [132.3, -359.9], [131.7, -348.3], [131.1, -336.8], [130.4, -325.3], [129.8, -313.2], [130.2, -301.6], [130.6, -290.1], [130.9, -278.6], [131.2, -270.9], [0, -269]],
    [[0, -455], [142.5, -452.8], [141, -441], [139.6, -429.2], [138.1, -417.4], [136.6, -405.4], [135.8, -398], [0, -395]],
    [[155.7, -105.2], [157.1, -93.4], [158.5, -81.2], [159.4, -69.4], [160, -61.5], [320, -60], [320, -105]],
    [[180, -140], [320, -140], [320, -105], [180, -105]],
    [[145.9, -224.5], [146.1, -212.9], [146.4, -201.7], [147.2, -190.2], [148, -178.7], [148.8, -167.2], [149.6, -155.6], [150.9, -144.5], [183, -140], [183, -227]],
    [[254, -222], [320, -222], [320, -132], [254, -132]],
    [[147.7, -377.7], [146.7, -366.8], [146.1, -355.3], [145.4, -343.7], [144.8, -332.2], [144.2, -320.7], [143.9, -309.8], [144.3, -298.3], [144.7, -286.7], [145, -275.2], [145.3, -263.4], [145.5, -251.6], [145.7, -240], [145.8, -228.4], [244, -227], [244, -380]],
    // and north of road 17 east of Kadam gach tala, open paddy up to the village (satellite and Street View)
    [[770, -212], [800, -199], [838, -185], [877, -177], [916, -170], [956, -163], [995, -157], [995, -300], [850, -300], [830, -265], [790, -262], [770, -240]],
    // the whole way from Sufan Bikash Ghor down the south lane to At-Tayeeba Jame Mosque, traced off the satellite (three
    // tiles at zoom 20, lined up on the game's roads) and checked against Street View: the paddy plots and vegetable beds
    [[25.1, 112.5], [97.9, 112.5], [97.8, 138.7], [22, 138.5]],
    [[-8.6, 101.7], [10.5, 101.8], [8.9, 140.4], [-10.1, 140.5]],
    [[-36.6, 190.9], [-7.4, 189.2], [-6.4, 207.8], [0, 224], [-3, 227.5], [-35.9, 218.7]],
    [[25.3, 211.4], [54, 208.4], [57.2, 198.2], [99.1, 198.3], [101.3, 244.5], [11, 243], [11, 239.8], [27.1, 237.5]],
    [[-38.9, 257.6], [49.9, 256.1], [51, 294.5], [-38.6, 294]],
    [[92.1, 307.1], [110.8, 307.1], [110.3, 361.2], [93.5, 359.3]],
    [[89.7, 405.9], [155.4, 402.1], [155.7, 444.8], [103.5, 446.7], [92.8, 468.9]],
    [[97.4, 479.1], [156, 479.1], [156, 500.5], [98.3, 501]],
    [[16.9, 284.7], [61.4, 284.7], [60.9, 301.5], [62, 329.5], [66.6, 346.3], [66.4, 368.6], [63.4, 385.4], [64.5, 405.9], [71.4, 407.8], [74.2, 443.1], [82.4, 478.2], [89, 502], [17.1, 502.5]],
    [[56.9, 510.4], [71.8, 508.3], [100.6, 506.9], [127.6, 501], [133.2, 500.4], [135.9, 511.6], [130, 531.6], [131.9, 551.8], [138.3, 570.5], [150.7, 569.6], [155.3, 602.2], [152, 630], [140, 646], [128, 651], [57.7, 665]],
    [[57.7, 679], [126, 663], [128, 703.5], [57.6, 703.7]],
    [[162.5, 559.3], [198.4, 559.3], [198.5, 600.2], [169.8, 602.2]],
    [[103.1, 484.6], [130.2, 483.2], [129.5, 500.2], [103.4, 504.4]]
  ];
  // along that same way every tree is placed from the satellite: inside M.exact the game's scattered and grove trees are
  // dropped, and only M.woods (the stands of trees, filled ~one per 32 m²) and M.trees (single trees) stand
  M.exact = [[[-130, 99], [-40, 99], [-40, 88], [100, 88], [100, 240], [150, 240], [150, 475], [195, 475], [195, 700], [55, 700], [55, 515], [15, 515], [15, 295], [-37, 295], [-37, 330], [-130, 330]]];
  M.woods = [
    [[9.5, 83.3], [24.2, 87.2], [21.5, 120.2], [18.2, 142.2], [9.1, 142.3], [10.3, 111], [8.9, 98.1]],
    [[-40.8, 142.4], [18.2, 142.2], [14.3, 168.3], [11.2, 191.1], [8.7, 206.2], [-6.5, 206], [-7.5, 187.3], [-40.3, 187.1]],
    [[-39.5, 222.4], [1.5, 228.5], [6.1, 232.3], [7.4, 249.7], [-39, 252]],
    [[19.9, 140.4], [97.8, 140.6], [98.3, 175.9], [77.4, 177.8], [54.4, 183.4], [53.9, 207.5], [23.3, 209.6], [10.5, 208.9], [11.3, 193], [14.3, 169.2], [18.2, 145]],
    [[9.6, 211.7], [23.5, 211.5], [26.6, 236.6], [9, 237.8]],
    [[72, 252.9], [101.4, 252.5], [101.4, 294.7], [72.9, 295]],
    [[80, 284.7], [111, 284.7], [110.8, 307.1], [92.1, 307.1], [93.6, 346.3], [80.5, 346.3]],
    [[111, 284.7], [155.5, 284.7], [155.4, 400.2], [125.3, 400.3], [110.3, 404], [82.2, 404.1], [80.5, 359.3], [93.5, 359.3], [110.3, 361.2]],
    [[103.5, 446.7], [155.7, 444.8], [156, 478.2], [95.6, 478.2], [92.8, 470.7]],
    [[79, 479.5], [101.3, 479.4], [99.7, 506.9], [84.8, 508.8], [79.1, 495.4]],
    [[101.3, 474], [134.2, 473.8], [133.9, 483.3], [101.3, 484.7]],
    [[134.2, 473.8], [196.7, 473.8], [198.1, 548.2], [161.9, 548.2], [153, 535.4], [141.6, 535.4], [137.8, 504.5]],
    [[152.8, 561.1], [162.5, 561.2], [169.7, 604.1], [160, 604.1]],
    [[165.4, 602.2], [198.5, 600.2], [196.9, 652.1], [158.4, 649.4]],
    [[136.5, 651.9], [196.9, 652.1], [196.9, 703.5], [142.7, 703.5], [137.3, 664.9]],
    // the wood west of the paddy at the first bend (Street View looking west from 24.83467, 91.95279: a solid line of
    // trees past the stubble, a red tin roof showing through), with two cleared house yards in it (M.open below)
    [[-127.1, 99.8], [-37, 99.8], [-37, 248.9], [-127.1, 248.9]]
  ];
  M.open.push([[-106.9, 183.7], [-66.5, 183.7], [-66.5, 231.8], [-106.9, 231.8]], [[-106.9, 121.6], [-69.6, 121.6], [-69.6, 146.4], [-106.9, 146.4]]);
  M.fields.push([[-127.1, 249.5], [-37, 251.4], [-37, 330], [-127.1, 330]]); // and the paddy south of that wood
  M.looks.push({ at: [-91.4, 221.9], h: 3, tin: true, roof: "#9b3b2e", wall: "#d9cfb8" }, { at: [-92.9, 208.8], h: 3.2, tin: false, roof: "#cfc8b5", wall: "#e3dccb", tank: false });
  M.trees = [[181.6, 626.7, 3, "p"], [186.1, 620.7, 3, "p"]]; // the coconut palms by At-Tayeeba Jame Mosque
  // the lane south past Borhan Agro (Street View 24.83436..24.83210, 91.95336..91.95365): a single row of tall trees on
  // each edge, the paddy open behind them (only the west row north of the Borhan Agro gate, where the east side is walled)
  M.trees.push([0.5, 229, 6, "d"]); // the big tree over the first bend, seen from all along the straight
  M.trees.push(...[[91.2,498.1,3.4,"t"], [90.4,492.2,3.7,"t"], [89.6,486.7,4.1,"t"], [88.7,481,3.9,"t"], [88,474.7,3.5,"t"], [86.9,469.7,3.1,"t"], [85.9,463.8,4.3,"t"], [85.1,457.6,3.7,"t"], [84.2,452.9,3.9,"t"], [83,447.5,4.3,"t"], [81.8,441,4.2,"t"], [81.2,435,3.4,"t"], [80.6,429.6,4.3,"t"], [80.1,424.6,4.2,"t"], [79.1,418.3,3.8,"t"], [78.9,412.8,3.3,"t"], [78.5,406.6,3.5,"t"], [77.5,401.9,4.3,"t"], [77,395.5,3.6,"t"], [76.2,389.9,3.6,"t"], [75.7,384.3,3.9,"t"], [75,379.1,5.5,"t"], [74.6,373.2,5.5,"t"], [74.1,367.3,3.7,"t"], [73.4,361.7,4.3,"t"], [72.7,356.1,3.4,"t"], [72.3,349.9,3.5,"t"], [71.5,344.9,4.2,"t"], [70.7,339.3,3.1,"t"], [70.3,332.6,3.1,"t"], [70.2,327.1,3.9,"t"], [68.9,321.8,3.8,"t"], [68.3,316.8,4.2,"t"], [68.4,311.1,4.3,"t"], [67.8,304.6,3,"t"], [67.1,298.8,3,"t"], [67.1,293.6,4,"t"], [66.7,288.9,3.3,"t"], [66.8,282.8,3.5,"t"], [66.6,277.1,3.7,"t"], [65.7,272.8,3.9,"t"], [66.4,266,4.3,"t"], [65.8,261.9,3.8,"t"], [98.4,496,3.3,"t"], [97.1,490.8,3.1,"t"], [96.6,485.4,4,"t"], [95.4,478.8,3.2,"t"], [94.7,473.3,4,"t"], [93.8,467.6,4.2,"t"], [92.8,463.4,4.3,"t"], [91.8,457,3.3,"t"], [90.8,452.1,3.6,"t"], [89.4,445.8,4.2,"t"], [88.7,440.2,3.9,"t"], [88.3,434.6,4,"t"], [87.4,428.7,3.4,"t"], [87.2,424.3,3.9,"t"], [86.5,418.5,3.3,"t"], [85.7,411.7,3.7,"t"], [85,407,4.3,"t"], [84.4,400.5,3.6,"t"], [83.2,389.6,4.1,"t"], [82.5,384.1,3,"t"]]);
  // and on south past the culvert to At-Tayeeba Jame Mosque (Street View 24.83202..24.83113, 91.95408..91.95431): the
  // two rows go on, the paddy open to the west, a grove behind the east row
  M.trees.push(...[[159.3,622.3,3.2,"t"], [158.2,617.2,3.3,"t"], [157.3,610.9,3.4,"t"], [156.1,605.9,3.7,"t"], [155,601.5,3.6,"t"], [154.1,595.7,2.9,"t"], [152.5,590.5,3.6,"t"], [151.5,584.3,3.1,"t"], [150.2,578.9,2.8,"t"], [148.9,572.8,3.7,"t"], [147.5,566.7,4,"t"], [146.6,560.5,3.6,"t"], [145.6,555,4,"t"], [143.8,549.9,3.9,"t"], [143.1,543.5,3,"t"], [141.7,538.7,3.8,"t"], [140.6,532.7,3.4,"t"], [138.9,526.6,2.8,"t"], [138.1,521.1,3.3,"t"], [162.1,599.5,3.7,"t"], [160.9,594.5,3.7,"t"], [159.4,589.1,3.4,"t"], [158.4,583.6,3.4,"t"], [157.1,577.1,3.1,"t"], [155.4,570.6,3.9,"t"], [154.2,565.3,3.5,"t"], [153.1,559.7,2.9,"t"], [151.8,553.4,3.5,"t"], [150.7,548.7,2.9,"t"], [149.7,543,3.8,"t"], [148.2,536.3,3.9,"t"], [147,530.7,3.2,"t"]]);
  M.open.push([[144, 513.9], [149.8, 512.6], [152.9, 527.3], [147.1, 528.5]]); // the gourd trellis yard by the culvert
  M.props.push(
    // the grey cement wall hard on the east edge from the bend, then set back behind a strip of paddy up to the gate
    // the straight east from the first bend (Street View 24.83441, 91.95314): bamboo post-and-rail fences round the
    // vegetable plots on both sides, a triangular road sign on the south edge facing east, a concrete pole on the north
    { k: "fence", p: [[14, 247.2], [36, 247.3], [60, 247.4]] },
    { k: "fence", p: [[12, 252.8], [30, 252.8], [50, 252.9]] },
    { k: "rsign", at: [36.7, 253.2], face: [60, 250] },
    { k: "epole", at: [64, 247.3] },
    { k: "bwall", col: "#c8c5bb", base: "#8f8c84", p: [[72.2, 257.5], [72.2, 268.5], [72.5, 279.3], [73.1, 290.1], [73.6, 300.9], [74.4, 311.8], [75.6, 323.1], [76.8, 334.4], [82.7, 345.2], [83.1, 348.9], [84.3, 360.2], [84.6, 374.8]] },
    // just round the bend south: a concrete electric pole on the east edge, the red-and-white culvert parapets, a bamboo
    // gourd trellis on the east side, and a faded white banner strung over the lane before the mosque
    { k: "epole", at: [142.8, 513.1] },
    { k: "parapet", p: [[143.2, 517.1], [143.6, 519.1]] },
    { k: "parapet", p: [[138.2, 518.1], [138.6, 520.1]] },
    { k: "macha", p: [[144, 513.9], [149.8, 512.6], [152.9, 527.3], [147.1, 528.5]] },
    { k: "banner", p: [[152.7, 575.8], [155.3, 575.2]], h: 4.3 }
  );
  // thick village woods around the office (the satellite is mostly treetops here); the games plant extra trees inside
  // these, skipping roads, houses, ponds and the open ground in front of the office. The paddy fields east of the
  // lane, south of the road, are left open on purpose.
  M.groves = [
    [[-56, 22], [9, 55], [22, 64], [24, 77], [17, 128], [-56, 130]],    // west of the office, round the three ponds
    [[-45, -15], [52, -15], [52, 10], [24, 30], [8, 50], [-40, 26]],    // north, up to the second pond
    [[28, 106], [62, 110], [100, 126], [100, 178], [22, 178]],          // south of the house across the lane
    [[80, 100], [136, 96], [136, 178], [102, 178]],                     // south-east, past the east pond
    [[60, 13], [106, 12], [122, 24], [118, 48], [60, 48]],              // behind the school, to the south
    [[108, 2], [111, -1.5], [123, -1.5], [130.5, -5], [131, 7], [120, 6.5]],
    [[22, -267], [125, -267], [125, -245], [98, -245], [98, -230], [22, -230]], [[97, -170], [133, -170], [133, -142], [97, -142]], // homesteads by the road north
    [[183, -227], [225, -227], [225, -180], [183, -180]], [[244, -387], [339, -387], [339, -222], [244, -222]],             // and east of it, round Moskapur // the trees off the field's open south-east corner (satellite)
    [[214, 102], [249, 102], [249, 136], [284, 136], [290, 128], [306, 150], [306, 225], [228, 225], [214, 170]] // round the mosque's yard and the long pond
  ];
})(window.KOTALPUR);
