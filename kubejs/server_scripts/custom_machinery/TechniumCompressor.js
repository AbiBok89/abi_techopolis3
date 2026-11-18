ServerEvents.recipes(event => {

    function techniumCompressor(input1, input2, input3, output, energy, time, id) {
        let recipe = event.recipes.custommachinery.custom_machine("techopolis:technium_compressor", time)
            .requireStructure([["aaaaaaaaaaa", "a   aca   a", "a   aca   a", "a   aca   a", "aaaaacaaaaa", "accccccccca", "aaaaacaaaaa", "a   aca   a", "a   aca   a", "a   aca   a", "aaaaamaaaaa"], ["a   a a   a", " ddd   ddd ", " ddd   ddd ", " ddd   ddd ", "a   e e   a", "           ", "a   e e   a", " ddd   ddd ", " ddd   ddd ", " ddd   ddd ", "a   a a   a"], ["a   a a   a", " ddd   ddd ", " dfd   dfd ", " ddd   ddd ", "a   e e   a", "           ", "a   e e   a", " ddd   ddd ", " dfd   dfd ", " ddd   ddd ", "a   a a   a"], ["a   a a   a", " ddd   ddd ", " dfd   dfd ", " ddd   ddd ", "a   e e   a", "           ", "a   e e   a", " ddd   ddd ", " dfd   dfd ", " ddd   ddd ", "a   a a   a"], ["a   a a   a", " ddd   ddd ", " dfd   dfd ", " ddd   ddd ", "a   aaa   a", "    aga    ", "a   aaa   a", " ddd   ddd ", " dfd   dfd ", " ddd   ddd ", "a   a a   a"], ["a   a a   a", " ddd   ddd ", " dhd   dhd ", " ddd   ddd ", "a   aga   a", "    gig    ", "a   aga   a", " ddd   ddd ", " dhd   dhd ", " ddd   ddd ", "a   a a   a"], ["aaaaaaaaaaa", "ajjjakajjja", "ajjjakajjja", "ajjjakajjja", "aaaaaaaaaaa", "akkkagakkka", "aaaaaaaaaaa", "ajjjakajjja", "ajjjakajjja", "ajjjakajjja", "aaaaaaaaaaa"], ["           ", "           ", "  l     l  ", "   aaaaa   ", "   annna   ", "   annna   ", "   annna   ", "   aaaaa   ", "  l     l  ", "           ", "           "], ["           ", "           ", "           ", "           ", "           ", "     l     ", "           ", "           ", "           ", "           ", "           "]], { "a": "techopolis:multiblock_machine_casing", "c": "techopolis:basic_technium_machine_frame", "d": "extendedcrafting:black_iron_block", "e": "techopolis:elite_technium_machine_frame", "f": "techopolis:hellish_technium_machine_frame", "g": "techopolis:ultimate_technium_machine_frame", "h": "techopolis:lunar_technium_machine_frame", "i": "techopolis:end_technium_machine_frame", "j": "extendedcrafting:enhanced_ender_ingot_block", "k": "techopolis:advanced_technium_machine_frame", "l": "minecraft:beacon", "n": "extendedcrafting:ender_star_block" })

        recipe.requireItem(input1)
        recipe.requireItem(input2)
        if (input3) {
            recipe.requireItem(input3)
        }
        if (energy) {
            recipe.requireEnergyPerTick(energy)
        }
        recipe.produceItem(output)

        if (id) {
            recipe.id(id)
        }
    }

    // Undefined Singularity
    techniumCompressor('ae2:singularity', 'ae2:matter_ball', 'advanced_ae:shattered_singularity', 'techopolis:undefined_singularity', 262144, 800, 'techopolis:technium_compressor/undefined_singularity')

    // Singularities
    techniumCompressor('64x alltheores:bronze_ingot', '64x alltheores:bronze_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:bronze"]', 131072, 400, 'techopolis:technium_compressor/bronze_singularity')
    techniumCompressor('64x alltheores:electrum_ingot', '64x alltheores:electrum_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:electrum"]', 131072, 400, 'techopolis:technium_compressor/electrum_singularity')
    techniumCompressor('64x alltheores:steel_ingot', '64x alltheores:steel_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:steel"]', 131072, 400, 'techopolis:technium_compressor/steel_singularity')
    techniumCompressor('64x alltheores:invar_ingot', '64x alltheores:invar_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:invar"]', 131072, 400, 'techopolis:technium_compressor/invar_singularity')
    techniumCompressor('64x alltheores:constantan_ingot', '64x alltheores:constantan_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:constantan"]', 131072, 400, 'techopolis:technium_compressor/constantan_singularity')
    techniumCompressor('64x techopolis:obsidiglow_ingot', '64x techopolis:obsidiglow_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:obsidiglow"]', 131072, 400, 'techopolis:technium_compressor/obsidiglow_singularity')
    techniumCompressor('64x minecraft:netherite_ingot', '64x minecraft:netherite_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:netherite"]', 131072, 400, 'techopolis:technium_compressor/netherite_singularity')
    techniumCompressor('64x extendedae:entro_ingot', '64x extendedae:entro_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:entro_infused"]', 131072, 400, 'techopolis:technium_compressor/entro_infused_singularity')
    techniumCompressor('64x alltheores:brass_ingot', '64x alltheores:brass_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:brass"]', 131072, 400, 'techopolis:technium_compressor/brass_singularity')
    techniumCompressor('64x extendedcrafting:enhanced_ender_ingot', '64x extendedcrafting:enhanced_ender_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:enhanced_ender"]', 131072, 400, 'techopolis:technium_compressor/enhanced_ender_singularity')
    techniumCompressor('64x alltheores:signalum_ingot', '64x alltheores:signalum_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:signalum"]', 131072, 400, 'techopolis:technium_compressor/signalum_singularity')
    techniumCompressor('64x alltheores:lumium_ingot', '64x alltheores:lumium_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:lumium"]', 131072, 400, 'techopolis:technium_compressor/lumium_singularity')
    techniumCompressor('64x advanced_ae:quantum_alloy', '64x advanced_ae:quantum_alloy', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:quantum"]', 131072, 400, 'techopolis:technium_compressor/quantum_singularity')
    techniumCompressor('64x techopolis:super_empowered_crystal', '64x techopolis:super_empowered_crystal', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:super_empowered_crystal"]', 131072, 400, 'techopolis:technium_compressor/super_empowered_crystal_singularity')
    techniumCompressor('64x rftoolsbase:dimensionalshard', '64x rftoolsbase:dimensionalshard', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:dimensional"]', 131072, 400, 'techopolis:technium_compressor/dimensional_singularity')

    // Technium Singularity
    techniumCompressor('64x techopolis:basic_technium_ingot', '64x techopolis:basic_technium_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:technium"]', 131072, 400, 'techopolis:technium_compressor/basic_technium_singularity')
    techniumCompressor('54x techopolis:advanced_technium_ingot', '54x techopolis:advanced_technium_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:technium"]', 131072, 400, 'techopolis:technium_compressor/advanced_technium_singularity')
    techniumCompressor('44x techopolis:elite_technium_ingot', '44x techopolis:elite_technium_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:technium"]', 131072, 400, 'techopolis:technium_compressor/elite_technium_singularity')
    techniumCompressor('34x techopolis:ultimate_technium_ingot', '34x techopolis:ultimate_technium_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:technium"]', 131072, 400, 'techopolis:technium_compressor/ultimate_technium_singularity')
    techniumCompressor('24x techopolis:hellish_technium_ingot', '24x techopolis:hellish_technium_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:technium"]', 131072, 400, 'techopolis:technium_compressor/hellish_technium_singularity')
    techniumCompressor('14x techopolis:lunar_technium_ingot', '14x techopolis:lunar_technium_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:technium"]', 131072, 400, 'techopolis:technium_compressor/lunar_technium_singularity')
    techniumCompressor('4x techopolis:end_technium_ingot', '4x techopolis:end_technium_ingot', "techopolis:undefined_singularity", 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:technium"]', 131072, 400, 'techopolis:technium_compressor/end_technium_singularity')

})
