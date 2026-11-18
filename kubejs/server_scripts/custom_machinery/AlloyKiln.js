ServerEvents.recipes(event => {

    function alloyKilnRecipes(input1, input2, input3, output, energy, time, id) {
        let recipe = event.recipes.custommachinery.custom_machine("techopolis:alloy_kiln", time)
            .requireStructure([["a   a", " bbb ", " bbb ", " bbb ", "a m a"], ["a   a", " bbb ", " b b ", " bbb ", "a   a"], ["a   a", " bbb ", " b b ", " bbb ", "a   a"], ["aaaaa", "abbba", "abbba", "abbba", "aaaaa"], ["a   a", "     ", "     ", "     ", "a   a"]], { "a": "techopolis:wooden_scaffolding", "b": "immersiveengineering:alloybrick" })
        recipe.requireItem(input1)
        recipe.requireItem(input2)
        if (input3) {
            recipe.requireItem(input3)
        }
        if (energy) {
            recipe.requireEnergyPerTick(energy)
        }
        recipe.produceItem(output)
        if (id) {
            recipe.id(id)
        }
    }

    //Bronze
    alloyKilnRecipes('3x minecraft:copper_ingot', 'alltheores:tin_ingot', '#minecraft:coals', '4x alltheores:bronze_ingot', null, 200, 'techopolis:alloy_kiln_2_items/bronze_ingot')
    alloyKilnRecipes('3x minecraft:copper_ingot', 'alltheores:tin_ingot', null, '4x alltheores:bronze_ingot', 80, 200, 'techopolis:alloy_kiln/bronze_ingot')
    alloyKilnRecipes('3x minecraft:copper_block', 'alltheores:tin_block', null, '4x alltheores:bronze_block', 80 * 9, 400, 'techopolis:alloy_kiln/bronze_block')

    //Brass
    alloyKilnRecipes('3x minecraft:copper_ingot', 'alltheores:zinc_ingot', null, '4x alltheores:brass_ingot', 800, 200, 'techopolis:alloy_kiln/brass_ingot')
    alloyKilnRecipes('3x minecraft:copper_block', 'alltheores:zinc_block', null, '4x alltheores:brass_block', 800 * 9, 400, 'techopolis:alloy_kiln/brass_block')

    //Obsidiglow
    alloyKilnRecipes('mekanism:ingot_refined_glowstone', 'mekanism:ingot_refined_obsidian', null, '2x techopolis:obsidiglow_ingot', 360, 400, 'techopolis:alloy_kiln/obsidiglow_ingot')
    alloyKilnRecipes('mekanism:block_refined_glowstone', 'mekanism:block_refined_obsidian', null, '2x techopolis:obsidiglow_block', 360 * 9, 800, 'techopolis:alloy_kiln/obsidiglow_block')

    //Nether Brick
    alloyKilnRecipes('minecraft:netherrack', 'minecraft:brick', null, '1x minecraft:nether_brick', 2048, 200, 'techopolis:alloy_kiln/nether_brick')

    //Reinforced Casing
    alloyKilnRecipes('4x techopolis:wooden_scaffolding', 'techopolis:obsidiglow_ingot', 'techopolis:dimensional_dust', '4x techopolis:multiblock_machine_casing', 400, 400, 'techopolis:alloy_kiln/multiblock_machine_casing')

    //Obsidian
    event.recipes.custommachinery.custom_machine("techopolis:alloy_kiln", 400)
        .requireStructure([["a   a", " bbb ", " bbb ", " bbb ", "a m a"], ["a   a", " bbb ", " b b ", " bbb ", "a   a"], ["a   a", " bbb ", " b b ", " bbb ", "a   a"], ["aaaaa", "abbba", "abbba", "abbba", "aaaaa"], ["a   a", "     ", "     ", "     ", "a   a"]], { "a": "techopolis:wooden_scaffolding", "b": "immersiveengineering:alloybrick" })
        .requireFluid("minecraft:lava")
        .requireFluid("minecraft:water")
        .produceFluid("casting:molten_obsidian")
        .requireItem("techopolis:obsidian_blueprint").chance(0.0)
        .id('techopolis:alloy_kiln/molten_obsidian')

    //Super Coolant
    event.recipes.custommachinery.custom_machine("techopolis:alloy_kiln", 100)
        .requireStructure([["a   a", " bbb ", " bbb ", " bbb ", "a m a"], ["a   a", " bbb ", " b b ", " bbb ", "a   a"], ["a   a", " bbb ", " b b ", " bbb ", "a   a"], ["aaaaa", "abbba", "abbba", "abbba", "aaaaa"], ["a   a", "     ", "     ", "     ", "a   a"]], { "a": "techopolis:wooden_scaffolding", "b": "immersiveengineering:alloybrick" })
        .requireFluid("casting:chilled_water")
        .requireFluid("casting:iced_water")
        .produceFluid("2000x casting:super_coolant")
        .id('techopolis:alloy_kiln/super_coolant')

})
