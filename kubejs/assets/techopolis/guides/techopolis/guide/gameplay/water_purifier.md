---
navigation:
    title: Water Purifier
    icon: 'techopolis:water_purifier'
    parent: gameplay.md
item_ids:
    - 'techopolis:water_purifier'
---

# Water Purifier

A simple machine that refines water into **Purifying Water**. It supports two fluid recipes:

* **Water:** Uses **2 mB/t** of Water to create **1 mB/t** of Purifying Water.
* **Hot Water:** Uses **1 mB/t** of Hot Water to create **10 mB/t** of Purifying Water.

<Row>
  <Recipe id="techopolis:water_purifier" />
</Row>

---

## Upgrades

Insert a **Machine Frame** into the upgrade slot to **multiply** the fluid the machine consumes and produces every tick. Higher tiers process much more fluid, but **efficiency drops** with every tier, so you get less Purifying Water for each mB you put in.

| Upgrade Tier | Input | Output | Efficiency |
| :--- | :---: | :---: | :---: |
| <ItemImage id="techopolis:simple_machine_frame" scale="0.5" /> **Simple** Machine Frame | **x2** | **x1.9** | 95% |
| <ItemImage id="techopolis:sturdy_machine_frame" scale="0.5" /> **Sturdy** Machine Frame | **x3** | **x2.7** | 90% |
| <ItemImage id="techopolis:basic_technium_machine_frame" scale="0.5" /> **Basic Technium** Machine Frame | **x4** | **x3.4** | 85% |
| <ItemImage id="techopolis:advanced_technium_machine_frame" scale="0.5" /> **Advanced Technium** Machine Frame | **x5** | **x4.0** | 80% |
| <ItemImage id="techopolis:dimensional_machine_frame" scale="0.5" /> **Dimensional** Machine Frame | **x6** | **x4.5** | 75% |
| <ItemImage id="techopolis:elite_technium_machine_frame" scale="0.5" /> **Elite Technium** Machine Frame | **x7** | **x4.9** | 70% |
| <ItemImage id="techopolis:ultimate_technium_machine_frame" scale="0.5" /> **Ultimate Technium** Machine Frame | **x8** | **x5.2** | 65% |
| <ItemImage id="techopolis:hellish_technium_machine_frame" scale="0.5" /> **Hellish Technium** Machine Frame | **x9** | **x5.4** | 60% |
| <ItemImage id="techopolis:lunar_technium_machine_frame" scale="0.5" /> **Lunar Technium** Machine Frame | **x10** | **x5.5** | 55% |

### Hot Water example

| Upgrade Tier | Hot Water In | Purifying Water Out | Per 1 mB |
| :--- | :---: | :---: | :---: |
| None | 1 mB/t | 10 mB/t | 10 |
| Simple | 2 mB/t | 19 mB/t | 9.5 |
| Sturdy | 3 mB/t | 27 mB/t | 9 |
| Basic Technium | 4 mB/t | 34 mB/t | 8.5 |
| Advanced Technium | 5 mB/t | 40 mB/t | 8 |
| Dimensional | 6 mB/t | 45 mB/t | 7.5 |
| Elite Technium | 7 mB/t | 49 mB/t | 7 |
| Ultimate Technium | 8 mB/t | 52 mB/t | 6.5 |
| Hellish Technium | 9 mB/t | 54 mB/t | 6 |
| Lunar Technium | 10 mB/t | 55 mB/t | 5.5 |