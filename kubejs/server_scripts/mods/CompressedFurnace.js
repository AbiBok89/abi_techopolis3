ServerEvents.recipes(event => {

    event.remove({ id: 'compressedfurnace:compressed_furnace' })
    event.remove({ id: 'compressedfurnace:double_compressed_furnace' })
    event.remove({ id: 'compressedfurnace:triple_compressed_furnace' })
    event.remove({ id: /compressedfurnace:crusher/ })

})
