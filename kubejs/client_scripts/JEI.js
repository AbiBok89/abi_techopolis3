RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
    event.remove("#techopolis:banned_items");
    event.remove([
        "strainers:zinc_ore_piece",
        "strainers:platinum_ore_piece",
        "strainers:osmium_ore_piece",
        "strainers:uranium_ore_piece",
        "strainers:gold_ore_piece",
        "strainers:diamond_ore_piece",
        "strainers:emerald_ore_piece",
        "strainers:lapis_ore_piece",
        "strainers:coal_ore_piece",
        "strainers:debris_ore_piece",
        "strainers:quartz_ore_piece",
    ])

});

RecipeViewerEvents.addEntries("item", (event) => {
    event.add("immersiveengineering:graphite_electrode[unbreakable={}]");
    event.add([
        "immersiveengineering:arc_furnace",
        "immersiveengineering:crusher",
        "immersiveengineering:sawmill",
        "immersiveengineering:metal_press",
        "immersiveengineering:lightning_rod",
        "immersiveengineering:fermenter",
        "immersiveengineering:excavator",
        "immersiveengineering:diesel_generator",
        "immersiveengineering:coke_oven",
        "immersiveengineering:bottling_machine",
        "immersiveengineering:advanced_blast_furnace",
        "immersiveengineering:blast_furnace",
        "immersiveengineering:auto_workbench",
        "immersiveengineering:assembler",
        "immersiveengineering:alloy_smelter",
        "immersiveengineering:mixer",
        "immersiveengineering:refinery",
        "immersiveengineering:tank",
        "immersiveengineering:silo",
        "immersiveengineering:squeezer",
        "immersiveengineering:radio_tower",
    ]);
});
