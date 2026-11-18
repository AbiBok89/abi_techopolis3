// priority: 0

StartupEvents.registry('fluid', event => {
    event.create('techopolis:hot_water', 'thin').tint('#A5C6FF')
    event.create('techopolis:molten_mob_essence', 'thick').tint('#0C3818')
    event.create('techopolis:liquid_nitrogen', 'thin').tint('#DBECFF')
    event.create('techopolis:molten_cheese', 'thick').tint('#EA7514')
    event.create('techopolis:oil', 'thin').tint('#0D0E0F')
    event.create('techopolis:molten_ender_fuel', 'thick').tint('#999e73')
    event.create('techopolis:ender_ethanol', 'thin').tint('#999e73')
    event.create('techopolis:chocolate', 'thin').tint('#7F3300')
    event.create('techopolis:liquid_matter', 'thick').tint('#FFFFFF')
})

const $Chemical = Java.loadClass('mekanism.api.chemical.Chemical')
const $ChemicalBuilder = Java.loadClass('mekanism.api.chemical.ChemicalBuilder')
const $ChemicalAttributes = Java.loadClass("mekanism.api.chemical.attribute.ChemicalAttributes")
const $Radition = $ChemicalAttributes.Radiation

StartupEvents.registry('mekanism:chemical', event => {

    event.createCustom(`techopolis:safe_spent_nuclear_waste`, () => new $Chemical($ChemicalBuilder.builder().tint(0x270000)))


    //Ore Unification
    function addOreSlurries(type, color) {

        event.createCustom(`techopolis:dirty_${type}_slurry`, () => new $Chemical($ChemicalBuilder.builder().tint(color)))
        event.createCustom(`techopolis:clean_${type}_slurry`, () => new $Chemical($ChemicalBuilder.builder().tint(color)))
    }

    addOreSlurries('coal', 0x252525)
    addOreSlurries('iron', 0xD5AA87)
    addOreSlurries('gold', 0xF5E556)
    addOreSlurries('copper', 0xCA7B59)
    addOreSlurries('tin', 0xCDCDE0)
    addOreSlurries('diamond', 0x5BFCFF)
    addOreSlurries('emerald', 0x4BD254)
    addOreSlurries('redstone', 0xCB1E0F)
    addOreSlurries('lapis', 0x3A6EE4)
    addOreSlurries('aluminum', 0xD6E5EC)
    addOreSlurries('lead', 0x788ABE)
    addOreSlurries('nickel', 0xD9D5BE)
    addOreSlurries('osmium', 0xAEC5D0)
    addOreSlurries('platinum', 0xACAACD)
    addOreSlurries('silver', 0xE7ECF4)
    addOreSlurries('uranium', 0x97E282)
    addOreSlurries('zinc', 0xCEDDE4)
    addOreSlurries('ender', 0x007F78)
    addOreSlurries('replica', 0x1F232D)
    addOreSlurries('black_quartz', 0x35404E)
    addOreSlurries('quartz', 0xEBE7E3)
    addOreSlurries('cheesium', 0xEA7514)
    addOreSlurries('ostrum', 0x261F1F)
    addOreSlurries('desh', 0xB4563B)
    addOreSlurries('neptunium', 0x7B8888)
    addOreSlurries('iridium', 0xD1CCC6)
    addOreSlurries('anglesite', 0xF2C545)


    event.createCustom(`techopolis:spent_nether_waste`, () => new $Chemical($ChemicalBuilder.builder().tint(0x7F0000)))
    event.createCustom(`techopolis:lunar_gas`, () => new $Chemical($ChemicalBuilder.builder().tint(0x49494b)))
    event.createCustom(`techopolis:dragon_breath`, () => new $Chemical($ChemicalBuilder.builder().tint(0xdb9bc3)))
    event.createCustom(`techopolis:ultimate_gas`, () => new $Chemical($ChemicalBuilder.builder().tint(0xdb9bc3)))

})
    

