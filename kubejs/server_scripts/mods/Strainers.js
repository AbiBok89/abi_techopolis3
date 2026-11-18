ServerEvents.recipes(event => {

    event.remove({ id: /strainers:strainer.*/ })
    event.remove({ id: 'strainers:dirt_from_mulch' })
    event.remove({ id: 'strainers:purifying_salt_mulch' })

    event.shaped('strainers:mulch', ["AA", "AA"], { A: '#minecraft:leaves' }).id('strainers:mulch')
    event.shaped('strainers:wooden_strainer', ["SMS", "SMS", "LRL"], { S: 'stick', M: '#strainers:meshes', L: '#logs', R: 'techopolis:simple_machine_frame' }).id('strainers:wooden_strainer')
    event.shaped('strainers:strainer_tank', ["GGG", "G G", "GGG"], { G: 'glass' }).id('strainers:strainer_tank')

    //Dirt - Strainer
    strainerAuto('dirt', "minecraft:water", '2x minecraft:clay_ball', 0.2, 0.1, 1, 10)
    strainerAuto('dirt', "minecraft:water", 'projectvibrantjourneys:twigs', 0.2, 0.1, 1, 10)
    strainerAuto('dirt', "minecraft:water", 'projectvibrantjourneys:rocks', 0.4, 0.1, 1, 10)
    strainerAuto('dirt', "minecraft:water", 'minecraft:wheat_seeds', 0.2, 0.1, 1, 10)

    //Sand - Strainer
    strainerAuto('minecraft:sand', "minecraft:water", 'minecraft:sugar_cane', 0.15, 0.05, 1, 10)
    strainerAuto('minecraft:sand', "minecraft:water", 'minecraft:cactus', 0.15, 0.05, 1, 10)
    strainerAuto('minecraft:sand', "minecraft:water", 'minecraft:bamboo', 0.15, 0.05, 1, 10)

    //Auto Strainer Tier Recipes
    function strainerAuto(input, fluid, item, baseChance, addChance, minTier, maxTier) {
        let results = [];
        for (let tier = minTier; tier <= maxTier; tier++) {
            let chance = baseChance + (tier - minTier) * addChance;
            results.push([item, chance, `#strainers:tier_${tier}_meshes`]);
        }
        return event.recipes.strainers.strainer(Ingredient.of(input), fluid, results);
    }


})
