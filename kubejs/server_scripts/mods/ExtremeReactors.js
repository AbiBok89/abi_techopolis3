ServerEvents.recipes(event => {

    event.shaped('2x bigreactors:basic_reactorcasing', [" G ", "GTG", " G "], { G: 'bigreactors:graphite_ingot', T: 'mekanism:steel_casing' }).id('bigreactors:reactor/basic/casing')
    event.shaped('2x bigreactors:fluidizercasing', [" G ", "GTG", " G "], { G: 'minecraft:bone', T: 'mekanism:steel_casing' }).id('bigreactors:fluidizer/casing')
    event.shaped('1x bigreactors:fluidizercontroller', ["CQC", "IMI", "CRC"], { R: "redstone", Q: "comparator", I: 'bigreactors:cyanite_ingot', C: 'bigreactors:fluidizercasing', M: 'techopolis:elite_technium_machine_frame' }).id('bigreactors:fluidizer/controller')
    event.shaped('1x bigreactors:fluidizersolidinjector', ["CQC", "IMI", "CRC"], { R: "redstone", Q: "comparator", I: '#c:chests', C: 'bigreactors:fluidizercasing', M: 'techopolis:elite_technium_machine_frame' }).id('bigreactors:fluidizer/solidinjector')

})
