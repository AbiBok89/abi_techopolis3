ServerEvents.recipes(event => {

    event.remove({ id: 'bigreactors:blasting/graphite_from_coalblock' })
    event.remove({ id: 'bigreactors:blasting/graphite_from_coal' })
    event.remove({ id: 'bigreactors:blasting/graphite_from_charcoal' })
    event.remove({ id: 'bigreactors:smelting/graphite_from_coalblock' })
    event.remove({ id: 'bigreactors:smelting/graphite_from_coal' })
    event.remove({ id: 'bigreactors:smelting/graphite_from_charcoal' })
    event.remove({ id: 'bigreactors:reactor/reinforced/controller_ingots_yellorium' })
    event.remove({ id: 'bigreactors:reactor/reinforced/fuelrod_ingots_yellorium' })
    event.remove({ id: 'bigreactors:reactor/basic/fuelrod_ingots_yellorium' })
    event.remove({ id: 'bigreactors:reactor/basic/controller_ingots_yellorium' })

    event.replaceInput({ id: 'bigreactors:reactor/basic/controller_ingots_uranium' }, 'minecraft:diamond', "techopolis:elite_technium_machine_frame")
    event.replaceInput({ id: 'bigreactors:reprocessor/controller' }, 'minecraft:emerald', "techopolis:elite_technium_machine_frame")
    event.replaceInput({ id: 'bigreactors:reactor/reinforced/controller_ingots_uranium' }, 'minecraft:diamond_block', "techopolis:ultimate_technium_machine_frame")
    event.replaceInput({ id: 'bigreactors:reactor/reinforced/fuelrod_ingots_uranium' }, 'alltheores:uranium_ingot', "bigreactors:reinforced_reactorcasing")
    event.replaceInput({ id: 'bigreactors:reactor/reinforced/chargingfe' }, 'minecraft:lapis_block', "bigreactors:reinforced_reactorcasing")
    event.replaceInput({ id: 'bigreactors:fluidizer/powerport' }, 'minecraft:diamond', "bigreactors:cyanite_ingot")
    event.replaceInput({ id: 'bigreactors:fluidizer/outputport' }, '#c:chests', "mekanism:ultimate_fluid_tank")
    event.replaceInput({ id: 'bigreactors:turbine/inanite_block' }, 'netherite_block', "techopolis:ultimate_technium_machine_frame")
    event.replaceInput({ id: 'bigreactors:turbine/reinforced/controller' }, 'diamond_block', "techopolis:lunar_technium_machine_frame")

})
