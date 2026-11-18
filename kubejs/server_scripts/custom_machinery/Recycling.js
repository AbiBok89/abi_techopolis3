ServerEvents.recipes(event => {

    // --- Fluid Recycler ---
    function fluidRecycler(fluid, output, time, id) {
        event.recipes.custommachinery.custom_machine("techopolis:fluid_recycler", time)
            .requireFluid(fluid)
            .produceItem(output)
            .id(id)
    }

    // --- Item Recycler ---
    function itemRecycler(inputItem, inputCount, output, time, id) {
        event.recipes.custommachinery.custom_machine("techopolis:item_recycler", time)
            .requireItem(`${inputCount}x ${inputItem}`)
            .produceItem(output, "output_item")
            .id(id)
    }

    // Tech Bucks
    itemRecycler("techopolis:fluid_recycling_coupon", 8, "shops:copper_coin", 100, 'techopolis:fluid_recycler/fluid_recycling_coupon')
    itemRecycler("techopolis:item_recycling_coupon", 8, "shops:copper_coin", 100, 'techopolis:item_recycler/item_recycling_coupon')

    // Fluid Recycler Recipes
    fluidRecycler("10000x immersiveengineering:creosote", "techopolis:fluid_recycling_coupon", 100, 'techopolis:fluid_recycler/creosote')
    fluidRecycler("5000x techopolis:hot_water", "techopolis:fluid_recycling_coupon", 100, 'techopolis:fluid_recycler/hot_water')

    // Item Recycler Recipes (Item, Count Per Craft, Output, Time, ID)
    itemRecycler("#c:gears", 64, "techopolis:item_recycling_coupon", 100, 'techopolis:item_recycler/gears')
    itemRecycler("#minecraft:leaves", 64, "techopolis:item_recycling_coupon", 100, 'techopolis:item_recycler/leaves')
    itemRecycler("#c:plates", 64, "techopolis:item_recycling_coupon", 100, 'techopolis:item_recycler/plates')
    itemRecycler("#c:rods", 64, "techopolis:item_recycling_coupon", 100, 'techopolis:item_recycler/rods')

})
