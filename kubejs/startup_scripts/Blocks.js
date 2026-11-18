// priority: 0

StartupEvents.registry('block', event => {

    //Custom Machinery as Blocks

    createCustomMachineryBlock('ambient_water_collector')
    createCustomMachineryBlock('rock_washer')
    createCustomMachineryBlock('compactor')
    createCustomMachineryBlock('cobblestone_melter')
    createCustomMachineryBlock('rock_enricher')
    createCustomMachineryBlock('fluid_recycler')
    createCustomMachineryBlock('item_recycler')
    createCustomMachineryBlock('water_purifier')
    createCustomMachineryBlock('advanced_research_crafter')
    createCustomMachineryBlock('elite_research_crafter')
    createCustomMachineryBlock('ultimate_research_crafter')
    createCustomMachineryBlock('researcher')
    createCustomMachineryBlock('research_crafter')
    createCustomMachineryBlock('bio_generator')
    createCustomMachineryBlock('freezer')
    createCustomMachineryBlock('fluid_injector')
    createCustomMachineryBlock('milker')
    createCustomMachineryBlock('radaway_machine')
    createCustomMachineryBlock('technium_compressor')
    createCustomMachineryBlock('weather_machine')
    createCustomMachineryBlock('infinity_cell_extractor')

    createCustomMachineryBlock('basic_miner')
    createCustomMachineryBlock('advanced_miner')
    createCustomMachineryBlock('elite_miner')
    createCustomMachineryBlock('ultimate_miner')

    createCustomMachineryBlock('basic_technium_machine')
    createCustomMachineryBlock('advanced_technium_machine')
    createCustomMachineryBlock('elite_technium_machine')
    createCustomMachineryBlock('ultimate_technium_machine')
    createCustomMachineryBlock('hellish_technium_machine')
    createCustomMachineryBlock('lunar_technium_machine')
    createCustomMachineryBlock('end_technium_machine')
    createCustomMachineryBlock('final_technium_machine')

    createCustomMachineryBlock('alloy_kiln')
    createCustomMachineryBlock('dimensional_infuser')
    createCustomMachineryBlock('dimensional_ore_extractor')
    createCustomMachineryBlock('dimensional_ore_extractor_mk2')
    createCustomMachineryBlock('reprocessor')
    createCustomMachineryBlock('mob_infuser')
    createCustomMachineryBlock('nuclear_reactor')
    createCustomMachineryBlock('ancient_infuser')
    createCustomMachineryBlock('moon_quarry')
    createCustomMachineryBlock('industrial_strainer')
    createCustomMachineryBlock('oil_pump')
    createCustomMachineryBlock('interdimensional_infuser')
    createCustomMachineryBlock('super_empowerer')

    function createCustomMachineryBlock(name) {
        event.create(`techopolis:${name}`, 'custommachinery:custom_machine').machine(`techopolis:${name}`)
    }

    //Turbine Coils

    addTurbineCoil('basic_technium')
    addTurbineCoil('advanced_technium')
    addTurbineCoil('elite_technium')
    addTurbineCoil('ultimate_technium')
    addTurbineCoil('hellish_technium')
    addTurbineCoil('lunar_technium')
    addTurbineCoil('end_technium')
    addTurbineCoil('final_technium')

    function addTurbineCoil(type) {
        event.create(`techopolis:${type}_turbine_coil`)
            .hardness(1.5)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBoth(`techopolis:coils/${type}`)
            .stoneSoundType()
            .fullBlock(true);
    }

    //Machine Frames
    function addMachineFrame(type) {

        event.create(`techopolis:${type}_machine_frame`)
            .hardness(1.5)
            .tagBlock('minecraft:mineable/pickaxe')
            .stoneSoundType()
            .fullBlock(true);
    }

    addMachineFrame('simple')
    addMachineFrame('sturdy')
    addMachineFrame('dimensional')
    addMachineFrame('basic_technium')
    addMachineFrame('advanced_technium')
    addMachineFrame('elite_technium')
    addMachineFrame('ultimate_technium')
    addMachineFrame('hellish_technium')
    addMachineFrame('lunar_technium')
    addMachineFrame('end_technium')
    addMachineFrame('final_technium')

    //Misc

    event.create('techopolis:crushed_deepslate')
        .hardness(1.5)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:compressed_crushed_deepslate')
        .hardness(1.5)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:purified_coal_block')
        .hardness(1.5)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:nether_portal_frame')
        .hardness(1.5)
        .tagBlock('minecraft:mineable/pickaxe').tagBlock('bblcore:nether_portal_frame')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:super_empowered_crystal_block')
        .hardness(1.5)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:eye_block')
        .hardness(1.5)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    //Dimensional Ores - Maybe give own textures? - rember to add these items, slurries, and processing inside the mekanism script
    function createDimensionalOre(type, color) {
        event.create(`techopolis:dimensional_${type}_ore`)
            .hardness(1.5)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBoth(`techopolis:dimensional_ores`)
            .stoneSoundType()
            .fullBlock(true);
    }

    createDimensionalOre('coal', 0x252525)
    createDimensionalOre('iron', 0xD5AA87)
    createDimensionalOre('gold', 0xF5E556)
    createDimensionalOre('copper', 0xCA7B59)
    createDimensionalOre('tin', 0xCDCDE0)
    createDimensionalOre('diamond', 0x5BFCFF)
    createDimensionalOre('emerald', 0x4BD254)
    createDimensionalOre('redstone', 0xCB1E0F)
    createDimensionalOre('lapis', 0x3A6EE4)
    createDimensionalOre('aluminum', 0xD6E5EC)
    createDimensionalOre('lead', 0x788ABE)
    createDimensionalOre('nickel', 0xD9D5BE)
    createDimensionalOre('osmium', 0xAEC5D0)
    createDimensionalOre('platinum', 0xACAACD)
    createDimensionalOre('silver', 0xE7ECF4)
    createDimensionalOre('uranium', 0x97E282)
    createDimensionalOre('zinc', 0xCEDDE4)
    createDimensionalOre('ender', 0x007F78)
    createDimensionalOre('replica', 0x1F232D)
    createDimensionalOre('black_quartz', 0x35404E)
    createDimensionalOre('quartz', 0xEBE7E3)
    createDimensionalOre('ruby', 0xEBE7E3)
    createDimensionalOre('sapphire', 0xEBE7E3)
    createDimensionalOre('peridot', 0xEBE7E3)
    createDimensionalOre('cheesium', 0xEA7514)
    createDimensionalOre('ostrum', 0x261F1F)
    createDimensionalOre('desh', 0xB4563B)
    createDimensionalOre('neptunium', 0x7B8888)
    createDimensionalOre('iridium', 0xD1CCC6)
    createDimensionalOre('anglesite', 0xF2C545)

    event.create('techopolis:grout')
        .hardness(0.8)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()
        .fullBlock(true);

    event.create('techopolis:heatproof_cobblestone')
        .hardness(1.2)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:blank_stone_ore')
        .hardness(1.2)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:blank_netherrack_ore')
        .hardness(1.2)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:blank_moon_ore')
        .hardness(1.2)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:moon_ostrum_ore')
        .hardness(1.2)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:ostrum_block')
        .hardness(1.2)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBoth('c:storage_blocks/ostrum')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:moon_neptunium_ore')
        .hardness(1.2)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:lava_planks')
        .hardness(1.0)
        .tagBlock('minecraft:mineable/axe')
        .woodSoundType()
        .fullBlock(true);

    event.create('techopolis:blazing_slime_block')
        .hardness(1.0)
        .tagBlock('minecraft:mineable/shovel')
        .gravelSoundType()
        .fullBlock(true);

    event.create('techopolis:debris')
        .hardness(1.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:wooden_scaffolding')
        .hardness(1.0)
        .tagBlock('minecraft:mineable/axe')
        .woodSoundType()
        .fullBlock(true)
        .notSolid()
        .renderType('cutout');

    event.create('techopolis:multiblock_vent')
        .hardness(1.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:multiblock_machine_casing')
        .hardness(1.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:multiblock_circuitry')
        .hardness(1.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:multiblock_gearbox')
        .hardness(1.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);

    event.create('techopolis:dimensional_detector')
        .hardness(1.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .stoneSoundType()
        .fullBlock(true);


    event.create('techopolis:purified_bio_fuel_block')
        .displayName('Block of Purified Bio Fuel')
        .hardness(0.6)
        .tagBlock('minecraft:mineable/shovel')
        .grassSoundType()
        .resistance(0.6)

    event.create('techopolis:obsidiglow_block')
        .hardness(50.0)
        .resistance(120.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .stoneSoundType()
        .fullBlock(true);
})

BlockEvents.modification(event => {
    event.modify('flopper:flopper', block => {
        block.soundType = "wood"
        block.requiresTool = false
    })
})
