
ServerEvents.recipes(event => {

    //Crafting Recipes
    event.shaped('techopolis:basic_technium_machine', ["SSS", "ACA", "SSS"], 
        {S: 'smooth_stone', A: '#c:gears/copper', C: "techopolis:sturdy_machine_frame"}).id('techopolis:basic_technium_machine_cm')
        
    event.shaped('techopolis:advanced_technium_machine', ["SSS", "ACA", "SSS"], 
        {S: 'actuallyadditions:enori_crystal', A: '#c:gears/steel', C: "techopolis:basic_technium_machine_frame"}).id('techopolis:advanced_technium_machine_cm')
    
    event.shaped('techopolis:elite_technium_machine', ["SSS", "ACA", "SSS"], 
        {S: 'ae2:matter_ball', A: 'ae2:calculation_processor', C: "techopolis:advanced_technium_machine_frame"}).id('techopolis:elite_technium_machine_cm')

    event.shaped('techopolis:ultimate_technium_machine', ["SSS", "ACA", "SSS"], 
        {S: 'extendedae:entro_ingot', A: 'techopolis:unstable_matter', C: "techopolis:elite_technium_machine_frame"}).id('techopolis:ultimate_technium_machine_cm')

    event.shaped('techopolis:hellish_technium_machine', ["SSS", "ACA", "SSS"], 
        {S: 'extendedae:entro_ingot', A: 'techopolis:unstable_matter', C: "techopolis:ultimate_technium_machine_frame"}).id('techopolis:hellish_technium_machine_cm')

    event.shaped('techopolis:lunar_technium_machine', ["SSS", "ACA", "SSS"], 
        {S: 'techopolis:alien_ingot', A: 'techopolis:unstable_matter', C: "techopolis:hellish_technium_machine_frame"}).id('techopolis:lunar_technium_machine_cm')

    event.shaped('techopolis:end_technium_machine', ["SSS", "ACA", "SSS"], 
        {S: 'alltheores:iridium_ingot', A: 'techopolis:shulker_pearl', C: "techopolis:lunar_technium_machine_frame"}).id('techopolis:end_technium_machine_cm')

    event.shaped('techopolis:final_technium_machine', ["SSS", "ACA", "SSS"],
        {S: 'extendedcrafting:the_ultimate_ingot', A: 'extendedcrafting:ultimate_singularity', C: "techopolis:end_technium_machine_frame"}).id('techopolis:final_technium_machine_cm')

    //Basic Technium Ingots 
    event.recipes.custommachinery.custom_machine("techopolis:basic_technium_machine", 200) 
        .requireStructure([["a     a"," bbbbb "," bcccb "," bcccb "," bcccb "," bbbbb ","a  m  a"],["a     a"," d   d ","       ","   e   ","       "," d   d ","a     a"],["a     a"," d   d ","       ","       ","       "," d   d ","a     a"],["aaaaaaa","ad   da","a     a","a     a","a     a","ad   da","aaaaaaa"],["a  a  a","       ","       ","a     a","       ","       ","a  a  a"],["       ","   a   ","   a   "," aaaaa ","   a   ","   a   ","       "]], 
            {"a":"techopolis:wooden_scaffolding","b":"casting:black_bricks","c":"immersiveengineering:treated_wood_horizontal","d":"minecraft:stone_bricks","e":"immersiveengineering:craftingtable"})
        .requireItem("4x #c:gears/stone")
        .requireItem("8x casting:black_bricks")
        .requireItem("4x #c:rods/copper")
        .requireItem("16x opolisutilities:mini_coal")
        .requireItem("6x flint")
        .requireItem("minecraft:copper_ingot") //ingot to upgrade 
        .requireItem("8x glass")
        .requireItem("2x #c:leathers")
        .requireItem("16x #immersiveengineering:treated_wood")
        .produceItem("techopolis:basic_technium_ingot")
        .id('techopolis:basic_technium_ingot_cm')

    //Advanced Technium Ingots
    event.recipes.custommachinery.custom_machine("techopolis:advanced_technium_machine", 200)
        .requireStructure([["a     a"," bbbbb "," bcccb "," bcccb "," bcccb "," bbbbb ","a  m  a"],["a     a"," d   d ","       ","   e   ","       "," d   d ","a     a"],["a     a"," d   d ","       ","       ","       "," d   d ","a     a"],["aaaaaaa","ad   da","a     a","a     a","a     a","ad   da","aaaaaaa"],["a  a  a"," ff ff "," ff ff ","a     a"," ff ff "," ff ff ","a  a  a"],["a     a","   a   ","   a   "," aaaaa ","   a   ","   a   ","a     a"]],
            {"a":"techopolis:wooden_scaffolding","b":"immersiveengineering:steel_scaffolding_standard","c":"immersiveengineering:light_engineering","d":"immersiveengineering:coil_lv","e":"immersiveengineering:heavy_engineering","f":"mekanism:structural_glass"})
        .requireItem("4x #c:gears/aluminum") 
        .requireItem("32x techopolis:crushed_deepslate") 
        .requireItem("4x #c:rods/nickel")  
        .requireItem("16x actuallyadditions:palis_crystal") 
        .requireItem("16x redstone") 
        .requireItem("techopolis:basic_technium_ingot") //ingot to upgrade 
        .requireItem("4x #c:storage_blocks/bronze") 
        .requireItem("8x #c:plates/silver") 
        .requireItem("8x minecraft:snow_block") 
        .requireFluid("1000x casting:molten_obsidian") 
        .produceItem("techopolis:advanced_technium_ingot")
        .id('techopolis:advanced_technium_ingot_cm')

    //Elite Technium Ingots
    event.recipes.custommachinery.custom_machine("techopolis:elite_technium_machine", 200)
        .requireStructure([["a     a"," bbbbb "," bcccb "," bcccb "," bcccb "," bbbbb ","a  m  a"],["a     a"," d   d ","       ","   e   ","       "," d   d ","a     a"],["a     a"," d   d ","       ","       ","       "," d   d ","a     a"],["aaaaaaa","ad   da","a     a","a     a","a     a","ad   da","aaaaaaa"],["a  a  a"," ff ff "," ff ff ","a     a"," ff ff "," ff ff ","a  a  a"],["a     a","   a   ","  lal  "," aaaaa ","  lal  ","   a   ","a     a"]],
            {"l":"ae2:fluix_block","a":"techopolis:multiblock_machine_casing","b":"techopolis:multiblock_circuitry","c":"ae2:not_so_mysterious_cube","d":"techopolis:multiblock_vent","e":"ae2:crafting_unit[formed=false,powered=false]","f":"ae2:quartz_glass"})
        .requireItem("4x #c:gears/gold") 
        .requireItem("32x ae2:sky_stone_block")  
        .requireItem("4x #c:rods/osmium")   
        .requireItem("4x ae2:matter_ball") 
        .requireItem("4x mekanism:dust_lithium") 
        .requireItem("techopolis:advanced_technium_ingot") //ingot to upgrade 
        .requireItem("4x #c:storage_blocks/black_quartz") 
        .requireItem("8x #c:plates/diamond") 
        .requireItem("8x #techopolis:dimensional_ores") 
        .requireFluid("8000x strainers:purifying_water")  
        .requireEnergyPerTick(2560)
        .produceItem("techopolis:elite_technium_ingot")
        .id('techopolis:elite_technium_ingot_cm')

    //Ultimate Technium Ingots
    event.recipes.custommachinery.custom_machine("techopolis:ultimate_technium_machine", 200)
        .requireStructure([["a     a"," bbbbb "," bcccb "," bcccb "," bcccb "," bbbbb ","a  m  a"],["a     a"," d   d ","       ","   e   ","       "," d   d ","a     a"],["a     a"," d   d ","       ","       ","       "," d   d ","a     a"],["aaaaaaa","ad   da","a     a","a     a","a     a","ad   da","aaaaaaa"],["a  a  a"," ff ff "," ff ff ","a     a"," ff ff "," ff ff ","a  a  a"],["a     a","   a   ","  ggg  "," aggga ","  ggg  ","   a   ","a     a"],["       ","       ","   a   ","  aaa  ","   a   ","       ","       "]],
            {"a":"techopolis:multiblock_machine_casing","b":"techopolis:multiblock_circuitry","c":"replication:replica_block","d":"bigreactors:basic_reactorcasing","e":"hostilenetworks:sim_chamber","f":"bigreactors:basic_reactorglass","g":"alltheores:uranium_block"})
        .requireItem("4x #c:gears/enderium")  
        .requireItem("32x bigreactors:fluidizercasing") 
        .requireItem("4x #c:rods/platinum")   
        .requireItem("4x bigreactors:inanite_ingot") 
        .requireItem("4x mekanism:pellet_antimatter")  
        .requireItem("techopolis:elite_technium_ingot") //ingot to upgrade 
        .requireItem("4x #c:storage_blocks/replica") 
        .requireItem("8x #c:plates/cyanite") 
        .requireItem("4x compressedblocks:double_crated_rotten_flesh") 
        .requireFluid("16000x techopolis:molten_mob_essence")  
        .requireEnergyPerTick(5120)
        .requireChemical("8000x techopolis:safe_spent_nuclear_waste") 
        .produceItem("techopolis:ultimate_technium_ingot")
        .id('techopolis:ultimate_technium_ingot_cm')

    //Hellish Technium Ingots
    event.recipes.custommachinery.custom_machine("techopolis:hellish_technium_machine", 200)
        .requireStructure([["a     a"," ccccc "," cdddc "," cdddc "," cdddc "," ccccc ","a  m  a"],["e     e"," f   f ","       ","   g   ","       "," f   f ","e     e"],["e     e"," f   f ","       ","       ","       "," f   f ","e     e"],["e     e"," f   f ","       ","       ","       "," f   f ","e     e"],["eeeeeee","efffffe","ef   fe","ef   fe","ef   fe","efffffe","eeeeeee"],["ee e ee","ehh hhe"," hh hh ","e     e"," hh hh ","ehh hhe","ee e ee"],["a     a","   e   ","  iii  "," eiiie ","  iii  ","   e   ","a     a"],["       ","       ","   e   ","  eje  ","   e   ","       ","       "]],
            {"a":"techopolis:dimensional_detector","c":"techopolis:multiblock_circuitry","d":"alltheores:zinc_block","e":"techopolis:multiblock_machine_casing","f":"minecraft:nether_bricks","g":"actuallyadditions:empowerer","h":"techopolis:super_empowered_crystal_block","i":"minecraft:netherite_block","j":"minecraft:beacon"})
        .requireItem("4x #c:gears/zinc")
        .requireItem("32x minecraft:magma_block") 
        .requireItem("4x minecraft:blaze_rod") 
        .requireItem("16x minecraft:ghast_tear") 
        .requireItem("4x minecraft:nether_star") 
        .requireItem("techopolis:ultimate_technium_ingot") //ingot to upgrade 
        .requireItem("4x #c:storage_blocks/netherite") 
        .requireItem("8x #c:plates/brass") 
        .requireItem("32x minecraft:red_nether_bricks") 
        .requireFluid("32000x techopolis:oil") 
        .requireEnergyPerTick(10240) 
        .requireChemical("16000x techopolis:spent_nether_waste")
        .dimensionWhitelist('minecraft:the_nether')
        .produceItem("techopolis:hellish_technium_ingot")
        .id('techopolis:hellish_technium_ingot_cm')

    //Lunar Technium Ingots
    event.recipes.custommachinery.custom_machine("techopolis:lunar_technium_machine", 200)
        .requireStructure([["a     a"," ccccc "," cdddc "," cdddc "," cdddc "," ccccc ","a  m  a"],["e     e"," f   f ","  ggg  ","  ghg  ","  ggg  "," f   f ","e     e"],["e     e"," f   f ","       ","       ","       "," f   f ","e     e"],["e     e"," f   f ","       ","       ","       "," f   f ","e     e"],["e     e"," iiiii "," i   i "," i   i "," i   i "," iiiii ","e     e"],["eeeeeee","ejkjkje","ek   ke","ej   je","ek   ke","ejkjkje","eeeeeee"],["ee e ee","ellnlle"," llnll ","ennnnne"," llnll ","ellnlle","ee e ee"],["e     e","   e   ","  ooo  "," eoooe ","  ooo  ","   e   ","e     e"],["a     a","       ","   e   ","  eee  ","   e   ","       ","a     a"],["       ","       ","       ","   e   ","       ","       ","       "],["       ","       ","       ","   p   ","       ","       ","       "]],
            {"a":"techopolis:dimensional_detector","c":"techopolis:multiblock_circuitry", "d":"stellaris:cheese_block","e":"techopolis:multiblock_machine_casing","f":"stellaris:mercury_stone_bricks","g":"stellaris:rocket_launch_pad[lit=false,waterlogged=false]","h":"stellaris:rocket_launch_pad[lit=true,waterlogged=false]","i":"stellaris:mars_stone_bricks","j":"stellaris:venus_stone_bricks","k":"stellaris:moon_stone_bricks","l":"techopolis:ostrum_block","n":"stellaris:desh_block","o":"stellaris:neptunium_block","p":"stellaris:moon_globe"})
        .requireItem("4x #c:gears/desh") 
        .requireItem("32x stellaris:venus_stone")
        .requireItem("4x #c:rods/ostrum")
        .requireItem("16x stellaris:moon_fruit") 
        .requireItem("4x techopolis:alien_ingot") 
        .requireItem("techopolis:hellish_technium_ingot",)
        .requireItem("4x stellaris:cheese_block") 
        .requireItem("8x #c:plates/neptunium") 
        .requireItem("32x stellaris:moon_stone_bricks") 
        .requireFluid("48000x stellaris:fuel") 
        .requireEnergyPerTick(20480) 
        .requireChemical("32000x techopolis:lunar_gas")
        .requireTempCelsius("(600,)")
        .requireHeatPerTick(10000)
        .dimensionWhitelist('stellaris:moon') 
        .produceItem("techopolis:lunar_technium_ingot")
        .id('techopolis:lunar_technium_ingot_cm')


    //End Technium Ingots
    event.recipes.custommachinery.custom_machine("techopolis:end_technium_machine", 200)
    .requireStructure([["a     a"," ccccc "," cqqqc "," cqqqc "," cqqqc "," ccccc ","a  m  a"],["d     d"," e   e ","       ","   z   ","       "," e   e ","d     d"],["d     d"," e   e ","       ","       ","       "," e   e ","d     d"],["d     d"," e   e ","       ","       ","       "," e   e ","d     d"],["d     d"," efffe "," f   f "," f   f "," f   f "," efffe ","d     d"],["addddda","dfffffd","df   fd","df   fd","df   fd","dfffffd","addddda"],["dgggggd","ghh hhg","ghh hhg","g     g","ghh hhg","ghh hhg","dgggggd"],["dddiddd","ddddddd","ddjjjdd","idj jdi","ddjjjdd","ddddddd","dddiddd"],["a  d  a","       ","       ","d     d","       ","       ","a  d  a"],["k     k","   d   ","       "," d   d ","       ","   d   ","k     k"],["       ","       ","   d   ","  ddd  ","   d   ","       ","       "],["       ","       ","       ","   p   ","       ","       ","       "]], 
        {"q": "extendedcrafting:ender_star_block", "z": "extendedcrafting:ender_crafter", "a":"techopolis:dimensional_detector","c":"techopolis:multiblock_circuitry","d":"techopolis:multiblock_machine_casing","e":"minecraft:purpur_pillar","f":"minecraft:end_stone_bricks","g":"minecraft:end_stone","h":"extendedcrafting:enhanced_ender_ingot_block","i":"minecraft:chorus_flower","j":"extendedcrafting:nether_star_block","k":"minecraft:dragon_head","p":"minecraft:dragon_egg"})
    
    .requireItem("4x #c:gears/iridium") //done 
    .requireItem("32x minecraft:end_stone") //done
    .requireItem("4x minecraft:end_rod") //done
    .requireItem("16x minecraft:phantom_membrane") //done
    .requireItem("4x bigreactors:anglesite_crystal") //done
    .requireItem("techopolis:lunar_technium_ingot") //done
    .requireItem("4x extendedcrafting:ender_star_block") //done
    .requireItem("8x techopolis:shulker_plate") //done 
    .requireItem("4x techopolis:eye_block") //done 
    .requireFluid("64000x techopolis:molten_ender_fuel") //value changed not fluid
    
    .requireEnergyPerTick(40960) //done
    .requireChemical("48000x techopolis:dragon_breath") //done wip on how to get
    .requireTempCelsius("(800,)") //done
    .requireHeatPerTick(250000) //done
    .requirePosition("", "(128,)", "") //done
    .dimensionWhitelist('minecraft:the_end') //done
    .produceItem("techopolis:end_technium_ingot") //done
    .id('techopolis:end_technium_ingot_cm')

    //Final Technium Ingots
    event.recipes.custommachinery.custom_machine("techopolis:final_technium_machine", 200)

    .requireStructure([["a     a"," ccccc "," cdddc "," cdddc "," cdddc "," ccccc ","a  m  a"],["e     e"," f   f ","       ","       ","       "," f   f ","e     e"],["e     e"," f   f ","       ","       ","       "," f   f ","e     e"],["e     e"," f   f ","       ","       ","       "," f   f ","e     e"],["e     e"," f   f ","       ","       ","       "," f   f ","e     e"],["aeeeeea","efffffe","ef   fe","ef   fe","ef   fe","efffffe","aeeeeea"],["eghihge","gfgdgfg","hgg ggh","id   di","hgg ggh","gfgdgfg","eghihge"],["eeeheee","eeeeeee","eehhhee","hehhheh","eehhhee","eeeeeee","eeeheee"],["a  e  a","       ","  iii  ","e iii e","  iii  ","       ","a  e  a"],["       ","   e   ","  jjj  "," ejjje ","  jjj  ","   e   ","       "],["       ","       ","  kek  ","  eee  ","  kek  ","       ","       "],["       ","       ","       ","   k   ","       ","       ","       "]],
        {"a":"techopolis:dimensional_detector","c":"techopolis:multiblock_circuitry","d":"techopolis:advanced_technium_machine_frame","e":"techopolis:multiblock_machine_casing","f":"techopolis:basic_technium_machine_frame","g":"techopolis:elite_technium_machine_frame", "h":"techopolis:ultimate_technium_machine_frame","i":"techopolis:hellish_technium_machine_frame","j":"techopolis:lunar_technium_machine_frame","k":"techopolis:end_technium_machine_frame"})
    
    .requireItem("1x techopolis:the_ultimate_gear") //done
    .requireItem("1x techopolis:end_technium_turbine_coil") //done
    .requireItem("1x techopolis:the_ultimate_rod") //done 
    .requireItem("1x compressedblocks:double_crated_nether_star") //done 
    .requireItem("1x extendedcrafting:the_ultimate_nugget") //done
    .requireItem("techopolis:end_technium_ingot") //done
    .requireItem("1x techopolis:gigatronium_ingot") //done
    .requireItem("1x techopolis:the_ultimate_plate") //done
    .requireItem("1x techopolis:end_easter_egg") //done 
    .requireFluid("128000x techopolis:liquid_matter") //done
    
    .requireEnergyPerTick(81920) //done
    .requireChemical("96000x techopolis:ultimate_gas") //done
    .requireTempCelsius("(1000,)") //done
    .requireHeatPerTick(500000) //done
    .requirePosition("", "(180,)", "") //done
    .requireWeather("thunder") //done
    .dimensionWhitelist('minecraft:overworld') //done
    .produceItem("techopolis:final_technium_ingot") //done
    .id('techopolis:final_technium_ingot_cm')




    


})
