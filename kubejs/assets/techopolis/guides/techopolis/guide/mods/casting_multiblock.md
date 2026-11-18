---
navigation:
    title: Casting Multiblock Controller
    icon: 'casting:multiblock_controller'
    parent: mods.md
    position: 11
item_ids:
    - 'casting:multiblock_controller'
    - 'casting:multiblock_solidifier'
    - 'casting:multiblock_fuel_tank'
    - 'casting:multiblock_coolant_tank'
    - 'casting:multiblock_mixer'
    - 'casting:multiblock_valve'
    - 'casting:multiblock_regulator'
---

# Casting Multiblock Controller

Casting now has multiblocks. Build a custom-sized multiblock structure for all your automation needs.

## Getting Started

To get started, you need a **Simple Casting** setup to create the multiblock parts you need.

## Multiblock Controller

The **Multiblock Controller** is the heart of Casting. This is where the melting of resources happens. The Multiblock Controller requires a **Multiblock Fuel Tank** inside the walls of the structure. The Controller uses a shared tank system, meaning there is no limit to the types of fluid you can melt and store.

The item and fluid capacity of the Controller increases depending on the size of the Multiblock, up to **60 items** and **1,000,000 mB** of fluid. The Controller can also be filtered to only allow certain items into its slots.

### Simple Multiblock Controller

Example of a small multiblock providing a single item slot and 1,000 mB of fluid storage.

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/casting/simple_multiblock_controller.nbt" />
</GameScene>

### Multiblock Controller Examples

The multiblock can be expanded to almost any size you want. Below are a couple of examples.

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/casting/advanced_multiblock_controller.nbt" />
</GameScene>

<GameScene zoom="2" interactive={true}>
  <ImportStructure src="../assets/structures/casting/complex_multiblock_controller.nbt" />
</GameScene>

## Multiblock Fuel Tank

Powers the multiblock and allows you to melt items in the Controller.

## Multiblock Solidifier

Same as the Simple Solidifier. Provides fluid filtering to only process a certain fluid, or leave it unfiltered to process anything it can.

## Multiblock Coolant Tank

Provides cooling for the Multiblock Solidifiers, which speeds them up.

## Multiblock Valve

An input and output for fluids. Can be filtered to only allow certain fluids to be inserted or extracted. The Multiblock Valve can also be used to fill the Controller with items.

## Multiblock Mixer

Controlled alloying of fluids! The Multiblock Mixer detects which alloys it can create from the fluids stored inside the Multiblock Controller. Select a fluid and it will create as much of that alloy as it can.

## Multiblock Regulator

Adding these into the multiblock walls allows the tank to be regulated. For example, placing 3 Regulators in the walls reserves tank space for 3 fluids evenly. Having no Regulators retains normal behaviour.