---
navigation:
    title: Extreme Reactors
    icon: 'bigreactors:basic_reactorcontroller'
    parent: mods.md
    position: 50
item_ids:
    - 'bigreactors:basic_reactorcontroller'
    - 'techopolis:basic_technium_turbine_coil'
    - 'techopolis:advanced_technium_turbine_coil'
    - 'techopolis:elite_technium_turbine_coil'
    - 'techopolis:ultimate_technium_turbine_coil'
    - 'techopolis:final_technium_turbine_coil'
    - 'techopolis:end_technium_turbine_coil'
    - 'techopolis:lunar_technium_turbine_coil'
    - 'techopolis:hellish_technium_turbine_coil'
    - 'bigreactors:reinforced_turbinecontroller'
    - 'alltheores:uranium_ingot'
    - 'bigreactors:blutonium_ingot'
    - 'bigreactors:cyanite_ingot'
    - 'bigreactors:magentite_ingot'
---

# Extreme Reactors

Extreme Reactors is a mod that allows you to create large energy-producing reactors as well as other multiblocks.

## Basic Reactor

The Basic Reactor has a maximum size of 3x3x3. It can use Uranium or Blutonium to produce power. It can be cooled with blocks placed in the air gaps of the structure to make it more efficient. It requires a **Reactor Controller (Basic)**, a **Reactor Solid Access Port (Basic)** and a **Reactor Active Forge Energy Power Tap (Basic)**. These can be placed in place of glass in the structure below.

<Row>
  <Recipe id="bigreactors:reactor/basic/casing" />
  <Recipe id="bigreactors:reactor/basic/controller_ingots_uranium" />
</Row>
<Row>
  <Recipe id="bigreactors:reactor/basic/solidaccessport" />
  <Recipe id="bigreactors:reactor/basic/activetap_fe" />
</Row>

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/basic_reactor.nbt" />
</GameScene>

## Waste

Running a reactor with Uranium will produce Cyanite as a waste product, and Blutonium will produce Magentite.

## Fluidizer

Turns items into fluids. Requires power and items to create fluids.

<Row>
  <Recipe id="bigreactors:fluidizer/casing" />
  <Recipe id="bigreactors:fluidizer/controller" />
</Row>
<Row>
  <Recipe id="bigreactors:fluidizer/powerport" />
  <Recipe id="bigreactors:fluidizer/fluidinjector" />
</Row>

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/fluidizer.nbt" />
</GameScene>

## Reinforced Reactors

These are much bigger in size and can be used to produce a lot of power. These reactors are locked behind the **Bigger Reactors** research.

## Turbine

These produce a lot of power using steam and Technium Coils. Steam can be created in a reactor by adding **Reactor Active Forge Fluid Ports** and providing the reactor with water.

<GameScene zoom="2" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/turbine.nbt" />
</GameScene>