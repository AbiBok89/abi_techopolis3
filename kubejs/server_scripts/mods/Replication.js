ServerEvents.recipes(event => {

  event.replaceInput({ id: 'replication:replicator_enclosure' }, 'replication:replica_ingot', '#techopolis:pure_matter')
  event.replaceInput({ output: 'replication:matter_blueprint[replication:blueprint={Item:{count:1b,id:"replication:replicator_motor"},Progress:1b}]' }, 'minecraft:paper', 'replication:replicator_enclosure')
  event.replaceInput({ mod: 'replication' }, 'minecraft:redstone', "ae2:calculation_processor")
  event.replaceInput({ mod: 'replication' }, 'minecraft:gold_ingot', "ae2:logic_processor")

  event.shaped('8x replication:matter_network_pipe', ["UUU", "URU", "UUU"], { U: 'mekanism:ultimate_universal_cable', R: "replication:replica_ingot" }).id('replication:matter_network_pipe')
  event.shaped('8x replication:replication_terminal', ["UUU", "URU", "UUU"], { U: 'replication:replica_ingot', R: "ae2:crafting_terminal" }).id('replication:replication_terminal')

  function addIngotValue(item, value) {

    event.custom({
      "type": "replication:matter_value",
      "input": {
        "item": item
      },
      "matter": [
        {
          "type": "replication:metallic",
          "amount": value
        }
      ]
    })
  }

  addIngotValue("alltheores:aluminum_ingot", 9)
  addIngotValue("alltheores:nickel_ingot", 9)
  addIngotValue("alltheores:tin_ingot", 9)
  addIngotValue("alltheores:lead_ingot", 9)
  addIngotValue("alltheores:zinc_ingot", 9)
  addIngotValue("alltheores:osmium_ingot", 9)
  addIngotValue("alltheores:platinum_ingot", 9)
  addIngotValue("alltheores:silver_ingot", 9)

  event.custom({
    "type": "replication:matter_value",
    "input": {
      "item": "alltheores:uranium_ingot"
    },
    "matter": [
      {
        "type": "replication:metallic",
        "amount": 9
      },
      {
        "type": "replication:quantum",
        "amount": 9
      }
    ]
  })

  event.custom({
    "type": "replication:matter_value",
    "mode": "REPLACING",
    "input": {
      "item": "minecraft:copper_ingot"
    },
    "matter": [
      {
        "type": "replication:metallic",
        "amount": 9
      },
      {
        "type": "replication:precious",
        "amount": 9
      }
    ]
  })


})
