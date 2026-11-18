ServerEvents.recipes(event => {
    event.remove({ mod: 'inworldrecipes' })

    // End portal frame
    event.recipes.inworldrecipes.block_interaction(
        'right',
        'minecraft:end_portal_frame',
        'techopolis:lunar_technium_nugget',
        false, // damage_held_item
        false, // consume_held_item
        true,  // pop_items
        true   // ignore_block_state
    )
        .outputBlockState('minecraft:air')
        .results([
            ['minecraft:end_portal_frame']
        ])
        .id('techopolis:inworldrecipes/end_portal_frame')

    // Ancient portal frame -> end portal frame
    event.recipes.inworldrecipes.block_interaction(
        'right',
        'endrem:ancient_portal_frame',
        'techopolis:lunar_technium_nugget',
        false, // damage_held_item
        false, // consume_held_item
        true,  // pop_items
        true   // ignore_block_state
    )
        .outputBlockState('minecraft:air')
        .results([
            ['minecraft:end_portal_frame']
        ])
        .id('techopolis:inworldrecipes/end_portal_frame_ancient')

    // Grass block from wheat seeds on dirt
    event.recipes.inworldrecipes.block_interaction(
        'right',
        'minecraft:dirt',
        'minecraft:wheat_seeds',
        false, // damage_held_item
        true,  // consume_held_item
        false, // pop_items
        true   // ignore_block_state
    )
        .outputBlockState('minecraft:grass_block')
        .id('techopolis:inworldrecipes/grass_block')

    // Wrench pickup: wooden scaffolding
    event.recipes.inworldrecipes.block_interaction(
        'right',
        'techopolis:wooden_scaffolding',
        '#c:tools/wrench',
        false, // damage_held_item
        false, // consume_held_item
        true,  // pop_items
        true   // ignore_block_state
    )
        .outputBlockState('minecraft:air')
        .results([
            ['techopolis:wooden_scaffolding']
        ])
        .id('techopolis:inworldrecipes/wooden_scaffolding')

    // Wrench pickup: multiblock gearbox
    event.recipes.inworldrecipes.block_interaction(
        'right',
        'techopolis:multiblock_gearbox',
        '#c:tools/wrench',
        false, // damage_held_item
        false, // consume_held_item
        true,  // pop_items
        true   // ignore_block_state
    )
        .outputBlockState('minecraft:air')
        .results([
            ['techopolis:multiblock_gearbox']
        ])
        .id('techopolis:inworldrecipes/multiblock_gearbox')

    // Wrench pickup: dimensional detector
    event.recipes.inworldrecipes.block_interaction(
        'right',
        'techopolis:dimensional_detector',
        '#c:tools/wrench',
        false, // damage_held_item
        false, // consume_held_item
        true,  // pop_items
        true   // ignore_block_state
    )
        .outputBlockState('minecraft:air')
        .results([
            ['techopolis:dimensional_detector']
        ])
        .id('techopolis:inworldrecipes/dimensional_detector')

    // Wrench pickup: multiblock vent
    event.recipes.inworldrecipes.block_interaction(
        'right',
        'techopolis:multiblock_vent',
        '#c:tools/wrench',
        false, // damage_held_item
        false, // consume_held_item
        true,  // pop_items
        true   // ignore_block_state
    )
        .outputBlockState('minecraft:air')
        .results([
            ['techopolis:multiblock_vent']
        ])
        .id('techopolis:inworldrecipes/multiblock_vent')

    // Wrench pickup: multiblock circuitry
    event.recipes.inworldrecipes.block_interaction(
        'right',
        'techopolis:multiblock_circuitry',
        '#c:tools/wrench',
        false, // damage_held_item
        false, // consume_held_item
        true,  // pop_items
        true   // ignore_block_state
    )
        .outputBlockState('minecraft:air')
        .results([
            ['techopolis:multiblock_circuitry']
        ])
        .id('techopolis:inworldrecipes/multiblock_circuitry')

    // Wrench pickup: multiblock machine casing
    event.recipes.inworldrecipes.block_interaction(
        'right',
        'techopolis:multiblock_machine_casing',
        '#c:tools/wrench',
        false, // damage_held_item
        false, // consume_held_item
        true,  // pop_items
        true   // ignore_block_state
    )
        .outputBlockState('minecraft:air')
        .results([
            ['techopolis:multiblock_machine_casing']
        ])
        .id('techopolis:inworldrecipes/multiblock_machine_casing')

    // Chorus flower harvester
    event.recipes.inworldrecipes.block_interaction(
        'right',
        'minecraft:chorus_flower',
        'techopolis:chorus_flower_harvester',
        false, // damage_held_item
        true,  // consume_held_item
        true,  // pop_items
        true   // ignore_block_state
    )
        .outputBlockState('minecraft:air')
        .results([
            ['minecraft:chorus_flower']
        ])
        .id('techopolis:inworldrecipes/chorus_flower')

    // Crystallized canola seed in refined oil -> crystallized oil
    event.custom({
        type: 'inworldrecipes:drop_item_in_fluid_converts_fluid',
        dropped_item: {
            item: 'actuallyadditions:crystallized_canola_seed'
        },
        fluid: 'actuallyadditions:refined_canola_oil',
        new_fluid: 'actuallyadditions:crystallized_oil',
        destroy_items: true
    })

    // Empowered canola seed in crystallized oil -> empowered oil
    event.custom({
        type: 'inworldrecipes:drop_item_in_fluid_converts_fluid',
        dropped_item: {
            item: 'actuallyadditions:empowered_canola_seed'
        },
        fluid: 'actuallyadditions:crystallized_oil',
        new_fluid: 'actuallyadditions:empowered_oil',
        destroy_items: true
    })

    // Dragon slayer: right-click ender dragon for dragon head
    event.custom({
        type: 'inworldrecipes:right_click_on_entity_transforms_item',
        held_item: {
            item: 'techopolis:dragon_slayer_5000'
        },
        entity: 'minecraft:ender_dragon',
        damage_held_item: false,
        consume_held_item: false,
        destroy_entity: true,
        pop_item: false,
        results: [
            {
                item: {
                    count: 1,
                    id: 'minecraft:dragon_head'
                }
            }
        ]
    })
})
