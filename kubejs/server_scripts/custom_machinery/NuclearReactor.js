ServerEvents.recipes(event => {

    function nuclearReactorRecipes(input1, input2, outputChemical, time, energy, id) {
        let recipe = event.recipes.custommachinery.custom_machine("techopolis:nuclear_reactor", time).requireStructure([["a     a", " bbbbb ", " bbbbb ", " bbbbb ", " bbbbb ", " bbbbb ", "a  m  a"], ["a     a", " bcccb ", " cd dc ", " c   c ", " cd dc ", " bcccb ", "a     a"], ["a     a", " bcccb ", " cd dc ", " c   c ", " cd dc ", " bcccb ", "a     a"], ["a     a", " bcccb ", " cd dc ", " c   c ", " cd dc ", " bcccb ", "a     a"], ["a     a", " bbbbb ", " bd db ", " b   b ", " bd db ", " bbbbb ", "a     a"], ["a     a", " bcccb ", " cd dc ", " c   c ", " cd dc ", " bcccb ", "a     a"], ["a     a", " bcccb ", " cd dc ", " c   c ", " cd dc ", " bcccb ", "a     a"], ["ee   ee", "ebcccbe", " cd dc ", " c   c ", " cd dc ", "ebcccbe", "ee   ee"], ["aeeeeea", "ebbbbbe", "ebfbfbe", "ebbbbbe", "ebfbfbe", "ebbbbbe", "aeeeeea"], ["aaaaaaa", "aggggga", "aggggga", "aggggga", "aggggga", "aggggga", "aaaaaaa"], ["aa   aa", "a     a", "       ", "       ", "       ", "a     a", "aa   aa"]], { "a": "techopolis:multiblock_machine_casing", "b": "bigreactors:basic_reactorcasing", "c": "bigreactors:basic_reactorglass", "d": "bigreactors:basic_reactorfuelrod", "e": "techopolis:multiblock_circuitry", "f": "bigreactors:basic_reactorcontrolrod", "g": "techopolis:multiblock_vent" })

        recipe.requireItem(input1)
        if (input2) {
            recipe.requireItem(input2)
        }
        recipe.produceEnergyPerTick(energy)
        recipe.produceChemical(outputChemical)

        if (id) {
            recipe.id(id)
        }
    }

    nuclearReactorRecipes("alltheores:uranium_ingot", null, "1000x mekanism:nuclear_waste", 1200, 2500, 'techopolis:nuclear_reactor/nuclear_waste_from_uranium')
    nuclearReactorRecipes("bigreactors:cyanite_ingot", null, "2000x mekanism:nuclear_waste", 1200, 5000, 'techopolis:nuclear_reactor/nuclear_waste_from_cyanite')
    nuclearReactorRecipes("bigreactors:blutonium_ingot", null, "4000x mekanism:nuclear_waste", 1200, 10000, 'techopolis:nuclear_reactor/nuclear_waste_from_blutonium')
    nuclearReactorRecipes("bigreactors:ludicrite_ingot", null, "6000x mekanism:nuclear_waste", 1200, 25000, 'techopolis:nuclear_reactor/nuclear_waste_from_ludicrite')
    nuclearReactorRecipes("bigreactors:ridiculite_ingot", null, "8000x mekanism:nuclear_waste", 1200, 50000, 'techopolis:nuclear_reactor/nuclear_waste_from_ridiculite')
    nuclearReactorRecipes("bigreactors:inanite_ingot", null, "12000x mekanism:nuclear_waste", 1200, 100000, 'techopolis:nuclear_reactor/nuclear_waste_from_inanite')

    event.recipes.custommachinery.custom_machine("techopolis:nuclear_reactor", 1200).requireStructure([["a     a", " bbbbb ", " bbbbb ", " bbbbb ", " bbbbb ", " bbbbb ", "a  m  a"], ["a     a", " bcccb ", " cd dc ", " c   c ", " cd dc ", " bcccb ", "a     a"], ["a     a", " bcccb ", " cd dc ", " c   c ", " cd dc ", " bcccb ", "a     a"], ["a     a", " bcccb ", " cd dc ", " c   c ", " cd dc ", " bcccb ", "a     a"], ["a     a", " bbbbb ", " bd db ", " b   b ", " bd db ", " bbbbb ", "a     a"], ["a     a", " bcccb ", " cd dc ", " c   c ", " cd dc ", " bcccb ", "a     a"], ["a     a", " bcccb ", " cd dc ", " c   c ", " cd dc ", " bcccb ", "a     a"], ["ee   ee", "ebcccbe", " cd dc ", " c   c ", " cd dc ", "ebcccbe", "ee   ee"], ["aeeeeea", "ebbbbbe", "ebfbfbe", "ebbbbbe", "ebfbfbe", "ebbbbbe", "aeeeeea"], ["aaaaaaa", "aggggga", "aggggga", "aggggga", "aggggga", "aggggga", "aaaaaaa"], ["aa   aa", "a     a", "       ", "       ", "       ", "a     a", "aa   aa"]], { "a": "techopolis:multiblock_machine_casing", "b": "bigreactors:basic_reactorcasing", "c": "bigreactors:basic_reactorglass", "d": "bigreactors:basic_reactorfuelrod", "e": "techopolis:multiblock_circuitry", "f": "bigreactors:basic_reactorcontrolrod", "g": "techopolis:multiblock_vent" })

        .requireItem("mekanism:pellet_plutonium")
        .requireItem("mekanism:pellet_polonium")
        .requireEnergyPerTick(10240)
        .produceChemical("1000x mekanism:antimatter")
        .id('techopolis:nuclear_reactor/antimatter')


    event.shaped("techopolis:nuclear_reactor", ["SSS", "ACA", "SSS"],
        { S: 'techopolis:multiblock_machine_casing', C: 'techopolis:elite_technium_machine_frame', A: "techopolis:unstable_matter" }).id('techopolis:nuclear_reactor')

})
