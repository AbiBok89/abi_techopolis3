//Minecraft

ServerEvents.recipes(event => {

    event.remove({ id: 'minecraft:glass' })
    event.remove({ id: 'minecraft:furnace' })
    event.remove({ id: "minecraft:magma_cream" })
    event.remove({ id: "minecraft:netherite_ingot" })
    event.remove({ id: 'minecraft:nether_brick' })
    event.remove({ id: 'minecraft:string' })
    event.remove({ type: 'minecraft:smelting', input: '#c:raw_materials' })
    event.remove({ type: 'minecraft:smelting', input: '#c:ores' })
    event.remove({ type: 'minecraft:blasting', input: '#c:raw_materials' })
    event.remove({ type: 'minecraft:blasting', input: '#c:ores' })

    event.blasting('minecraft:smooth_stone', 'minecraft:cobblestone').id('techopolis:smooth_stone_blasting')
    event.blasting('casting:black_brick', 'techopolis:grout').id('techopolis:black_brick')
    event.blasting('minecraft:glass', '#minecraft:sand').id('techopolis:glass')
    event.blasting('ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"techopolis:hot_water"}]', 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]').id('techopolis:hot_water_bucket')
    event.blasting('techopolis:hot_water_bucket', 'minecraft:water_bucket').id('techopolis:hot_water_bucket_iron')

    event.blasting('minecraft:redstone', 'strainers:redstone_ore_piece').id('techopolis:redstone_from_ore_piece_blasting')
    event.smelting('minecraft:redstone', 'strainers:redstone_ore_piece').id('techopolis:redstone_from_ore_piece_smelting')

    event.blasting('bigreactors:anglesite_crystal', 'techopolis:anglesite_dust').id('techopolis:anglesite_from_dust_blasting')
    event.smelting('bigreactors:anglesite_crystal', 'techopolis:anglesite_dust').id('techopolis:anglesite_from_dust_smelting')

    event.smelting('replication:replica_ingot', 'techopolis:replica_dust').id('techopolis:replica_from_dust_smelting')
    event.blasting('replication:replica_ingot', 'techopolis:replica_dust').id('techopolis:replica_from_dust_blasting')

    event.smelting('minecraft:ender_pearl', '#c:dusts/ender_pearl').id('techopolis:ender_pearl_smelting')
    event.smelting('actuallyadditions:black_quartz', '#c:dusts/black_quartz').id('techopolis:black_quartz_smelting')

    //Minecraft - Crafting
    event.shaped('minecraft:dirt', [" L ", "L L", " L "], { L: '#minecraft:leaves' }).id('techopolis:dirt')
    event.shaped('minecraft:comparator', [" R ", "RPR", "SSS"], { S: 'minecraft:stone', R: 'redstone_torch', P: 'actuallyadditions:palis_crystal' }).id('techopolis:comparator')
    event.shaped('minecraft:stonecutter', [" P ", "SSS"], { S: '#c:cobblestones', P: 'minecraft:stone_pickaxe' }).id('minecraft:stonecutter')
    event.shaped('minecraft:sculk', [" E ", "EDE", " E "], { E: 'extendedae:entro_dust', D: 'minecraft:dirt' }).id('techopolis:sculk')
    event.shaped('minecraft:totem_of_undying', ["LLL", "LCL", "LLL"], { L: 'techopolis:lunar_technium_ingot', C: 'stellaris:cheese_block' }).id('techopolis:totem_of_undying')
    event.shaped('8x minecraft:end_stone', ["SSS", "SES", "SSS"], { S: 'minecraft:stone', E: 'opolisutilities:ender_pearl_fragment' }).id('techopolis:end_stone')
    event.shaped('minecraft:calcite', ["SB", "BS"], { S: 'minecraft:stone', B: 'minecraft:bone_meal' }).id('techopolis:calcite')

})
