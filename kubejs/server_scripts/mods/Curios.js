// Custom Curios Related Events

const $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')

//Speed and Hunger Curio
PlayerEvents.tick(event => {

  if (event.server.getTickCount() % 20 != 0) return

  let optionalInventory = $CuriosApi.getCuriosInventory(event.player)

  if (event.level.dimension == "minecraft:overworld") {

    if (optionalInventory.isPresent()) {

      let curiosInventory = optionalInventory.get();
      let itemHandler = curiosInventory.getEquippedCurios();

      for (let i = 0; i < itemHandler.getSlots(); i++) {
        let stack = itemHandler.getStackInSlot(i);

        if (stack.getItem() == "techopolis:speed_1_curio") {
          event.player.potionEffects.add('minecraft:speed', 25, 1, false, false)
        }

        if (stack.getItem() == "techopolis:speed_2_curio") {
          event.player.potionEffects.add('minecraft:speed', 25, 2, false, false)
        }

        if (stack.getItem() == "techopolis:speed_3_curio") {
          event.player.potionEffects.add('minecraft:speed', 25, 3, false, false)
        }

        if (stack.getItem() == "techopolis:hunger_curio") {
          event.player.setSaturation(20)
          event.player.setFoodLevel(20)
        }
      }
    }
  }
})



//The Nether Heat Protection Curio
PlayerEvents.tick(event => {

  if (event.server.getTickCount() % 20 != 0) return;

  if (event.level.dimension == "minecraft:the_nether") {

    let optionalInventory = $CuriosApi.getCuriosInventory(event.player);

    if (optionalInventory.isPresent()) {

      let curiosInventory = optionalInventory.get();
      let itemHandler = curiosInventory.getEquippedCurios();
      let hasHeatProtectionCurio = false;
      let processedCurio = false;

      for (let i = 0; i < itemHandler.getSlots(); i++) {
        let stack = itemHandler.getStackInSlot(i);

        if (stack.getItem() == "techopolis:heat_protection_curio_1" && !processedCurio) {
          let maxDamage = stack.getMaxDamage();
          let currentDamage = stack.getDamageValue();
          if (currentDamage < maxDamage) {
            stack.setDamageValue(currentDamage + 20);
          } else {
            stack.setCount(0);
            event.player.tell("Heat Curio Broken");
          }
          event.player.extinguish();
          hasHeatProtectionCurio = true;
          processedCurio = true;
        }

        else if (stack.getItem() == "techopolis:heat_protection_curio_2" && !processedCurio) {
          let maxDamage = stack.getMaxDamage();
          let currentDamage = stack.getDamageValue();
          if (currentDamage < maxDamage) {
            stack.setDamageValue(currentDamage + 20);
          } else {
            stack.setCount(0);
            event.player.tell("Heat Curio Broken");
          }
          event.player.extinguish();
          hasHeatProtectionCurio = true;
          processedCurio = true;
        }

        else if (stack.getItem() == "techopolis:heat_protection_curio_3" && !processedCurio) {
          hasHeatProtectionCurio = true;
          processedCurio = true;
        }

        if (processedCurio) {
          break;
        }
      }

      if (!hasHeatProtectionCurio) {
        event.player.igniteForTicks(20);
      }
    }
  }

});





