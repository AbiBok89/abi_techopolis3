ServerEvents.recipes(event => {

    event.remove({ id: 'hostilenetworks:framework' })
    event.remove({ id: 'hostilenetworks:prediction_matrix' })
    event.remove({ input: 'hostilenetworks:overworld_prediction' })
    event.remove({ input: 'hostilenetworks:nether_prediction' })
    event.remove({ input: 'hostilenetworks:end_prediction' })

    event.shaped('hostilenetworks:loot_fabricator', [" U ", "OMO", "GCG"], { C: 'minecraft:comparator', G: '#c:ingots/gold', U: '#c:ingots/uranium', O: 'hostilenetworks:overworld_prediction', M: 'techopolis:elite_technium_machine_frame' }).id('hostilenetworks:loot_fabricator')
    event.shaped('techopolis:passive_data_model', ["UUU", "QDQ", "UUU"], { D: 'hostilenetworks:blank_data_model', U: 'techopolis:advanced_technium_ingot', Q: 'hostilenetworks:prediction_matrix' }).id('techopolis:passive_data_model')
    event.shaped('techopolis:hostile_data_model', ["UUU", "QDQ", "UUU"], { D: 'hostilenetworks:blank_data_model', U: 'techopolis:elite_technium_ingot', Q: 'hostilenetworks:prediction_matrix' }).id('techopolis:hostile_data_model')
    event.shaped('techopolis:nether_data_model', ["UUU", "QDQ", "UUU"], { D: 'hostilenetworks:blank_data_model', U: 'techopolis:ultimate_technium_ingot', Q: 'techopolis:super_empowered_crystal' }).id('techopolis:nether_data_model')
    event.shaped('techopolis:alien_data_model', ["UUU", "QDQ", "UUU"], { D: 'hostilenetworks:blank_data_model', U: 'techopolis:hellish_technium_ingot', Q: 'techopolis:cheesium_ingot' }).id('techopolis:alien_data_model')
    event.shaped('techopolis:ender_data_model', ["UUU", "QDQ", "UUU"], { D: 'hostilenetworks:blank_data_model', U: 'techopolis:lunar_technium_ingot', Q: 'minecraft:chorus_flower' }).id('techopolis:ender_data_model')

    event.replaceInput({ id: 'hostilenetworks:sim_chamber' }, 'minecraft:obsidian', "techopolis:elite_technium_machine_frame")
    event.replaceInput({ id: 'hostilenetworks:data_center_io_port' }, 'minecraft:iron_ingot', 'minecraft:crying_obsidian')
    event.replaceInput({ id: 'hostilenetworks:data_center' }, '#c:obsidians', 'minecraft:crying_obsidian')

    //Passive Data Models
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:cow",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:advanced_technium_nugget', P: 'minecraft:beef', M: 'techopolis:passive_data_model' }).id('techopolis:cow_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:pig",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:advanced_technium_nugget', P: 'minecraft:porkchop', M: 'techopolis:passive_data_model' }).id('techopolis:pig_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:sheep",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:advanced_technium_nugget', P: 'minecraft:mutton', M: 'techopolis:passive_data_model' }).id('techopolis:sheep_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:chicken",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:advanced_technium_nugget', P: 'minecraft:chicken', M: 'techopolis:passive_data_model' }).id('techopolis:chicken_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:rabbit",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:advanced_technium_nugget', P: 'minecraft:rabbit', M: 'techopolis:passive_data_model' }).id('techopolis:rabbit_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:cod",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:advanced_technium_nugget', P: 'minecraft:cod', M: 'techopolis:passive_data_model' }).id('techopolis:cod_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:squid",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:advanced_technium_nugget', P: 'minecraft:ink_sac', M: 'techopolis:passive_data_model' }).id('techopolis:squid_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:glow_squid",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:advanced_technium_nugget', P: 'minecraft:glow_ink_sac', M: 'techopolis:passive_data_model' }).id('techopolis:glow_squid_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:snow_golem",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:advanced_technium_nugget', P: 'minecraft:snowball', M: 'techopolis:passive_data_model' }).id('techopolis:snow_golem_data_model')

    //Hostile Data Models 
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:enderman",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:elite_technium_nugget', P: 'minecraft:ender_pearl', M: 'techopolis:hostile_data_model' }).id('techopolis:enderman_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:zombie",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:elite_technium_nugget', P: 'minecraft:rotten_flesh', M: 'techopolis:hostile_data_model' }).id('techopolis:zombie_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:skeleton",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:elite_technium_nugget', P: 'minecraft:bone', M: 'techopolis:hostile_data_model' }).id('techopolis:skeleton_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:creeper",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:elite_technium_nugget', P: 'minecraft:gunpowder', M: 'techopolis:hostile_data_model' }).id('techopolis:creeper_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:slime",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:elite_technium_nugget', P: 'minecraft:slime_ball', M: 'techopolis:hostile_data_model' }).id('techopolis:slime_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:breeze",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:elite_technium_nugget', P: 'minecraft:breeze_rod', M: 'techopolis:hostile_data_model' }).id('techopolis:breeze_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:spider",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:elite_technium_nugget', P: 'minecraft:spider_eye', M: 'techopolis:hostile_data_model' }).id('techopolis:spider_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:drowned",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:elite_technium_nugget', P: 'compressedblocks:quadruple_crated_rotten_flesh', M: 'techopolis:hostile_data_model' }).id('techopolis:drowned_data_model')

    //Nether Data Models
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:wither_skeleton",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:ultimate_technium_nugget', P: 'techopolis:wither_skeleton_bone', M: 'techopolis:nether_data_model' }).id('techopolis:wither_skeleton_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ghast",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:ultimate_technium_nugget', P: 'compressedblocks:double_crated_gunpowder', M: 'techopolis:nether_data_model' }).id('techopolis:ghast_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:blaze",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:ultimate_technium_nugget', P: 'compressedblocks:crated_blaze_powder', M: 'techopolis:nether_data_model' }).id('techopolis:blaze_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:magma_cube",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:ultimate_technium_nugget', P: 'techopolis:blazing_slime_block', M: 'techopolis:nether_data_model' }).id('techopolis:magma_cube_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:zombified_piglin",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:ultimate_technium_nugget', P: 'minecraft:rotten_flesh', M: 'techopolis:nether_data_model' }).id('techopolis:zombified_piglin_data_model')

    //Alien Data Models
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:alien_zombie",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:hellish_technium_nugget', P: 'stellaris:moon_fruit', M: 'techopolis:alien_data_model' }).id('techopolis:alien_zombie_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:pygro",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:hellish_technium_nugget', P: 'minecraft:rotten_flesh', M: 'techopolis:alien_data_model' }).id('techopolis:pygro_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:pygro_brute",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:hellish_technium_nugget', P: 'minecraft:leather', M: 'techopolis:alien_data_model' }).id('techopolis:pygro_brute_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:martian_raptor",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:hellish_technium_nugget', P: 'stellaris:mars_stone', M: 'techopolis:alien_data_model' }).id('techopolis:martian_raptor_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:star_crawler",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:hellish_technium_nugget', P: 'minecraft:nether_star', M: 'techopolis:alien_data_model' }).id('techopolis:star_crawler_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:mogler",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:hellish_technium_nugget', P: 'stellaris:venus_stone', M: 'techopolis:alien_data_model' }).id('techopolis:mogler_data_model')

    //Ender Data Models
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:endermite",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:lunar_technium_nugget', P: 'minecraft:chorus_flower', M: 'techopolis:ender_data_model' }).id('techopolis:endermite_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:shulker",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:lunar_technium_nugget', P: 'minecraft:ender_chest', M: 'techopolis:ender_data_model' }).id('techopolis:shulker_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:phantom",hostilenetworks:data=998]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:lunar_technium_nugget', P: 'minecraft:phantom_membrane', M: 'techopolis:ender_data_model' }).id('techopolis:phantom_data_model')

    //Boss Data Models
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ender_dragon",hostilenetworks:data=742]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:ultimate_technium_ingot', P: 'minecraft:dragon_egg', M: 'techopolis:boss_data_model' }).id('techopolis:ender_dragon_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:wither",hostilenetworks:data=742]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:ultimate_technium_ingot', P: 'minecraft:nether_star', M: 'techopolis:boss_data_model' }).id('techopolis:wither_data_model')

    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:warden",hostilenetworks:data=742]', ["TTT", "PMP", "TTT"],
        { T: 'techopolis:ultimate_technium_ingot', P: 'minecraft:sculk', M: 'techopolis:boss_data_model' }).id('techopolis:warden_data_model')



})
