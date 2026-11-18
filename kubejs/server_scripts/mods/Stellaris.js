ServerEvents.recipes(event => {

    event.replaceInput({ mod: 'stellaris' }, 'stellaris:tharsite_ingot', "stellaris:desh_ingot")

    event.remove({ id: 'stellaris:rocket' })
    event.remove({ id: 'stellaris:misc/water_separator' })
    event.remove({ id: 'stellaris:misc/uranium_block' })

})
