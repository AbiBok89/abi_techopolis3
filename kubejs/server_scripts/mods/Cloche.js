//Cloche

ServerEvents.recipes((event) => {
    const registerClocheRecipe = (event, leafItem) => {
        const name = leafItem.split(':')[1];

        const logItem = leafItem.replace('_leaves', '_log');

        event.recipes.cloche.cloche(
            leafItem,
            logItem,
            1200,
            [[leafItem]]
        ).id(`cloche:${name}`);
    };

    // List of all leaves
    const leaves = [
        'minecraft:oak_leaves', 'minecraft:spruce_leaves', 'minecraft:birch_leaves',
        'minecraft:jungle_leaves', 'minecraft:acacia_leaves', 'minecraft:dark_oak_leaves',
        'minecraft:mangrove_leaves', 'minecraft:cherry_leaves', 'colors:blue_leaves',
        'colors:brown_leaves', 'colors:cyan_leaves', 'colors:gray_leaves',
        'colors:green_leaves', 'colors:light_blue_leaves', 'colors:light_gray_leaves',
        'colors:lime_leaves', 'colors:magenta_leaves', 'colors:orange_leaves',
        'colors:pink_leaves', 'colors:purple_leaves', 'colors:red_leaves',
        'colors:white_leaves', 'colors:yellow_leaves', 'colors:black_leaves'
    ];

    leaves.forEach(leaf => registerClocheRecipe(event, leaf));

    event.shaped('cloche:cloche', ["SSS", " M ", "SSS"], { S: 'minecraft:smooth_stone', M: 'techopolis:simple_machine_frame' }).id('cloche:cloche')
    event.shaped('bblcore:upgrade_base', ['MMM', 'MSM', 'MMM'], { S: 'techopolis:stone_gear', M: 'minecraft:smooth_stone' }).id('bblcore:upgrade_base')
    event.replaceInput({ id: 'cloche:fixed_speed_upgrade_1' }, 'minecraft:gold_ingot', "techopolis:stone_gear")
    event.replaceInput({ id: 'cloche:fixed_speed_upgrade_2' }, 'minecraft:diamond', "techopolis:coal_gear")
    event.replaceInput({ id: 'cloche:fixed_speed_upgrade_3' }, '#c:obsidians', "alltheores:copper_gear")
    event.replaceInput({ id: 'cloche:main_output_upgrade' }, 'minecraft:golden_carrot', "actuallyadditions:canola")

});
