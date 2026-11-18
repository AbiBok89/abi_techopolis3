ServerEvents.recipes(event => {

  event.shapeless('bigreactors:inanite_block', ['9x bigreactors:inanite_ingot']).id('techopolis:inanite_block_from_ingot')
  event.shapeless('9x bigreactors:inanite_ingot', ['bigreactors:inanite_block']).id('techopolis:inanite_ingot_from_block')
  event.shapeless('bigreactors:ridiculite_block', ['9x bigreactors:ridiculite_ingot']).id('techopolis:ridiculite_block_from_ingot')
  event.shapeless('9x bigreactors:ridiculite_ingot', ['bigreactors:ridiculite_block']).id('techopolis:ridiculite_ingot_from_block')
  event.shapeless('bigreactors:ludicrite_block', ['9x bigreactors:ludicrite_ingot']).id('techopolis:ludicrite_block_from_ingot')
  event.shapeless('9x bigreactors:ludicrite_ingot', ['bigreactors:ludicrite_block']).id('techopolis:ludicrite_ingot_from_block')
  event.shapeless('bigreactors:insanite_block', ['9x bigreactors:insanite_ingot']).id('techopolis:insanite_block_from_ingot')
  event.shapeless('9x bigreactors:insanite_ingot', ['bigreactors:insanite_block']).id('techopolis:insanite_ingot_from_block')

  event.remove({ id: 'bigreactors:turbine/ridiculite_block' })
  event.remove({ id: 'bigreactors:turbine/inanite_block' })
  event.remove({ id: 'bigreactors:turbine/insanite_block' })
  event.remove({ id: 'bigreactors:turbine/ludicrite_block' })

  event.replaceInput({ id: 'bigreactors:energizer/energizercell' }, 'bigreactors:benitoite_crystal', 'techopolis:ultimate_technium_nugget')

  // Extreme Reactors Solid -> Fluid
  function fluidizerSolid(inputItem, outputFluid, outputAmount, recipeId) {
    let recipe = event.custom({
      type: "bigreactors:fluidizersolid",
      ingredient: {
        count: 1,
        ingredient: { item: inputItem }
      },
      result: { amount: outputAmount, id: outputFluid }
    }).id(recipeId)
  }

  // Extreme Reactors Fluid + Fluid -> Fluid
  function fluidizerMixing(fluid1, amount1, fluid2, amount2, outputFluid, outputAmount, recipeId) {
    let recipe = event.custom({
      type: "bigreactors:fluidizerfluidmixing",
      ingredient1: { amount: amount1, id: fluid1 },
      ingredient2: { amount: amount2, id: fluid2 },
      result: { amount: outputAmount, id: outputFluid }
    }).id(recipeId)
  }

  // Mob Essence Recipes
  fluidizerSolid("minecraft:rotten_flesh", "techopolis:molten_mob_essence", 100, 'bigreactors:fluidizer/solid/rotten_flesh')
  fluidizerSolid("minecraft:bone", "techopolis:molten_mob_essence", 120, 'bigreactors:fluidizer/solid/bone')
  fluidizerSolid("minecraft:spider_eye", "techopolis:molten_mob_essence", 120, 'bigreactors:fluidizer/solid/spider_eye')
  fluidizerSolid("minecraft:gunpowder", "techopolis:molten_mob_essence", 60, 'bigreactors:fluidizer/solid/gunpowder')
  fluidizerSolid("minecraft:ender_pearl", "techopolis:molten_mob_essence", 200, 'bigreactors:fluidizer/solid/ender_pearl')
  fluidizerSolid("hostilenetworks:overworld_prediction", "techopolis:molten_mob_essence", 500, 'bigreactors:fluidizer/solid/overworld_prediction')
  fluidizerSolid("hostilenetworks:nether_prediction", "techopolis:molten_mob_essence", 1000, 'bigreactors:fluidizer/solid/nether_prediction')
  fluidizerSolid("techopolis:alien_prediction", "techopolis:molten_mob_essence", 2500, 'bigreactors:fluidizer/solid/alien_prediction')
  fluidizerSolid("hostilenetworks:end_prediction", "techopolis:molten_mob_essence", 5000, 'bigreactors:fluidizer/solid/end_prediction')

  // Uranium Recipes
  fluidizerSolid("alltheores:uranium_ingot", "casting:molten_uranium", 90, 'bigreactors:fluidizer/solid/yellorium')
  fluidizerSolid("alltheores:uranium_block", "casting:molten_uranium", 810, 'bigreactors:fluidizer/solid/yellorium9')

  // Unstable Matter
  fluidizerSolid("techopolis:unstable_matter", "techopolis:liquid_matter", 16000, 'techopolis:fluidizer/liquid_matter')

  // Fluid Mixing Recipes
  fluidizerMixing("casting:molten_uranium", 180, "bigreactors:blutonium", 1000, "bigreactors:verderium", 2000, 'bigreactors:fluidizer/fluidmixing/verderium_1')
  fluidizerMixing("bigreactors:blutonium", 1000, "casting:molten_uranium", 180, "bigreactors:verderium", 2000, 'bigreactors:fluidizer/fluidmixing/verderium_2')

})
