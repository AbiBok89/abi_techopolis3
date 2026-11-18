//Super Factory Manager

ServerEvents.recipes(event => {

    event.replaceInput({ id: 'sfm:manager' }, '#c:chests', 'techopolis:advanced_technium_nugget')
    event.replaceInput({ id: "sfm:cable" }, 'minecraft:light_weighted_pressure_plate', 'toms_storage:inventory_cable')
    event.replaceInput({ id: "sfm:cable" }, '#c:dyes/black', 'minecraft:obsidian')
    event.replaceInput({ id: "sfm:disk" }, 'minecraft:redstone', 'actuallyadditions:restonia_crystal')
    event.replaceInput({ id: "sfm:disk" }, 'minecraft:redstone_block', 'actuallyadditions:restonia_crystal_block')

})
