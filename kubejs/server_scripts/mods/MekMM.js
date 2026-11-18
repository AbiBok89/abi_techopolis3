ServerEvents.recipes(event => {
    // Remove a bunch of stuff that's incomplete, or requires mods not installed, or duplicates other preferred mods
    // Recycler
    event.remove({ output: 'mekmm:recycler' })
    event.remove({ output: /mekmm:.*_recycling_factory/ })
    event.remove({ id: /^mekmm:recycler\/.*/ })
    event.remove({ output: 'mekmm:scrap_box' })

    // Replicators
    event.remove({ output: /mekmm:.*replicator/ })
    event.remove({ output: /mekmm:.*_replicating_factory/ })
    event.remove({ id: /^mekmm:\/?replicator\/.*/ })
    event.remove({ output: 'mekmm:empty_crystal' })
    event.remove({ output: 'mekmm:uu_matter' })
    event.remove({ id: 'mekmm:chemical_conversion/uuitem_to_uuchemical' })
    event.remove({ id: 'mekmm:oxidizing/uu_matter' })
    event.remove({ id: /mekmm:compressing\/.*_doll$/ })

    // Remove duplicate silver
    event.remove({ id: /mekmm:processing\/silver\/.*/ })
    event.remove({ id: 'mekmm:enriching/enriched/carbon' }) // not sure why the recipe is named that...

    // Reflector
    event.remove({ id: 'mekmm:presser/reflector' })

    // Ambient Gas
    event.remove({ output: 'mekmm:ambient_gas_collector' })

    // CNC Stamper
    event.remove({
        id: /mekmm:compat\/immersiveengineering\/stamper\/.*/,
        not: { id: 'mekmm:compat/immersiveengineering/stamping/empty_casing' }
    })
    event.replaceInput({ output: 'mekmm:cnc_stamper' }, 'mekanism:steel_casing', 'techopolis:advanced_technium_machine_frame')

    // Rolling Mill / Lathe
    event.remove({ output: 'mekmm:cnc_lathe' })
    event.remove({ output: /mekmm:.*_lathing_factory/ })
    event.remove({ id: /mekmm:compat\/immersiveengineering\/lathe\/.*/ })
    event.remove({ output: 'mekmm:cnc_rolling_mill' })
    event.remove({ output: /mekmm:.*_rolling_mill_factory/ })
    event.remove({ id: /mekmm:compat\/immersiveengineering\/rolling_mill\/.*/ })

    // Planting Station
    event.replaceInput({ output: 'mekmm:planting_station' }, 'mekanism:steel_casing', 'techopolis:advanced_technium_machine_frame')

    // Presser, remove when the processor dupe bug gets fixed
    event.remove({ id: /mekmm:compat\/.*presser/ })

})