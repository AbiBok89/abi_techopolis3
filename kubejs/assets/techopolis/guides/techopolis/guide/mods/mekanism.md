---
navigation:
    title: Mekanism
    icon: 'mekanism:alloy_infused'
    parent: mods.md
    position: 20
item_ids:
    - 'mekanism:thermal_evaporation_block'
    - 'mekanism:thermal_evaporation_controller'
    - 'mekanism:structural_glass'
    - 'mekanism:thermal_evaporation_valve'
    - 'morethermalevaporation:basic_thermal_evaporation_block'
    - 'morethermalevaporation:basic_thermal_evaporation_valve'
    - 'morethermalevaporation:basic_thermal_evaporation_controller'
    - 'morethermalevaporation:advanced_thermal_evaporation_block'
    - 'morethermalevaporation:advanced_thermal_evaporation_valve'
    - 'morethermalevaporation:advanced_thermal_evaporation_controller'
    - 'morethermalevaporation:elite_thermal_evaporation_block'
    - 'morethermalevaporation:elite_thermal_evaporation_valve'
    - 'morethermalevaporation:elite_thermal_evaporation_controller'
    - 'morethermalevaporation:ultimate_thermal_evaporation_block'
    - 'morethermalevaporation:ultimate_thermal_evaporation_valve'
    - 'morethermalevaporation:ultimate_thermal_evaporation_controller'
---

# Mekanism

Provides various different machines and tech to advance your progression.

## Thermal Evaporation Tower

This multiblock can be used to produce Brine as well as some other useful fluids. The taller the structure, the more fluid it will store. The valves can be used to input heat, input fluid and output fluids.

<Row>
  <Recipe id="mekanism:thermal_evaporation/block" />
  <Recipe id="mekanism:thermal_evaporation/controller" />
  <Recipe id="mekanism:thermal_evaporation/valve" />
</Row>

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/thermo_tower.nbt" />
</GameScene>

## More Thermal Evaporation

The **More Thermal Evaporation** addon adds tiered Thermal Evaporation Plants with massively increased heat scaling. Each tier raises the temperature cap (which controls the heat multiplier) and the output tank capacity.

| Tier | Temperature Cap | Output Tank Capacity | Input Tank per Block |
| :--- | :---: | :---: | :---: |
| Basic | 6,000 | 20,000 mB | 64,000 mB |
| Advanced | 12,000 | 80,000 mB | 64,000 mB |
| Elite | 24,000 | 640,000 mB | 64,000 mB |
| Ultimate | 48,000 | 10,240,000 mB | 64,000 mB |

Higher-tier blocks are crafted using the previous tier, so you can upgrade your plant without wasting materials. The plants also have upgrade slots and support the Anchor Upgrade. All tiers have a maximum buildable height of 18 blocks.

### Large Plant

A gigantic 9x9 multiblock with a **6x performance multiplier** over a standard plant.

* **Minimum size:** 9 x 5 x 9
* **Maximum size:** 9 x 18 x 9