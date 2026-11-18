---
navigation:
    title: Fluid Collection
    icon: 'minecraft:water_bucket'
    parent: gameplay.md
    item_ids:
        - 'immersiveengineering:fluid_pump'
        - 'mekanism:electric_pump'
        - 'techopolis:ambient_water_collector'
---

# Fluid Collection

There are several ways to collect water and other fluids in Techopolis 3.

## Water Collector

A simple Water Collector creates 1 mB of Water per tick.

<Recipe id="techopolis:ambient_water_collector" />

## Immersive Engineering Pump

The next tier of water generation is the Immersive Engineering Pump. This can be used to collect other fluids as well as Water. If there is an infinite water source, it will keep pumping indefinitely.

<Recipe id="immersiveengineering:crafting/fluid_pump" />

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/pump.nbt" />
</GameScene>

## Mekanism Electric Pump

After the Immersive Engineering Pump, the next tier of water generation is the Mekanism Electric Pump. This can be used to collect other fluids as well as Water. If there is an infinite water source, it will keep pumping indefinitely. It can be improved with Mekanism Speed Upgrades to produce a lot of water.

<Recipe id="mekanism:electric_pump" />

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/pump_2.nbt" />
</GameScene>