//Ultimate Research

ServerEvents.recipes(event => {

    //Research Recipe - Ultimate
    event.recipes.custommachinery.custom_machine("techopolis:researcher", 100)
        .requireItem("techopolis:ultimate_technium_nugget")
        .produceItem("techopolis:ultimate_research")
        .requireEnergyPerTick(12000)
        .id(`techopolis:researcher_ultimate_research`)

    event.recipes.custommachinery.custom_machine("techopolis:researcher", 400)
        .requireItem("techopolis:ultimate_technium_ingot")
        .produceItem("10x techopolis:ultimate_research")
        .requireEnergyPerTick(24000)
        .id(`techopolis:researcher_ultimate_research_10`)

    let ultimate = 'techopolis:ultimate_research';


    //Researcher - Function

    function research(researchTier, researchAmount, fluid, input, output, time) {
        // Unique id so this doesn't collide with other research() recipes
        // auto-generating the same default id (same machine/time elsewhere)
        let cleanOutput = output.includes(':') ? output.split(':')[1].split(/[\s\[\{]/)[0].replace(/[^a-z0-9_]/g, "") : "output";
        let cleanInput = input.includes(':') ? input.split(':')[1].split(/[\s\[\{]/)[0].replace(/[^a-z0-9_]/g, "") : "input";
        let idSuffix = `${cleanOutput}_from_${cleanInput}`;

        let recipe = event.recipes.custommachinery.custom_machine("techopolis:researcher", time)
        recipe
            .requireItem(input)
            .requireItem(Item.of(researchTier, researchAmount))
            .produceItem(output)
            .id(`techopolis:researcher/${idSuffix}`)
        if (fluid) {
            recipe.requireFluid(fluid)
        }
    }

    //Research Crafter - Function
    function researchCrafter(blueprint, fluid, input, output, time) {

        // The automatic ID generator
        let cleanOutput = output.includes(':') ? output.split(':')[1].split(/[\s\[\{]/)[0].replace(/[^a-z0-9_]/g, "") : "output";
        let cleanInput = input.includes(':') ? input.split(':')[1].split(/[\s\[\{]/)[0].replace(/[^a-z0-9_]/g, "") : "input";
        let idSuffix = `${cleanOutput}_from_${cleanInput}`;

        let recipe = event.recipes.custommachinery.custom_machine("techopolis:research_crafter", time)
        recipe
            .requireItem(input)
            .requireItem(blueprint).chance(0.0)
            .produceItem(output)
            .id(`techopolis:research_crafter/${idSuffix}`)
        if (fluid) {
            recipe.requireFluid(fluid)
        }

        let advancedRecipe = event.recipes.custommachinery.custom_machine("techopolis:advanced_research_crafter", time * 0.75)
        advancedRecipe
            .requireItem(input)
            .requireItem(blueprint).chance(0.0)
            .produceItem(output)
            .id(`techopolis:advanced_research_crafter/${idSuffix}`)
        if (fluid) {
            advancedRecipe.requireFluid(fluid)
        }

        let eliteRecipe = event.recipes.custommachinery.custom_machine("techopolis:elite_research_crafter", time * 0.5)
        eliteRecipe
            .requireItem(input)
            .requireItem(blueprint).chance(0.0)
            .produceItem(output)
            .id(`techopolis:elite_research_crafter/${idSuffix}`)
        if (fluid) {
            eliteRecipe.requireFluid(fluid)
        }

        let ultimateRecipe = event.recipes.custommachinery.custom_machine("techopolis:ultimate_research_crafter", time * 0.25)
        ultimateRecipe
            .requireItem(input)
            .requireItem(blueprint).chance(0.0)
            .produceItem(output)
            .id(`techopolis:ultimate_research_crafter/${idSuffix}`)
        if (fluid) {
            ultimateRecipe.requireFluid(fluid)
        }

        let itemName = output.replace(/^\d+x\s*/, '');
        event.remove({ output: itemName })
    }

    //Research Crafter
    research(ultimate, 24, null, "8x techopolis:elite_miner", "techopolis:ultimate_miners_blueprint", 800) //added
    research(ultimate, 16, null, "2x techopolis:elite_research_crafter", "techopolis:ultimate_research_crafter_blueprint", 800) //added
    research(ultimate, 32, null, "64x #c:ingots/uranium", "techopolis:bigger_reactors_blueprint", 600)
    research(ultimate, 24, null, "32x minecraft:sugar", "techopolis:speed_3_curio_blueprint", 1200) //added
    research(ultimate, 32, null, "8x ae2:cell_component_256k", "techopolis:infinity_cells_blueprint", 1200) //added
    research(ultimate, 16, null, "4x mekanism:quantum_entangloporter", "techopolis:wireless_charging_blueprint", 1200) //added
    research(ultimate, 64, null, "64x hostilenetworks:blank_data_model", "techopolis:boss_data_model_blueprint", 1200) //added
    research(ultimate, 48, null, "8x mekanism:pellet_plutonium", "techopolis:time_in_a_bottle_blueprint", 1200) //added
    research(ultimate, 48, null, "8x mekanism:pellet_polonium", "techopolis:time_in_a_bottle_blueprint", 1200) //added

    //Ultimate Miners
    researchCrafter("techopolis:ultimate_miners_blueprint", null, 'techopolis:elite_miner', 'techopolis:ultimate_miner', 1600)

    //Ultimate Research Crafter
    researchCrafter("techopolis:ultimate_research_crafter_blueprint", null, "1x techopolis:elite_research_crafter", "techopolis:ultimate_research_crafter", 1600)

    //Bigger Reactors
    researchCrafter("techopolis:bigger_reactors_blueprint", null, "1x bigreactors:basic_reactorcasing", "1x bigreactors:reinforced_reactorcasing", 80)

    //Speed 3 Curio
    researchCrafter("techopolis:speed_3_curio_blueprint", null, "1x techopolis:speed_2_curio", "techopolis:speed_3_curio", 2400)

    //Infinity Cells
    researchCrafter("techopolis:infinity_cells_blueprint", null, "8x ae2:cell_component_256k", "techopolis:infinite_me_storage_component", 1800)

    //Wireless Charging
    researchCrafter("techopolis:wireless_charging_blueprint", null, "1x mekanism:quantum_entangloporter", "chargers:wireless_charger", 3600)

    //Boss Data Model
    researchCrafter("techopolis:boss_data_model_blueprint", null, "64x hostilenetworks:blank_data_model", "techopolis:boss_data_model", 4800)

    //TIAB Time Crystal
    researchCrafter("techopolis:time_in_a_bottle_blueprint", null, "4x mekanism:pellet_plutonium", "techopolis:time_crystal", 4800)
    researchCrafter("techopolis:time_in_a_bottle_blueprint", null, "4x mekanism:pellet_polonium", "techopolis:time_crystal", 4800)

})
