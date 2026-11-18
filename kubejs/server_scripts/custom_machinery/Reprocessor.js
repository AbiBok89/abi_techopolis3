
ServerEvents.recipes(event => {

    function reprocessorRecipes(inputItem, output, time, energy, inputFluid) {
        let recipe = event.recipes.custommachinery.custom_machine("techopolis:reprocessor", time).requireStructure([["a   a"," bbb "," bbb "," bbb ","a m a"],["a   a"," bcb "," c c "," bcb ","a   a"],["a   a"," bcb "," c c "," bcb ","a   a"],["d   d"," bcb "," c c "," bcb ","d   d"],["addda","dbbbd","dbbbd","dbbbd","addda"],["aaaaa","aeeea","aeeea","aeeea","aaaaa"],["aa aa","a   a","     ","a   a","aa aa"]], {"a":"techopolis:multiblock_machine_casing","b":"bigreactors:basic_reactorcasing","c":"bigreactors:basic_reactorglass","d":"techopolis:multiblock_circuitry","e":"techopolis:multiblock_vent"})
   
        recipe.requireItem(inputItem)
        recipe.requireFluid(inputFluid)        
        recipe.requireEnergyPerTick(energy)
        recipe.produceItem(output)
    }

    reprocessorRecipes("alltheores:uranium_ingot", "bigreactors:cyanite_ingot", 200, 960 * 2, "1000x minecraft:water")
    reprocessorRecipes("alltheores:uranium_block", "bigreactors:cyanite_block", 400, 960 * 2, "9000x minecraft:water")

    reprocessorRecipes("bigreactors:cyanite_ingot", 'bigreactors:blutonium_ingot', 200, 1920 * 3, "2000x minecraft:water")
    reprocessorRecipes("bigreactors:cyanite_block", 'bigreactors:blutonium_block', 400, 1920 * 3, "18000x minecraft:water")

    reprocessorRecipes("bigreactors:blutonium_ingot", 'bigreactors:ludicrite_ingot', 200, 2880 * 4, "4000x minecraft:water")
    reprocessorRecipes("bigreactors:blutonium_block", 'bigreactors:ludicrite_block', 400, 2880 * 4, "36000x minecraft:water")

    reprocessorRecipes("bigreactors:ludicrite_ingot", 'bigreactors:ridiculite_ingot', 200, 3840 * 5, "8000x strainers:purifying_water")
    reprocessorRecipes("bigreactors:ludicrite_block", 'bigreactors:ridiculite_block', 400, 3840 * 5, "72000x strainers:purifying_water")

    reprocessorRecipes("bigreactors:ridiculite_ingot", 'bigreactors:inanite_ingot', 200, 5120 * 6, "16000x strainers:purifying_water")
    reprocessorRecipes("bigreactors:ridiculite_block", 'bigreactors:inanite_block', 400, 5120 * 6, "144000x strainers:purifying_water")


    event.shaped("techopolis:reprocessor", ["SSS", "ACA", "SSS"], 
        {S: 'techopolis:multiblock_machine_casing', C: 'techopolis:elite_technium_machine_frame', A: "bigreactors:cyanite_ingot"}).id('techopolis:reprocessor')

})

