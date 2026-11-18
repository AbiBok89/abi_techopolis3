//Advanced Research

ServerEvents.recipes(event => {

    //Research Recipe - Advanced
    event.recipes.custommachinery.custom_machine("techopolis:researcher", 100)
        .requireItem("techopolis:advanced_technium_nugget")
        .produceItem("techopolis:advanced_research")
        .id(`techopolis:researcher_advanced_research`)

    event.recipes.custommachinery.custom_machine("techopolis:researcher", 400)
        .requireItem("techopolis:advanced_technium_ingot")
        .produceItem("10x techopolis:advanced_research")
        .id(`techopolis:researcher_advanced_research_10`)

    let advanced = 'techopolis:advanced_research';


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
    research(advanced, 12, null, "16x #storagedrawers:drawers", "techopolis:drawer_upgrades_blueprint", 200) //added
    research(advanced, 16, null, "6x techopolis:compactor", "techopolis:drawer_compacting_blueprint", 200) //added
    research(advanced, 16, "4000x immersiveengineering:creosote", "16x ceramicbucket:ceramic_bucket", "techopolis:fluid_recycling_blueprint", 400) //added
    research(advanced, 16, null, "24x #c:gears", "techopolis:item_recycling_blueprint", 400) //added
    research(advanced, 16, null, "32x #c:ingots/aluminum", "techopolis:manufactured_osmium_blueprint", 400) //added
    research(advanced, 24, null, "8x techopolis:basic_miner", "techopolis:advanced_miners_blueprint", 400) //added
    research(advanced, 16, null, "2x techopolis:research_crafter", "techopolis:advanced_research_crafter_blueprint", 400) //added
    research(advanced, 24, null, "64x #c:foods", "techopolis:hunger_curio_blueprint", 800) //added
    research(advanced, 24, null, "16x minecraft:sugar", "techopolis:speed_1_curio_blueprint", 800) //added

    //Research Crafter


    //Drawer Upgrades
    researchCrafter("techopolis:drawer_upgrades_blueprint", null, "2x #minecraft:planks", "storagedrawers:upgrade_template", 200)

    //Drawer Compacting
    researchCrafter("techopolis:drawer_compacting_blueprint", null, "1x techopolis:compactor", "techopolis:compacting_core", 400)

    //Fluid Recycler
    researchCrafter("techopolis:fluid_recycling_blueprint", null, "techopolis:basic_technium_machine_frame", "techopolis:fluid_recycler", 400)

    //Item Recycler
    researchCrafter("techopolis:item_recycling_blueprint", null, "techopolis:basic_technium_machine_frame", "techopolis:item_recycler", 400)

    //Osmium
    researchCrafter("techopolis:manufactured_osmium_blueprint", null, "4x #c:dusts/aluminum", "techopolis:manufactured_osmium", 600)

    //Advanced Miner
    researchCrafter("techopolis:advanced_miners_blueprint", null, 'techopolis:basic_miner', 'techopolis:advanced_miner', 800)

    //Advanced Research Crafter
    researchCrafter("techopolis:advanced_research_crafter_blueprint", null, "1x techopolis:research_crafter", "techopolis:advanced_research_crafter", 800)

    //Hunger Curio
    researchCrafter("techopolis:hunger_curio_blueprint", null, "1x techopolis:curio", "techopolis:hunger_curio", 1200)

    //Speed 1 Curio
    researchCrafter("techopolis:speed_1_curio_blueprint", null, "1x techopolis:curio", "techopolis:speed_1_curio", 1200)




})
