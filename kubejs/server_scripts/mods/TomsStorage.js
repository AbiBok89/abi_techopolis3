ServerEvents.recipes(event => {

    event.shaped('toms_storage:inventory_cable_connector', [" H ", "PCP", " H "], { H: 'woodenhopper:wooden_hopper', P: 'toms_storage:inventory_cable', C: 'techopolis:toms_core' }).id('toms_storage:inventory_connector')
    event.shaped('8x toms_storage:inventory_cable', ["PCP"], { P: '#minecraft:planks', C: 'techopolis:toms_core' }).id('toms_storage:inventory_cable')
    event.shaped('toms_storage:inventory_connector', ["HPH", "PCP", "HPH"], { H: '#c:chests/wooden', P: '#minecraft:planks', C: 'techopolis:toms_core' }).id('toms_storage:inventory_cable_connector')
    event.shaped('toms_storage:storage_terminal', ["PTP", "PCP", "PTP"], { T: 'techopolis:basic_technium_nugget', P: '#minecraft:planks', C: 'techopolis:toms_core' }).id('toms_storage:storage_terminal')
    event.shaped('toms_storage:crafting_terminal', ["PTP", "PCP", "PTP"], { T: 'techopolis:basic_technium_nugget', P: '#c:player_workstations/crafting_tables', C: 'toms_storage:storage_terminal' }).id('toms_storage:crafting_terminal')

    event.replaceInput({ id: 'toms_storage:trim' }, '#c:chests', 'techopolis:toms_core')
    event.replaceInput({ id: 'toms_storage:inventory_configurator' }, 'toms_storage:trim', 'techopolis:toms_core')
    event.replaceInput({ id: 'toms_storage:item_filter' }, '#c:wools', 'techopolis:toms_core')
    event.replaceInput({ id: 'toms_storage:item_filter' }, 'minecraft:redstone', 'techopolis:basic_technium_nugget')

})
