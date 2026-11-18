ServerEvents.recipes(event => {

    event.remove({ id: 'opolisutilities:catalogue' })
    event.remove({ id: 'opolisutilities:cloche' })
    event.remove({ id: 'opolisutilities:block_breaker' })
    event.remove({ id: 'opolisutilities:block_placer' })
    event.remove({ id: 'opolisutilities:resource_generator' })
    event.remove({ id: 'opolisutilities:fluid_generator' })
    event.remove({ id: 'opolisutilities:ender_pearl_fragment' })
    event.remove({ id: 'opolisutilities:ender_pearl' })
    event.remove({ id: 'opolisutilities:crafter' })
    event.remove({ id: 'opolisutilities:catalogue/basic_loot_box' })
    event.remove({ id: 'opolisutilities:resource_generator/stones' })
    event.remove({ id: 'opolisutilities:resource_generator/cobblestone' })
    event.remove({ id: /opolisutilities:cloche/ })

    event.shaped('opolisutilities:resource_generator', ["SSS", "PMP", "SSS"], { S: 'minecraft:stone_bricks', M: 'techopolis:sturdy_machine_frame', P: 'minecraft:stone_pickaxe' }).id('techopolis:builders_generator')

    event.replaceInput({ id: 'opolisutilities:sapling_grower' }, 'minecraft:bone_block', "minecraft:bone_meal")

    event.recipes.opolisutilities.resource_generator("#techopolis:resource_generator").id('techopolis:resource_generator/techopolis_colors_recipes')

})
