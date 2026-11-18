ServerEvents.recipes((event) => {
    //Infinity Cell Extractor
    function cellExtractor(drive, item, time) {
        let cleanItemName = item.replace(/.*:/, "");
        event.recipes.custommachinery
            .custom_machine("techopolis:infinity_cell_extractor", time)
            .requireItem(drive)
            .chance(0.0)
            .requireItem(item)
            .chance(0.0)
            .produceItem(item)
            .id(`techopolis:infinity_cell_extractor/${cleanItemName}`);
    }

    cellExtractor(
        "extendedae:infinity_cobblestone_cell",
        "minecraft:cobblestone",
        100,
    );
    cellExtractor(
        "extendedae:infinity_cobblestone_cell",
        "compressedblocks:c0_cobblestone",
        200,
    );
    cellExtractor(
        "extendedae:infinity_cobblestone_cell",
        "compressedblocks:c1_cobblestone",
        200,
    );
    cellExtractor(
        "extendedae:infinity_cobblestone_cell",
        "compressedblocks:c2_cobblestone",
        300,
    );
    cellExtractor(
        "extendedae:infinity_cobblestone_cell",
        "compressedblocks:c3_cobblestone",
        400,
    );
    cellExtractor(
        "extendedae:infinity_cobblestone_cell",
        "compressedblocks:c4_cobblestone",
        500,
    );
    cellExtractor(
        "extendedae:infinity_cobblestone_cell",
        "compressedblocks:c5_cobblestone",
        600,
    );
    cellExtractor(
        "extendedae:infinity_cobblestone_cell",
        "compressedblocks:c6_cobblestone",
        700,
    );
    cellExtractor(
        "extendedae:infinity_cobblestone_cell",
        "compressedblocks:c7_cobblestone",
        800,
    );
    cellExtractor(
        "extendedae:infinity_cobblestone_cell",
        "compressedblocks:c8_cobblestone",
        900,
    );
    cellExtractor(
        "extendedae:infinity_cobblestone_cell",
        "compressedblocks:c9_cobblestone",
        1000,
    );

    cellExtractor("techopolis:sand_infinity_cell", "minecraft:sand", 100);
    cellExtractor(
        "techopolis:sand_infinity_cell",
        "compressedblocks:c0_sand",
        200,
    );
    cellExtractor(
        "techopolis:sand_infinity_cell",
        "compressedblocks:c1_sand",
        200,
    );
    cellExtractor(
        "techopolis:sand_infinity_cell",
        "compressedblocks:c2_sand",
        300,
    );
    cellExtractor(
        "techopolis:sand_infinity_cell",
        "compressedblocks:c3_sand",
        400,
    );
    cellExtractor(
        "techopolis:sand_infinity_cell",
        "compressedblocks:c4_sand",
        500,
    );
    cellExtractor(
        "techopolis:sand_infinity_cell",
        "compressedblocks:c5_sand",
        600,
    );
    cellExtractor(
        "techopolis:sand_infinity_cell",
        "compressedblocks:c6_sand",
        700,
    );
    cellExtractor(
        "techopolis:sand_infinity_cell",
        "compressedblocks:c7_sand",
        800,
    );
    cellExtractor(
        "techopolis:sand_infinity_cell",
        "compressedblocks:c8_sand",
        900,
    );
    cellExtractor(
        "techopolis:sand_infinity_cell",
        "compressedblocks:c9_sand",
        1000,
    );

    cellExtractor("techopolis:gravel_infinity_cell", "minecraft:gravel", 100);
    cellExtractor(
        "techopolis:gravel_infinity_cell",
        "compressedblocks:c0_gravel",
        200,
    );
    cellExtractor(
        "techopolis:gravel_infinity_cell",
        "compressedblocks:c1_gravel",
        200,
    );
    cellExtractor(
        "techopolis:gravel_infinity_cell",
        "compressedblocks:c2_gravel",
        300,
    );
    cellExtractor(
        "techopolis:gravel_infinity_cell",
        "compressedblocks:c3_gravel",
        400,
    );
    cellExtractor(
        "techopolis:gravel_infinity_cell",
        "compressedblocks:c4_gravel",
        500,
    );
    cellExtractor(
        "techopolis:gravel_infinity_cell",
        "compressedblocks:c5_gravel",
        600,
    );
    cellExtractor(
        "techopolis:gravel_infinity_cell",
        "compressedblocks:c6_gravel",
        700,
    );
    cellExtractor(
        "techopolis:gravel_infinity_cell",
        "compressedblocks:c7_gravel",
        800,
    );
    cellExtractor(
        "techopolis:gravel_infinity_cell",
        "compressedblocks:c8_gravel",
        900,
    );
    cellExtractor(
        "techopolis:gravel_infinity_cell",
        "compressedblocks:c9_gravel",
        1000,
    );

    cellExtractor("techopolis:clay_infinity_cell", "minecraft:clay", 100);
    cellExtractor(
        "techopolis:clay_infinity_cell",
        "compressedblocks:c0_clay",
        200,
    );
    cellExtractor(
        "techopolis:clay_infinity_cell",
        "compressedblocks:c1_clay",
        200,
    );
    cellExtractor(
        "techopolis:clay_infinity_cell",
        "compressedblocks:c2_clay",
        300,
    );
    cellExtractor(
        "techopolis:clay_infinity_cell",
        "compressedblocks:c3_clay",
        400,
    );
    cellExtractor(
        "techopolis:clay_infinity_cell",
        "compressedblocks:c4_clay",
        500,
    );
    cellExtractor(
        "techopolis:clay_infinity_cell",
        "compressedblocks:c5_clay",
        600,
    );
    cellExtractor(
        "techopolis:clay_infinity_cell",
        "compressedblocks:c6_clay",
        700,
    );
    cellExtractor(
        "techopolis:clay_infinity_cell",
        "compressedblocks:c7_clay",
        800,
    );
    cellExtractor(
        "techopolis:clay_infinity_cell",
        "compressedblocks:c8_clay",
        900,
    );
    cellExtractor(
        "techopolis:clay_infinity_cell",
        "compressedblocks:c9_clay",
        1000,
    );

    cellExtractor("techopolis:stone_infinity_cell", "minecraft:stone", 100);
    cellExtractor(
        "techopolis:stone_infinity_cell",
        "compressedblocks:c0_stone",
        200,
    );
    cellExtractor(
        "techopolis:stone_infinity_cell",
        "compressedblocks:c1_stone",
        200,
    );
    cellExtractor(
        "techopolis:stone_infinity_cell",
        "compressedblocks:c2_stone",
        300,
    );
    cellExtractor(
        "techopolis:stone_infinity_cell",
        "compressedblocks:c3_stone",
        400,
    );
    cellExtractor(
        "techopolis:stone_infinity_cell",
        "compressedblocks:c4_stone",
        500,
    );
    cellExtractor(
        "techopolis:stone_infinity_cell",
        "compressedblocks:c5_stone",
        600,
    );
    cellExtractor(
        "techopolis:stone_infinity_cell",
        "compressedblocks:c6_stone",
        700,
    );
    cellExtractor(
        "techopolis:stone_infinity_cell",
        "compressedblocks:c7_stone",
        800,
    );
    cellExtractor(
        "techopolis:stone_infinity_cell",
        "compressedblocks:c8_stone",
        900,
    );
    cellExtractor(
        "techopolis:stone_infinity_cell",
        "compressedblocks:c9_stone",
        1000,
    );

    //Weather Machine
    event.recipes.custommachinery
        .custom_machine("techopolis:weather_machine", 400)
        .requireEnergyPerTick(60000)
        .requireItem("techopolis:weather_module_clear")
        .runCommandOnEnd("/weather clear 1000000")
        .runCommandOnEnd("/say Weather Machine Activated - Changing Weather to Clear")
        .id("techopolis:weather_machine/clear");

    //Weather Machine
    event.recipes.custommachinery
        .custom_machine("techopolis:weather_machine", 400)
        .requireEnergyPerTick(60000)
        .requireItem("techopolis:weather_module_rain")
        .runCommandOnEnd("/weather rain 1000000")
        .runCommandOnEnd("/say Weather Machine Activated - Changing Weather to Rain")
        .id("techopolis:weather_machine/rain");

    //Weather Machine
    event.recipes.custommachinery
        .custom_machine("techopolis:weather_machine", 400)
        .requireEnergyPerTick(60000)
        .requireItem("techopolis:weather_module_thunder")
        .runCommandOnEnd("/weather thunder 1000000")
        .runCommandOnEnd("/say Weather Machine Activated - Changing Weather to Thunder")
        .id("techopolis:weather_machine/thunder");

    //Oil Pump
    event.recipes.custommachinery
        .custom_machine("techopolis:oil_pump", 400)
        .requireStructure(
            [
                [
                    "abbbbba",
                    "bbbbbbb",
                    "bbbbbbb",
                    "bbbbbbb",
                    "bbbbbbb",
                    "bbbbbbb",
                    "bbbbbbb",
                    "bbbbbbb",
                    "bbbbbbb",
                    "bbbbbbb",
                    "abbmbba",
                ],
                [
                    " d   d ",
                    "ded ded",
                    " d   d ",
                    "       ",
                    " d   d ",
                    "ded ded",
                    " d   d ",
                    "       ",
                    " d   d ",
                    "ded ded",
                    " d   d ",
                ],
                [
                    " d   d ",
                    "ded ded",
                    " d   d ",
                    "       ",
                    " d   d ",
                    "ded ded",
                    " d   d ",
                    "       ",
                    " d   d ",
                    "ded ded",
                    " d   d ",
                ],
                [
                    " d   d ",
                    "ded ded",
                    " d   d ",
                    "       ",
                    " d   d ",
                    "ded ded",
                    " d   d ",
                    "       ",
                    " d   d ",
                    "ded ded",
                    " d   d ",
                ],
                [
                    " d   d ",
                    "dfd dfd",
                    " d   d ",
                    "       ",
                    " d   d ",
                    "dfd dfd",
                    " d   d ",
                    "       ",
                    " d   d ",
                    "dfd dfd",
                    " d   d ",
                ],
                [
                    "       ",
                    " d   d ",
                    "       ",
                    "       ",
                    " d   d ",
                    "dgd dgd",
                    " d   d ",
                    "       ",
                    "       ",
                    " d   d ",
                    "       ",
                ],
                [
                    "       ",
                    " d   d ",
                    "       ",
                    "       ",
                    "       ",
                    " d   d ",
                    "       ",
                    "       ",
                    "       ",
                    " d   d ",
                    "       ",
                ],
                [
                    "       ",
                    " d   d ",
                    "       ",
                    "       ",
                    "       ",
                    " d   d ",
                    "       ",
                    "       ",
                    "       ",
                    " d   d ",
                    "       ",
                ],
                [
                    "       ",
                    "       ",
                    "       ",
                    "       ",
                    "       ",
                    " d   d ",
                    "       ",
                    "       ",
                    "       ",
                    "       ",
                    "       ",
                ],
            ],
            {
                a: "techopolis:dimensional_detector",
                b: "techopolis:multiblock_machine_casing",
                d: "techopolis:wooden_scaffolding",
                e: "minecraft:coal_block",
                f: "techopolis:purified_coal_block",
                g: "minecraft:netherite_block",
            },
        )
        .requireEnergyPerTick(10240)
        .dimensionWhitelist("minecraft:the_nether")
        .produceFluid("1000x techopolis:oil")
        .id("techopolis:oil_pump/oil");

    //Industrial Strainer
    event.recipes.custommachinery
        .custom_machine("techopolis:industrial_strainer", 400)
        .requireStructure(
            [
                ["aba", "b b", "ama"],
                ["b b", " c ", "b b"],
                ["b b", " c ", "b b"],
                ["aba", "b b", "aba"],
            ],
            {
                a: "techopolis:dimensional_detector",
                b: "techopolis:multiblock_machine_casing",
                c: "techopolis:multiblock_gearbox",
            },
        )
        .requireItem("#strainers:tier_6_meshes")
        .chance(0.0)
        .requireItem("stellaris:moon_stone_dust")
        .requireEnergyPerTick(5120)
        .dimensionWhitelist("stellaris:moon")
        .lootTableOutput("techopolis:industrial_strainer/moon_stone_dust")
        .id("techopolis:industrial_strainer/moon_stone_dust");

    //Moon Quarry
    event.recipes.custommachinery
        .custom_machine("techopolis:moon_quarry", 200)
        .requireStructure(
            [
                [
                    "abbbbbbbbbbbbba",
                    "bcccccccccccccb",
                    "bcccccccccccccb",
                    "bcccccccccccccb",
                    "bcccccccccccccb",
                    "bcccccccccccccb",
                    "bcccccccccccccb",
                    "bcccccccccccccb",
                    "bcccccccccccccb",
                    "bcccccccccccccb",
                    "abbbbbbmbbbbbba",
                ],
                [
                    " e           e ",
                    "ecefffffffffece",
                    " e           e ",
                    " f           f ",
                    " f           f ",
                    " f           f ",
                    " f           f ",
                    " f           f ",
                    " e           e ",
                    "ecefffffffffece",
                    " e           e ",
                ],
                [
                    " e           e ",
                    "ecefffffffffece",
                    " e           e ",
                    " f           f ",
                    " f           f ",
                    " f           f ",
                    " f           f ",
                    " f           f ",
                    " e           e ",
                    "ecefffffffffece",
                    " e           e ",
                ],
                [
                    " e           e ",
                    "ecefffffffffece",
                    " e           e ",
                    " f           f ",
                    " f           f ",
                    " f           f ",
                    " f           f ",
                    " f           f ",
                    " e           e ",
                    "ecefffffffffece",
                    " e           e ",
                ],
                [
                    " e           e ",
                    "eceeeeeeeeeeece",
                    " e           e ",
                    " e           e ",
                    " e           e ",
                    " e           e ",
                    " e           e ",
                    " e           e ",
                    " e           e ",
                    "eceeeeeeeeeeece",
                    " e           e ",
                ],
                [
                    "               ",
                    " e           e ",
                    "               ",
                    "               ",
                    "               ",
                    "               ",
                    "               ",
                    "               ",
                    "               ",
                    " e           e ",
                    "               ",
                ],
                [
                    "               ",
                    " e           e ",
                    "               ",
                    "               ",
                    "               ",
                    "               ",
                    "               ",
                    "               ",
                    "               ",
                    " e           e ",
                    "               ",
                ],
                [
                    "               ",
                    " e           e ",
                    "               ",
                    "               ",
                    "               ",
                    "               ",
                    "               ",
                    "               ",
                    "               ",
                    " e           e ",
                    "               ",
                ],
            ],
            {
                a: "techopolis:dimensional_detector",
                b: "techopolis:multiblock_machine_casing",
                c: "stellaris:moon_stone",
                e: "techopolis:wooden_scaffolding",
                f: "mekanism:structural_glass",
            },
        )
        .requireEnergyPerTick(10240)
        .requireItem("stellaris:moon_cobblestone")
        .dimensionWhitelist("stellaris:moon")
        .produceItem("stellaris:moon_stone_dust")
        .id("techopolis:moon_quarry/moon_stone_dust");

    //Ancient Infuser
    let chamberCoords = [
        [-1, 3, -2], [0, 3, -2], [1, 3, -2],
        [-1, 3, -3], [0, 3, -3], [1, 3, -3],
        [-1, 3, -4], [0, 3, -4], [1, 3, -4]
    ];

    chamberCoords.forEach((pos, index) => {
        let x = pos[0];
        let y = pos[1];
        let z = pos[2];
        let coreNum = index + 1;

        let recipe = event.recipes.custommachinery
            .custom_machine("techopolis:ancient_infuser", 200)
            .requireStructure([
                ["aaaaaaa", "abbbbba", "abcccba", "abcccba", "abcccba", "abbbbba", "aaamaaa"],
                ["a     a", " ddddd ", " dbbbd ", " dbbbd ", " dbbbd ", " ddddd ", "a     a"],
                ["a     a", " d   d ", "  eee  ", "  eee  ", "  eee  ", " d   d ", "a     a"],
                ["a     a", " d   d ", "       ", "       ", "       ", " d   d ", "a     a"],
                ["a     a", " d   d ", "       ", "       ", "       ", " d   d ", "a     a"],
                ["a     a", " ddddd ", " d   d ", " d   d ", " d   d ", " ddddd ", "a     a"],
                ["aaaaaaa", "a     a", "a     a", "a     a", "a     a", "a     a", "aaaaaaa"]
            ], {
                a: "techopolis:multiblock_machine_casing",
                b: "techopolis:super_empowered_crystal_block",
                c: "techopolis:debris",
                d: "ae2:quartz_glass",
                e: "minecraft:beacon",
            })
            .requireEnergyPerTick(10240)
            .requireFluid("32000x minecraft:lava")
            .requireChemical("10x mekanism:antimatter")
            .destroyAndPlaceBlockOnEnd("minecraft:ancient_debris", x, y, z, x, y, z, 1, "techopolis:debris", true)
            .cores(coreNum);

        if (coreNum > 1) {
            recipe.hide();
        }
        recipe.id(`techopolis:ancient_infuser/core_${coreNum}`);
    });

    //Radaway Machine
    event.recipes.custommachinery
        .custom_machine("techopolis:radaway_machine", 1)
        .requireEnergyPerTick(24000)
        .requireChemicalPerTick("10x mekanism:spent_nuclear_waste")
        .produceChemicalPerTick("10x techopolis:safe_spent_nuclear_waste")
        .id("techopolis:radaway_machine/radaway_machine");

    //Radaway Machine Clear Radiation
    event.recipes.custommachinery
        .custom_machine("techopolis:radaway_machine", 1)
        .requireItem("mekanism:radioactive_waste_barrel")
        .runCommandOnEnd("/mek radiation removeAll")
        .runCommandOnEnd("/mek radiation heal @a")
        .runCommandOnEnd("/say Removing Radiation from the WORLD")
        .id("techopolis:radaway_machine/radaway_machine_clear_radiation");

    //Milker
    event.recipes.custommachinery
        .custom_machine("techopolis:milker", 1)
        .requireEnergyPerTick(16)
        .requireEntities(1, 5, "minecraft:cow", true)
        .produceFluidPerTick("1x minecraft:milk")
        .resetOnError()
        .id("techopolis:milker/milk");

    //Water Collector - Water
    event.recipes.custommachinery
        .custom_machine("techopolis:ambient_water_collector", 100)
        .produceFluidPerTick("1x minecraft:water")
        .resetOnError()
        .id("techopolis:water_collector/water");

    //Rock Washer - Gravel - Flint
    event.recipes.custommachinery
        .custom_machine("techopolis:rock_washer", 100)
        .requireFluid("25x water")
        .requireItem("minecraft:gravel")
        .produceItem("minecraft:flint")
        .resetOnError()
        .id("techopolis:gravel_to_flint");

    event.recipes.custommachinery
        .custom_machine("techopolis:rock_washer", 200)
        .requireFluid("225x water")
        .requireItem("compressedblocks:c0_gravel")
        .produceItem("9x minecraft:flint")
        .resetOnError()
        .id("techopolis:gravel_to_flint_9");

    //Rock Washer - Redstone Ore Piece
    event.recipes.custommachinery
        .custom_machine("techopolis:rock_washer", 100)
        .requireFluid("50x water")
        .requireItem("techopolis:burnt_redstone")
        .produceItem("1x strainers:redstone_ore_piece")
        .resetOnError()
        .id("techopolis:redstone_ore_piece");

    //Rock Washer - Function
    function rockWasher(fluid, focus, input, output, time) {
        let cleanOutputName = output.replace(/.*:/, "");
        let cleanInputName = input.replace(/.*:/, "");

        event.recipes.custommachinery
            .custom_machine("techopolis:rock_washer", time)
            .requireFluid(fluid)
            .requireItem(focus)
            .chance(0.0)
            .requireItem(input)
            .produceItem(output)
            .resetOnError()
            .id(`techopolis:rock_washer/${cleanOutputName}_from_${cleanInputName}`);
    }

    rockWasher(
        "50x water",
        "techopolis:iron_focus",
        "minecraft:granite",
        "strainers:iron_ore_piece",
        100,
    );
    rockWasher(
        "450x water",
        "techopolis:iron_focus",
        "compressedblocks:c0_granite",
        "9x strainers:iron_ore_piece",
        200,
    );

    rockWasher(
        "50x water",
        "techopolis:tin_focus",
        "minecraft:andesite",
        "strainers:tin_ore_piece",
        100,
    );
    rockWasher(
        "450x water",
        "techopolis:tin_focus",
        "compressedblocks:c0_andesite",
        "9x strainers:tin_ore_piece",
        200,
    );

    rockWasher(
        "50x water",
        "techopolis:aluminum_focus",
        "minecraft:diorite",
        "strainers:aluminum_ore_piece",
        100,
    );
    rockWasher(
        "450x water",
        "techopolis:aluminum_focus",
        "compressedblocks:c0_diorite",
        "9x strainers:aluminum_ore_piece",
        200,
    );

    rockWasher(
        "50x water",
        "techopolis:lead_focus",
        "techopolis:crushed_deepslate",
        "strainers:lead_ore_piece",
        100,
    );
    rockWasher(
        "450x water",
        "techopolis:lead_focus",
        "techopolis:compressed_crushed_deepslate",
        "9x strainers:lead_ore_piece",
        200,
    );

    rockWasher(
        "50x water",
        "techopolis:copper_focus",
        "minecraft:stone",
        "strainers:copper_ore_piece",
        100,
    );
    rockWasher(
        "450x water",
        "techopolis:copper_focus",
        "compressedblocks:c0_stone",
        "9x strainers:copper_ore_piece",
        200,
    );

    rockWasher(
        "50x water",
        "techopolis:nickel_focus",
        "techopolis:crushed_deepslate",
        "strainers:nickel_ore_piece",
        100,
    );
    rockWasher(
        "450x water",
        "techopolis:nickel_focus",
        "techopolis:compressed_crushed_deepslate",
        "9x strainers:nickel_ore_piece",
        200,
    );

    rockWasher(
        "50x water",
        "techopolis:silver_focus",
        "techopolis:crushed_deepslate",
        "strainers:silver_ore_piece",
        100,
    );
    rockWasher(
        "450x water",
        "techopolis:silver_focus",
        "techopolis:compressed_crushed_deepslate",
        "9x strainers:silver_ore_piece",
        200,
    );

    //Rock Washer - Cobblestone - Copper Piece
    event.recipes.custommachinery
        .custom_machine("techopolis:rock_washer", 100)
        .requireFluid("25x water")
        .requireItem("#c:cobblestones")
        .produceItem("strainers:copper_ore_piece")
        .chance(0.25)
        .resetOnError()
        .id("techopolis:cobblestone_to_copper_piece");

    //Cobblestone Melter
    event.recipes.custommachinery
        .custom_machine("techopolis:cobblestone_melter", 100)
        .requireItem("cobblestone")
        .produceFluid("50x minecraft:lava")
        .id("techopolis:cobblestone_melter/cobblestone");

    event.recipes.custommachinery
        .custom_machine("techopolis:cobblestone_melter", 200)
        .requireItem("compressedblocks:c0_cobblestone")
        .produceFluid("450x minecraft:lava")
        .id("techopolis:cobblestone_melter/compressed_cobblestone_0");

    event.recipes.custommachinery
        .custom_machine("techopolis:cobblestone_melter", 400)
        .requireItem('compressedblocks:c1_cobblestone')
        .produceFluid("4050x minecraft:lava")
        .id("techopolis:cobblestone_melter/compressed_cobblestone_1");

    //Water Purifier
    event.recipes.custommachinery
        .custom_machine("techopolis:water_purifier", 1)
        .requireFluidPerTick("2x water")
        .produceFluidPerTick("1x strainers:purifying_water")
        .id("techopolis:water_purifier/purifying_water_from_water");

    event.recipes.custommachinery
        .custom_machine("techopolis:water_purifier", 1)
        .requireFluidPerTick("1x techopolis:hot_water")
        .produceFluidPerTick("10x strainers:purifying_water")
        .id("techopolis:water_purifier/purifying_water_from_hot_water");

    //Compactor
    function compactor(input, output) {
        event.recipes.custommachinery
            .custom_machine("techopolis:compactor", 10)
            .requireItem(input)
            .produceItem(output)
            .resetOnError()
            .id(`techopolis:compactor/${output.replace(/.*:/, "")}`);
    }

    compactor("4x strainers:copper_ore_piece", "minecraft:raw_copper");
    compactor("4x strainers:iron_ore_piece", "minecraft:raw_iron");
    compactor("4x strainers:tin_ore_piece", "alltheores:raw_tin");
    compactor("4x strainers:aluminum_ore_piece", "alltheores:raw_aluminum");
    compactor("4x strainers:silver_ore_piece", "alltheores:raw_silver");
    compactor("4x strainers:lead_ore_piece", "alltheores:raw_lead");
    compactor("4x strainers:nickel_ore_piece", "alltheores:raw_nickel");
    compactor("4x techopolis:grout", "casting:black_bricks");
    compactor("1x minecraft:clay", "minecraft:bricks");
    compactor("9x minecraft:nether_star", "extendedcrafting:nether_star_block");

    compactor("4x minecraft:clay_ball", "minecraft:clay");
    compactor(
        "8x immersiveengineering:hemp_fiber",
        "immersiveengineering:hemp_fabric",
    );
    compactor(
        "4x immersiveengineering:hemp_fabric",
        "immersiveengineering:ersatz_leather",
    );
    compactor("9x minecraft:cobblestone", "compressedblocks:c0_cobblestone");

    //Rock Enricher
    function rockEnricher(fluid, focus, input, output) {
        event.recipes.custommachinery
            .custom_machine("techopolis:rock_enricher", 100)
            .requireFluid(fluid)
            .requireItem(focus)
            .chance(0.0)
            .requireItem(input)
            .produceItem(output)
            .id(`techopolis:rock_enricher/${output.replace(/.*:/, "")}`);
    }

    rockEnricher(
        "25x strainers:purifying_water",
        "techopolis:granite_focus",
        "minecraft:stone",
        "minecraft:granite",
    );
    rockEnricher(
        "225x strainers:purifying_water",
        "techopolis:granite_focus",
        "compressedblocks:c0_stone",
        "compressedblocks:c0_granite",
    );

    rockEnricher(
        "25x strainers:purifying_water",
        "techopolis:andesite_focus",
        "minecraft:stone",
        "minecraft:andesite",
    );
    rockEnricher(
        "225x strainers:purifying_water",
        "techopolis:andesite_focus",
        "compressedblocks:c0_stone",
        "compressedblocks:c0_andesite",
    );

    rockEnricher(
        "25x strainers:purifying_water",
        "techopolis:diorite_focus",
        "minecraft:stone",
        "minecraft:diorite",
    );
    rockEnricher(
        "225x strainers:purifying_water",
        "techopolis:diorite_focus",
        "compressedblocks:c0_stone",
        "compressedblocks:c0_diorite",
    );

    //Bio Generator
    event.recipes.custommachinery
        .custom_machine("techopolis:bio_generator", 800)
        .requireItem("mekanism:bio_fuel")
        .produceEnergyPerTick(640)
        .id("techopolis:bio_generator/bio_fuel");

    event.recipes.custommachinery
        .custom_machine("techopolis:bio_generator", 800)
        .requireItem("mekanism:block_bio_fuel")
        .produceEnergyPerTick(640 * 9)
        .id("techopolis:bio_generator/block_bio_fuel");

    event.recipes.custommachinery
        .custom_machine("techopolis:bio_generator", 1200)
        .requireItem("techopolis:purified_bio_fuel")
        .produceEnergyPerTick(1280)
        .id("techopolis:bio_generator/purified_bio_fuel");

    event.recipes.custommachinery
        .custom_machine("techopolis:bio_generator", 1200)
        .requireItem("techopolis:purified_bio_fuel_block")
        .produceEnergyPerTick(1280 * 9)
        .id("techopolis:bio_generator/purified_bio_fuel_block");

    //Freezer - Blue Ice
    event.recipes.custommachinery
        .custom_machine("techopolis:freezer", 200)
        .requireEnergy(128 * 4)
        .requireItem("minecraft:packed_ice")
        .produceItem("minecraft:blue_ice")
        .id("techopolis:freezer/blue_ice");

    //Freezer - Packed Ice
    event.recipes.custommachinery
        .custom_machine("techopolis:freezer", 200)
        .requireEnergy(256)
        .requireItem("minecraft:ice")
        .produceItem("minecraft:packed_ice")
        .id("techopolis:freezer/packed_ice");

    //Freezer - Ice
    event.recipes.custommachinery
        .custom_machine("techopolis:freezer", 200)
        .requireEnergy(128)
        .requireFluid("1000x water")
        .produceItem("minecraft:ice")
        .id("techopolis:freezer/ice");

    //Freezer - Snow
    event.recipes.custommachinery
        .custom_machine("techopolis:freezer", 100)
        .requireEnergy(128)
        .requireItem("minecraft:clay_ball")
        .produceItem("minecraft:snowball")
        .id("techopolis:freezer/snowball");

    //Freezer - Liquid Nitrogen
    event.recipes.custommachinery
        .custom_machine("techopolis:freezer", 800)
        .requireEnergy(2560)
        .requireFluid("1000x strainers:purifying_water")
        .produceFluid("1000x techopolis:liquid_nitrogen")
        .id("techopolis:freezer/liquid_nitrogen");

    //Fluid Injector - Heat Protection Curio 1
    event.recipes.custommachinery
        .custom_machine("techopolis:fluid_injector", 400)
        .requireEnergy(2560)
        .requireFluid("10000x techopolis:liquid_nitrogen")
        .requireItem("techopolis:curio")
        .produceItem("techopolis:heat_protection_curio_1")
        .id("techopolis:fluid_injector/heat_protection_curio_1");

    //Fluid Injector - Netherite Scrap
    event.recipes.custommachinery
        .custom_machine("techopolis:fluid_injector", 400)
        .requireEnergy(2560)
        .requireFluid("1000x strainers:eroding_water")
        .requireItem("minecraft:ancient_debris")
        .produceItem("6x minecraft:netherite_scrap")
        .id("techopolis:fluid_injector/netherite_scrap");

    //Fluid Injector - Netherite Scrap
    event.recipes.custommachinery
        .custom_machine("techopolis:fluid_injector", 100)
        .requireEnergy(2560)
        .requireFluid("250x minecraft:lava")
        .requireItem("#techopolis:nether_planks")
        .produceItem("1x techopolis:lava_planks")
        .id("techopolis:fluid_injector/lava_planks");

    //Fluid Injector - Moon Curd
    event.recipes.custommachinery
        .custom_machine("techopolis:fluid_injector", 100)
        .requireEnergy(2560)
        .requireFluid("250x minecraft:milk")
        .requireItem("stellaris:moon_fruit")
        .produceItem("1x techopolis:moon_curd")
        .id("techopolis:fluid_injector/moon_curd");
});
