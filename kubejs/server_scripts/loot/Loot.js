console.info('Loot Modification...')

LootJS.modifiers(event => {

  //Ores only drop Ores
  let ores = Ingredient.of("#c:ores").itemIds

  ores.forEach(item => {
    event.addBlockModifier(item).removeLoot('*')
    event.addBlockModifier(item).addLoot(item)
  })

  //Add loot to blocks world type and curios condition
  function addWorldLoottables(block, itemAdded, chance, worldType) {
    event.addBlockModifier(block)
      .addLoot(itemAdded)
      .randomChance(chance)
      .matchCustomCondition({
        condition: "bblcore:world_type_condition",
        world_type: worldType
      })
      .matchPlayerCustom(player => {
        let hasCurio = false;
        $CuriosApi.getCuriosInventory(player).ifPresent(c => {
          c.findFirstCurio('techopolis:resource_curio').ifPresent(curio => {
            hasCurio = true;
          });
        });
        return hasCurio;
      });
  }

  //Flat
  addWorldLoottables('minecraft:grass_block', 'projectvibrantjourneys:twigs', 0.2, 'minecraft:flat')
  addWorldLoottables('minecraft:grass_block', 'projectvibrantjourneys:rocks', 0.75, 'minecraft:flat')
  addWorldLoottables('minecraft:grass_block', 'projectvibrantjourneys:rocks', 1.0, 'minecraft:flat')
  addWorldLoottables('minecraft:grass_block', 'minecraft:bone_meal', 0.15, 'minecraft:flat')

  //Sky
  addWorldLoottables('minecraft:dirt', 'projectvibrantjourneys:twigs', 0.2, 'skyblockbuilder:noise_based')
  addWorldLoottables('minecraft:dirt', 'projectvibrantjourneys:rocks', 0.75, 'skyblockbuilder:noise_based')
  addWorldLoottables('minecraft:dirt', 'projectvibrantjourneys:rocks', 1.0, 'skyblockbuilder:noise_based')
  addWorldLoottables('minecraft:dirt', 'minecraft:bone_meal', 0.15, 'skyblockbuilder:noise_based')

  //Skygrid
  addWorldLoottables('minecraft:dirt', 'projectvibrantjourneys:twigs', 0.8, 'skygrid_reloaded:skygrid')
  addWorldLoottables('minecraft:dirt', 'projectvibrantjourneys:rocks', 1.0, 'skygrid_reloaded:skygrid')
  addWorldLoottables('minecraft:dirt', 'projectvibrantjourneys:rocks', 1.0, 'skygrid_reloaded:skygrid')
  addWorldLoottables('minecraft:dirt', 'minecraft:bone_meal', 0.75, 'skygrid_reloaded:skygrid')
  addWorldLoottables('minecraft:grass_block', 'projectvibrantjourneys:twigs', 0.8, 'skygrid_reloaded:skygrid')
  addWorldLoottables('minecraft:grass_block', 'projectvibrantjourneys:rocks', 1.0, 'skygrid_reloaded:skygrid')
  addWorldLoottables('minecraft:grass_block', 'projectvibrantjourneys:rocks', 1.0, 'skygrid_reloaded:skygrid')
  addWorldLoottables('minecraft:grass_block', 'minecraft:bone_meal', 0.75, 'skygrid_reloaded:skygrid')

  addWorldLoottables('minecraft:nether_quartz_ore', 'alltheores:nether_zinc_ore', 0.25, 'skygrid_reloaded:skygrid')
  addWorldLoottables('minecraft:nether_quartz_ore', 'alltheores:nether_ruby_ore', 0.25, 'skygrid_reloaded:skygrid')
  addWorldLoottables('minecraft:nether_quartz_ore', 'alltheores:nether_sapphire_ore', 0.25, 'skygrid_reloaded:skygrid')
  addWorldLoottables('minecraft:nether_quartz_ore', 'alltheores:nether_peridot_ore', 0.25, 'skygrid_reloaded:skygrid')

  addWorldLoottables('minecraft:nether_gold_ore', 'alltheores:nether_zinc_ore', 0.5, 'skygrid_reloaded:skygrid')
  addWorldLoottables('minecraft:nether_gold_ore', 'alltheores:nether_ruby_ore', 0.5, 'skygrid_reloaded:skygrid')
  addWorldLoottables('minecraft:nether_gold_ore', 'alltheores:nether_sapphire_ore', 0.5, 'skygrid_reloaded:skygrid')
  addWorldLoottables('minecraft:nether_gold_ore', 'alltheores:nether_peridot_ore', 0.5, 'skygrid_reloaded:skygrid')



  //Globes
  event.addBlockModifier("stellaris:earth_globe").addLoot("stellaris:earth_globe")
  event.addBlockModifier("stellaris:venus_globe").addLoot("stellaris:venus_globe")
  event.addBlockModifier("stellaris:mercury_globe").addLoot("stellaris:mercury_globe")
  event.addBlockModifier("stellaris:mars_globe").addLoot("stellaris:mars_globe")
  event.addBlockModifier("stellaris:moon_globe").addLoot("stellaris:moon_globe")

  //Chorus Flower
  event.addBlockModifier('minecraft:chorus_flower').removeLoot("minecraft:chorus_flower")

  //Banned Items

  let bannedItemsInLootTables = Ingredient.of("#techopolis:banned_in_loot_tables").itemIds

  bannedItemsInLootTables.forEach(item => {

    event.addTableModifier("/.*:chests.*/").removeLoot(item)
    event.addTableModifier("/.*:entities.*/").removeLoot(item)
    event.addTableModifier("actuallyadditions:engineer_house").removeLoot(item)

  })
})

//Industrial Strainer Loot
LootJS.lootTables(event => {
  event.create("techopolis:industrial_strainer/moon_stone_dust")
    .createPool(pool => {
      pool.addEntry(LootEntry.of("techopolis:dirty_desh_dust").withWeight(1))
      pool.addEntry(LootEntry.of("techopolis:dirty_neptunium_dust").withWeight(1))
      pool.addEntry(LootEntry.of("techopolis:dirty_ostrum_dust").withWeight(1))

    })

})
