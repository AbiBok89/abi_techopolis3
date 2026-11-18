//Basic Research

ServerEvents.recipes(event => {

    //Research Recipe - Basic
    event.recipes.custommachinery.custom_machine("techopolis:researcher", 100)
        .requireItem("techopolis:basic_technium_nugget")
        .produceItem("techopolis:basic_research")
        .id(`techopolis:researcher_basic_research`)

    event.recipes.custommachinery.custom_machine("techopolis:researcher", 400)
        .requireItem("techopolis:basic_technium_ingot")
        .produceItem("10x techopolis:basic_research")
        .id(`techopolis:researcher_basic_research_10`)

    let basic = 'techopolis:basic_research';

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

    //Basic Research 
    research(basic, 4, null, "techopolis:rock_washer", "techopolis:rock_enricher_blueprint", 200) //added
    research(basic, 30, null, "5x techopolis:basic_technium_machine_frame", "techopolis:flight_block_blueprint", 400) //added
    research(basic, 18, null, "16x #c:ingots/aluminum", "techopolis:alloys_blueprint", 300) //added
    research(basic, 24, null, "16x #c:ingots/bronze", "techopolis:automatic_alloy_kiln_blueprint", 300) //added
    research(basic, 32, null, "4x #c:storage_blocks/bronze", "techopolis:obsidian_blueprint", 300) //added
    research(basic, 32, null, "32x #c:chests/wooden", "techopolis:drawers_blueprint", 300) //added
    research(basic, 8, null, "32x #storagedrawers:drawers", "techopolis:drawer_controller_blueprint", 300) //added
    research(basic, 8, null, "8x #c:player_workstations/crafting_tables", "techopolis:auto_crafter_blueprint", 300) //added
    research(basic, 12, null, "16x minecraft:barrel", "techopolis:toms_blueprint", 300) //added
    research(basic, 12, null, "16x minecraft:furnace", "techopolis:compressed_furnace_blueprint", 300) //added
    research(basic, 24, null, "6x #c:seeds", "techopolis:summoning_block_blueprint", 400) //added
    research(basic, 8, null, "16x #c:dyes", "techopolis:dye_base_blueprint", 300) //added

    //Research Crafter

    //Rock Enricher
    researchCrafter("techopolis:rock_enricher_blueprint", null, "techopolis:basic_technium_machine_frame", "techopolis:rock_enricher", 400)
    researchCrafter("techopolis:rock_enricher_blueprint", null, "2x strainers:mulch", "strainers:purifying_salt_mulch", 400)

    researchCrafter("techopolis:rock_enricher_blueprint", null, "16x minecraft:brown_stained_glass", "techopolis:granite_focus", 800)
    researchCrafter("techopolis:rock_enricher_blueprint", null, "16x minecraft:light_gray_stained_glass", "techopolis:andesite_focus", 400)
    researchCrafter("techopolis:rock_enricher_blueprint", null, "16x minecraft:white_stained_glass", "techopolis:diorite_focus", 400)
    researchCrafter("techopolis:rock_enricher_blueprint", null, "24x minecraft:red_stained_glass", "techopolis:iron_focus", 400)
    researchCrafter("techopolis:rock_enricher_blueprint", null, "24x minecraft:green_stained_glass", "techopolis:tin_focus", 400)
    researchCrafter("techopolis:rock_enricher_blueprint", null, "24x minecraft:orange_stained_glass", "techopolis:copper_focus", 400)
    researchCrafter("techopolis:rock_enricher_blueprint", null, "24x minecraft:black_stained_glass", "techopolis:aluminum_focus", 400)
    researchCrafter("techopolis:rock_enricher_blueprint", null, "24x minecraft:light_blue_stained_glass", "techopolis:silver_focus", 400)
    researchCrafter("techopolis:rock_enricher_blueprint", null, "24x minecraft:blue_stained_glass", "techopolis:lead_focus", 400)
    researchCrafter("techopolis:rock_enricher_blueprint", null, "24x minecraft:yellow_stained_glass", "techopolis:nickel_focus", 400)


    //Flight Block
    researchCrafter("techopolis:flight_block_blueprint", null, "techopolis:basic_technium_machine_frame", "flightblocks:flight_block", 600)

    //Alloys
    researchCrafter("techopolis:alloys_blueprint", null, "2x casting:black_bricks", "immersiveengineering:blastbrick", 100)
    researchCrafter("techopolis:alloys_blueprint", null, "2x techopolis:grout", "immersiveengineering:alloybrick", 100)

    //Kiln
    researchCrafter("techopolis:automatic_alloy_kiln_blueprint", null, "12x immersiveengineering:alloybrick", "techopolis:alloy_kiln", 200)

    //Obsidian
    //Recipe inside the alloy_kiln.js custom machinery

    //Drawers
    researchCrafter("techopolis:drawers_blueprint", null, "8x #minecraft:planks", "2x techopolis:drawer_core", 400)
    researchCrafter("techopolis:drawers_blueprint", null, "2x minecraft:barrel", "2x techopolis:drawer_core_2", 400)
    researchCrafter("techopolis:drawers_blueprint", null, "#c:chests/wooden", "2x techopolis:drawer_core_4", 400)

    //Drawer Controller
    researchCrafter("techopolis:drawer_controller_blueprint", null, "32x #storagedrawers:drawers", "storagedrawers:controller", 400)
    researchCrafter("techopolis:drawer_controller_blueprint", null, "storagedrawers:controller", "2x storagedrawers:controller_io", 400)

    //Auto Crafter
    researchCrafter("techopolis:auto_crafter_blueprint", null, "4x #c:player_workstations/crafting_tables", "rftoolsutility:crafter1", 400)
    researchCrafter("techopolis:auto_crafter_blueprint", null, "4x rftoolsutility:crafter1", "rftoolsutility:crafter2", 400)
    researchCrafter("techopolis:auto_crafter_blueprint", null, "4x rftoolsutility:crafter2", "rftoolsutility:crafter3", 400)

    //Toms
    researchCrafter("techopolis:toms_blueprint", null, "8x #minecraft:planks ", "techopolis:toms_core", 400)

    //Furnaces
    researchCrafter("techopolis:compressed_furnace_blueprint", null, "4x minecraft:furnace", "compressedfurnace:compressed_furnace", 400)
    researchCrafter("techopolis:compressed_furnace_blueprint", null, "4x compressedfurnace:compressed_furnace", "compressedfurnace:double_compressed_furnace", 400)
    researchCrafter("techopolis:compressed_furnace_blueprint", null, "4x compressedfurnace:double_compressed_furnace", "compressedfurnace:triple_compressed_furnace", 400)
    researchCrafter("techopolis:compressed_furnace_blueprint", null, "4x minecraft:blast_furnace", "compressedfurnace:compressed_blast_furnace", 400)
    researchCrafter("techopolis:compressed_furnace_blueprint", null, "4x compressedfurnace:compressed_blast_furnace", "compressedfurnace:double_compressed_blast_furnace", 400)
    researchCrafter("techopolis:compressed_furnace_blueprint", null, "4x compressedfurnace:double_compressed_blast_furnace", "compressedfurnace:triple_compressed_blast_furnace", 400)

    //Summoning Block
    researchCrafter("techopolis:summoning_block_blueprint", null, "techopolis:basic_technium_machine_frame", "opolisutilities:summoning_block", 400)

    //Dye Base
    researchCrafter("techopolis:dye_base_blueprint", null, "8x minecraft:clay_ball", "mekanism:dye_base", 100)

    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/white", "colors:white_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/orange", "colors:orange_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/magenta", "colors:magenta_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/light_blue", "colors:light_blue_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/yellow", "colors:yellow_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/lime", "colors:lime_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/pink", "colors:pink_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/gray", "colors:gray_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/light_gray", "colors:light_gray_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/cyan", "colors:cyan_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/purple", "colors:purple_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/blue", "colors:blue_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/brown", "colors:brown_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/green", "colors:green_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/red", "colors:red_spray_can", 800)
    researchCrafter("techopolis:dye_base_blueprint", null, "8x #c:dyes/black", "colors:black_spray_can", 800)


})
