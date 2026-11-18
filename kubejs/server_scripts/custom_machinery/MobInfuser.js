
ServerEvents.recipes(event => {

    function mobInfuserRecipes(input, output, time, energy, dataModel, dimension) {
        let recipe = event.recipes.custommachinery.custom_machine("techopolis:mob_infuser", time)

        recipe.requireItem(input)
        recipe.requireEnergyPerTick(energy)
        recipe.produceItem(output)
        recipe.dimensionWhitelist(dimension)
        if (dataModel) {
            recipe.requireItem(dataModel).chance(0.0)
        }
    }

    //Prediction Matrix
    mobInfuserRecipes('#c:glass_blocks', 'hostilenetworks:prediction_matrix', 100, 400, null, "minecraft:overworld")

    //Overworld
    mobInfuserRecipes('#c:leathers', 'minecraft:rotten_flesh', 300, 1600, "techopolis:hostile_data_model", "minecraft:overworld")
    mobInfuserRecipes('minecraft:bone_block', 'minecraft:bone', 300, 1600, "techopolis:hostile_data_model", "minecraft:overworld")
    mobInfuserRecipes('mekanism:teleportation_core', 'minecraft:ender_pearl', 400, 1600, "techopolis:hostile_data_model", "minecraft:overworld")

    //Nether
    mobInfuserRecipes('#c:glass_blocks', '2x hostilenetworks:prediction_matrix', 100, 800, null, "minecraft:the_nether")
    mobInfuserRecipes('3x minecraft:wither_skeleton_skull', 'minecraft:nether_star', 1600, 10240, "techopolis:nether_data_model", "minecraft:the_nether")
    mobInfuserRecipes('minecraft:bone', 'techopolis:wither_skeleton_bone', 400, 5120, "techopolis:nether_data_model", "minecraft:the_nether")


    event.shaped('techopolis:mob_infuser', ["SSS", "ACA", "SSS"],
        { S: 'smooth_stone', A: '#c:gears/diamond', C: "hostilenetworks:blank_data_model" }).id('techopolis:mob_infuser')

})
