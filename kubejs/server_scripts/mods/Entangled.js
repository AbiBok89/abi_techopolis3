ServerEvents.recipes(event => {

    event.shaped('entangled:block', ["RUR", "MTM", "RUR"], { R: 'mekanism:ingot_refined_obsidian', U: "mekanism:ultimate_control_circuit", M: "routers:exporter_block", T: "mekanism:teleportation_core" }).id('entangled:block')
    event.replaceInput({ id: 'entangled:item' }, 'minecraft:ender_pearl', "mekanism:teleportation_core")

})