
ServerEvents.recipes(event => {

    function dimensionalInfuserRecipes(inputItem, inputFluid, inputChemical, output, energy, time, customId) {
        let recipe = event.recipes.custommachinery.custom_machine("techopolis:dimensional_infuser", time).requireStructure([["aaaaa", "a   a", "a   a", "a   a", "aamaa"], ["a   a", " bbb ", " bbb ", " bbb ", "a   a"], ["a   a", " ccc ", " ccc ", " ccc ", "a   a"], ["a   a", " bbb ", " bbb ", " bbb ", "a   a"], ["aaaaa", "a   a", "a   a", "a   a", "aaaaa"]], { "a": "techopolis:multiblock_machine_casing", "b": "techopolis:multiblock_vent", "c": "techopolis:multiblock_circuitry" })

        // Your original, perfectly working ingredient logic
        if (inputItem) {
            recipe.requireItem(inputItem)
        }
        if (inputFluid) {
            recipe.requireFluid(inputFluid)
        }
        if (inputChemical) {
            recipe.requireChemical(inputChemical)
        }

        recipe.requireEnergyPerTick(energy)
        recipe.produceItem(output)

        if (customId) {
            recipe.id(`techopolis:dimensional_infuser/${customId}`)
        }
    }

    //Overworld Ores
    dimensionalInfuserRecipes("32x minecraft:coal_ore", null, null, "techopolis:dimensional_coal_ore", 640, 100, "dimensional_coal_ore")
    dimensionalInfuserRecipes("32x minecraft:iron_ore", null, null, "techopolis:dimensional_iron_ore", 640, 100, "dimensional_iron_ore")
    dimensionalInfuserRecipes("24x minecraft:gold_ore", null, null, "techopolis:dimensional_gold_ore", 640, 100, "dimensional_gold_ore")
    dimensionalInfuserRecipes("32x minecraft:copper_ore", null, null, "techopolis:dimensional_copper_ore", 640, 100, "dimensional_copper_ore")
    dimensionalInfuserRecipes("32x alltheores:tin_ore", null, null, "techopolis:dimensional_tin_ore", 640, 100, "dimensional_tin_ore")
    dimensionalInfuserRecipes("8x minecraft:diamond_ore", null, null, "techopolis:dimensional_diamond_ore", 1280, 100, "dimensional_diamond_ore")
    dimensionalInfuserRecipes("8x minecraft:emerald_ore", null, null, "techopolis:dimensional_emerald_ore", 1280, 100, "dimensional_emerald_ore")
    dimensionalInfuserRecipes("24x minecraft:redstone_ore", null, null, "techopolis:dimensional_redstone_ore", 640, 100, "dimensional_redstone_ore")
    dimensionalInfuserRecipes("8x minecraft:lapis_ore", null, null, "techopolis:dimensional_lapis_ore", 640, 100, "dimensional_lapis_ore")
    dimensionalInfuserRecipes("32x alltheores:aluminum_ore", null, null, "techopolis:dimensional_aluminum_ore", 640, 100, "dimensional_aluminum_ore")
    dimensionalInfuserRecipes("16x alltheores:lead_ore", null, null, "techopolis:dimensional_lead_ore", 640, 100, "dimensional_lead_ore")
    dimensionalInfuserRecipes("16x alltheores:nickel_ore", null, null, "techopolis:dimensional_nickel_ore", 640, 100, "dimensional_nickel_ore")
    dimensionalInfuserRecipes("16x alltheores:osmium_ore", null, null, "techopolis:dimensional_osmium_ore", 1500, 100, "dimensional_osmium_ore")
    dimensionalInfuserRecipes("4x alltheores:platinum_ore", null, null, "techopolis:dimensional_platinum_ore", 1280, 100, "dimensional_platinum_ore")
    dimensionalInfuserRecipes("8x alltheores:silver_ore", null, null, "techopolis:dimensional_silver_ore", 1280, 100, "dimensional_silver_ore")
    dimensionalInfuserRecipes("8x alltheores:uranium_ore", null, null, "techopolis:dimensional_uranium_ore", 1280, 100, "dimensional_uranium_ore")
    dimensionalInfuserRecipes("8x opolisutilities:ender_ore", null, null, "techopolis:dimensional_ender_ore", 1280, 100, "dimensional_ender_ore")
    dimensionalInfuserRecipes("1x replication:deepslate_replica_ore", null, null, "techopolis:dimensional_replica_ore", 1280, 100, "dimensional_replica_ore")
    dimensionalInfuserRecipes("8x actuallyadditions:black_quartz_ore", null, null, "techopolis:dimensional_black_quartz_ore", 640, 100, "dimensional_black_quartz_ore")

    //Nether Dimensional Ore
    dimensionalInfuserRecipes("32x alltheores:nether_zinc_ore", null, null, "techopolis:dimensional_zinc_ore", 2560, 100, "dimensional_zinc_ore")
    dimensionalInfuserRecipes("32x minecraft:nether_quartz_ore", null, null, "techopolis:dimensional_quartz_ore", 2560, 100, "dimensional_quartz_ore")
    dimensionalInfuserRecipes("16x alltheores:nether_ruby_ore", null, null, "techopolis:dimensional_ruby_ore", 2560, 100, "dimensional_ruby_ore")
    dimensionalInfuserRecipes("16x alltheores:nether_sapphire_ore", null, null, "techopolis:dimensional_sapphire_ore", 2560, 100, "dimensional_sapphire_ore")
    dimensionalInfuserRecipes("16x alltheores:nether_peridot_ore", null, null, "techopolis:dimensional_peridot_ore", 2560, 100, "dimensional_peridot_ore")

    //Moon Dimensional Ore
    dimensionalInfuserRecipes("8x stellaris:moon_desh_ore", null, null, "techopolis:dimensional_desh_ore", 5120, 100, "dimensional_desh_ore")
    dimensionalInfuserRecipes("8x techopolis:moon_neptunium_ore", null, null, "techopolis:dimensional_neptunium_ore", 5120, 100, "dimensional_neptunium_ore")
    dimensionalInfuserRecipes("8x techopolis:moon_ostrum_ore", null, null, "techopolis:dimensional_ostrum_ore", 5120, 100, "dimensional_ostrum_ore")

    //End Dimensional Ore
    dimensionalInfuserRecipes("8x alltheores:end_iridium_ore", null, null, "techopolis:dimensional_iridium_ore", 10240, 100, "dimensional_iridium_ore")
    dimensionalInfuserRecipes("8x bigreactors:anglesite_ore", null, null, "techopolis:dimensional_anglesite_ore", 10240, 100, "dimensional_anglesite_ore")

    //Misc Recipes
    dimensionalInfuserRecipes("8x techopolis:iron_dust", null, null, "techopolis:gold_dust", 1280, 100, "iron_to_gold_dust")
    dimensionalInfuserRecipes("8x techopolis:tin_dust", null, null, "techopolis:gold_dust", 1280, 100, "tin_to_gold_dust")
    dimensionalInfuserRecipes("8x techopolis:copper_dust", null, null, "techopolis:gold_dust", 1280, 100, "copper_to_gold_dust")
    dimensionalInfuserRecipes("8x techopolis:aluminum_dust", null, null, "techopolis:gold_dust", 1280, 100, "aluminum_to_gold_dust")
    dimensionalInfuserRecipes("6x techopolis:nickel_dust", null, null, "techopolis:gold_dust", 1280, 100, "nickel_to_gold_dust")
    dimensionalInfuserRecipes("6x techopolis:lead_dust", null, null, "techopolis:gold_dust", 1280, 100, "lead_to_gold_dust")
    dimensionalInfuserRecipes("6x techopolis:silver_dust", null, null, "techopolis:gold_dust", 1280, 100, "silver_to_gold_dust")
    dimensionalInfuserRecipes("ae2:certus_quartz_crystal", null, null, 'actuallyadditions:black_quartz', 640, 100, "certus_to_black_quartz")
    dimensionalInfuserRecipes("1x minecraft:stone", null, null, "ae2:sky_stone_block", 128, 100, "stone_to_sky_stone")
    dimensionalInfuserRecipes("1x bigreactors:inanite_ingot", null, null, "alltheores:platinum_ingot", 2560, 200, "inanite_to_platinum")
    dimensionalInfuserRecipes("1x compressedblocks:c0_stone", null, null, "techopolis:blank_stone_ore", 256, 200, "compressed_stone_to_blank")
    dimensionalInfuserRecipes("1x compressedblocks:c0_netherrack", null, null, "techopolis:blank_netherrack_ore", 2560, 200, "compressed_netherrack_to_blank")
    dimensionalInfuserRecipes("1x mekanism:bio_fuel", null, null, "strainers:purifying_salt_mulch", 640, 40, "bio_fuel_to_purifying_salt_mulch")

    //Black Moon Ore
    dimensionalInfuserRecipes("8x stellaris:moon_stone", null, "1000x techopolis:lunar_gas", "techopolis:blank_moon_ore", 5120, 100, "moon_stone_to_blank_moon_ore")

    //Electrode Recipe
    //dimensionalInfuserRecipes("8x techopolis:advanced_research", null, null, 'immersiveengineering:blueprint[immersiveengineering:blueprint="electrode"]', 2000, 100, "advanced_research_to_electrode")

    //Fluorite
    dimensionalInfuserRecipes(null, "200x mekanism:brine", null, "1x alltheores:fluorite_dust", 320, 100, "brine_to_fluorite_dust")

})

