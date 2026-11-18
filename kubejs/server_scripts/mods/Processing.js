ServerEvents.recipes(event => {

    function createOreProcessing(type) {
        const modPrefix = 'techopolis:'
        const mekanism = event.recipes.mekanism

        mekanism.dissolution(`2000x ${modPrefix}dirty_${type}_slurry`, `${modPrefix}dimensional_${type}_ore`, `1x mekanism:sulfuric_acid`, true).id(`${modPrefix}processing/dirt_${type}_slurry`)
        mekanism.washing(`1x ${modPrefix}clean_${type}_slurry`, `5x strainers:purifying_water`, `1x ${modPrefix}dirty_${type}_slurry`).id(`${modPrefix}processing/clean_${type}_slurry`)
        mekanism.crystallizing(`1x ${modPrefix}${type}_crystal`, `200x ${modPrefix}clean_${type}_slurry`).id(`${modPrefix}processing/${type}_crystal`)
        mekanism.injecting(`1x ${modPrefix}${type}_shard`, `${modPrefix}${type}_crystal`, `1x mekanism:hydrogen_chloride`, true).id(`${modPrefix}processing/${type}_shard`)
        mekanism.purifying(`1x ${modPrefix}${type}_clump`, `${modPrefix}${type}_shard`, `1x mekanism:oxygen`, true).id(`${modPrefix}processing/${type}_clump`)
        mekanism.crushing(`1x ${modPrefix}dirty_${type}_dust`, `${modPrefix}${type}_clump`).id(`${modPrefix}processing/dirty_${type}_dust`)
        mekanism.enriching(`1x ${modPrefix}${type}_dust`, `${modPrefix}dirty_${type}_dust`).id(`${modPrefix}processing/${type}_dust`)

        const mekRemoveIds = [
            `mekanism:processing/${type}/shard/from_crystal`,
            `mekanism:processing/${type}/slurry/dirty/from_ore`,
            `mekanism:processing/${type}/slurry/clean`,
            `mekanism:processing/${type}/from_ore`,
            `mekanism:processing/${type}/ore/from_raw`,
            `mekanism:processing/${type}/from_raw`,
            `mekanism:processing/${type}/ore/deepslate_from_raw`,
            `mekanism:processing/${type}/to_deepslate_ore`,
            `mekanism:processing/${type}/to_ore`,
            `mekanism:processing/${type}/slurry/dirty/from_raw_ore`,
            `mekanism:processing/${type}/crystal/from_slurry`

        ]
        mekRemoveIds.forEach(id => event.remove({ id }))

        const atoRemoveIds = [
            `alltheores:processing/${type}/dust/from_ore`,
            `alltheores:processing/${type}/dust/from_dirty_dust`,
            `alltheores:processing/${type}/shard/from_ore`,
            `alltheores:processing/${type}/shard/from_crystal`,
            `alltheores:processing/${type}/slurry/dirty/from_ore`,
            `alltheores:processing/${type}/slurry/from_dirty`,
            `alltheores:processing/${type}/slurry/dirty/from_raw`,
            `alltheores:processing/${type}/clump/from_ore`,
            `alltheores:processing/${type}/clump/from_shard`,
            `alltheores:processing/${type}/dirty_dust/from_clump`,
            `alltheores:processing/${type}/crystal/from_slurry`,
            `alltheores:arcfurnace/${type}/from_raw_block`,
            `alltheores:arcfurnace/${type}/crystal/from_slurry`,

        ]
        atoRemoveIds.forEach(id => event.remove({ id }))

        const ieArcRemoveIds = [
            `immersiveengineering:arcfurnace/ore_${type}`,
            `immersiveengineering:arcfurnace/raw_ore_${type}`,
            `immersiveengineering:arcfurnace/raw_block_${type}`,
        ]
        ieArcRemoveIds.forEach(id => event.remove({ id }))

        event.custom({
            "neoforge:conditions": [{
                type: 'neoforge:not',
                value: { type: 'neoforge:tag_empty', tag: `c:raw_materials/${type}` },
            }],
            type: 'immersiveengineering:crusher',
            energy: 6000,
            input: { tag: `c:raw_materials/${type}` },
            result: { item: `${modPrefix}${type}_dust` },
            secondaries: [{ chance: 0.66666667, output: { item: `${modPrefix}${type}_dust` } }],
        })

        event.custom({
            "neoforge:conditions": [{
                type: 'neoforge:not',
                value: { type: 'neoforge:tag_empty', tag: `c:ingots/${type}` },
            }],
            type: 'immersiveengineering:crusher',
            energy: 6000,
            input: { tag: `c:ingots/${type}` },
            result: { item: `${modPrefix}${type}_dust` },
        })

        event.custom({
            "neoforge:conditions": [{
                type: 'neoforge:not',
                value: { type: 'neoforge:tag_empty', tag: `c:gems/${type}` },
            }],
            type: 'immersiveengineering:crusher',
            energy: 6000,
            input: { tag: `c:gems/${type}` },
            result: { item: `${modPrefix}${type}_dust` },
        })
    }

    function createMetalPressRecipes(type, inputTag) {
        const iePrefix = 'techopolis:ie/metal_press/'
        const stamperPrefix = 'techopolis:mekmm/stamper/'
        const outputMod = 'alltheores:'

        event.custom({
            type: 'immersiveengineering:metal_press',
            energy: 2400,
            input: { tag: inputTag },
            mold: 'casting:plate_mold',
            result: { item: `${outputMod}${type}_plate` },
        }).id(`${iePrefix}${type}_plate`)
        event.remove({ id: `immersiveengineering:metalpress/${type}_plate` })

        event.custom({
            type: 'mekmm:stamper',
            input: { tag: inputTag, count: 1 },
            mold: { item: 'casting:plate_mold', count: 1 },
            output: { id: `${outputMod}${type}_plate`, count: 1 }
        }).id(`${stamperPrefix}${type}_plate`)

        event.custom({
            type: 'immersiveengineering:metal_press',
            energy: 2400,
            input: { basePredicate: { tag: inputTag }, count: 4 },
            mold: 'casting:gear_mold',
            result: { item: `${outputMod}${type}_gear` },
        }).id(`${iePrefix}${type}_gear`)
        event.remove({ id: `immersiveengineering:metalpress/${type}_gear` })

        event.custom({
            type: 'mekmm:stamper',
            input: { tag: inputTag, count: 4 },
            mold: { item: 'casting:gear_mold', count: 1 },
            output: { id: `${outputMod}${type}_gear`, count: 1 }
        }).id(`${stamperPrefix}${type}_gear`)

        event.custom({
            type: 'immersiveengineering:metal_press',
            energy: 2400,
            input: { tag: inputTag },
            mold: 'casting:rod_mold',
            result: { basePredicate: { item: `${outputMod}${type}_rod` }, count: 2 },
        }).id(`${iePrefix}${type}_rod`)
        event.remove({ id: `immersiveengineering:metalpress/${type}_rod` })

        event.custom({
            type: 'mekmm:stamper',
            input: { tag: inputTag, count: 1 },
            mold: { item: 'casting:rod_mold', count: 1 },
            output: { id: `${outputMod}${type}_rod`, count: 2 }
        }).id(`${stamperPrefix}${type}_rod`)
    }

    function createWireStampingRecipes(type, inputTag) {
        event.custom({
            type: 'mekmm:stamper',
            input: { tag: inputTag, count: 1 },
            mold: { item: 'casting:wire_mold', count: 1 },
            output: { id: `immersiveengineering:wire_${type}`, count: 2 }
        }).id(`techopolis:mekmm/stamper/${type}_wire`)
    }

    const oreMaterials = [
        'coal', 'iron', 'gold', 'copper', 'tin', 'diamond', 'emerald',
        'redstone', 'lapis', 'aluminum', 'lead', 'nickel', 'osmium',
        'platinum', 'silver', 'uranium', 'zinc', 'ender', 'replica',
        'black_quartz', 'quartz', 'cheesium', 'ostrum', 'desh',
        'neptunium', 'iridium', 'anglesite',
    ]

    oreMaterials.forEach(createOreProcessing)

    const mek = event.recipes.mekanism

    const crusherIE = (energy, inputItem, resultItem, idSuffix) =>
        event.custom({
            type: 'immersiveengineering:crusher',
            energy,
            input: { item: inputItem },
            result: { item: resultItem },
        }).id(`techopolis:ie/crusher/${idSuffix}`)

    crusherIE(6000, 'minecraft:coal', 'techopolis:coal_dust', 'coal_dust')
    crusherIE(2000, 'minecraft:cobblestone', 'minecraft:gravel', 'gravel')
    crusherIE(2000, 'techopolis:simulation_pearl', 'techopolis:replica_dust', 'replica_dust')
    crusherIE(2000, 'techopolis:lava_planks', 'techopolis:blazing_sawdust', 'blazing_sawdust')
    crusherIE(2000, 'stellaris:moon_stone', 'stellaris:moon_cobblestone', 'moon_cobblestone')
    crusherIE(2000, 'minecraft:gravel', 'minecraft:sand', 'sand')
    crusherIE(2000, 'immersiveengineering:coal_coke', 'immersiveengineering:dust_coke', 'dust_coke')
    crusherIE(2000, 'techopolis:super_empowered_crystal', 'minecraft:amethyst_shard', 'amethyst_shard')

    const crusherMek = (resultItem, inputItem, idSuffix) =>
        mek.crushing(resultItem, inputItem).id(`techopolis:mek/crusher/${idSuffix}`)

    crusherMek('techopolis:replica_dust', 'techopolis:simulation_pearl', 'replica_dust')
    crusherMek('techopolis:blazing_sawdust', 'techopolis:lava_planks', 'blazing_sawdust')
    crusherMek('stellaris:moon_cobblestone', 'stellaris:moon_stone', 'moon_stone')
    crusherMek('immersiveengineering:dust_coke', 'immersiveengineering:coal_coke', 'dust_coke')
    crusherMek('minecraft:amethyst_shard', 'techopolis:super_empowered_crystal', 'amethyst_shard')

    const metalPressMaterials = [
        ['aluminum', 'c:ingots/aluminum'],
        ['lead', 'c:ingots/lead'],
        ['nickel', 'c:ingots/nickel'],
        ['osmium', 'c:ingots/osmium'],
        ['platinum', 'c:ingots/platinum'],
        ['silver', 'c:ingots/silver'],
        ['tin', 'c:ingots/tin'],
        ['uranium', 'c:ingots/uranium'],
        ['zinc', 'c:ingots/zinc'],
        ['iridium', 'c:ingots/iridium'],
        ['steel', 'c:ingots/steel'],
        ['invar', 'c:ingots/invar'],
        ['electrum', 'c:ingots/electrum'],
        ['bronze', 'c:ingots/bronze'],
        ['constantan', 'c:ingots/constantan'],
        ['signalum', 'c:ingots/signalum'],
        ['lumium', 'c:ingots/lumium'],
        ['enderium', 'c:ingots/enderium'],
        ['copper', 'c:ingots/copper'],
        ['iron', 'c:ingots/iron'],
        ['gold', 'c:ingots/gold'],
        ['diamond', 'c:gems/diamond'],
        ['netherite', 'c:ingots/netherite'],
        ['brass', 'c:ingots/brass'],
    ]

    metalPressMaterials.forEach(([type, tag]) => createMetalPressRecipes(type, tag))

    const wireMaterials = [
        ['copper', 'c:ingots/copper'],
        ['electrum', 'c:ingots/electrum'],
        ['aluminum', 'c:ingots/aluminum'],
        ['steel', 'c:ingots/steel'],
        ['lead', 'c:ingots/lead'],
    ]

    wireMaterials.forEach(([type, tag]) => createWireStampingRecipes(type, tag))

    const castingMeltingToRemove = [
        'casting:melting/lead/from_raw_ore',
        'casting:melting/silver/from_raw_ore',
        'casting:melting/nickel/from_raw_ore',
        'casting:melting/uranium/from_raw_ore',
        'casting:melting/platinum/from_raw_ore',
        'casting:melting/gold/from_raw_ore',
        'casting:melting/osmium/from_raw_ore',
        'casting:melting/zinc/from_raw_ore',
    ]

    castingMeltingToRemove.forEach(id => event.remove({ id }))

    function createCustomPress(inputType, inputValue, inputCount, moldType, outputItem, outputCount, removeId) {
        let itemName = outputItem.split(':')[1]

        let ieInput = {}
        if (inputCount > 1) {
            ieInput.basePredicate = {}
            ieInput.basePredicate[inputType] = inputValue
            ieInput.count = inputCount
        } else {
            ieInput[inputType] = inputValue
        }

        let ieResult = outputCount > 1
            ? { basePredicate: { item: outputItem }, count: outputCount }
            : { item: outputItem }

        event.custom({
            type: 'immersiveengineering:metal_press',
            energy: 2400,
            input: ieInput,
            mold: `casting:${moldType}_mold`,
            result: ieResult
        }).id(`techopolis:ie/metal_press/${itemName}`)

        if (removeId) {
            event.remove({ id: removeId })
        }

        let stamperInput = {}
        stamperInput[inputType] = inputValue
        stamperInput.count = inputCount

        event.custom({
            type: 'mekmm:stamper',
            input: stamperInput,
            mold: { item: `casting:${moldType}_mold`, count: 1 },
            output: { id: outputItem, count: outputCount }
        }).id(`techopolis:mekmm/stamper/${itemName}`)
    }

    createCustomPress('item', 'minecraft:coal', 4, 'gear', 'techopolis:coal_gear', 1)
    createCustomPress('item', 'minecraft:stone', 4, 'gear', 'techopolis:stone_gear', 1)
    createCustomPress('tag', 'minecraft:planks', 4, 'gear', 'techopolis:wooden_gear', 1)
    createCustomPress('item', 'stellaris:desh_ingot', 4, 'gear', 'techopolis:desh_gear', 1)
    createCustomPress('item', 'extendedcrafting:the_ultimate_ingot', 4, 'gear', 'techopolis:the_ultimate_gear', 1)

    createCustomPress('item', 'techopolis:lunar_technium_nugget', 1, 'wire', 'techopolis:turbine_coil_wire', 1)

    createCustomPress('tag', 'c:ingots/ostrum', 1, 'rod', 'techopolis:ostrum_rod', 2, 'immersiveengineering:metalpress/rod_ostrum')
    createCustomPress('item', 'extendedcrafting:the_ultimate_ingot', 1, 'rod', 'techopolis:the_ultimate_rod', 2)

    createCustomPress('item', 'extendedcrafting:the_ultimate_ingot', 1, 'plate', 'techopolis:the_ultimate_plate', 1)
    createCustomPress('item', 'techopolis:shulker_pearl', 1, 'plate', 'techopolis:shulker_plate', 1)
    createCustomPress('tag', 'c:ingots/cyanite', 1, 'plate', 'techopolis:cyanite_plate', 1, 'immersiveengineering:metalpress/plate_cyanite')
    createCustomPress('tag', 'c:ingots/neptunium', 1, 'plate', 'techopolis:neptunium_plate', 1, 'immersiveengineering:metalpress/plate_neptunium')

    event.smelting('techopolis:cheesium_ingot', 'techopolis:cheesium_dust').xp(1).id('techopolis:smelting/cheesium_ingot')
    mek.smelting('1x casting:black_brick', 'techopolis:grout').id('techopolis:processing/black_brick')
    mek.enriching('1x minecraft:redstone', 'techopolis:dirty_redstone_dust').id('techopolis:processing/enriching/redstone_dust')

})