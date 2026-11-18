ServerEvents.recipes(event => {

    event.remove({ mod: 'alltheores', type: 'actuallyadditions:crushing' })
    event.remove({ id: 'actuallyadditions:empowering/palis' })
    event.remove({ id: 'actuallyadditions:empowering/void' })
    event.remove({ id: 'actuallyadditions:empowering/diamatine' })
    event.remove({ id: 'actuallyadditions:empowering/restonia' })
    event.remove({ id: 'actuallyadditions:empowering/enori' })
    event.remove({ id: 'actuallyadditions:empowering/emeradic' })
    event.remove({ id: 'actuallyadditions:coal_to_tiny' })
    event.remove({ id: 'actuallyadditions:charcoal_to_tiny' })
    event.remove({ id: 'actuallyadditions:tiny_to_charcoal' })
    event.remove({ id: 'actuallyadditions:tiny_to_coal' })
    event.remove({ id: "actuallyadditions:laser/soul_sand" })
    event.remove({ id: "actuallyadditions:compat/cloche_canola" })
    event.remove({ id: "actuallyadditions:compat/cloche_coffee" })
    event.remove({ id: "actuallyadditions:compat/cloche_rice" })
    event.remove({ id: "actuallyadditions:compat/cloche_flax" })
    event.remove({ id: /actuallyadditions:crushing/ })

    event.shaped('actuallyadditions:canola_press', ["CCC", "SML", "CCC"], { M: 'techopolis:basic_technium_machine_frame', C: 'compressedblocks:c0_cobblestone', S: '#c:ingots/silver', L: '#c:ingots/lead' }).id('actuallyadditions:canola_press')
    event.shaped('actuallyadditions:fermenting_barrel', ["LEL", "LSL", "LEL"], { L: '#minecraft:logs', S: '#c:ingots/silver', E: '#c:ingots/lead' }).id('actuallyadditions:fermenting_barrel')
    event.shaped('actuallyadditions:oil_generator', ["LBL", "LML", "LEL"], { B: '#c:storage_blocks/lead', M: 'techopolis:basic_technium_machine_frame', L: 'compressedblocks:c0_cobblestone', E: 'immersiveengineering:fluid_pump' }).id('actuallyadditions:oil_generator')

    event.shapeless('4x actuallyadditions:black_quartz', ['1x actuallyadditions:black_quartz_block']).id('techopolis:black_quartz')

    event.replaceInput({ id: 'actuallyadditions:atomic_reconstructor' }, 'minecraft:iron_ingot', "#c:ingots/silver")
    event.replaceInput({ id: 'actuallyadditions:atomic_reconstructor' }, 'actuallyadditions:iron_casing', "techopolis:basic_technium_machine_frame")
    event.replaceInput({ id: 'actuallyadditions:display_stand' }, 'actuallyadditions:advanced_coil', "minecraft:netherite_ingot")
    event.replaceInput({ id: 'actuallyadditions:single_battery' }, 'actuallyadditions:advanced_coil', "#c:ingots/zinc")
    event.replaceInput({ mod: 'actuallyadditions' }, 'actuallyadditions:iron_casing', "techopolis:elite_technium_machine_frame")
    event.replaceInput({ id: 'actuallyadditions:empowerer' }, 'techopolis:elite_technium_machine_frame', "techopolis:ultimate_technium_machine_frame")
    event.replaceInput({ id: 'actuallyadditions:laser_relay' }, 'actuallyadditions:advanced_coil', 'mekanism:quantum_entangloporter')
    event.replaceInput({ id: 'actuallyadditions:laser/crystalize_void_crystal' }, '#minecraft:coals', 'minecraft:coal')

    event.recipes.actuallyadditions.laser("actuallyadditions:enori_crystal", "alltheores:nickel_ingot", 80).id('actuallyadditions:laser/crystalize_enori_crystal')
    event.recipes.actuallyadditions.laser("actuallyadditions:enori_crystal_block", "alltheores:nickel_block", 800).id('actuallyadditions:laser/crystalize_enori_crystal_block')
    event.recipes.actuallyadditions.laser("minecraft:lapis_lazuli", "alltheores:lead_ingot", 80).id('techopolis:laser/lapis')
    event.recipes.actuallyadditions.laser("minecraft:lapis_block", "alltheores:lead_block", 800).id('techopolis:laser/lapis_block')

    event.recipes.actuallyadditions.empowering('actuallyadditions:empowered_emeradic_crystal_block', "actuallyadditions:emeradic_crystal_block", [
        "#c:storage_blocks/uranium",
        "#c:storage_blocks/peridot",
        "#c:storage_blocks/uranium",
        "#c:storage_blocks/peridot",
    ]).energy(24000).color(Color.GREEN.argb).time(60).id('actuallyadditions:empowering/emeradic_block')

    event.recipes.actuallyadditions.empowering('actuallyadditions:empowered_enori_crystal_block', "actuallyadditions:enori_crystal_block", [
        "#c:storage_blocks/iron",
        'minecraft:quartz_block',
        "#c:storage_blocks/iron",
        'minecraft:quartz_block',
    ]).energy(24000).color(Color.GRAY.argb).time(60).id('actuallyadditions:empowering/enori_block')

    event.recipes.actuallyadditions.empowering('actuallyadditions:empowered_restonia_crystal_block', "actuallyadditions:restonia_crystal_block", [
        'bigreactors:inanite_block',
        '#c:storage_blocks/ruby',
        'bigreactors:inanite_block',
        '#c:storage_blocks/ruby',
    ]).energy(24000).color(Color.RED.argb).time(60).id('actuallyadditions:empowering/restonia_block')

    event.recipes.actuallyadditions.empowering('actuallyadditions:empowered_diamatine_crystal_block', "actuallyadditions:diamatine_crystal_block", [
        "#c:storage_blocks/platinum",
        '#c:storage_blocks/certus_quartz',
        "#c:storage_blocks/platinum",
        '#c:storage_blocks/certus_quartz',
    ]).energy(24000).color(Color.BLUE.argb).time(60).id('actuallyadditions:empowering/diamatine_block')

    event.recipes.actuallyadditions.empowering('actuallyadditions:empowered_void_crystal_block', "actuallyadditions:void_crystal_block", [
        '#c:storage_blocks/graphite',
        'ae2:fluix_block',
        '#c:storage_blocks/graphite',
        'ae2:fluix_block',
    ]).energy(24000).color(Color.LIME_DYE.argb).time(60).id('actuallyadditions:empowering/void_block')

    event.recipes.actuallyadditions.empowering('actuallyadditions:empowered_palis_crystal_block', "actuallyadditions:palis_crystal_block", [
        "#c:storage_blocks/lead",
        '#c:storage_blocks/sapphire',
        "#c:storage_blocks/lead",
        '#c:storage_blocks/sapphire',
    ]).energy(24000).color(Color.GREEN.argb).time(60).id('actuallyadditions:empowering/palis_block')


    //Blaze Powder
    event.recipes.actuallyadditions.empowering('minecraft:blaze_powder', "minecraft:gunpowder", [
        "techopolis:blazing_sawdust",
        "techopolis:blazing_sawdust",
        "techopolis:blazing_sawdust",
        "techopolis:blazing_sawdust",
    ]).energy(24000).color(Color.RED.argb).time(60).id('actuallyadditions:empowering/blaze_powder')

    //Smithing Template
    event.recipes.actuallyadditions.empowering('minecraft:netherite_upgrade_smithing_template', "minecraft:smithing_table", [
        "minecraft:netherite_ingot",
        "minecraft:diamond",
        "minecraft:netherite_ingot",
        "minecraft:diamond",
    ]).energy(24000).color(Color.BROWN_DYE.argb).time(60).id('actuallyadditions:empowering/smithing_template')

    //Blazing Slime
    event.recipes.actuallyadditions.empowering('techopolis:blazing_slime_block', "minecraft:slime_block", [
        "minecraft:blaze_powder",
        "minecraft:blaze_powder",
        "minecraft:blaze_powder",
        "minecraft:blaze_powder",
    ]).energy(24000).color(Color.BROWN_DYE.argb).time(60).id('actuallyadditions:empowering/blazing_slime_block')

    //Debris
    event.recipes.actuallyadditions.empowering('techopolis:debris', 'techopolis:lava_planks', [
        "minecraft:blaze_rod",
        "minecraft:magma_cream",
        "minecraft:ghast_tear",
        "techopolis:wither_skeleton_bone",
    ]).energy(24000).color(Color.RED.argb).time(60).id('actuallyadditions:empowering/debris')

    //Space Cheese (Cheese)
    event.recipes.actuallyadditions.empowering('stellaris:cheese', 'techopolis:moon_curd', [
        "stellaris:moon_stone",
        "stellaris:mercury_stone",
        "stellaris:venus_stone",
        "stellaris:mars_stone",
    ]).energy(56000).color(Color.YELLOW.argb).time(60).id('techopolis:empowering/cheese')

    //Alien Ingot
    event.recipes.actuallyadditions.empowering('techopolis:alien_ingot', 'techopolis:cheesium_ingot', [
        "techopolis:shooting_star_piece",
        "techopolis:mogler_hide",
        "techopolis:martian_claw",
        "techopolis:pygro_nugget",
    ]).energy(56000).color(Color.GREEN.argb).time(60).id('techopolis:empowering/alien_ingot')

})
