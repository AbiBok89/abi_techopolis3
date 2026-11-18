ServerEvents.recipes(event => {
    const machine_id = "techopolis:super_empowerer";

    // Define the multiblock structure
    const empowerer_structure = [
        ["aaaaa", "abbba", "abbba", "abbba", "aamaa"],
        ["a   a", "  c  ", " cdc ", "  c  ", "a   a"],
        ["a   a", "     ", "     ", "     ", "a   a"],
        ["e   e", "     ", "     ", "     ", "e   e"]
    ];

    const empowerer_mapping = {
        "a": "techopolis:multiblock_machine_casing",
        "b": "techopolis:super_empowered_crystal_block",
        "c": "actuallyadditions:display_stand",
        "d": "actuallyadditions:empowerer",
        "e": "techopolis:hellish_technium_machine_frame"
    };

    // --- Helper Function ---
    function addEmpowererRecipe(outputItem, mainInput, standItems, energyTotal) {
        let duration = 60; // 60 ticks matches your original AA recipes
        let energyPerTick = Math.ceil(energyTotal / duration);

        let recipe = event.recipes.custommachinery.custom_machine(machine_id, duration)
            .requireEnergyPerTick(energyPerTick)
            .requireStructure(empowerer_structure, empowerer_mapping)
            // Center item is strictly bound to input1
            .requireItem(mainInput, "input1");

        // Outer items are bound to specific slots (input2-input5)
        standItems.forEach((item, index) => {
            let slotId = "input" + (index + 2);
            recipe.requireItem(item, slotId);
        });

        // Produce the item in the output slot
        recipe.produceItem(outputItem, "output")
            .id(`techopolis:super_empowerer/${outputItem.split(':')[1]}`);
    }

    // --- Crystal Blocks (24,000 Energy) ---
    addEmpowererRecipe('actuallyadditions:empowered_emeradic_crystal_block', "actuallyadditions:emeradic_crystal_block", [
        "#c:storage_blocks/uranium", "#c:storage_blocks/peridot", "#c:storage_blocks/uranium", "#c:storage_blocks/peridot"
    ], 24000);

    addEmpowererRecipe('actuallyadditions:empowered_enori_crystal_block', "actuallyadditions:enori_crystal_block", [
        "#c:storage_blocks/iron", 'minecraft:quartz_block', "#c:storage_blocks/iron", 'minecraft:quartz_block'
    ], 24000);

    addEmpowererRecipe('actuallyadditions:empowered_restonia_crystal_block', "actuallyadditions:restonia_crystal_block", [
        'bigreactors:inanite_block', '#c:storage_blocks/ruby', 'bigreactors:inanite_block', '#c:storage_blocks/ruby'
    ], 24000);

    addEmpowererRecipe('actuallyadditions:empowered_diamatine_crystal_block', "actuallyadditions:diamatine_crystal_block", [
        "#c:storage_blocks/platinum", '#c:storage_blocks/certus_quartz', "#c:storage_blocks/platinum", '#c:storage_blocks/certus_quartz'
    ], 24000);

    addEmpowererRecipe('actuallyadditions:empowered_void_crystal_block', "actuallyadditions:void_crystal_block", [
        '#c:storage_blocks/graphite', 'ae2:fluix_block', '#c:storage_blocks/graphite', 'ae2:fluix_block'
    ], 24000);

    addEmpowererRecipe('actuallyadditions:empowered_palis_crystal_block', "actuallyadditions:palis_crystal_block", [
        "#c:storage_blocks/lead", '#c:storage_blocks/sapphire', "#c:storage_blocks/lead", '#c:storage_blocks/sapphire'
    ], 24000);

    // --- Other Empowering Recipes (24,000 Energy) ---
    addEmpowererRecipe('minecraft:blaze_powder', "minecraft:gunpowder", [
        "techopolis:blazing_sawdust", "techopolis:blazing_sawdust", "techopolis:blazing_sawdust", "techopolis:blazing_sawdust"
    ], 24000);

    addEmpowererRecipe('minecraft:netherite_upgrade_smithing_template', "minecraft:smithing_table", [
        "minecraft:netherite_ingot", "minecraft:diamond", "minecraft:netherite_ingot", "minecraft:diamond"
    ], 24000);

    addEmpowererRecipe('techopolis:blazing_slime_block', "minecraft:slime_block", [
        "minecraft:blaze_powder", "minecraft:blaze_powder", "minecraft:blaze_powder", "minecraft:blaze_powder"
    ], 24000);

    addEmpowererRecipe('techopolis:debris', 'techopolis:lava_planks', [
        "minecraft:blaze_rod", "minecraft:magma_cream", "minecraft:ghast_tear", "techopolis:wither_skeleton_bone"
    ], 24000);

    addEmpowererRecipe('actuallyadditions:empowered_canola_seed', 'actuallyadditions:crystallized_canola_seed', [
        "actuallyadditions:canola_seeds", "actuallyadditions:canola_seeds", "actuallyadditions:canola_seeds", "actuallyadditions:canola_seeds"
    ], 24000);

    // --- Advanced / Space Items (56,000 Energy) ---
    addEmpowererRecipe('stellaris:cheese', 'techopolis:moon_curd', [
        "stellaris:moon_stone", "stellaris:mercury_stone", "stellaris:venus_stone", "stellaris:mars_stone"
    ], 56000);

    addEmpowererRecipe('techopolis:alien_ingot', 'techopolis:cheesium_ingot', [
        "techopolis:shooting_star_piece", "techopolis:mogler_hide", "techopolis:martian_claw", "techopolis:pygro_nugget"
    ], 56000);
});
