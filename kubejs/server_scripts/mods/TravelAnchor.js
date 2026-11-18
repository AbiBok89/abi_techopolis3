// Travel Anchor

ServerEvents.recipes(event => {

    event.replaceInput({ id: 'travelanchors:travel_anchor' }, 'minecraft:ender_pearl', 'waystones:warp_stone')
    event.replaceInput({ id: 'travelanchors:travel_staff' }, 'minecraft:ender_pearl', 'waystones:warp_stone')
    event.replaceInput({ id: 'travelanchors:travel_anchor' }, 'minecraft:iron_ingot', 'techopolis:elite_technium_ingot')
    event.replaceInput({ id: 'travelanchors:travel_staff' }, 'minecraft:iron_ingot', 'techopolis:elite_technium_ingot')

})
