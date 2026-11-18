
ServerEvents.recipes(event => {

    function dimensionalOreExtractorRecipes(energy, time, dimensionalOre, dimension) {

        let oreName = dimensionalOre.split(':')[1];

        // --- Mk1 Recipe ---
        let recipe = event.recipes.custommachinery.custom_machine("techopolis:dimensional_ore_extractor", time).requireStructure([["aaaaa", "a   a", "a   a", "a   a", "aamaa"], ["a   a", " bbb ", " bbb ", " bbb ", "a   a"], ["a   a", " bbb ", " b b ", " bbb ", "a   a"], ["a   a", " bbb ", " bbb ", " bbb ", "a   a"], ["aaaaa", "a   a", "a   a", "a   a", "aaaaa"]], { "a": "techopolis:multiblock_machine_casing", "b": "ae2:quartz_glass" })

        // Allow only one controller in the 5x5x5 shell
        recipe.requireBlock(["#techopolis:valid_extractors"], true, -2, 0, -4, 2, 4, 0, 1, "==")
        recipe.requireEnergyPerTick(energy)
        if (dimension) {
            recipe.dimensionWhitelist(dimension)
        }
        recipe.requireItem(dimensionalOre).chance(0.0)
        recipe.produceItem(dimensionalOre)
        recipe.id(`techopolis:dimensional_extractor_mk1/${oreName}`)

        // --- Mk2 Recipes ---
        for (let i = 1; i <= 3; i++) {
            let recipemk2 = event.recipes.custommachinery.custom_machine("techopolis:dimensional_ore_extractor_mk2", time).requireStructure([["aaaaa", "a   a", "a   a", "a   a", "aamaa"], ["a   a", " bbb ", " bbb ", " bbb ", "a   a"], ["a   a", " bbb ", " b b ", " bbb ", "a   a"], ["a   a", " bbb ", " bbb ", " bbb ", "a   a"], ["aaaaa", "a   a", "a   a", "a   a", "aaaaa"]], { "a": "techopolis:multiblock_machine_casing", "b": "ae2:quartz_glass" })

            // Allow only one controller in the 5x5x5 shell
            recipemk2.requireBlock(["#techopolis:valid_extractors"], true, -2, 0, -4, 2, 4, 0, 1, "==")
            recipemk2.requireEnergyPerTick(energy)
            if (dimension) {
                recipemk2.dimensionWhitelist(dimension)
            }

            recipemk2.requireItem(dimensionalOre, "ore_" + i).chance(0.0)
            recipemk2.produceItem(dimensionalOre, "output_item_" + i)
            recipemk2.cores(i)
            recipemk2.id(`techopolis:dimensional_extractor_mk2/${oreName}_core_${i}`)
        }
    }

    //Overworld Based
    dimensionalOreExtractorRecipes(400, 400, "techopolis:dimensional_coal_ore", null)
    dimensionalOreExtractorRecipes(600, 400, "techopolis:dimensional_iron_ore", null)
    dimensionalOreExtractorRecipes(1000, 400, "techopolis:dimensional_gold_ore", null)
    dimensionalOreExtractorRecipes(400, 400, "techopolis:dimensional_copper_ore", null)
    dimensionalOreExtractorRecipes(400, 400, "techopolis:dimensional_tin_ore", null)
    dimensionalOreExtractorRecipes(1200, 400, "techopolis:dimensional_diamond_ore", null)
    dimensionalOreExtractorRecipes(1200, 400, "techopolis:dimensional_emerald_ore", null)
    dimensionalOreExtractorRecipes(800, 400, "techopolis:dimensional_redstone_ore", null)
    dimensionalOreExtractorRecipes(800, 400, "techopolis:dimensional_lapis_ore", null)
    dimensionalOreExtractorRecipes(400, 400, "techopolis:dimensional_aluminum_ore", null)
    dimensionalOreExtractorRecipes(400, 400, "techopolis:dimensional_lead_ore", null)
    dimensionalOreExtractorRecipes(400, 400, "techopolis:dimensional_nickel_ore", null)
    dimensionalOreExtractorRecipes(1200, 400, "techopolis:dimensional_osmium_ore", null)
    dimensionalOreExtractorRecipes(2400, 400, "techopolis:dimensional_platinum_ore", null)
    dimensionalOreExtractorRecipes(1200, 400, "techopolis:dimensional_silver_ore", null)
    dimensionalOreExtractorRecipes(800, 400, "techopolis:dimensional_uranium_ore", null)
    dimensionalOreExtractorRecipes(1600, 400, "techopolis:dimensional_ender_ore", null)
    dimensionalOreExtractorRecipes(1200, 400, "techopolis:dimensional_replica_ore", null)
    dimensionalOreExtractorRecipes(600, 400, "techopolis:dimensional_black_quartz_ore", null)

    //Nether Based
    dimensionalOreExtractorRecipes(2000, 400, "techopolis:dimensional_zinc_ore", "minecraft:the_nether")
    dimensionalOreExtractorRecipes(2000, 400, "techopolis:dimensional_quartz_ore", "minecraft:the_nether")
    dimensionalOreExtractorRecipes(2000, 400, "techopolis:dimensional_ruby_ore", "minecraft:the_nether")
    dimensionalOreExtractorRecipes(2000, 400, "techopolis:dimensional_sapphire_ore", "minecraft:the_nether")
    dimensionalOreExtractorRecipes(2000, 400, "techopolis:dimensional_peridot_ore", "minecraft:the_nether")

    //Space Based
    dimensionalOreExtractorRecipes(4000, 400, "techopolis:dimensional_desh_ore", "stellaris:moon")
    dimensionalOreExtractorRecipes(4000, 400, "techopolis:dimensional_neptunium_ore", "stellaris:moon")
    dimensionalOreExtractorRecipes(4000, 400, "techopolis:dimensional_ostrum_ore", "stellaris:moon")
    dimensionalOreExtractorRecipes(4000, 400, "techopolis:dimensional_cheesium_ore", "stellaris:moon")

    //End Based
    dimensionalOreExtractorRecipes(10000, 400, "techopolis:dimensional_iridium_ore", "minecraft:the_end")
    dimensionalOreExtractorRecipes(10000, 400, "techopolis:dimensional_anglesite_ore", "minecraft:the_end")


})
