
//COPPER TIER AND EQUIPMENT BELOW:

ItemEvents.toolTierRegistry(event => {
    event.add('copper', tier => {
      tier.uses = 250
      tier.speed = 5.0
      tier.attackDamageBonus = 2.0
      tier.level = 1
      tier.enchantmentValue = 14
      tier.repairIngredient = 'minecraft:copper_ingot'
    })
  })

ItemEvents.armorTierRegistry(event => {
    event.add('copper', tier => {
      tier.durabilityMultiplier = 15 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [2, 5, 6, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
      tier.enchantmentValue = 14
      tier.equipSound = 'minecraft:item.armor.equip_iron'
      tier.repairIngredient = 'minecraft:emerald'
      tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
      tier.knockbackResistance = 0.0
    })
  })

  StartupEvents.registry('item', e => {
    e.create('copper_sword', 'sword')
    .displayName("Copper Sword")
    .tier('copper')
})

StartupEvents.registry('item', e => {
    e.create('copper_pickaxe', 'pickaxe')
    .displayName("Copper Pickaxe")
    .tier('copper')
})

StartupEvents.registry('item', e => {
    e.create('copper_axe', 'axe')
    .displayName("Copper Axe")
    .tier('copper')
})

StartupEvents.registry('item', e => {
    e.create('copper_shovel', 'shovel')
    .displayName("Copper Shovel")
    .tier('copper')
})

StartupEvents.registry('item', e => {
    e.create('copper_hoe', 'hoe')
    .displayName("Copper Hoe")
    .tier('copper')
})

StartupEvents.registry('item', e => {
    e.create('copper_helmet', 'helmet')
    .displayName("Copper Helmet")
    .tier('copper')
})

StartupEvents.registry('item', e => {
    e.create('copper_chestplate', 'chestplate')
    .displayName("Copper Chestplate")
    .tier('copper')
})

StartupEvents.registry('item', e => {
    e.create('copper_leggings', 'leggings')
    .displayName("Copper Leggings")
    .tier('copper')
})

StartupEvents.registry('item', e => {
    e.create('copper_boots', 'boots')
    .displayName("Copper Boots")
    .tier('copper')
})

//BRASS TIER AND EQUIPMENT BELOW:

ItemEvents.toolTierRegistry(event => {
    event.add('brass', tier => {
      tier.uses = 500
      tier.speed = 6.0
      tier.attackDamageBonus = 2.0
      tier.level = 1
      tier.enchantmentValue = 14
      tier.repairIngredient = 'kubejs:brass_ingot'
    })
  })

ItemEvents.armorTierRegistry(event => {
    event.add('brass', tier => {
      tier.durabilityMultiplier = 30 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [2, 5, 6, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
      tier.enchantmentValue = 14
      tier.equipSound = 'minecraft:item.armor.equip_iron'
      tier.repairIngredient = 'kubejs:brass_ingot'
      tier.toughness = 1.0 // diamond has 2.0, netherite 3.0
      tier.knockbackResistance = 0.0
    })
  })

  StartupEvents.registry('item', e => {
    e.create('brass_sword', 'sword')
    .displayName("Brass Sword")
    .tier('brass')
})

StartupEvents.registry('item', e => {
    e.create('brass_pickaxe', 'pickaxe')
    .displayName("Brass Pickaxe")
    .tier('brass')
})

StartupEvents.registry('item', e => {
    e.create('brass_axe', 'axe')
    .displayName("Brass Axe")
    .tier('brass')
})

StartupEvents.registry('item', e => {
    e.create('brass_shovel', 'shovel')
    .displayName("Brass Shovel")
    .tier('brass')
})

StartupEvents.registry('item', e => {
    e.create('brass_hoe', 'hoe')
    .displayName("Brass Hoe")
    .tier('brass')
})

StartupEvents.registry('item', e => {
    e.create('brass_helmet', 'helmet')
    .displayName("Brass Helmet")
    .tier('brass')
})

StartupEvents.registry('item', e => {
    e.create('brass_chestplate', 'chestplate')
    .displayName("Brass Chestplate")
    .tier('brass')
})

StartupEvents.registry('item', e => {
    e.create('brass_leggings', 'leggings')
    .displayName("Brass Leggings")
    .tier('brass')
})

StartupEvents.registry('item', e => {
    e.create('brass_boots', 'boots')
    .displayName("Brass Boots")
    .tier('brass')
})

//IRON TIER MODIFICATIONS:

ItemEvents.modification(event => {
    event.modify('minecraft:iron_sword', item => {
        item.maxDamage = 500
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:iron_pickaxe', item => {
        item.maxDamage = 500
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:iron_axe', item => {
        item.maxDamage = 500
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:iron_shovel', item => {
        item.maxDamage = 500
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:iron_hoe', item => {
        item.maxDamage = 500
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:iron_helmet', item => {
        item.maxDamage = 390
        item.armorProtection = 3
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:iron_chestplate', item => {
        item.maxDamage = 480
        item.armorProtection = 7
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:iron_leggings', item => {
        item.maxDamage = 450
        item.armorProtection = 6
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:iron_leggings', item => {
        item.maxDamage = 330
        item.armorProtection = 3
    })
})

//INVAR TIER AND EQUIPMENT BELOW:

ItemEvents.toolTierRegistry(event => {
    event.add('invar', tier => {
      tier.uses = 1000
      tier.speed = 6.0
      tier.attackDamageBonus = 3.0
      tier.level = 2
      tier.enchantmentValue = 14
      tier.repairIngredient = 'kubejs:invar_ingot'
    })
  })

ItemEvents.armorTierRegistry(event => {
    event.add('invar', tier => {
      tier.durabilityMultiplier = 60 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [3, 6, 7, 3] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
      tier.enchantmentValue = 14
      tier.equipSound = 'minecraft:item.armor.equip_iron'
      tier.repairIngredient = 'kubejs:invar_ingot'
      tier.toughness = 1.0 // diamond has 2.0, netherite 3.0
      tier.knockbackResistance = 0.0
    })
  })

  StartupEvents.registry('item', e => {
    e.create('invar_sword', 'sword')
    .displayName("Invar Sword")
    .tier('invar')
})

StartupEvents.registry('item', e => {
    e.create('invar_pickaxe', 'pickaxe')
    .displayName("Invar Pickaxe")
    .tier('invar')
})

StartupEvents.registry('item', e => {
    e.create('invar_axe', 'axe')
    .displayName("Invar Axe")
    .tier('invar')
})

StartupEvents.registry('item', e => {
    e.create('invar_shovel', 'shovel')
    .displayName("Invar Shovel")
    .tier('invar')
})

StartupEvents.registry('item', e => {
    e.create('invar_hoe', 'hoe')
    .displayName("Invar Hoe")
    .tier('invar')
})

StartupEvents.registry('item', e => {
    e.create('invar_helmet', 'helmet')
    .displayName("Invar Helmet")
    .tier('invar')
})

StartupEvents.registry('item', e => {
    e.create('invar_chestplate', 'chestplate')
    .displayName("Invar Chestplate")
    .tier('invar')
})

StartupEvents.registry('item', e => {
    e.create('invar_leggings', 'leggings')
    .displayName("Invar Leggings")
    .tier('invar')
})

StartupEvents.registry('item', e => {
    e.create('invar_boots', 'boots')
    .displayName("Invar Boots")
    .tier('invar')
})

//GOLD TIER MODIFICIATIONS:

ItemEvents.modification(event => {
    event.modify('minecraft:golden_sword', item => {
        item.maxDamage = 1000
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:golden_pickaxe', item => {
        item.maxDamage = 1000
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:golden_axe', item => {
        item.maxDamage = 1000
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:golden_shovel', item => {
        item.maxDamage = 1000
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:golden_hoe', item => {
        item.maxDamage = 1000
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:golden_helmet', item => {
        item.maxDamage = 780
        item.armorProtection = 4
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:golden_chestplate', item => {
        item.maxDamage = 900
        item.armorProtection = 8
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:golden_leggings', item => {
        item.maxDamage = 960
        item.armorProtection = 7
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:golden_leggings', item => {
        item.maxDamage = 660
        item.armorProtection = 4
    })
})

//ELECTRUM TIER AND EQUIPMENT BELOW:

ItemEvents.toolTierRegistry(event => {
    event.add('electrum', tier => {
      tier.uses = 2000
      tier.speed = 15.0
      tier.attackDamageBonus = 4.0
      tier.level = 3
      tier.enchantmentValue = 24
      tier.repairIngredient = 'kubejs:electrum_ingot'
    })
  })

ItemEvents.armorTierRegistry(event => {
    event.add('electrum', tier => {
      tier.durabilityMultiplier = 120 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [4, 7, 8, 4] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
      tier.enchantmentValue = 24
      tier.equipSound = 'minecraft:item.armor.equip_iron'
      tier.repairIngredient = 'kubejs:electrum_ingot'
      tier.toughness = 1.0 // diamond has 2.0, netherite 3.0
      tier.knockbackResistance = 0.0
    })
  })

  StartupEvents.registry('item', e => {
    e.create('electrum_sword', 'sword')
    .displayName("Electrum Sword")
    .tier('electrum')
})

StartupEvents.registry('item', e => {
    e.create('electrum_pickaxe', 'pickaxe')
    .displayName("Electrum Pickaxe")
    .tier('electrum')
})

StartupEvents.registry('item', e => {
    e.create('electrum_axe', 'axe')
    .displayName("Electrum Axe")
    .tier('electrum')
})

StartupEvents.registry('item', e => {
    e.create('electrum_shovel', 'shovel')
    .displayName("Electrum Shovel")
    .tier('electrum')
})

StartupEvents.registry('item', e => {
    e.create('electrum_hoe', 'hoe')
    .displayName("Electrum Hoe")
    .tier('electrum')
})

StartupEvents.registry('item', e => {
    e.create('electrum_helmet', 'helmet')
    .displayName("Electrum Helmet")
    .tier('electrum')
})

StartupEvents.registry('item', e => {
    e.create('electrum_chestplate', 'chestplate')
    .displayName("Electrum Chestplate")
    .tier('electrum')
})

StartupEvents.registry('item', e => {
    e.create('electrum_leggings', 'leggings')
    .displayName("Electrum Leggings")
    .tier('electrum')
})

StartupEvents.registry('item', e => {
    e.create('electrum_boots', 'boots')
    .displayName("Electrum Boots")
    .tier('electrum')
})

//RUBY TIER AND EQUIPMENT BELOW:

ItemEvents.toolTierRegistry(event => {
    event.add('ruby', tier => {
      tier.uses = 2500
      tier.speed = 8.0
      tier.attackDamageBonus = 6.0
      tier.level = 4
      tier.enchantmentValue = 10
      tier.repairIngredient = 'kubejs:ruby'
    })
  })

ItemEvents.armorTierRegistry(event => {
    event.add('ruby', tier => {
      tier.durabilityMultiplier = 150 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [7, 9, 9, 7] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
      tier.enchantmentValue = 10
      tier.equipSound = 'minecraft:item.armor.equip_iron'
      tier.repairIngredient = 'kubejs:ruby'
      tier.toughness = 4.0 // diamond has 2.0, netherite 3.0
      tier.knockbackResistance = 0.0
    })
  })

StartupEvents.registry('item', e => {
    e.create('ruby_sword', 'sword')
    .displayName("Ruby Sword")
    .tier('ruby')
})

StartupEvents.registry('item', e => {
    e.create('ruby_pickaxe', 'pickaxe')
    .displayName("Ruby Pickaxe")
    .tier('ruby')
})

StartupEvents.registry('item', e => {
    e.create('ruby_axe', 'axe')
    .displayName("Ruby Axe")
    .tier('ruby')
})

StartupEvents.registry('item', e => {
    e.create('ruby_shovel', 'shovel')
    .displayName("Ruby Shovel")
    .tier('ruby')
})

StartupEvents.registry('item', e => {
    e.create('ruby_hoe', 'hoe')
    .displayName("Ruby Hoe")
    .tier('ruby')
})

StartupEvents.registry('item', e => {
    e.create('ruby_helmet', 'helmet')
    .displayName("Ruby Helmet")
    .tier('ruby')
})

StartupEvents.registry('item', e => {
    e.create('ruby_chestplate', 'chestplate')
    .displayName("Ruby Chestplate")
    .tier('ruby')
})

StartupEvents.registry('item', e => {
    e.create('ruby_leggings', 'leggings')
    .displayName("Ruby Leggings")
    .tier('ruby')
})

StartupEvents.registry('item', e => {
    e.create('ruby_boots', 'boots')
    .displayName("Ruby Boots")
    .tier('ruby')
})

//EMERALD TIER AND EQUIPMENT BELOW:

ItemEvents.toolTierRegistry(event => {
    event.add('emerald', tier => {
      tier.uses = 2500
      tier.speed = 12.0
      tier.attackDamageBonus = 5.0
      tier.level = 4
      tier.enchantmentValue = 24
      tier.repairIngredient = 'minecraft:emerald'
    })
  })

ItemEvents.armorTierRegistry(event => {
    event.add('emerald', tier => {
      tier.durabilityMultiplier = 150 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [6, 8, 8, 6] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
      tier.enchantmentValue = 24
      tier.equipSound = 'minecraft:item.armor.equip_iron'
      tier.repairIngredient = 'minecraft:emerald'
      tier.toughness = 2.0 // diamond has 2.0, netherite 3.0
      tier.knockbackResistance = 0.1
    })
  })

  StartupEvents.registry('item', e => {
    e.create('emerald_sword', 'sword')
    .displayName("Emerald Sword")
    .tier('emerald')
})

StartupEvents.registry('item', e => {
    e.create('emerald_pickaxe', 'pickaxe')
    .displayName("Emerald Pickaxe")
    .tier('emerald')
})

StartupEvents.registry('item', e => {
    e.create('emerald_axe', 'axe')
    .displayName("Emerald Axe")
    .tier('emerald')
})

StartupEvents.registry('item', e => {
    e.create('emerald_shovel', 'shovel')
    .displayName("Emerald Shovel")
    .tier('emerald')
})

StartupEvents.registry('item', e => {
    e.create('emerald_hoe', 'hoe')
    .displayName("Emerald Hoe")
    .tier('emerald')
})

StartupEvents.registry('item', e => {
    e.create('emerald_helmet', 'helmet')
    .displayName("Emerald Helmet")
    .tier('emerald')
})

StartupEvents.registry('item', e => {
    e.create('emerald_chestplate', 'chestplate')
    .displayName("Emerald Chestplate")
    .tier('emerald')
})

StartupEvents.registry('item', e => {
    e.create('emerald_leggings', 'leggings')
    .displayName("Emerald Leggings")
    .tier('emerald')
})

StartupEvents.registry('item', e => {
    e.create('emerald_boots', 'boots')
    .displayName("Emerald Boots")
    .tier('emerald')
})

//DIAMOND TIER MODIFICIATIONS:

ItemEvents.modification(event => {
    event.modify('minecraft:diamond_sword', item => {
        item.maxDamage = 3750
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:diamond_pickaxe', item => {
        item.maxDamage = 3750
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:diamond_axe', item => {
        item.maxDamage = 3750
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:diamond_shovel', item => {
        item.maxDamage = 3750
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:diamond_hoe', item => {
        item.maxDamage = 3750
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:diamond_helmet', item => {
        item.maxDamage = 2340
        item.armorProtection = 6
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:diamond_chestplate', item => {
        item.maxDamage = 2700
        item.armorProtection = 8
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:diamond_leggings', item => {
        item.maxDamage = 2880
        item.armorProtection = 8
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:diamond_leggings', item => {
        item.maxDamage = 1980
        item.armorProtection = 6
    })
})

//WARPED TIER AND EQUIPMENT BELOW:

ItemEvents.toolTierRegistry(event => {
    event.add('warped', tier => {
      tier.uses = 177
      tier.speed = 3.0
      tier.attackDamageBonus = 1.0
      tier.level = 5
      tier.enchantmentValue = 15
      tier.repairIngredient = 'minecraft:warped_planks'
    })
  })

  StartupEvents.registry('item', e => {
    e.create('warped_sword', 'sword')
    .displayName("Warped Sword")
    .tier('warped')
})

StartupEvents.registry('item', e => {
    e.create('warped_pickaxe', 'pickaxe')
    .displayName("Warped Pickaxe")
    .tier('warped')
})

StartupEvents.registry('item', e => {
    e.create('warped_axe', 'axe')
    .displayName("Warped Axe")
    .tier('warped')
})

StartupEvents.registry('item', e => {
    e.create('warped_shovel', 'shovel')
    .displayName("Warped Shovel")
    .tier('warped')
})

StartupEvents.registry('item', e => {
    e.create('warped_hoe', 'hoe')
    .displayName("Warped Hoe")
    .tier('warped')
})

//BLACKSTONE TIER AND EQUIPMENT BELOW:

ItemEvents.toolTierRegistry(event => {
    event.add('blackstone', tier => {
      tier.uses = 393
      tier.speed = 4.0
      tier.attackDamageBonus = 2.0
      tier.level = 6
      tier.enchantmentValue = 5
      tier.repairIngredient = 'minecraft:blackstone'
    })
  })

  StartupEvents.registry('item', e => {
    e.create('blackstone_sword', 'sword')
    .displayName("Blackstone Sword")
    .tier('blackstone')
})

StartupEvents.registry('item', e => {
    e.create('blackstone_pickaxe', 'pickaxe')
    .displayName("Blackstone Pickaxe")
    .tier('blackstone')
})

StartupEvents.registry('item', e => {
    e.create('blackstone_axe', 'axe')
    .displayName("Blackstone Axe")
    .tier('blackstone')
})

StartupEvents.registry('item', e => {
    e.create('blackstone_shovel', 'shovel')
    .displayName("Blackstone Shovel")
    .tier('blackstone')
})

StartupEvents.registry('item', e => {
    e.create('blackstone_hoe', 'hoe')
    .displayName("Blackstone Hoe")
    .tier('blackstone')
})

//ICHORIUM TIER AND EQUIPMENT BELOW:

ItemEvents.toolTierRegistry(event => {
    event.add('ichorium', tier => {
      tier.uses = 1500
      tier.speed = 6.0
      tier.attackDamageBonus = 3.0
      tier.level = 7
      tier.enchantmentValue = 14
      tier.repairIngredient = 'kubejs:ichorium_bloodstone'
    })
  })

ItemEvents.armorTierRegistry(event => {
    event.add('ichorium', tier => {
      tier.durabilityMultiplier = 90 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [4, 7, 8, 4] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
      tier.enchantmentValue = 14
      tier.equipSound = 'minecraft:item.armor.equip_iron'
      tier.repairIngredient = 'kubejs:ichorium_bloodstone'
      tier.toughness = 2.0 // diamond has 2.0, netherite 3.0
      tier.knockbackResistance = 0.2
    })
  })

  StartupEvents.registry('item', e => {
    e.create('ichorium_sword', 'sword')
    .displayName("Ichorium Sword")
    .tier('ichorium')
})

StartupEvents.registry('item', e => {
    e.create('ichorium_pickaxe', 'pickaxe')
    .displayName("Ichorium Pickaxe")
    .tier('ichorium')
})

StartupEvents.registry('item', e => {
    e.create('ichorium_axe', 'axe')
    .displayName("Ichorium Axe")
    .tier('ichorium')
})

StartupEvents.registry('item', e => {
    e.create('ichorium_shovel', 'shovel')
    .displayName("Ichorium Shovel")
    .tier('ichorium')
})

StartupEvents.registry('item', e => {
    e.create('ichorium_hoe', 'hoe')
    .displayName("Ichorium Hoe")
    .tier('ichorium')
})

StartupEvents.registry('item', e => {
    e.create('ichorium_helmet', 'helmet')
    .displayName("Ichorium Helmet")
    .tier('ichorium')
})

StartupEvents.registry('item', e => {
    e.create('ichorium_chestplate', 'chestplate')
    .displayName("Ichorium Chestplate")
    .tier('ichorium')
})

StartupEvents.registry('item', e => {
    e.create('ichorium_leggings', 'leggings')
    .displayName("Ichorium Leggings")
    .tier('ichorium')
})

StartupEvents.registry('item', e => {
    e.create('ichorium_boots', 'boots')
    .displayName("Ichorium Boots")
    .tier('ichorium')
})

//HELLSTEEL TIER AND EQUIPMENT BELOW:

ItemEvents.toolTierRegistry(event => {
    event.add('hellsteel', tier => {
      tier.uses = 7500
      tier.speed = 8.0
      tier.attackDamageBonus = 4.0
      tier.level = 8
      tier.enchantmentValue = 10
      tier.repairIngredient = 'kubejs:hellsteel_ingot'
    })
  })

ItemEvents.armorTierRegistry(event => {
    event.add('hellsteel', tier => {
      tier.durabilityMultiplier = 450 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [7, 9, 9, 7] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
      tier.enchantmentValue = 10
      tier.equipSound = 'minecraft:item.armor.equip_iron'
      tier.repairIngredient = 'kubejs:hellsteel_ingot'
      tier.toughness = 4.0 // diamond has 2.0, netherite 3.0
      tier.knockbackResistance = 0.25
    })
  })

  StartupEvents.registry('item', e => {
    e.create('hellsteel_sword', 'sword')
    .displayName("Hellsteel Sword")
    .tier('hellsteel')
})

StartupEvents.registry('item', e => {
    e.create('hellsteel_pickaxe', 'pickaxe')
    .displayName("Hellsteel Pickaxe")
    .tier('hellsteel')
})

StartupEvents.registry('item', e => {
    e.create('hellsteel_axe', 'axe')
    .displayName("Hellsteel Axe")
    .tier('hellsteel')
})

StartupEvents.registry('item', e => {
    e.create('hellsteel_shovel', 'shovel')
    .displayName("Hellsteel Shovel")
    .tier('hellsteel')
})

StartupEvents.registry('item', e => {
    e.create('hellsteel_hoe', 'hoe')
    .displayName("Hellsteel Hoe")
    .tier('hellsteel')
})

StartupEvents.registry('item', e => {
    e.create('hellsteel_helmet', 'helmet')
    .displayName("Hellsteel Helmet")
    .tier('hellsteel')
})

StartupEvents.registry('item', e => {
    e.create('hellsteel_chestplate', 'chestplate')
    .displayName("Hellsteel Chestplate")
    .tier('hellsteel')
})

StartupEvents.registry('item', e => {
    e.create('hellsteel_leggings', 'leggings')
    .displayName("Hellsteel Leggings")
    .tier('hellsteel')
})

StartupEvents.registry('item', e => {
    e.create('hellsteel_boots', 'boots')
    .displayName("Hellsteel Boots")
    .tier('hellsteel')
})

//NEPHILIM TIER AND EQUIPMENT BELOW:

ItemEvents.toolTierRegistry(event => {
    event.add('nephilim', tier => {
      tier.uses = 10000
      tier.speed = 6.0
      tier.attackDamageBonus = 5.0
      tier.level = 9
      tier.enchantmentValue = 24
      tier.repairIngredient = 'kubejs:nephilim_ingot'
    })
  })

ItemEvents.armorTierRegistry(event => {
    event.add('nephilim', tier => {
      tier.durabilityMultiplier = 550 // Each slot will be multiplied with [13, 15, 16, 11]
      tier.slotProtections = [7, 9, 9, 7] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
      tier.enchantmentValue = 24
      tier.equipSound = 'minecraft:item.armor.equip_iron'
      tier.repairIngredient = 'kubejs:hellsteel_ingot'
      tier.toughness = 6.0 // diamond has 2.0, netherite 3.0
      tier.knockbackResistance = 0.0
    })
  })

  StartupEvents.registry('item', e => {
    e.create('nephilim_sword', 'sword')
    .displayName("Nephilim Sword")
    .tier('nephilim')
})

StartupEvents.registry('item', e => {
    e.create('nephilim_pickaxe', 'pickaxe')
    .displayName("Nephilim Pickaxe")
    .tier('nephilim')
})

StartupEvents.registry('item', e => {
    e.create('nephilim_axe', 'axe')
    .displayName("Nephilim Axe")
    .tier('nephilim')
})

StartupEvents.registry('item', e => {
    e.create('nephilim_shovel', 'shovel')
    .displayName("Nephilim Shovel")
    .tier('nephilim')
})

StartupEvents.registry('item', e => {
    e.create('nephilim_hoe', 'hoe')
    .displayName("Nephilim Hoe")
    .tier('nephilim')
})

StartupEvents.registry('item', e => {
    e.create('nephilim_helmet', 'helmet')
    .displayName("Nephilim Helmet")
    .tier('nephilim')
})

StartupEvents.registry('item', e => {
    e.create('nephilim_chestplate', 'chestplate')
    .displayName("Nephilim Chestplate")
    .tier('nephilim')
})

StartupEvents.registry('item', e => {
    e.create('nephilim_leggings', 'leggings')
    .displayName("Nephilim Leggings")
    .tier('nephilim')
})

StartupEvents.registry('item', e => {
    e.create('nephilim_boots', 'boots')
    .displayName("Nephilim Boots")
    .tier('nephilim')
})
