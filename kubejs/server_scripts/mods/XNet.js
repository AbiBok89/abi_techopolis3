ServerEvents.recipes(event => {

    //X Net
    event.shaped('xnet:controller', ["NNN", "GMG", "NNN"], {N: '#c:ingots/nickel', G: '#c:gears/nickel', M: 'techopolis:basic_technium_machine_frame'}).id('xnet:controller')
    event.shaped('1x xnet:router', ["PPP", "T L", "PPP"], {T: 'immersiveengineering:sorter', L: 'immersiveengineering:fluid_sorter', P: '#c:plates/nickel'}).id('xnet:router')
    event.shaped('1x xnet:wireless_router', ["PPP", "TFL", "PPP"], {F: 'ae2:wireless_receiver', T: 'immersiveengineering:sorter', L: 'immersiveengineering:fluid_sorter', P: '#c:plates/nickel'}).id('xnet:wireless_router')
    event.shapeless('xnet:wireless_router', ['xnet:router', 'ae2:wireless_receiver']).id('techopolis:wireless_router_shapeless')
    event.shaped('1x xnet:redstone_proxy', [" P ", "PRP", " P "], {R: 'redstone_block', P: '#c:plates/nickel'}).id('xnet:redstone_proxy')

    event.replaceInput({mod: 'xnet'}, 'minecraft:gold_nugget', "techopolis:basic_technium_nugget")
    event.replaceInput({mod: 'xnet'}, 'minecraft:string', "alltheores:nickel_plate")
    event.replaceInput({mod: 'xnet'}, 'minecraft:gold_ingot', "techopolis:basic_technium_nugget")
    event.replaceInput({mod: 'xnet'}, 'minecraft:ender_pearl', "alltheores:nickel_gear")
    event.replaceInput({mod: 'xnet'}, 'minecraft:diamond', "alltheores:nickel_block")

})
