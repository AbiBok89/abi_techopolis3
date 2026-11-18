ServerEvents.recipes(event => {

    function interdimensionalInfuserRecipes(inputItem1, inputItem2, inputItem2WithChance, output, energy, time, dimension) {
        let cleanOutput = output.includes(':') ? output.split(':')[1].split(/[\s\[\{]/)[0].replace(/[^a-z0-9_]/g, "") : "output";
        let cleanInput1 = inputItem1.includes(':') ? inputItem1.split(':')[1].split(/[\s\[\{]/)[0].replace(/[^a-z0-9_]/g, "") : "input";
        let idSuffix = `${cleanOutput}_from_${cleanInput1}`;

        let recipe = event.recipes.custommachinery.custom_machine("techopolis:interdimensional_infuser", time).requireStructure([["abbbbba", "b     b", "b     b", "b     b", "b     b", "b     b", "abbmbba"], ["b     b", " ddddd ", " deeed ", " deeed ", " deeed ", " ddddd ", "b     b"], ["b     b", " deeed ", " efffe ", " efgfe ", " efffe ", " deeed ", "b     b"], ["b     b", " deeed ", " ehhhe ", " ehghe ", " ehhhe ", " deeed ", "b     b"], ["b     b", " deeed ", " eiiie ", " eigie ", " eiiie ", " deeed ", "b     b"], ["b     b", " ddddd ", " deeed ", " deeed ", " deeed ", " ddddd ", "b     b"], ["abbbbba", "b     b", "b     b", "b     b", "b     b", "b     b", "abbbbba"]], { "a": "techopolis:dimensional_detector", "b": "techopolis:multiblock_machine_casing", "d": "techopolis:multiblock_circuitry", "e": "techopolis:multiblock_vent", "f": "#techopolis:valid_interdimensional_ores", "g": "mekanism:quantum_entangloporter", "h": "#techopolis:valid_interdimensional_ores", "i": "#techopolis:valid_interdimensional_ores" })

        recipe.requireItem(inputItem1)
        if (inputItem2) {
            recipe.requireItem(inputItem2)
        }
        if (inputItem2WithChance) {
            recipe.requireItem(inputItem2WithChance).chance(0.0)
        }
        if (dimension) {
            recipe.dimensionWhitelist(dimension)
        }
        recipe.requireEnergyPerTick(energy)
        recipe.produceItem(output)
        recipe.id(`techopolis:interdimensional_infuser/${idSuffix}`)
    }

    //Interdimensional Infuser
    interdimensionalInfuserRecipes("1x techopolis:desh_dust", null, null, "stellaris:desh_ingot", 2560, 100, "stellaris:moon")
    interdimensionalInfuserRecipes("1x techopolis:neptunium_dust", null, null, "stellaris:neptunium_ingot", 5120, 100, "stellaris:moon")
    interdimensionalInfuserRecipes("1x techopolis:ostrum_dust", null, null, "techopolis:ostrum_ingot", 5120, 100, "stellaris:moon")

    interdimensionalInfuserRecipes("32x minecraft:grass_block", null, null, "stellaris:earth_globe", 5120, 1600, "stellaris:moon")
    interdimensionalInfuserRecipes("1x stellaris:desh_block", null, null, "stellaris:venus_globe", 5120, 1600, "stellaris:moon")
    interdimensionalInfuserRecipes("1x techopolis:ostrum_block", null, null, "stellaris:mars_globe", 5120, 1600, "stellaris:moon")
    interdimensionalInfuserRecipes("1x stellaris:neptunium_block", null, null, "stellaris:mercury_globe", 5120, 1600, "stellaris:moon")
    interdimensionalInfuserRecipes("1x stellaris:cheese_block", null, null, "stellaris:moon_globe", 5120, 1600, "stellaris:moon")

    interdimensionalInfuserRecipes("1x stellaris:moon_stone", null, "stellaris:venus_globe", "stellaris:venus_stone", 2560, 200, "stellaris:moon")
    interdimensionalInfuserRecipes("1x stellaris:moon_stone", null, "stellaris:mercury_globe", "stellaris:mercury_stone", 2560, 200, "stellaris:moon")
    interdimensionalInfuserRecipes("1x stellaris:moon_stone", null, "stellaris:earth_globe", "minecraft:stone", 2560, 200, "stellaris:moon")
    interdimensionalInfuserRecipes("1x minecraft:stone", null, "stellaris:moon_globe", "stellaris:moon_stone", 320, 200, "stellaris:moon")
    interdimensionalInfuserRecipes("1x stellaris:moon_stone", null, "stellaris:mars_globe", "stellaris:mars_stone", 2560, 200, "stellaris:moon")

    interdimensionalInfuserRecipes("4x alltheores:enderium_ingot", "4x alltheores:iridium_ingot", null, "extendedcrafting:ender_ingot", 10240, 200, "minecraft:the_end")

})
