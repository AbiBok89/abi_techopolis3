---
navigation:
    title: Miners
    parent: custom_machinery.md
    icon: 'techopolis:basic_miner'
    position: 49
item_ids:
    - 'techopolis:basic_miner'
    - 'techopolis:advanced_miner'
    - 'techopolis:elite_miner'
    - 'techopolis:ultimate_miner'
---

# Miners

Miners are basic structures that allow for mining of specific resources. Miners come in different tiers, each tier increases the output of the miners.

## Tiers

| Tier | Output Multiplier |
| :--- | :---: |
| Basic | 1x |
| Advanced | 2x |
| Elite | 4x |
| Ultimate | 8x |

*Cobblestone is the exception, producing 2, 4, 8 and 16 per tier.

## Types

Miners can produce:

<Row>
  <BlockImage id="minecraft:cobblestone" scale="1.3" />
  <BlockImage id="minecraft:stone" scale="1.3" />
  <BlockImage id="minecraft:gravel" scale="1.3" />
  <BlockImage id="minecraft:sand" scale="1.3" />
  <BlockImage id="minecraft:clay" scale="1.3" />
  <BlockImage id="techopolis:grout" scale="1.3" />
</Row>

## Structure (Only one Miner per Structure)

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/custom_machinery/miner.nbt" />
</GameScene>

## Upgrades

This machine can be made faster using machine frames in the upgrade slot.

| Upgrade Tier | Processing Time |
| :--- | :---: |
| <ItemImage id="techopolis:simple_machine_frame" scale="0.5" /> **Simple** Machine Frame | **90%** |
| <ItemImage id="techopolis:sturdy_machine_frame" scale="0.5" /> **Sturdy** Machine Frame | **80%** |
| <ItemImage id="techopolis:basic_technium_machine_frame" scale="0.5" /> **Basic Technium** Machine Frame | **70%** |
| <ItemImage id="techopolis:advanced_technium_machine_frame" scale="0.5" /> **Advanced Technium** Machine Frame | **60%** |
| <ItemImage id="techopolis:dimensional_machine_frame" scale="0.5" /> **Dimensional** Machine Frame | **50%** |
| <ItemImage id="techopolis:elite_technium_machine_frame" scale="0.5" /> **Elite Technium** Machine Frame | **40%** |
| <ItemImage id="techopolis:ultimate_technium_machine_frame" scale="0.5" /> **Ultimate Technium** Machine Frame | **30%** |
| <ItemImage id="techopolis:hellish_technium_machine_frame" scale="0.5" /> **Hellish Technium** Machine Frame | **20%** |
| <ItemImage id="techopolis:lunar_technium_machine_frame" scale="0.5" /> **Lunar Technium** Machine Frame | **10%** |