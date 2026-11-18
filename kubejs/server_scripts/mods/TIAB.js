//TIAB

ServerEvents.recipes(event => {

    event.shaped('tiab:time_in_a_bottle', [" P ", "GTG", "GTG"], {P: 'minecraft:clock', G: '#c:glass_blocks', T: 'techopolis:time_crystal'}).id('tiab:time_in_a_bottle')
    event.shaped('tiab_charger:tiab_charger', ["ITI", "TMT", "ITI"], {I: 'minecraft:iron_ingot', M: 'techopolis:ultimate_technium_machine_frame', T: 'techopolis:time_crystal'}).id('tiab_charger:tiab_charger')

})
