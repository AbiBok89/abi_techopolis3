ServerEvents.recipes(event => {

    event.remove({ id: 'ae2:smelting/silicon_from_certus_quartz_dust' })
    event.remove({ id: 'ae2:blasting/silicon_from_certus_quartz_dust' })
    event.remove({ id: 'ae2:transform/fluix_crystals' })
    event.remove({ id: 'ae2:transform/fluix_crystal' })

    event.shaped('ae2:silicon_press', ["SSS", "SUS", "SSS"], { S: 'ae2:silicon', U: "mekanism:alloy_atomic" }).id('techopolis:silicon_press')
    event.shaped('ae2:calculation_processor_press', ["SSS", "SUS", "SSS"], { S: 'ae2:certus_quartz_crystal', U: "mekanism:alloy_atomic" }).id('techopolis:calculation_processor_press')
    event.shaped('ae2:engineering_processor_press', ["SSS", "SUS", "SSS"], { S: 'minecraft:diamond', U: "mekanism:alloy_atomic" }).id('techopolis:engineering_processor_press')
    event.shaped('ae2:logic_processor_press', ["SSS", "SUS", "SSS"], { S: 'minecraft:gold_ingot', U: "mekanism:alloy_atomic" }).id('techopolis:logic_processor_press')
    event.shaped('advanced_ae:quantum_processor_press', ["SSS", "SUS", "SSS"], { S: 'advanced_ae:shattered_singularity', U: "mekanism:alloy_atomic" }).id('techopolis:quantum_processor_press')

    event.replaceInput({ id: 'ae2:network/blocks/inscribers' }, 'minecraft:iron_ingot', "alltheores:osmium_ingot")

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "item": "actuallyadditions:canola_seeds"
            }
        },
        "mode": "inscribe",
        "result": {
            "id": "actuallyadditions:crystallized_canola_seed"
        }
    }).id('techopolis:ae2/crystallized_canola_seed_inscriber')
})
