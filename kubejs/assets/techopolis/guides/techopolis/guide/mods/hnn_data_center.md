---
navigation:
    title: Hostile Neural Networks
    icon: 'hostilenetworks:data_center'
    parent: mods.md
    position: 60
item_ids:
    - 'hostilenetworks:data_center'
    - 'minecraft:crying_obsidian'
    - 'minecraft:black_stained_glass'
    - 'connectedglass:clear_glass_black'
    - 'hostilenetworks:data_center_io_port'
---

# Hostile Neural Networks

Hostile Neural Networks allows you to train data models to simulate mob drops without the need for traditional mob entities or server-taxing farms.

## Data Center

The Data Center is the peak of simulation, running up to twenty-five Self Aware Data Models concurrently. Right-click a data model to select its output drop. Each active slot then consumes power and an input item to directly produce the selected output, skipping the prediction item stage and depositing it into a shared output buffer.

### Structure Setup

To construct the 7x7x7 multiblock, build a hollow shell with a **Crying Obsidian** floor and walls/ceiling made of **Black Stained Glass** or **Clear Black Stained Glass**. The Data Center controller substitutes exactly one block in the bottom wall.

<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/hnn/data_center.nbt" />
</GameScene>

### IO Ports & Operation

The IO Port is essential for interacting with the multiblock and can substitute any wall or ceiling block in the shell.

* **Cycling Modes:** Right-click the IO Port to cycle its mode between **Energy**, **Models**, **Inputs** and **Outputs**.
* **Functionality:**
  * **Energy:** Accepts power to run the simulations.
  * **Models / Inputs / Outputs:** Exposes the internal item slots, allowing you to feed in data models, input items and extract the generated drops.