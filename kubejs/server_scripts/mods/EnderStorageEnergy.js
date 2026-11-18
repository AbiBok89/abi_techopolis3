ServerEvents.recipes(event => {

    // Ender Storage: Energy 
    event.remove({ id: 'enderrf:ender_battery' })
    event.shaped('enderrf:ender_battery', ["NWN", "ORO", "NCN"], { N: 'techopolis:advanced_technium_nugget', W: '#c:wools', O: '#c:obsidians', R: 'minecraft:redstone_block', C: 'techopolis:ender_teleportation_core' }).id('techopolis:ender_battery')

    event.remove({ id: 'enderrf:ender_flask' })
    event.shaped('enderrf:ender_flask', ["NWN", "ORO", "NCN"], { N: 'techopolis:advanced_technium_nugget', W: '#c:wools', O: '#c:obsidians', R: 'alltheores:osmium_ingot', C: 'techopolis:ender_teleportation_core' }).id('techopolis:ender_flask')

})
