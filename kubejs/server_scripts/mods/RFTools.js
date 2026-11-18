ServerEvents.recipes(event => {

    event.shapeless('1x rftoolsutility:crafter1', ['rftoolsutility:crafter1']).id('techopolis:reset_crafter1')
    event.shapeless('1x rftoolsutility:crafter2', ['rftoolsutility:crafter2']).id('techopolis:reset_crafter2')
    event.shapeless('1x rftoolsutility:crafter3', ['rftoolsutility:crafter3']).id('techopolis:reset_crafter3')

    event.replaceInput({ mod: 'rftoolsutility' }, 'rftoolsbase:machine_base', "techopolis:advanced_technium_machine_frame")
    event.replaceInput({ mod: 'rftoolsutility' }, 'rftoolsbase:machine_frame', "techopolis:elite_technium_machine_frame")

    event.replaceInput({ id: 'rftoolsbase:dimensionalshard' }, '#c:glass_blocks', "minecraft:dragon_breath")
    event.replaceInput({ id: 'rftoolsbase:dimensionalshard' }, 'minecraft:emerald', "techopolis:super_empowered_crystal")
    event.replaceInput({ id: 'rftoolsbase:dimensionalshard' }, 'minecraft:gold_ingot', "techopolis:alien_ingot")
    event.replaceInput({ id: 'rftoolsbase:dimensionalshard' }, 'minecraft:quartz', "#techopolis:dimensional_ores")
    event.replaceInput({ id: 'rftoolsbase:dimensionalshard' }, 'minecraft:redstone', "stellaris:cheese")
})
