//Elite Research

ServerEvents.recipes(event => {

    //Research Recipe - Elite
    event.recipes.custommachinery.custom_machine("techopolis:researcher", 100)
        .requireItem("techopolis:elite_technium_nugget")
        .produceItem("techopolis:elite_research")
        .requireEnergyPerTick(4000)
        .id(`techopolis:researcher_elite_research`)

    event.recipes.custommachinery.custom_machine("techopolis:researcher", 400)
        .requireItem("techopolis:elite_technium_ingot")
        .produceItem("10x techopolis:elite_research")
        .requireEnergyPerTick(4000)
        .id(`techopolis:researcher_elite_research_10`)

    let elite = 'techopolis:elite_research';


    //Researcher - Function

    function research(researchTier, researchAmount, fluid, input, output, time) {
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




    //Advanced Research 
    research(elite, 24, null, "4x ae2:singularity", "techopolis:unstable_matter_blueprint", 800) //added
    research(elite, 16, null, "32x #c:chests/wooden", "techopolis:ender_storage_blueprint", 800) //added
    research(elite, 16, null, "32x #minecraft:wool", "techopolis:elevator_blueprint", 800) //added
    research(elite, 48, null, '4x techopolis:dimensional_ore_extractor_mk2', "techopolis:ultimine_blueprint", 800) //added
    research(elite, 32, null, '6x immersiveengineering:plate_hop_graphite', "techopolis:unbreakable_electrodes_blueprint", 800) //added
    research(elite, 24, null, "24x minecraft:sugar", "techopolis:speed_2_curio_blueprint", 1200) //added
    research(elite, 16, null, "2x mekanism:teleportation_core", "techopolis:waystones_blueprint", 800) //added
    research(elite, 24, null, "8x techopolis:advanced_miner", "techopolis:elite_miners_blueprint", 800) //added
    research(elite, 16, null, "2x techopolis:advanced_research_crafter", "techopolis:elite_research_crafter_blueprint", 800) //added


    //Research Crafter

    //Unstable Matter
    researchCrafter("techopolis:unstable_matter_blueprint", null, "techopolis:simulation_pearl", 'replication:matter_blueprint[replication:blueprint={Item:{count:1,id:"techopolis:unstable_matter"},Progress:1.0d}]', 1200)

    //Ender Storage
    researchCrafter("techopolis:ender_storage_blueprint", null, "mekanism:teleportation_core", 'techopolis:ender_teleportation_core', 1200)

    //Elevator
    researchCrafter("techopolis:elevator_blueprint", null, "mekanism:teleportation_core", 'techopolis:elevator_teleportation_core', 1200)

    //Ultimine
    researchCrafter("techopolis:ultimine_blueprint", null, 'mekanism:atomic_disassembler', 'techopolis:ultimine_scroll', 1200)

    //Unbreakable Electrodes
    researchCrafter("techopolis:unbreakable_electrodes_blueprint", "8000x casting:molten_obsidian", 'immersiveengineering:graphite_electrode', 'immersiveengineering:graphite_electrode[minecraft:unbreakable={show_in_tooltip:true}]', 1200)

    //Speed 2 Curio
    researchCrafter("techopolis:speed_2_curio_blueprint", null, "1x techopolis:speed_1_curio", "techopolis:speed_2_curio", 1800)

    //Waystones
    researchCrafter("techopolis:waystones_blueprint", null, "1x mekanism:teleportation_core", "waystones:warp_stone", 1200)

    //Elite Miners
    researchCrafter("techopolis:elite_miners_blueprint", null, 'techopolis:advanced_miner', 'techopolis:elite_miner', 1200)

    //Elite Research Crafter
    researchCrafter("techopolis:elite_research_crafter_blueprint", null, "1x techopolis:advanced_research_crafter", "techopolis:elite_research_crafter", 1200)

})
