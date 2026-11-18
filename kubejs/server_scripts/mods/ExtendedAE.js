ServerEvents.recipes(event => {

  event.remove({ id: 'extendedae:cobblestone_cell' })
  event.remove({ id: 'extendedae:water_cell' })
  event.remove({ id: 'extendedae:entro_seed' })

  event.shaped('extendedae:entro_seed', [" E ", "EUE", " E "], { E: "mekanism:pellet_polonium", U: "techopolis:unstable_matter" }).id('techopolis:entro_seed')

  //Super Empowered Crystal Block
  event.custom({
    "type": "extendedae:crystal_assembler",
    "input_items": [
      {
        "amount": 1,
        "ingredient": {
          "item": "actuallyadditions:empowered_enori_crystal_block"
        }
      },
      {
        "amount": 1,
        "ingredient": {
          "item": "actuallyadditions:empowered_restonia_crystal_block"
        }
      },
      {
        "amount": 1,
        "ingredient": {
          "item": "actuallyadditions:empowered_palis_crystal_block"
        }
      },
      {
        "amount": 1,
        "ingredient": {
          "item": "actuallyadditions:empowered_diamatine_crystal_block"
        }
      },
      {
        "amount": 1,
        "ingredient": {
          "item": "actuallyadditions:empowered_void_crystal_block"
        }
      },
      {
        "amount": 1,
        "ingredient": {
          "item": "actuallyadditions:empowered_emeradic_crystal_block"
        }
      },

    ],
    "output": {
      "count": 1,
      "id": "techopolis:super_empowered_crystal_block"
    }
  })
})
