ServerEvents.recipes(event => {

  event.remove({ id: "extendedcrafting:ender_ingot" })
  event.remove({ id: 'extendedcrafting:nether_star_block' })

  event.shaped('extendedcrafting:ultimate_table', ["CCC", "CMC", "CCC"], { C: '#c:player_workstations/crafting_tables', M: 'techopolis:hellish_technium_machine_frame' }).id('techopolis:ultimate_table')
  event.shaped('extendedcrafting:ultimate_auto_table', ["CCC", "CMC", "CCC"], { C: 'rftoolsutility:crafter3', M: 'techopolis:hellish_technium_machine_frame' }).id('techopolis:ultimate_auto_table')
  event.shaped('extendedcrafting:auto_ender_crafter', ["AAA", "ECE", "EEE"], { C: 'rftoolsutility:crafter3', E: 'extendedcrafting:ender_ingot', A: 'bigreactors:anglesite_crystal' }).id('techopolis:auto_ender_crafter')
  event.shaped('extendedcrafting:auto_flux_crafter', ["AAA", "ECE", "EEE"], { C: 'rftoolsutility:crafter3', E: 'techopolis:lunar_technium_ingot', A: 'techopolis:elite_technium_ingot' }).id('techopolis:auto_flux_crafter')
  event.shaped('extendedcrafting:flux_crafter', ["AAA", "ECE", "EEE"], { C: '#c:player_workstations/crafting_tables', E: 'techopolis:lunar_technium_ingot', A: 'techopolis:elite_technium_ingot' }).id('extendedcrafting:flux_crafter')
  event.shaped('extendedcrafting:compressor', ["SSS", "SMS", "SSS"], { S: 'ae2:sky_stone_block', M: 'techopolis:elite_technium_machine_frame' }).id('techopolis:compressor')

  event.replaceInput({ id: 'extendedcrafting:ender_alternator' }, 'ender_eye', 'bigreactors:anglesite_crystal')
  event.replaceInput({ id: 'extendedcrafting:ender_crafter' }, 'ender_eye', 'bigreactors:anglesite_crystal')
  event.replaceInput({ id: 'extendedcrafting:flux_alternator' }, 'minecraft:gold_ingot', 'techopolis:elite_technium_ingot')
  event.replaceInput({ id: 'extendedcrafting:flux_alternator' }, 'extendedcrafting:redstone_ingot', 'techopolis:lunar_technium_ingot')

  //Compressor
  addCompressorTagRecipe('c:gems', 8, 'techopolis:pure_precious_matter')
  addCompressorTagRecipe('c:ingots', 8, 'techopolis:pure_metallic_matter')
  addCompressorTagRecipe('c:crops', 12, 'techopolis:pure_organic_matter')
  addCompressorTagRecipe('minecraft:flowers', 32, 'techopolis:pure_living_matter')
  addCompressorItemRecipe('minecraft:ender_pearl', 4, 'techopolis:pure_ender_matter')
  addCompressorItemRecipe('minecraft:clay', 2, 'techopolis:pure_earth_matter')
  addCompressorItemRecipe('techopolis:simulation_pearl', 4, 'techopolis:pure_quantum_matter')
  addCompressorItemRecipe('minecraft:glowstone_dust', 8, 'techopolis:pure_nether_matter')


  function addCompressorItemRecipe(input, inputCount, output) {
    event.custom({
      "type": "extendedcrafting:compressor",
      "power_cost": 2400,
      "ingredient": {
        "item": input,
        "count": inputCount
      },
      "catalyst": {
        "item": "techopolis:pure_matter_mold"
      },
      "result": {
        "id": output
      }
    })
  }

  function addCompressorTagRecipe(input, inputCount, output) {
    event.custom({
      "type": "extendedcrafting:compressor",
      "power_cost": 2400,
      "ingredient": {
        "tag": input,
        "count": inputCount
      },
      "catalyst": {
        "item": "techopolis:pure_matter_mold"
      },
      "result": {
        "id": output
      }
    })
  }

  //Space Suit - Chestplate

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AABBBBBAA",
      " ABBBBBA ",
      " ABBBBBA ",
      " AAAAAAA "
    ],
    "key": {
      "A": {
        "item": "techopolis:hellish_technium_nugget"
      },
      "B": {
        "item": "minecraft:white_wool"
      }
    },
    "result": {
      "id": "stellaris:space_suit_chestplate"
    }
  }).id('stellaris:misc/spacesuit_chestplate')

  //Space Suit - Boots

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "         ",
      " AAA AAA ",
      " ABA ABA ",
      " ABA ABA ",
      " ABA ABA ",
      "AABA ABAA",
      "ABBA ABBA",
      "AAAA AAAA"
    ],
    "key": {
      "A": {
        "item": "techopolis:hellish_technium_nugget"
      },
      "B": {
        "item": "minecraft:white_wool"
      }
    },
    "result": {
      "id": "stellaris:space_suit_boots"
    }
  }).id('stellaris:misc/spacesuit_boots')

  //Space Suit - Leggings
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABAAAAABA",
      "ABA   ABA",
      "ABA   ABA",
      "ABA   ABA",
      "ABA   ABA",
      "ABA   ABA",
      "ABA   ABA"
    ],
    "key": {
      "A": {
        "item": "techopolis:hellish_technium_nugget"
      },
      "B": {
        "item": "minecraft:white_wool"
      }
    },
    "result": {
      "id": "stellaris:space_suit_leggings"
    }
  }).id('stellaris:misc/spacesuit_leggings')

  //Space Suit - Helmet

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABCCCCCBA",
      "ABCCCCCBA",
      "ABCCCCCBA",
      "ABCCCCCBA",
      "ABCCCCCBA",
      "ABBBBBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "techopolis:hellish_technium_nugget"
      },
      "B": {
        "item": "minecraft:white_wool"
      },
      "C": {
        "item": "minecraft:tinted_glass"
      }
    },
    "result": {
      "id": "stellaris:space_suit_helmet"
    }
  }).id('stellaris:misc/spacesuit_helmet')

  //Heavy Duty Plating

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "         ",
      " ABBBBBA ",
      " CDDDDDC ",
      " CCCECCC ",
      " CDDDDDC ",
      " ABBBBBA ",
      "         ",
      "         "
    ],
    "key": {
      "A": {
        "item": "alltheores:osmium_plate"
      },
      "B": {
        "item": "alltheores:lumium_plate"
      },
      "C": {
        "item": "alltheores:lead_plate"
      },
      "D": {
        "item": "alltheores:steel_plate"
      },
      "E": {
        "item": "techopolis:hellish_technium_nugget"
      }
    },
    "result": {
      "id": 'techopolis:heavy_duty_plating'
    }
  }).id('techopolis:heavy_duty_plating')

  //Launch Pad
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "         ",
      "         ",
      "         ",
      "AAAAAAAAA",
      "AAAAAAAAA",
      "AAAAAAAAA",
      "         ",
      "         "
    ],
    "key": {
      "A": {
        "item": "techopolis:heavy_duty_plating"
      }
    },
    "result": {
      "id": "stellaris:rocket_launch_pad",
      "count": 9
    }
  }).id('stellaris:misc/rocket_launch_pad')

  //Rocket Fin
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "   AAA   ",
      " AABBBAA ",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBAAABBA",
      "AAA   AAA",
      "         ",
      "         "
    ],
    "key": {
      "A": {
        "item": "techopolis:heavy_duty_plating"
      },
      "B": {
        "item": "alltheores:steel_plate"
      }
    },
    "result": {
      "id": "stellaris:rocket_fin",
      "count": 2
    }
  }).id('stellaris:misc/rocket_fin')

  //Nose Cone
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "    A    ",
      "   ABA   ",
      "   ABA   ",
      "   ABA   ",
      "  ABBBA  ",
      "  ABBBA  ",
      " ABBBBBA ",
      " ABBBBBA ",
      "  AAAAA  "
    ],
    "key": {
      "A": {
        "item": "techopolis:heavy_duty_plating"
      },
      "B": {
        "item": "alltheores:steel_plate"
      }
    },
    "result": {
      "id": "stellaris:rocket_nose_cone"
    }
  }).id('stellaris:misc/rocket_nose_cone')

  //Rocket Engine
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      " AAAAAAA ",
      " ABBBBBA ",
      " AABBBAA ",
      "  ABBBA  ",
      "  AAAAA  ",
      " ACCCCCA ",
      " ACDEDCA ",
      " ACCCCCA ",
      "  AAAAA  "
    ],
    "key": {
      "A": {
        "item": "techopolis:heavy_duty_plating"
      },
      "B": {
        "item": "casting:tank"
      },
      "C": {
        "item": "alltheores:steel_plate"
      },
      "D": {
        "item": "techopolis:elite_technium_machine_frame"
      },
      "E": {
        "item": "techopolis:hellish_technium_machine_frame"
      }
    },
    "result": {
      "id": "stellaris:rocket_engine"
    }
  }).id('stellaris:misc/rocket_engine')

  //Rocket
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "    A    ",
      "    B    ",
      "   BBB   ",
      "   BBB   ",
      "   BBB   ",
      "  CBBBC  ",
      "  CBBBC  ",
      "  CBBBC  ",
      "  C D C  "
    ],
    "key": {
      "A": {
        "item": "stellaris:rocket_nose_cone"
      },
      "B": {
        "item": "techopolis:heavy_duty_plating"
      },
      "C": {
        "item": "stellaris:rocket_fin"
      },
      "D": {
        "item": "stellaris:rocket_engine"
      }
    },
    "result": {
      "id": "stellaris:rocket"
    }
  }).id('stellaris:misc/rocket')

  //Canned Food
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      " AAAAAAA ",
      " ABBBBBA ",
      " ABBBBBA ",
      " ABBBBBA ",
      " ABBBBBA ",
      " ABBBBBA ",
      " ABBBBBA ",
      " AAAAAAA "
    ],
    "key": {
      "A": {
        "item": "techopolis:heavy_duty_plating"
      },
      "B": {
        "tag": "c:foods"
      }
    },
    "result": {
      "id": "techopolis:canned_food",
      "count": 30
    }
  }).id('techopolis:canned_food')

  // Jet Suit - Helmet
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABCCCCCBA",
      "ABCCCCCBA",
      "ABCCCCCBA",
      "ABCCCCCBA",
      "ABCCCCCBA",
      "ABBBBBBBA",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "stellaris:desh_ingot"
      },
      "B": {
        "item": "minecraft:white_wool"
      },
      "C": {
        "item": "minecraft:tinted_glass"
      }
    },
    "result": {
      "id": "stellaris:jet_suit_helmet"
    }
  }).id('stellaris:armor/jet_suit_helmet')

  // Jet Suit - Chestplate
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "ABBBBBBBA",
      "AABBBBBAA",
      " ABBBBBA ",
      " ABBBBBA ",
      " AAAAAAA "
    ],
    "key": {
      "A": {
        "item": "stellaris:desh_ingot"
      },
      "B": {
        "item": "minecraft:white_wool"
      }
    },
    "result": {
      "id": "stellaris:jet_suit_chestplate"
    }
  }).id('stellaris:armor/jet_suit_chestplate')

  // Jet Suit - Leggings
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "ABBBBBBBA",
      "ABAAAAABA",
      "ABA   ABA",
      "ABA   ABA",
      "ABA   ABA",
      "ABA   ABA",
      "ABA   ABA",
      "ABA   ABA"
    ],
    "key": {
      "A": {
        "item": "stellaris:desh_ingot"
      },
      "B": {
        "item": "minecraft:white_wool"
      }
    },
    "result": {
      "id": "stellaris:jet_suit_leggings"
    }
  }).id('stellaris:armor/jet_suit_leggings')

  // Jet Suit - Boots
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "         ",
      " AAA AAA ",
      " ABA ABA ",
      " ABA ABA ",
      " ABA ABA ",
      "AABA ABAA",
      "ABBA ABBA",
      "AAAA AAAA"
    ],
    "key": {
      "A": {
        "item": "stellaris:desh_ingot"
      },
      "B": {
        "item": "minecraft:white_wool"
      }
    },
    "result": {
      "id": "stellaris:jet_suit_boots"
    }
  }).id('stellaris:armor/jet_suit_boots')

  //Gearbox
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "         ",
      "  AAAAA  ",
      "  ABBBA  ",
      "  ACDCA  ",
      "  ABBBA  ",
      "  AAAAA  ",
      "         ",
      "         "
    ],
    "key": {
      "A": {
        "item": "techopolis:multiblock_machine_casing"
      },
      "B": {
        "item": "stellaris:moon_stone_bricks"
      },
      "C": {
        "item": "alltheores:brass_gear"
      },
      "D": {
        "item": "techopolis:hellish_technium_machine_frame"
      }
    },
    "result": {
      "id": "techopolis:multiblock_gearbox"
    }
  }).id('techopolis:misc/gearbox')

  //Flux Crafter (Eye Crafter)
  event.custom({
    "type": "extendedcrafting:shaped_flux_crafter",
    "power_required": 1000000,
    "power_rate": 10000,
    "pattern": [
      " A ",
      "A A",
      " A "
    ],
    "key": {
      "A": {
        "item": "minecraft:ender_eye"
      }
    },
    "result": {
      "id": "techopolis:ender_portal"
    }
  }).id('techopolis:ender_portal')

  //Ender Crafter - Enhanced Ender Ingot
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter",
    "pattern": [
      "DED",
      "ESE",
      "DED"
    ],
    "key": {
      "S": {
        "item": "extendedcrafting:ender_star_block"
      },
      "E": {
        "item": "extendedcrafting:ender_ingot"
      },
      "D": {
        "item": "alltheores:enderium_ingot"
      }
    },
    "result": {
      "id": "extendedcrafting:enhanced_ender_ingot",
      "count": 4
    }
  }).id('extendedcrafting:enhanced_ender_ingot')

  //Dragon Slayer 5000
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "       AB",
      "      CDE",
      "     FDG ",
      "  HHIDJ  ",
      " HKLDM   ",
      "HNDDOH   ",
      " DPDQH   ",
      " DDRH    ",
      "D  H     "
    ],
    "key": {
      "A": {
        "item": "endrem:guardian_eye"
      },
      "B": {
        "item": "endrem:lost_eye"
      },
      "C": {
        "item": "endrem:exotic_eye"
      },
      "D": {
        "item": "techopolis:lunar_technium_ingot"
      },
      "E": {
        "item": "endrem:evil_eye"
      },
      "F": {
        "item": "endrem:cryptic_eye"
      },
      "G": {
        "item": "endrem:cursed_eye"
      },
      "H": {
        "item": "techopolis:lunar_technium_nugget"
      },
      "I": {
        "item": "endrem:corrupted_eye"
      },
      "J": {
        "item": "endrem:black_eye"
      },
      "K": {
        "item": "endrem:cold_eye"
      },
      "L": {
        "item": "endrem:magical_eye"
      },
      "M": {
        "item": "endrem:old_eye"
      },
      "N": {
        "item": "endrem:wither_eye"
      },
      "O": {
        "item": "endrem:nether_eye"
      },
      "P": {
        "item": "endrem:undead_eye"
      },
      "Q": {
        "item": "endrem:rogue_eye"
      },
      "R": {
        "item": "endrem:witch_eye"
      }
    },
    "result": {
      "id": "techopolis:dragon_slayer_5000"
    }
  }).id('techopolis:dragon_slayer_5000')

  //Eyes
  function addEyeRecipe(dye, block, eye) {
    event.custom({
      "type": "extendedcrafting:shaped_flux_crafter",
      "power_required": 50000000,
      "power_rate": 10000,
      "pattern": [
        "ABA",
        "BCB",
        "ABA"
      ],
      "key": {
        "A": {
          "item": block
        },
        "B": {
          "item": `minecraft:${dye}_dye`
        },
        "C": {
          "item": "minecraft:ender_eye"
        }
      },
      "result": {
        "id": eye
      }
    }).id(eye)
  }

  addEyeRecipe('black', 'replication:replica_block', 'endrem:black_eye')
  addEyeRecipe('purple', 'advanced_ae:quantum_alloy_block', 'endrem:cursed_eye')
  addEyeRecipe('blue', 'minecraft:lapis_block', 'endrem:exotic_eye')
  addEyeRecipe('light_blue', 'ae2:quartz_block', 'endrem:cold_eye')
  addEyeRecipe('gray', 'alltheores:steel_block', 'endrem:corrupted_eye')
  addEyeRecipe('white', 'alltheores:aluminum_block', 'endrem:wither_eye')
  addEyeRecipe('pink', 'bigreactors:inanite_block', 'endrem:guardian_eye')
  addEyeRecipe('red', 'alltheores:ruby_block', 'endrem:lost_eye')
  addEyeRecipe('magenta', 'bigreactors:magentite_block', 'endrem:witch_eye')
  addEyeRecipe('lime', 'extendedae:entro_block', 'endrem:cryptic_eye')
  addEyeRecipe('yellow', 'minecraft:gold_block', 'endrem:evil_eye')
  addEyeRecipe('green', 'minecraft:emerald_block', 'endrem:rogue_eye')
  addEyeRecipe('cyan', 'actuallyadditions:diamatine_crystal_block', 'endrem:magical_eye')
  addEyeRecipe('brown', 'techopolis:ostrum_block', 'endrem:nether_eye')
  addEyeRecipe('orange', 'stellaris:desh_block', 'endrem:old_eye')
  addEyeRecipe('light_gray', 'alltheores:zinc_block', 'endrem:undead_eye')

  //Ultimate Singularity
  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "ingredients": [
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:quantum"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:dimensional"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:obsidiglow"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:steel"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:invar"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:electrum"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:bronze"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:super_empowered_crystal"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:constantan"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:netherite"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:entro_infused"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:brass"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:enhanced_ender"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:signalum"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:lumium"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:technium"
        },
        "type": "neoforge:components"
      },
      {
        "item": "endrem:magical_eye"
      },
      {
        "item": "endrem:nether_eye"
      },
      {
        "item": "endrem:old_eye"
      },
      {
        "item": "endrem:rogue_eye"
      },
      {
        "item": "endrem:undead_eye"
      },
      {
        "item": "endrem:witch_eye"
      },
      {
        "item": "endrem:wither_eye"
      },
      {
        "item": "endrem:black_eye"
      },
      {
        "item": "endrem:exotic_eye"
      },
      {
        "item": "endrem:guardian_eye"
      },
      {
        "item": "endrem:lost_eye"
      },
      {
        "item": "endrem:cryptic_eye"
      },
      {
        "item": "endrem:corrupted_eye"
      },
      {
        "item": "endrem:evil_eye"
      },
      {
        "item": "endrem:cursed_eye"
      },
      {
        "item": "endrem:cold_eye"
      }
    ],
    "result": {
      "id": "extendedcrafting:ultimate_singularity"
    }
  }).id('techopolis:ultimate_singularity')

  //Eye Block
  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "ingredients": [
      {
        "item": "endrem:nether_eye"
      },
      {
        "item": "endrem:old_eye"
      },
      {
        "item": "endrem:corrupted_eye"
      },
      {
        "item": "endrem:cold_eye"
      },
      {
        "item": "endrem:magical_eye"
      },
      {
        "item": "endrem:lost_eye"
      },
      {
        "item": "endrem:black_eye"
      },
      {
        "item": "endrem:rogue_eye"
      },
      {
        "item": "endrem:wither_eye"
      },
      {
        "item": "endrem:guardian_eye"
      },
      {
        "item": "endrem:evil_eye"
      },
      {
        "item": "endrem:witch_eye"
      },
      {
        "item": "endrem:undead_eye"
      },
      {
        "item": "endrem:cursed_eye"
      },
      {
        "item": "endrem:cryptic_eye"
      },
      {
        "item": "endrem:exotic_eye"
      }
    ],
    "result": {
      "id": "techopolis:eye_block"
    }
  }).id('techopolis:eye_block')

  //The Ultimate Ingot
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      " ABBABBA ",
      "BCDCCCDCB",
      "ADEFGFEDA",
      "AAEGHGEAA",
      "ADEFGFEDA",
      "BCDCCCDCB",
      " ABBABBA ",
      "         "
    ],
    "key": {
      "A": {
        "item": "techopolis:basic_technium_ingot"
      },
      "B": {
        "item": "techopolis:advanced_technium_ingot"
      },
      "C": {
        "item": "techopolis:elite_technium_ingot"
      },
      "D": {
        "item": "techopolis:ultimate_technium_ingot"
      },
      "E": {
        "item": "techopolis:hellish_technium_ingot"
      },
      "F": {
        "item": "techopolis:lunar_technium_ingot"
      },
      "G": {
        "item": "extendedcrafting:ultimate_singularity"
      },
      "H": {
        "item": "techopolis:end_technium_ingot"
      }
    },
    "result": {
      "id": "extendedcrafting:the_ultimate_ingot",
      "count": 4
    }
  }).id('techopolis:ultimate_ingot')

})
