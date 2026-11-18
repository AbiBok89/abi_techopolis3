console.info("Hello, Techopolis 3");

ServerEvents.tags("item", (event) => {

  event.get("bibliocraft:tool_rack_tools").add(
    [
      "actuallyadditions:laser_wrench",
      "opolisutilities:sapling_grower",
      "casting:fluid_mover",
      "entangled:item",
      "buildinggadgets2:gadget_building",
      "buildinggadgets2:gadget_exchanging",
      "buildinggadgets2:gadget_copy_paste",
      "buildinggadgets2:gadget_cut_paste",
      "buildinggadgets2:gadget_destruction",
    ]);

  event.get("minecraft:bookshelf_books").add("actuallyadditions:booklet", "patchouli:guide_book", "opolisutilities:catalogue_book", "ftbquests:book", "guideme:guide");

  event.get("bibliocraft:bookcase_books").add(["#minecraft:bookshelf_books"]);

  event.get("techopolis:placers").add(["#placers:placers"]);

  event.get("c:raw_materials").remove(["#c:gems/ruby", "#c:gems/sapphire", "#c:gems/peridot"]);

  event.get("techopolis:mini_coals").add(["opolisutilities:mini_coal", "opolisutilities:mini_charcoal"]);

  event.get("c:molds/plate").add("immersiveengineering:plate_mold");
  event.get("c:molds/gear").add("immersiveengineering:gear_mold");
  event.get("c:molds/rod").add("immersiveengineering:rod_mold");

  event.get("techopolis:fake_osmium_dusts").add("mekanism:salt", "#c:dusts/aluminum");

  event.get("techopolis:bricks").add("minecraft:bricks", "immersiveengineering:slag_brick");

  event.get("techopolis:infinity_cells").add("extendedae:infinity_water_cell", "extendedae:infinity_cobblestone_cell",);

  event.get("c:slime_balls").remove("actuallyadditions:rice_slimeball");

  event.get("techopolis:colored_spray_cans").add(
    [
      "colors:pink_spray_can",
      "colors:orange_spray_can",
      "colors:magenta_spray_can",
      "colors:lime_spray_can",
      "colors:light_gray_spray_can",
      "colors:light_blue_spray_can",
      "colors:green_spray_can",
      "colors:gray_spray_can",
      "colors:cyan_spray_can",
      "colors:brown_spray_can",
      "colors:blue_spray_can",
      "colors:black_spray_can",
      "colors:purple_spray_can",
      "colors:red_spray_can",
      "colors:white_spray_can",
      "colors:yellow_spray_can",
    ]);

  event.get("minecraft:enchantable/durability").add("immersiveengineering:graphite_electrode");

  event.get("techopolis:valid_interdimensional_ores").add(
    [
      "techopolis:dimensional_iridium_ore",
      "techopolis:dimensional_anglesite_ore",
      "techopolis:dimensional_neptunium_ore",
      "techopolis:dimensional_desh_ore",
      "techopolis:dimensional_ostrum_ore",
      "techopolis:dimensional_cheesium_ore",
    ]);

  event.get("c:dusts/ender_pearl").add("techopolis:ender_dust");
  event.get("c:ingots/plutonium").remove("bigreactors:blutonium_ingot");

  event.get("techopolis:raw_hop_graphite_dust").add("techopolis:raw_hop_graphite_dust");

  event.get("c:ores").remove("minecraft:ancient_debris");
  event.get("c:ores/netherite_scrap").remove("minecraft:ancient_debris");
  event.get("techopolis:netherite_ore").add("minecraft:ancient_debris");

  event.get("techopolis:miners").add("techopolis:basic_miner", "techopolis:advanced_miner", "techopolis:elite_miner", "techopolis:ultimate_miner",);

  event.get("techopolis:ruby_ore").add("alltheores:nether_ruby_ore", "techopolis:dimensional_ruby_ore");
  event.get("techopolis:sapphire_ore").add("alltheores:nether_sapphire_ore", "techopolis:dimensional_sapphire_ore",);
  event.get("techopolis:peridot_ore").add("alltheores:nether_peridot_ore", "techopolis:dimensional_peridot_ore");

  event.get("c:storage_blocks/neptunium").add("stellaris:neptunium_block");

  event.get("techopolis:nether_stems").add("minecraft:crimson_stem", "minecraft:warped_stem");
  event.get("techopolis:nether_planks").add("minecraft:crimson_planks", "minecraft:warped_planks");
  event.get("techopolis:coal_to_graphite_blocks").add(["minecraft:coal_block", "mekanism:block_charcoal", "immersiveengineering:coke",]);

  event.get("techopolis:ultimate_crafting_tables").add("extendedcrafting:ultimate_table", "extendedcrafting:ultimate_auto_table",);
  event.get("techopolis:ender_crafters").add("extendedcrafting:ender_crafter", "extendedcrafting:auto_ender_crafter",);
  event.get("techopolis:flux_crafters").add("extendedcrafting:flux_crafter", "extendedcrafting:auto_flux_crafter");

  event.get("techopolis:all_coils").add(
    [
      "techopolis:end_technium_turbine_coil",
      "techopolis:final_technium_turbine_coil",
      "techopolis:lunar_technium_turbine_coil",
      "techopolis:basic_technium_turbine_coil",
      "techopolis:advanced_technium_turbine_coil",
      "techopolis:elite_technium_turbine_coil",
      "techopolis:hellish_technium_turbine_coil",
      "techopolis:ultimate_technium_turbine_coil",
    ]);

  event.get("techopolis:ender_eyes").add(
    [
      "endrem:wither_eye",
      "endrem:witch_eye",
      "endrem:undead_eye",
      "endrem:rogue_eye",
      "endrem:old_eye",
      "endrem:nether_eye",
      "endrem:magical_eye",
      "endrem:black_eye",
      "endrem:cold_eye",
      "endrem:corrupted_eye",
      "endrem:cryptic_eye",
      "endrem:cursed_eye",
      "endrem:evil_eye",
      "endrem:exotic_eye",
      "endrem:guardian_eye",
      "endrem:lost_eye",
    ]);


  event.get("casting:melting_produces_experience").removeAll();
  event.get("c:storage_blocks/fluix").add("ae2:fluix_block");
  event.get("c:storage_blocks/certus").add("ae2:quartz_block");
  event.get("c:storage_blocks/quartz").add("minecraft:quartz_block");
  event.get("c:storage_blocks/inanite").add("bigreactors:inanite_block");

  colors.forEach((element) => {
    event.get("techopolis:resource_generator")
      .add(
        `colors:${element}_cracked_stone_bricks`,
        `colors:${element}_asteroid_tiles`,
        `colors:${element}_asteroid_bricks`,
        `colors:${element}_asteroid`,
        `colors:${element}_prismarine_bricks`,
        `colors:${element}_tiles`,
        `colors:${element}_stone`,
        `colors:${element}_bricks`,
        `colors:${element}_cobblestone_bricks`,
        `colors:${element}_marble_bricks`,
        `colors:${element}_chaotic`,
        `colors:${element}_braid`,
        `colors:${element}_road`,
        `colors:${element}_encased`,
        `colors:${element}_triple`,
        `colors:${element}_mosaic`,
        `colors:${element}_marble`,
        `colors:${element}_cobblestone`,
        `colors:${element}_stone_bricks`,
        `colors:${element}_polished`,
        `colors:${element}_dark_prismarine`,
        `colors:${element}_prismarine`,
      );
  });

  event.get("techopolis:resource_generator").add('minecraft:calcite')

  event.get("techopolis:compactor_valid_items").add(
    [
      "minecraft:clay",
      "strainers:silver_ore_piece",
      "minecraft:nether_star",
      "strainers:iron_ore_piece",
      "immersiveengineering:hemp_fabric",
      "techopolis:grout",
      "strainers:nickel_ore_piece",
      "strainers:tin_ore_piece",
      "strainers:lead_ore_piece",
      "minecraft:clay_ball",
      "strainers:aluminum_ore_piece",
      "immersiveengineering:hemp_fiber",
      "strainers:copper_ore_piece",
      "minecraft:cobblestone",
    ]);

  event.get("techopolis:raw_material_blocks").add(
    [
      "bigreactors:raw_yellorium_block",
      "minecraft:raw_iron_block",
      "minecraft:raw_copper_block",
      "minecraft:raw_gold_block",
      "alltheores:raw_aluminum_block",
      "alltheores:raw_lead_block",
      "alltheores:raw_nickel_block",
      "alltheores:raw_osmium_block",
      "alltheores:raw_platinum_block",
      "replication:raw_replica_block",
      "alltheores:raw_iridium_block",
      "alltheores:raw_zinc_block",
      "alltheores:raw_uranium_block",
      "alltheores:raw_tin_block",
      "alltheores:raw_silver_block",
      "stellaris:raw_steel_block",
      "stellaris:raw_desh_block",
    ]);

  event.get("techopolis:hammers").add(
    [
      "onlyhammersandexcavators:stone_hammer",
      "onlyhammersandexcavators:iron_hammer",
      "onlyhammersandexcavators:redstone_hammer",
      "onlyhammersandexcavators:gold_hammer",
      "onlyhammersandexcavators:lapis_hammer",
      "onlyhammersandexcavators:diamond_hammer",
      "onlyhammersandexcavators:emerald_hammer",
      "onlyhammersandexcavators:netherite_hammer",
      "onlyhammersandexcavators:obsidian_hammer",
    ]);

  event.get("techopolis:excavators").add(
    [
      "onlyhammersandexcavators:stone_excavator",
      "onlyhammersandexcavators:iron_excavator",
      "onlyhammersandexcavators:gold_excavator",
      "onlyhammersandexcavators:redstone_excavator",
      "onlyhammersandexcavators:lapis_excavator",
      "onlyhammersandexcavators:diamond_excavator",
      "onlyhammersandexcavators:emerald_excavator",
      "onlyhammersandexcavators:obsidian_excavator",
      "onlyhammersandexcavators:netherite_excavator",
    ]);

  event.get("techopolis:banned_in_loot_tables").add(
    [
      "#c:ingots",
      "#c:nuggets",
      "#c:gems",
      "#c:rods",
      "#c:ores",
      "#actuallyadditions:crystals",
      "#c:armors",
      "#c:tools",
      "minecraft:bucket",
      "minecraft:obsidian",
      "minecraft:ancient_debris",
      "minecraft:netherite_scrap",
      "immersiveengineering:component_steel",
      "stellaris:cheese",
      "#techopolis:ender_eyes",
    ]);

  event
    .get("techopolis:banned_items")
    .add([
      "compressedfurnace:powered_triple_compressed_blast_furnace",
      "compressedfurnace:powered_double_compressed_blast_furnace",
      "compressedfurnace:powered_compressed_blast_furnace",
      "compressedfurnace:compressed_furnace_guide",
      "compressedfurnace:powered_triple_compressed_crusher",
      "compressedfurnace:powered_double_compressed_crusher",
      "compressedfurnace:powered_compressed_crusher",
      "compressedfurnace:powered_triple_compressed_furnace",
      "compressedfurnace:raw_scrap",
      "compressedfurnace:compressed_crusher",
      "compressedfurnace:double_compressed_crusher",
      "compressedfurnace:triple_compressed_crusher",
      "compressedfurnace:compressed_generator",
      "compressedfurnace:double_compressed_generator",
      "compressedfurnace:triple_compressed_generator",
      "compressedfurnace:powered_compressed_furnace",
      "compressedfurnace:powered_double_compressed_furnace",
      "toms_storage:inventory_interface",
      "toms_storage:tag_item_filter",
      "toms_storage:polymorphic_item_filter",
      "toms_storage:adv_wireless_terminal",
      "toms_storage:wireless_terminal",
      "toms_storage:paint_kit",
      "toms_storage:inventory_proxy",
      "toms_storage:inventory_cable_connector_framed",
      "toms_storage:open_crate",
      "toms_storage:level_emitter",
      "toms_storage:inventory_cable_framed",
      "toms_storage:basic_inventory_hopper",
      "toms_storage:filing_cabinet",
      "mekanism:block_salt",
      "torchmaster:megatorch",
      "opolisutilities:catalogue",
      "opolisutilities:smart_crafting_table",
      "stellaris:fuel_refinery",
      "@utilitarian",
      "placers:coker_unit_placer",
      "placers:derrick_placer",
      "placers:hydro_treater_placer",
      "placers:distillation_tower_placer",
      "placers:oil_tank_placer",
      "placers:pumpjack_placer",
      "opolisutilities:cloche",
      "immersiveengineering:cloche",
      "actuallyadditions:crusher",
      "actuallyadditions:crusher_double",
      "#techopolis:raw_material_blocks",
      "actuallyadditions:rice_slimeball",
      "actuallyadditions:wings_of_the_bats",
      "actuallyadditions:ender_star",
      "immersiveengineering:mold_wire",
      "immersiveengineering:mold_rod",
      "immersiveengineering:mold_plate",
      "immersiveengineering:mold_gear",
      "immersiveengineering:mold_packing_9",
      "immersiveengineering:mold_unpacking",
      "immersiveengineering:mold_packing_4",
      "chargers:charger_creative",
      "chargers:charger_t1",
      "chargers:charger_t2",
      "chargers:charger_t3",
      "chargers:charger_t4",
      "actuallyadditions:lens_of_the_miner",
      "hostilenetworks:twilight_prediction",
      "bigreactors:basic_turbinecontroller",
      "bigreactors:basic_turbineredstoneport",
      "bigreactors:basic_turbinecasing",
      "bigreactors:basic_turbinefluidport_forge_active",
      "bigreactors:basic_turbineglass",
      "bigreactors:basic_turbinefluidport_forge_passive",
      "bigreactors:basic_turbinerotorbearing",
      "bigreactors:basic_turbinecreativesteamgenerator",
      "bigreactors:basic_turbinerotorshaft",
      "bigreactors:basic_turbinerotorblade",
      "bigreactors:basic_turbinepowertapfe_active",
      "bigreactors:basic_turbinepowertapfe_passive",
      "bigreactors:basic_turbinechargingportfe",
      "bigreactors:deepslate_yellorite_ore",
      "bigreactors:raw_yellorium",
      "bigreactors:yellorium_block",
      "bigreactors:yellorium_bucket",
      "actuallyadditions:tiny_charcoal",
      "actuallyadditions:tiny_coal",
      "alltheores:copper_ore_hammer",
      "alltheores:iron_ore_hammer",
      "alltheores:bronze_ore_hammer",
      "alltheores:platinum_ore_hammer",
      "alltheores:invar_ore_hammer",
      "extendedcrafting:basic_table",
      "extendedcrafting:advanced_table",
      "extendedcrafting:elite_table",
      "extendedcrafting:basic_auto_table",
      "extendedcrafting:advanced_auto_table",
      "extendedcrafting:elite_auto_table",
      "extendedcrafting:black_iron_slate",
      "extendedcrafting:basic_catalyst",
      "extendedcrafting:advanced_catalyst",
      "extendedcrafting:elite_catalyst",
      "extendedcrafting:redstone_component",
      "extendedcrafting:ultimate_component",
      "extendedcrafting:elite_component",
      "extendedcrafting:advanced_component",
      "extendedcrafting:basic_component",
      "extendedcrafting:the_ultimate_catalyst",
      "extendedcrafting:crystaltine_catalyst",
      "extendedcrafting:enhanced_ender_catalyst",
      "extendedcrafting:ender_catalyst",
      "extendedcrafting:enhanced_redstone_catalyst",
      "extendedcrafting:redstone_catalyst",
      "extendedcrafting:ultimate_catalyst",
      "extendedcrafting:enhanced_redstone_component",
      "extendedcrafting:ender_component",
      "extendedcrafting:enhanced_ender_component",
      "extendedcrafting:crystaltine_component",
      "extendedcrafting:the_ultimate_component",
      "extendedcrafting:frame",
      "immersiveengineering:pickaxe_steel",
      "immersiveengineering:shovel_steel",
      "immersiveengineering:axe_steel",
      "immersiveengineering:hoe_steel",
      "immersiveengineering:sword_steel",
      "stellaris:steel_axe",
      "stellaris:steel_sword",
      "stellaris:steel_shovel",
      "stellaris:steel_pickaxe",
      "stellaris:steel_hoe",
      "immersiveengineering:armor_steel_helmet",
      "immersiveengineering:armor_steel_chestplate",
      "immersiveengineering:armor_steel_leggings",
      "immersiveengineering:armor_steel_boots",
      "mekanism:sps_port",
      "mekanism:sps_casing",
      "mekanism:supercharged_coil",
      "bigreactors:reprocessorpowerport",
      "bigreactors:reprocessoroutputport",
      "bigreactors:reprocessorfluidinjector",
      "bigreactors:reprocessorwasteinjector",
      "bigreactors:reprocessorcollector",
      "bigreactors:reprocessorcontroller",
      "bigreactors:reprocessorglass",
      "bigreactors:reprocessorcasing",
      "minecraft:wooden_shovel",
      "minecraft:wooden_pickaxe",
      "minecraft:wooden_hoe",
      "minecraft:wooden_sword",
      "actuallyadditions:wooden_aiot",
      "mekanismtools:wood_paxel",
      "onlyhammersandexcavators:wooden_hammer",
      "onlyhammersandexcavators:wooden_excavator",
      "strainers:zinc_ore_piece",
      "strainers:platinum_ore_piece",
      "strainers:osmium_ore_piece",
      "strainers:uranium_ore_piece",
      "strainers:gold_ore_piece",
      "strainers:diamond_ore_piece",
      "strainers:emerald_ore_piece",
      "strainers:lapis_ore_piece",
      "strainers:coal_ore_piece",
      "strainers:debris_ore_piece",
      "strainers:quartz_ore_piece",
      "applied_extended_crafting:crafter_core_pattern_provider",
      "applied_extended_crafting:table_elite_pattern_provider",
      "applied_extended_crafting:table_advanced_pattern_provider",
      "applied_extended_crafting:table_basic_pattern_provider",
      "energymeter:monitor",
      "morethermalevaporation:basic_thermal_evaporation_compact",
      "morethermalevaporation:advanced_thermal_evaporation_compact",
      "morethermalevaporation:elite_thermal_evaporation_compact",
      'morethermalevaporation:ultimate_thermal_evaporation_compact',
      "morethermalevaporation:creative_thermal_evaporation_compact",
      'morethermalevaporation:creative_thermal_evaporation_controller',
      'morethermalevaporation:creative_thermal_evaporation_valve',
      'morethermalevaporation:creative_thermal_evaporation_block',
    ]);

});

ServerEvents.tags("block", (event) => {
  event.get("techopolis:non_controller_blocks").add(
    [
      "minecraft:air",
      "minecraft:wall_torch",
      "minecraft:torch",
      "minecraft:light",
      "minecraft:barrel",
      "techopolis:rock_enricher",
      "techopolis:cobblestone_melter",
      "techopolis:compactor",
      "techopolis:rock_washer",
      "techopolis:freezer",
      "casting:controller",
      "casting:multiblock_controller",
      /ae2:.*_bus/,
      /ae2:.*_cable/,
      "ae2:cable_anchor",
      "advanced_ae:import_export_bus_part",
      "advanced_ae:stock_export_bus_part",
      /extendedae:.*_bus.*/,
      /toms_storage:.*_terminal/,
      /toms_storage:.*_cable.*/,
      "toms_storage:inventory_connector",
      "routers:importer_block",
      "routers:exporter_block",
      /stellaris:cable.*/,
      "mekanism:qio_importer",
      "mekanism:qio_exporter",
      "mekanism:personal_barrel",
      "mekanism:logistical_sorter",
      /mekanism:.*_universal_cable/,
      /mekanism:.*_mechanical_pipe/,
      /mekanism:.*_pressurized_tube/,
      /mekanism:.*_thermodynamic_conductor/,
      /mekanism:.*_transporter/,
      /immersiveengineering:conveyor_.*/,
      "immersiveengineering:alloybrick",
      "immersiveengineering:metal_barrel",
      "immersiveengineering:wooden_barrel",
      "@storagedrawers",
      "@ironchest",
      "@xnet",
      "@torchmaster",
      "#pipeconnector:pipe_block",
      "#c:chests",
    ]);

  event.get("minecraft:beacon_base_blocks").add(["extendedcrafting:enhanced_ender_ingot_block", "extendedcrafting:ender_star_block"]);

  event.get("minecraft:mineable/pickaxe").remove("stellaris:moon_sand");

  event.get("minecraft:mineable/pickaxe").add("stellaris:moon_globe", "stellaris:earth_globe", "stellaris:mars_globe", "stellaris:mercury_globe", "stellaris:venus_globe",);

  event.get("minecraft:mineable/shovel").add("stellaris:moon_sand");

  event.get("minecraft:mineable/pickaxe").add("flopper:flopper");

  event.get("bblcore:climbable_blocks").add("techopolis:wooden_scaffolding");
  event.get("bblcore:nether_portal_frame").remove("minecraft:obsidian");

  event.get("techopolis:miners").add("techopolis:basic_miner", "techopolis:advanced_miner", "techopolis:elite_miner", "techopolis:ultimate_miner");

  event.get("techopolis:raw_material_blocks").add(
    [
      "bigreactors:raw_yellorium_block",
      "minecraft:raw_iron_block",
      "minecraft:raw_copper_block",
      "minecraft:raw_gold_block",
      "alltheores:raw_aluminum_block",
      "alltheores:raw_lead_block",
      "alltheores:raw_nickel_block",
      "alltheores:raw_osmium_block",
      "alltheores:raw_platinum_block",
      "replication:raw_replica_block",
      "alltheores:raw_iridium_block",
      "alltheores:raw_zinc_block",
      "alltheores:raw_uranium_block",
      "alltheores:raw_tin_block",
      "alltheores:raw_silver_block",
      "stellaris:raw_steel_block",
      "stellaris:raw_desh_block",
    ]);

  event.get("techopolis:valid_interdimensional_ores").add(
    [
      "techopolis:dimensional_iridium_ore",
      "techopolis:dimensional_anglesite_ore",
      "techopolis:dimensional_neptunium_ore",
      "techopolis:dimensional_desh_ore",
      "techopolis:dimensional_ostrum_ore",
      "techopolis:dimensional_cheesium_ore",
    ]);

  event.get("c:ores").remove("minecraft:ancient_debris");
  event.get("c:ores/netherite_scrap").remove("minecraft:ancient_debris");
  event.get("techopolis:netherite_ore").add("minecraft:ancient_debris");

  event.get("minecraft:needs_iron_tool").remove(
    [
      "rftoolsutility:crafter1",
      "rftoolsutility:crafter2",
      "rftoolsutility:crafter3",
      'compressedfurnace:triple_compressed_furnace',
      'compressedfurnace:triple_compressed_blast_furnace',
    ]);

  event.get("minecraft:needs_stone_tool").add(['compressedfurnace:triple_compressed_furnace', 'compressedfurnace:triple_compressed_blast_furnace'])

  event.add('techopolis:valid_extractors', ['techopolis:dimensional_ore_extractor', 'techopolis:dimensional_ore_extractor_mk2'])

  event.remove('smartcrafting:whitelisted_storage', '#c:chests')
  event.add('smartcrafting:whitelisted_storage', ['minecraft:barrel', 'minecraft:chest', '@storagedrawers', '@ironchest'])

  event.get('hostilenetworks:data_center_wall').add('connectedglass:clear_glass_black')

});

ServerEvents.tags("fluid", (event) => {
  event.get("techopolis:empowered_oil").add("actuallyadditions:empowered_oil");
  event.get("techopolis:oil").add("techopolis:oil");
  event.get("techopolis:ender_ethanol").add("techopolis:ender_ethanol");
  event.get("minecraft:milk").add("minecraft:milk");
  event.get("techopolis:chocolate").add("techopolis:chocolate");
  event.get("mekanism:brine").add("mekanism:brine");
  event.get("immersiveengineering:biodiesel").add("immersiveengineering:biodiesel");
});
