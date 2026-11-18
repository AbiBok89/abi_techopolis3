ServerEvents.recipes(event => {

    event.remove({ id: 'casting:solidifier/multiblock/mixer' })
    event.remove({ id: 'casting:solidifier/ender/fragment' })
    event.remove({ id: 'casting:smelting/black_brick' })
    event.remove({ id: 'casting:melting/ender/from_fragment' })
    event.remove({ id: 'casting:mixer' })
    event.remove({ id: "casting:mixer/fluix" })
    event.remove({ id: 'casting:mixer/copper_alloy' })
    event.remove({ id: /casting:.*\/fluix\/.*/ })


    event.shaped('casting:block_mold', ["BBB", "B B", "BBB"], { B: 'casting:black_brick' }).id('casting:block_mold')
    event.shaped('casting:gem_mold', [" B ", "BGB", " B "], { B: 'casting:black_brick', G: 'minecraft:coal' }).id('techopolis:gem_mold')
    event.shaped('casting:nugget_mold', [" B ", "BGB", " B "], { B: 'casting:black_brick', G: '#techopolis:mini_coals' }).id('techopolis:nugget_mold')
    event.shaped('casting:plate_mold', [" B ", "BGB", " B "], { B: 'casting:black_brick', G: '#minecraft:wooden_pressure_plates' }).id('techopolis:plate_mold')
    event.shaped('immersiveengineering:mold_packing_4', [" B ", "BGB", " B "], { B: 'casting:black_brick', G: 'minecraft:quartz_block' }).id('techopolis:packing_4_mold')
    event.shaped('immersiveengineering:mold_bullet_casing', [" B ", "BGB", " B "], { B: 'casting:black_brick', G: 'immersiveengineering:empty_casing' }).id('techopolis:bullet_casing_mold')
    event.shaped('techopolis:easter_egg_mold', [" B ", "BGB", " B "], { B: 'casting:black_brick', G: 'minecraft:egg' }).id('techopolis:egg_mold')
    event.shaped("techopolis:pure_matter_mold", [" B ", "BGB", " B "], { B: 'casting:black_brick', G: 'techopolis:unstable_matter' }).id('techopolis:pure_matter_mold')

    //Fuels
    event.custom({
        "type": "casting:fuel",
        "duration": 300,
        "fluid": {
            "amount": 25,
            "id": "techopolis:hot_water"
        },
        "temp": 500
    }).id('techopolis:casting/fuel/hot_water')

    //Melting
    event.recipes.casting.melting('opolisutilities:mini_charcoal', '10x casting:molten_coal', 500).id('techopolis:casting/melting/mini_charcoal')
    event.recipes.casting.melting('opolisutilities:mini_coal', '10x casting:molten_coal', 500).id('techopolis:casting/melting/mini_coal')
    event.recipes.casting.melting('minecraft:charcoal', '80x casting:molten_coal', 500).id('techopolis:casting/melting/charcoal')
    event.recipes.casting.melting('mekanism:dust_charcoal', '80x casting:molten_coal', 500).id('techopolis:casting/melting/charcoal_dust')
    event.recipes.casting.melting('mekanism:block_charcoal', '720x casting:molten_coal', 500).id('techopolis:casting/melting/charcoal_block')
    event.recipes.casting.melting('compressedblocks:crated_charcoal', '720x casting:molten_coal', 500).id('techopolis:casting/melting/charcoal_block_crate')
    event.recipes.casting.melting('techopolis:glass_shard', '500x casting:molten_glass', 250).id('techopolis:casting/melting/glass_shard')
    event.recipes.casting.melting('stellaris:cheese', '250x techopolis:molten_cheese', 500).id('techopolis:casting/melting/cheese')
    event.recipes.casting.melting('stellaris:cheese_block', '810x techopolis:molten_cheese', 500).id('techopolis:casting/melting/cheese_block')
    event.recipes.casting.melting('techopolis:cheesium_ingot', '90x techopolis:molten_cheese', 500).id('techopolis:casting/melting/cheese_ingot')
    event.recipes.casting.melting('strainers:purifying_salt_mulch', '500x strainers:purifying_water', 500).id('techopolis:casting/melting/purifying_salt_mulch')

    //Solidifier
    event.recipes.casting.solidifier('casting:nugget_mold', '10x casting:molten_coal', 'opolisutilities:mini_coal').id('techopolis:casting/solidifier/mini_coal')
    event.recipes.casting.solidifier('casting:gear_mold', '4000x casting:molten_stone', 'techopolis:stone_gear').id('techopolis:casting/solidifier/stone_gear')
    event.recipes.casting.solidifier('mekanism:bio_fuel', '500x strainers:purifying_water', 'techopolis:purified_bio_fuel').id('techopolis:casting/solidifier/purified_bio_fuel')
    event.recipes.casting.solidifier('mekanism:block_bio_fuel', '4500x strainers:purifying_water', 'techopolis:purified_bio_fuel_block').id('techopolis:casting/solidifier/purified_bio_fuel_block')
    event.recipes.casting.solidifier('casting:gear_mold', '320x casting:molten_coal', 'techopolis:coal_gear').id('techopolis:casting/solidifier/coal_gear')
    event.recipes.casting.solidifier('casting:black_bricks', '80x casting:molten_coal', 'immersiveengineering:cokebrick').id('techopolis:casting/solidifier/coke_brick')
    event.recipes.casting.solidifier('#planks', '125x immersiveengineering:creosote', 'immersiveengineering:treated_wood_horizontal').id('techopolis:casting/solidifier/treated_wood_horizontal_from_planks')
    event.recipes.casting.solidifier('#logs', '500x immersiveengineering:creosote', '4x immersiveengineering:treated_wood_horizontal').id('techopolis:casting/solidifier/treated_wood_horizontal_from_logs')
    event.recipes.casting.solidifier('8x techopolis:purified_coal_block', '8000x strainers:purifying_water', '1x minecraft:diamond').id('techopolis:casting/solidifier/diamond')
    event.recipes.casting.solidifier('#techopolis:dimensional_ores', '2000x techopolis:molten_cheese', '1x techopolis:dimensional_cheesium_ore').id('techopolis:casting/solidifier/cheesium')
    event.recipes.casting.solidifier('techopolis:elite_technium_machine_frame', '4000x casting:molten_black_brick', '1x casting:multiblock_mixer').id('techopolis:casting/solidifier/multiblock_mixer')

    //Compressed Melting
    addCompressedMeltingBlocksRecipes('cobblestone', 'casting:molten_stone', 1000 * 9)
    addCompressedMeltingBlocksRecipes('stone', 'casting:molten_stone', 1000 * 9)
    addCompressedMeltingBlocksRecipes('sand', 'casting:molten_glass', 1000 * 9)
    addCompressedMeltingBlocksRecipes('clay', 'casting:molten_black_brick', 1000 * 9)
    addCompressedMeltingBlocksRecipes('iron_block', 'casting:molten_iron', 810 * 9)
    addCompressedMeltingBlocksRecipes('gold_block', 'casting:molten_gold', 810 * 9)
    addCompressedMeltingBlocksRecipes('diamond_block', 'casting:molten_diamond', 810 * 9)
    addCompressedMeltingBlocksRecipes('emerald_block', 'casting:molten_emerald', 810 * 9)
    addCompressedMeltingBlocksRecipes('lapis_block', 'casting:molten_lapis', 810 * 9)
    addCompressedMeltingBlocksRecipes('redstone_block', 'casting:molten_redstone', 810 * 9)
    addCompressedMeltingBlocksRecipes('copper_block', 'casting:molten_copper', 810 * 9)
    addCompressedMeltingBlocksRecipes('netherite_block', 'casting:molten_netherite', 810 * 9)
    addCompressedMeltingBlocksRecipes('quartz_block', 'casting:molten_quartz', 250 * 9)
    addCompressedMeltingBlocksRecipes('coal_block', 'casting:molten_coal', 720 * 9)
    addCompressedMeltingBlocksRecipes('red_sand', 'casting:molten_glass', 1000 * 9)


    function addCompressedMeltingBlocksRecipes(type, fluid, baseAmount) {
        let amount = baseAmount
        for (let i = 0; i <= 2; i++) {
            event.recipes.casting.melting(`compressedblocks:c${i}_${type}`, `${amount}x ${fluid}`, 1000).id(`techopolis:casting/melting/c${i}_${type}`)
            amount *= 9;
        }
    }
})