PortalEvents.register(event => {

    event.create()
        .portalTexture("molten")
        .frameBlock('colors:white_asteroid_tiles')
        .lightWithItem("stellaris:rocket")
        .setDestination("stellaris:moon")
        .onlyLightInOverworld()
        .tintColor(64, 64, 64)
})
