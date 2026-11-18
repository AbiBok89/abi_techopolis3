//Routers

ServerEvents.recipes(event => {

    event.replaceInput({id:'routers:importer_block'}, 'minecraft:iron_ingot', 'techopolis:advanced_technium_nugget')
    event.replaceInput({id:'routers:exporter_block'}, 'minecraft:iron_ingot', 'techopolis:advanced_technium_nugget')

})
