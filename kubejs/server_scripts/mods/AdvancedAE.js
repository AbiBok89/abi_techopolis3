//Advanced AE

ServerEvents.recipes(event => {

    event.remove({ id: 'advanced_ae:quantum_processor_press' })

    event.replaceInput({ id: 'advanced_ae:flight_card' }, 'minecraft:elytra', 'minecraft:nether_star')
    event.replaceInput({ id: 'advanced_ae:reactionchamber' }, 'ae2:vibration_chamber', "techopolis:hellish_technium_machine_frame")

    // Crystallized canola seed + refined oil -> crystallized oil
    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 100000,
        "input_fluid": {
            "amount": 1000,
            "ingredient": {
                "fluid": "actuallyadditions:refined_canola_oil"
            }
        },
        "input_items": [
            {
                "amount": 1,
                "ingredient": {
                    "item": "actuallyadditions:crystallized_canola_seed"
                }
            }
        ],
        "output": {
            "#": 1000,
            "#t": "ae2:f",
            "id": "actuallyadditions:crystallized_oil"
        }
    }).id('techopolis:advanced_ae/crystallized_oil')

    // Empowered canola seed + crystallized oil -> empowered oil
    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 100000,
        "input_fluid": {
            "amount": 1000,
            "ingredient": {
                "fluid": "actuallyadditions:crystallized_oil"
            }
        },
        "input_items": [
            {
                "amount": 1,
                "ingredient": {
                    "item": "actuallyadditions:empowered_canola_seed"
                }
            }
        ],
        "output": {
            "#": 1000,
            "#t": "ae2:f",
            "id": "actuallyadditions:empowered_oil"
        }
    }).id('techopolis:advanced_ae/empowered_oil')

})
