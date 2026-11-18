// --- General Machine Upgrades ---
const targetMachines = [
    "techopolis:dimensional_ore_extractor_mk2",
    "techopolis:technium_compressor",
    "techopolis:interdimensional_infuser",
    "techopolis:oil_pump",
    "techopolis:industrial_strainer",
    "techopolis:ancient_infuser",
    "techopolis:moon_quarry",
    "techopolis:mob_infuser",
    "techopolis:reprocessor",
    "techopolis:dimensional_ore_extractor",
    "techopolis:dimensional_infuser",
    "techopolis:alloy_kiln",
    "techopolis:basic_miner",
    "techopolis:advanced_miner",
    "techopolis:elite_miner",
    "techopolis:ultimate_miner",
    "techopolis:super_empowerer",
    "techopolis:fluid_injector"
];

// Values used by both standard machines and the nuclear reactor
const frameModifiers = {
    "techopolis:simple_machine_frame": { speed: 0.9, energy: 1.1 },
    "techopolis:sturdy_machine_frame": { speed: 0.8, energy: 1.2 },
    "techopolis:basic_technium_machine_frame": { speed: 0.7, energy: 1.3 },
    "techopolis:advanced_technium_machine_frame": { speed: 0.6, energy: 1.4 },
    "techopolis:dimensional_machine_frame": { speed: 0.5, energy: 1.5 },
    "techopolis:elite_technium_machine_frame": { speed: 0.4, energy: 1.6 },
    "techopolis:ultimate_technium_machine_frame": { speed: 0.3, energy: 1.7 },
    "techopolis:hellish_technium_machine_frame": { speed: 0.2, energy: 1.8 },
    "techopolis:lunar_technium_machine_frame": { speed: 0.1, energy: 1.9 }
};

// --- Water Purifier Upgrades ---
const waterPurifierModifiers = {
    "techopolis:simple_machine_frame": { input: 2, output: 1.9 },
    "techopolis:sturdy_machine_frame": { input: 3, output: 2.7 },
    "techopolis:basic_technium_machine_frame": { input: 4, output: 3.4 },
    "techopolis:advanced_technium_machine_frame": { input: 5, output: 4.0 },
    "techopolis:dimensional_machine_frame": { input: 6, output: 4.5 },
    "techopolis:elite_technium_machine_frame": { input: 7, output: 4.9 },
    "techopolis:ultimate_technium_machine_frame": { input: 8, output: 5.2 },
    "techopolis:hellish_technium_machine_frame": { input: 9, output: 5.4 },
    "techopolis:lunar_technium_machine_frame": { input: 10, output: 5.5 }
};

CustomMachineryEvents.upgrades(event => {

    // 1. General Machines Loop (Faster processing, costs more power)
    Object.entries(frameModifiers).forEach(([item, mods]) => {
        event.create(item)
            .machine(targetMachines)
            .modifier(CMRecipeModifierBuilder.mulInput('custommachinery:speed', mods.speed))
            .modifier(CMRecipeModifierBuilder.mulInput('custommachinery:energy', mods.energy));
    });

    // 2. Nuclear Reactor Loop (Faster processing, GENERATES more power)
    Object.entries(frameModifiers).forEach(([item, mods]) => {
        event.create(item)
            .machine("techopolis:nuclear_reactor")
            .modifier(CMRecipeModifierBuilder.mulInput('custommachinery:speed', mods.speed))
            .modifier(CMRecipeModifierBuilder.mulOutput('custommachinery:energy_per_tick', mods.energy));
    });

    // 3. Water Purifier Loop (Fluid mechanics)
    Object.entries(waterPurifierModifiers).forEach(([item, mods]) => {
        event.create(item)
            .machine("techopolis:water_purifier")
            .modifier(CMRecipeModifierBuilder.mulInput('custommachinery:fluid_per_tick', mods.input))
            .modifier(CMRecipeModifierBuilder.mulOutput('custommachinery:fluid_per_tick', mods.output));
    });
});
