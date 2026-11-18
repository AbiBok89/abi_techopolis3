---
navigation:
    title: Nuclear Reactor
    parent: custom_machinery.md
    icon: 'techopolis:nuclear_reactor'
    position: 110
item_ids:
    - 'techopolis:nuclear_reactor'
---

# Nuclear Reactor

Produces Power and Nuclear Waste. Huge multiblock. Various different fuel ingots made in the Reprocessor can be used to create more Nuclear Waste. This can also create Antimatter.

<Recipe id="techopolis:nuclear_reactor" />

## Structure

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/custom_machinery/nuclear_reactor.nbt" />
</GameScene>

---

## Upgrades

This machine can be upgraded using machine frames in the upgrade slot. Unlike standard machines, putting upgrades in the Nuclear Reactor not only burns fuel faster, but also multiplies the energy generated from each fuel ingot.

> **💡 Tip:** Because the reactor scales your FE/t up when the burn time is reduced, the Speed reduction and Energy Output multiplier of higher-tier frames **multiply together**. The final power per tick is the Energy Output divided by the time fraction, for example a Lunar frame gives 1.9 / 0.1 = **19x** the base FE/t. Fuel is also burned, and Nuclear Waste produced, much faster, so make sure your automation can keep up.

| Upgrade Tier | Fuel Burn Time | Power Output (FE/t) | Energy per Ingot |
| :--- | :---: | :---: | :---: |
| <ItemImage id="techopolis:simple_machine_frame" scale="0.5" /> **Simple** Machine Frame | **90%** | **1.22x** | **1.1x** |
| <ItemImage id="techopolis:sturdy_machine_frame" scale="0.5" /> **Sturdy** Machine Frame | **80%** | **1.5x** | **1.2x** |
| <ItemImage id="techopolis:basic_technium_machine_frame" scale="0.5" /> **Basic Technium** Machine Frame | **70%** | **1.86x** | **1.3x** |
| <ItemImage id="techopolis:advanced_technium_machine_frame" scale="0.5" /> **Advanced Technium** Machine Frame | **60%** | **2.33x** | **1.4x** |
| <ItemImage id="techopolis:dimensional_machine_frame" scale="0.5" /> **Dimensional** Machine Frame | **50%** | **3x** | **1.5x** |
| <ItemImage id="techopolis:elite_technium_machine_frame" scale="0.5" /> **Elite Technium** Machine Frame | **40%** | **4x** | **1.6x** |
| <ItemImage id="techopolis:ultimate_technium_machine_frame" scale="0.5" /> **Ultimate Technium** Machine Frame | **30%** | **5.67x** | **1.7x** |
| <ItemImage id="techopolis:hellish_technium_machine_frame" scale="0.5" /> **Hellish Technium** Machine Frame | **20%** | **9x** | **1.8x** |
| <ItemImage id="techopolis:lunar_technium_machine_frame" scale="0.5" /> **Lunar Technium** Machine Frame | **10%** | **19x** | **1.9x** |

### Example: Uranium Ingot

| Upgrade Tier | Burn Time | Power Output | Total Energy |
| :--- | :---: | :---: | :---: |
| None | 60 s | 2,500 FE/t | 3,000,000 FE |
| Simple | 54 s | 3,056 FE/t | 3,300,000 FE |
| Sturdy | 48 s | 3,750 FE/t | 3,600,000 FE |
| Basic Technium | 42 s | 4,643 FE/t | 3,900,000 FE |
| Advanced Technium | 36 s | 5,833 FE/t | 4,200,000 FE |
| Dimensional | 30 s | 7,500 FE/t | 4,500,000 FE |
| Elite Technium | 24 s | 10,000 FE/t | 4,800,000 FE |
| Ultimate Technium | 18 s | 14,167 FE/t | 5,100,000 FE |
| Hellish Technium | 12 s | 22,500 FE/t | 5,400,000 FE |
| Lunar Technium | 6 s | 47,500 FE/t | 5,700,000 FE |