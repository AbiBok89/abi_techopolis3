ServerEvents.recipes(event => {

    event.remove({ id: "mekanism:injecting/gunpowder_to_sulfur" })
    event.remove({ id: "mekanism:reaction/coal_gasification/coals" })
    event.remove({ id: "mekanism:reaction/coal_gasification/dusts_coals" })
    event.remove({ id: "mekanism:reaction/coal_gasification/blocks_coals" })
    event.remove({ id: "mekanism:sps/antimatter" })
    event.remove({ id: "mekanism:processing/coal/to_ore" })
    event.remove({ id: "mekanism:processing/lapis_lazuli/to_ore" })
    event.remove({ id: "mekanism:processing/lapis_lazuli/to_deepslate_ore" })
    event.remove({ id: "mekanism:processing/quartz/to_ore" })
    event.remove({ id: "mekanism:processing/gold/ore/nether_from_raw" })
    event.remove({ id: 'mekanism:processing/fluorite/from_ore' })
    event.remove({ id: 'mekanism:processing/netherite/dirty_scrap_to_scrap' })
    event.remove({ id: 'mekanism:processing/netherite/ancient_debris_to_scrap' })
    event.remove({ id: 'mekanism:processing/netherite/ancient_debris_to_dirty_scrap' })
    event.remove({ id: 'mekanism:processing/lategame/antimatter_pellet/from_gas' })
    event.remove({ id: 'mekanism:processing/lategame/antimatter/from_pellet' })
    event.remove({ id: 'mekanism:control_circuit/basic' })
    event.remove({ id: 'mekanism:control_circuit/advanced' })
    event.remove({ id: 'mekanism:control_circuit/elite' })
    event.remove({ id: 'mekanism:control_circuit/ultimate' })
    event.remove({ id: 'mekanism:control_circuit/infused_basic' })
    event.remove({ id: 'mekanism:control_circuit/infused_advanced' })
    event.remove({ id: 'mekanism:control_circuit/infused_elite' })
    event.remove({ id: 'mekanism:control_circuit/infused_ultimate' })
    event.remove({ id: 'mekanism:compat/ae2/certus_quartz_dust_to_silicon' })
    event.remove({ id: 'mekanism:compat/ae2/sand_to_silicon' })
    event.remove({ id: /mekanism:nucleosynthesizing/ })

    event.shaped('mekanism:basic_fluid_tank', ["STS", "STS", "STS"], { S: 'smooth_stone', T: 'strainers:strainer_tank' }).id('mekanism:fluid_tank/basic')
    event.shaped('3x mekanism:boiler_casing', ["SLS", "L L", "SLS"], { S: '#c:ingots/silver', L: '#c:ingots/lead' }).id('mekanism:boiler_casing')
    event.shaped('mekanism:electrolytic_core', ["ATA", "TET", "ATA"], { A: 'mekanism:alloy_infused', T: 'techopolis:advanced_technium_nugget', E: "mekanism:alloy_reinforced" }).id('mekanism:electrolytic_core')
    event.shaped('mekanism:chemical_dissolution_chamber', ["RDR", "UMU", "RDR"], { R: 'mekanism:ingot_refined_obsidian', D: '#techopolis:dimensional_ores', U: "mekanism:ultimate_control_circuit", M: "techopolis:dimensional_machine_frame" }).id('mekanism:chemical_dissolution_chamber')
    event.shaped('16x mekanism:basic_mechanical_pipe', ["SSS", "GGG", "SSS"], { S: "smooth_stone", G: "glass" }).id('mekanism:transmitter/mechanical_pipe/basic')
    event.shaped('16x mekanism:basic_logistical_transporter', ["SSS", "GGG", "SSS"], { S: "#techopolis:bricks", G: "glass" }).id('mekanism:transmitter/logistical_transporter/basic')
    event.shaped('mekanism:configurator', [" SS", " TS", "T  "], { T: "stick", S: "smooth_stone" }).id('mekanism:configurator')
    event.shaped('mekanism:logistical_sorter', [" S ", "TUT", " S "], { T: 'mekanism:basic_logistical_transporter', U: "bblcore:upgrade_base", S: "immersiveengineering:sorter" }).id('mekanism:logistical_sorter')

    event.replaceInput({ mod: 'mekanism' }, 'mekanism:steel_casing', "techopolis:advanced_technium_machine_frame")
    event.replaceInput({ id: 'mekanism:superheating_element' }, 'mekanism:steel_casing', "immersiveengineering:light_engineering")
    event.replaceInput({ id: 'mekanism:boiler_valve' }, 'mekanism:advanced_control_circuit', "minecraft:hopper")
    event.replaceInput({ id: 'mekanism:pressure_disperser' }, 'mekanism:alloy_infused', "minecraft:hopper")
    event.replaceInput({ id: 'mekanism:fuelwood_heater' }, 'mekanism:steel_casing', "immersiveengineering:light_engineering")
    event.replaceInput({ id: 'mekanism:fuelwood_heater' }, 'mekanism:basic_control_circuit', "minecraft:redstone_block")
    event.replaceInput({ id: 'mekanism:steel_casing' }, '#c:ingots/osmium', "#c:ingots/lead")
    event.replaceInput({ id: 'mekanism:turbine_valve' }, 'mekanism:advanced_control_circuit', "minecraft:hopper")
    event.replaceInput({ id: 'mekanism:transmitter/universal_cable/basic' }, 'minecraft:redstone', "immersiveengineering:wirecoil_copper")
    event.replaceInput({ id: 'mekanism:metallurgic_infuser' }, '#c:ingots/osmium', "techopolis:advanced_technium_machine_frame")
    event.replaceInput({ id: 'mekanism:chemical_injection_chamber' }, '#c:ingots/gold', "techopolis:advanced_technium_ingot")
    event.replaceInput({ id: 'mekanism:teleportation_core' }, 'minecraft:ender_pearl', "ae2:calculation_processor")
    event.replaceInput({ id: 'mekanism:configurator' }, '#c:ingots/osmium', "#c:ingots/iron")
    event.replaceInput({ id: 'mekanism:teleportation_core' }, '#c:ingots/gold', "techopolis:advanced_technium_nugget")
    event.replaceInput({ id: 'mekanism:crusher' }, 'mekanism:basic_control_circuit', "mekanism:advanced_control_circuit")
    event.replaceInput({ id: 'mekanism:thermal_evaporation/controller' }, 'minecraft:bucket', "mekanism:energy_tablet")
    event.replaceInput({ id: 'mekanism:thermal_evaporation/block' }, 'minecraft:copper_ingot', 'techopolis:multiblock_machine_casing')
    event.replaceInput({ id: 'mekanism:electric_pump' }, 'minecraft:bucket', 'immersiveengineering:fluid_pump')
    event.replaceInput({ id: 'mekanism:osmium_compressor' }, 'minecraft:bucket', 'minecraft:glowstone')
    event.replaceInput({ id: 'mekanism:radioactive_waste_barrel' }, 'alltheores:steel_ingot', 'techopolis:unstable_matter')
    event.replaceInput({ id: 'mekanism:antiprotonic_nucleosynthesizer' }, 'mekanism:pellet_antimatter', 'techopolis:elite_technium_machine_frame')
    event.replaceInput({ id: 'mekanism:digital_miner' }, 'techopolis:advanced_technium_machine_frame', 'techopolis:ultimate_technium_machine_frame')

    //Mekanism - Misc
    event.recipes.mekanism.chemical_conversion('100x mekanism:osmium', "techopolis:manufactured_osmium")
    event.recipes.mekanism.metallurgic_infusing('techopolis:dirty_osmium_dust', '#techopolis:fake_osmium_dusts', '10x mekanism:osmium', false).id('techopolis:dirty_osmium_dust')
    event.recipes.mekanism.purifying('strainers:purifying_salt_mulch', 'strainers:mulch', '1x mekanism:oxygen', true).id('techopolis:mek/purifying_salt_mulch')
    event.recipes.mekanism.purifying('techopolis:purified_coal_block', 'minecraft:coal_block', '2x mekanism:oxygen', true).id('techopolis:purified_coal_block')
    event.recipes.mekanism.injecting('ae2:silicon', 'minecraft:sand', '1x mekanism:hydrogen', true).id('techopolis:silicon')
    event.recipes.mekanism.injecting('ae2:certus_quartz_crystal', 'ae2:silicon', '1x mekanism:oxygen', true).id('techopolis:certus_quartz_crystal')
    event.recipes.mekanism.crushing('4x techopolis:dimensional_dust', 'mekanism:teleportation_core').id('techopolis:dimensional_dust')
    event.recipes.mekanism.combining('1x replication:deepslate_replica_ore', "8x replication:raw_replica", 'minecraft:deepslate').id('techopolis:deepslate_replica_ore')
    event.recipes.mekanism.purifying('minecraft:glowstone_dust', '#c:dusts/nickel', '1x mekanism:oxygen', true).id('techopolis:mek/glowstone')
    event.recipes.mekanism.purifying('3x minecraft:glowstone_dust', '#c:dusts/zinc', '1x mekanism:oxygen', true).id('techopolis:mek/glowstone_zinc')
    event.recipes.mekanism.purifying('techopolis:lapis_dust', '#c:dusts/osmium', '1x mekanism:oxygen', true).id('techopolis:mek/lapis')
    event.recipes.mekanism.enriching(`minecraft:quartz`, `actuallyadditions:black_quartz`).id('techopolis:mek/quartz')
    event.recipes.mekanism.purifying('minecraft:prismarine_crystals', 'ae2:matter_ball', '1x mekanism:oxygen', true).id('techopolis:mek/prismarine_crystals')
    event.recipes.mekanism.enriching('minecraft:prismarine_shard', 'ae2:matter_ball').id('techopolis:mek/prismarine_shard')
    event.recipes.mekanism.enriching('techopolis:enriched_flint', 'minecraft:flint').id('techopolis:mek/enriched_flint')
    event.recipes.mekanism.enriching('techopolis:enriched_moon_dust', 'stellaris:moon_stone_dust').id('techopolis:mek/enriched_moon_dust')
    event.recipes.mekanism.chemical_conversion('160x mekanism:oxygen', "techopolis:enriched_flint").id('techopolis:enriched_flint_oxygen')


    event.recipes.mekanism.crystallizing('1x alltheores:sulfur', '100x mekanism:sulfuric_acid').id('techopolis:sulfuric')
    event.recipes.mekanism.evaporating('1x mekanism:lithium', '4x mekanism:brine').id('mekanism:evaporating/lithium')
    event.recipes.mekanism.evaporating('1x mekanism:sulfuric_acid', '4x mekanism:lithium').id('techopolis:sulfuric_acid')
    event.recipes.mekanism.evaporating('1x strainers:eroding_water', '8x strainers:purifying_water').id('techopolis:eroding_water')
    event.recipes.mekanism.evaporating('1x mekanism:brine', '4x techopolis:hot_water').id('mekanism:evaporating/brine')
    event.recipes.mekanism.evaporating('1x techopolis:hot_water', '1x minecraft:water').id('techopolis:hot_water')

    event.recipes.mekanism.crushing('1x techopolis:black_quartz_dust', 'actuallyadditions:black_quartz').id('techopolis:black_quartz_dust_mek')

    //Deepslate
    event.recipes.mekanism.metallurgic_infusing('minecraft:deepslate', 'minecraft:stone', '10x mekanism:carbon', false).id('techopolis:deepslate_mek')
    event.recipes.mekanism.crushing('3x techopolis:crushed_deepslate', 'minecraft:cobbled_deepslate').id('techopolis:crushed_deepslate_mek')

    //Antimatter 
    event.recipes.mekanism.nucleosynthesizing('2x mekanism:pellet_antimatter', 'techopolis:unstable_matter', '100x mekanism:antimatter', 1000, false).id('techopolis:pellet_antimatter_antimatter')
    event.recipes.mekanism.nucleosynthesizing('1x minecraft:heart_of_the_sea', 'minecraft:nether_star', '500x mekanism:antimatter', 1000, false).id('techopolis:heart_of_the_sea_antimatter')
    event.recipes.mekanism.nucleosynthesizing('1x minecraft:enchanted_golden_apple', 'minecraft:golden_apple', '500x mekanism:antimatter', 1000, false).id('techopolis:enchanted_golden_apple_antimatter')
    event.recipes.mekanism.nucleosynthesizing('1x minecraft:emerald', 'minecraft:diamond', '500x mekanism:antimatter', 1000, false).id('techopolis:emerald_antimatter')
    event.recipes.mekanism.nucleosynthesizing('1x minecraft:crying_obsidian', 'minecraft:obsidian', '1000x mekanism:antimatter', 1000, false).id('techopolis:obsidian_antimatter')

    //Combining - Ore Crafting
    event.recipes.mekanism.combining('1x minecraft:coal_ore', "12x #c:dusts/coal", 'techopolis:blank_stone_ore').id('techopolis:coal_ore')
    event.recipes.mekanism.combining('1x minecraft:iron_ore', "12x #c:dusts/iron", 'techopolis:blank_stone_ore').id('techopolis:iron_ore')
    event.recipes.mekanism.combining('1x minecraft:gold_ore', "12x #c:dusts/gold", 'techopolis:blank_stone_ore').id('techopolis:gold_ore')
    event.recipes.mekanism.combining('1x minecraft:copper_ore', "12x #c:dusts/copper", 'techopolis:blank_stone_ore').id('techopolis:copper_ore')
    event.recipes.mekanism.combining('1x alltheores:tin_ore', "12x #c:dusts/tin", 'techopolis:blank_stone_ore').id('techopolis:tin_ore')
    event.recipes.mekanism.combining('1x minecraft:diamond_ore', "12x #c:dusts/diamond", 'techopolis:blank_stone_ore').id('techopolis:diamond_ore')
    event.recipes.mekanism.combining('1x minecraft:emerald_ore', "12x #c:dusts/emerald", 'techopolis:blank_stone_ore').id('techopolis:emerald_ore')
    event.recipes.mekanism.combining('1x minecraft:redstone_ore', "12x #c:dusts/redstone", 'techopolis:blank_stone_ore').id('techopolis:redstone_ore')
    event.recipes.mekanism.combining('1x minecraft:lapis_ore', "12x #c:dusts/lapis", 'techopolis:blank_stone_ore').id('techopolis:lapis_ore')
    event.recipes.mekanism.combining('1x alltheores:aluminum_ore', "12x #c:dusts/aluminum", 'techopolis:blank_stone_ore').id('techopolis:aluminum_ore')
    event.recipes.mekanism.combining('1x alltheores:lead_ore', "12x #c:dusts/lead", 'techopolis:blank_stone_ore').id('techopolis:lead_ore')
    event.recipes.mekanism.combining('1x alltheores:nickel_ore', "12x #c:dusts/nickel", 'techopolis:blank_stone_ore').id('techopolis:nickel_ore')
    event.recipes.mekanism.combining('1x alltheores:osmium_ore', "12x #c:dusts/osmium", 'techopolis:blank_stone_ore').id('techopolis:osmium_ore')
    event.recipes.mekanism.combining('1x alltheores:platinum_ore', "12x #c:dusts/platinum", 'techopolis:blank_stone_ore').id('techopolis:platinum_ore')
    event.recipes.mekanism.combining('1x alltheores:silver_ore', "12x #c:dusts/silver", 'techopolis:blank_stone_ore').id('techopolis:silver_ore')
    event.recipes.mekanism.combining('1x alltheores:uranium_ore', "12x #c:dusts/uranium", 'techopolis:blank_stone_ore').id('techopolis:uranium_ore')
    event.recipes.mekanism.combining('1x opolisutilities:ender_ore', "12x #c:dusts/ender_pearl", 'techopolis:blank_stone_ore').id('techopolis:ender_ore')
    event.recipes.mekanism.combining('1x replication:deepslate_replica_ore', "12x #c:dusts/replica", 'techopolis:blank_stone_ore').id('techopolis:replica_ore')
    event.recipes.mekanism.combining('1x actuallyadditions:black_quartz_ore', "12x techopolis:black_quartz_dust", 'techopolis:blank_stone_ore').id('techopolis:black_quartz_ore')

    //Nether Based
    event.recipes.mekanism.combining('1x alltheores:nether_zinc_ore', "12x #c:dusts/zinc", 'techopolis:blank_netherrack_ore').id('techopolis:zinc_ore')
    event.recipes.mekanism.combining('1x minecraft:nether_quartz_ore', "12x #c:dusts/quartz", 'techopolis:blank_netherrack_ore').id('techopolis:quartz_ore')

    //Space Based
    event.recipes.mekanism.combining('1x stellaris:moon_desh_ore', "1x #c:dusts/desh", 'techopolis:blank_moon_ore').id('techopolis:desh_ore')
    event.recipes.mekanism.combining('1x techopolis:moon_neptunium_ore', "1x #c:dusts/neptunium", 'techopolis:blank_moon_ore').id('techopolis:neptunium_ore')
    event.recipes.mekanism.combining('1x techopolis:moon_ostrum_ore', "1x #c:dusts/ostrum", 'techopolis:blank_moon_ore').id('techopolis:ostrum_ore')
    event.recipes.mekanism.oxidizing('1000x techopolis:lunar_gas', "stellaris:moon_stone_dust").id('techopolis:lunar_gas_from_dust')
    event.recipes.mekanism.oxidizing('8000x techopolis:lunar_gas', "techopolis:enriched_moon_dust").id('techopolis:lunar_gas_from_enriched')
    event.recipes.mekanism.oxidizing('1000x techopolis:dragon_breath', "minecraft:dragon_breath").id('techopolis:dragon_breath')

    //Chemical Infusing
    event.recipes.mekanism.chemical_infusing('10x techopolis:ultimate_gas', '1x mekanism:antimatter', '9x techopolis:dragon_breath').id('techopolis:ultimate_gas')

    //Misc Smelting
    event.recipes.mekanism.smelting('1x minecraft:glass', '#minecraft:sand').id('techopolis:glass_mek')

    //End Based
    //event.recipes.mekanism.combining('1x techopolis:dimensional', "1x #c:dusts/iridium", 'techopolis:blank_end_ore').id('techopolis:iridium_ore')

    //Nether Ores - Reaction
    event.custom({
        type: "mekanism:reaction",
        chemical_input: { "amount": 100, "chemical": "techopolis:clean_quartz_slurry" },
        duration: 200,
        fluid_input: { "amount": 1000, "fluid": "minecraft:water" },
        item_input: { "count": 1, "tag": "techopolis:ruby_ore" },
        chemical_output: { "amount": 1000, "id": "techopolis:spent_nether_waste" },
        item_output: { "count": 1, "id": "alltheores:ruby" }
    }).id('tecopolis:nether_ruby')

    event.custom({
        type: "mekanism:reaction",
        chemical_input: { "amount": 100, "chemical": "techopolis:clean_quartz_slurry" },
        duration: 200,
        fluid_input: { "amount": 1000, "fluid": "minecraft:water" },
        item_input: { "count": 1, "tag": "techopolis:sapphire_ore" },
        chemical_output: { "amount": 1000, "id": "techopolis:spent_nether_waste" },
        item_output: { "count": 1, "id": "alltheores:sapphire" }
    }).id('tecopolis:nether_sapphire')

    event.custom({
        type: "mekanism:reaction",
        chemical_input: { "amount": 100, "chemical": "techopolis:clean_quartz_slurry" },
        duration: 200,
        fluid_input: { "amount": 1000, "fluid": "minecraft:water" },
        item_input: { "count": 1, "tag": "techopolis:peridot_ore" },
        chemical_output: { "amount": 1000, "id": "techopolis:spent_nether_waste" },
        item_output: { "count": 1, "id": "alltheores:peridot" }
    }).id('tecopolis:nether_peridot')
})



