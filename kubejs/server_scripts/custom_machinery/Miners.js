ServerEvents.recipes(event => {

    function registerMinerRecipe(machineId, resource, count, time) {
        event.recipes.custommachinery.custom_machine(machineId, time)
            .requireStructure(
                [
                    ["a z a", " bbb ", "zbbbz", " bbb ", "a m a"],
                    ["a z a", " bbb ", "zbbbz", " bbb ", "a z a"],
                    ["a z a", " bbb ", "zbbbz", " bbb ", "a z a"],
                    ["aaaaa", "abbba", "abbba", "abbba", "aaaaa"],
                    ["a   a", "     ", "     ", "     ", "a   a"]
                ],
                {
                    "a": "techopolis:wooden_scaffolding",
                    "b": resource,
                    "z": "!#techopolis:miners"
                }
            )
            .produceItem(Item.of(resource, count))
            .resetOnError()
    }

    function basicMiner(resource, count, time) {
        registerMinerRecipe("techopolis:basic_miner", resource, count, time)
    }

    function advancedMiner(resource, count, time) {
        registerMinerRecipe("techopolis:advanced_miner", resource, count, time)
    }

    function eliteMiner(resource, count, time) {
        registerMinerRecipe("techopolis:elite_miner", resource, count, time)
    }

    function ultimateMiner(resource, count, time) {
        registerMinerRecipe("techopolis:ultimate_miner", resource, count, time)
    }

    // Basic Miner
    basicMiner("minecraft:cobblestone", 2, 100)
    basicMiner("minecraft:stone", 1, 100)
    basicMiner("minecraft:gravel", 1, 200)
    basicMiner("minecraft:sand", 1, 200)
    basicMiner("minecraft:clay", 1, 200)
    basicMiner("techopolis:grout", 1, 400)

    // Advanced Miner
    advancedMiner("minecraft:cobblestone", 4, 100)
    advancedMiner("minecraft:stone", 2, 100)
    advancedMiner("minecraft:gravel", 2, 200)
    advancedMiner("minecraft:sand", 2, 200)
    advancedMiner("minecraft:clay", 2, 200)
    advancedMiner("techopolis:grout", 2, 400)

    // Elite Miner
    eliteMiner("minecraft:cobblestone", 8, 100)
    eliteMiner("minecraft:stone", 4, 100)
    eliteMiner("minecraft:gravel", 4, 200)
    eliteMiner("minecraft:sand", 4, 200)
    eliteMiner("minecraft:clay", 4, 200)
    eliteMiner("techopolis:grout", 4, 400)

    // Ultimate Miner
    ultimateMiner("minecraft:cobblestone", 16, 100)
    ultimateMiner("minecraft:stone", 8, 100)
    ultimateMiner("minecraft:gravel", 8, 200)
    ultimateMiner("minecraft:sand", 8, 200)
    ultimateMiner("minecraft:clay", 8, 200)
    ultimateMiner("techopolis:grout", 8, 400)

    // Miner Recipe
    event.shaped("techopolis:basic_miner", ["CCC", "SMS", "CCC"], {
        S: "onlyhammersandexcavators:stone_hammer",
        M: "techopolis:sturdy_machine_frame",
        C: "minecraft:stone_pickaxe"
    }).id("techopolis:basic_miner")
})