//StartupEvents.registry("block", (event) => {
//    event.create("example_block") // Create a new block
//    .displayName("My Custom Block") // Set a custom name
//    .material("wood") // Set a material (affects the sounds and some properties)
//    .hardness(1.0) // Set hardness (affects mining time)
//    .resistance(1.0) // Set resistance (to explosions, etc)
//    .tagBlock("my_custom_tag") // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
//    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
//    .tagBlock("my_namespace:my_other_tag") // Tag the block with `#my_namespace:my_other_tag`
//    .tagBlock("mineable/axe") //can be mined faster with an axe
//    .tagBlock("mineable/pickaxe") // or a pickaxe
//    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
//})

// Listen to item registry event
//StartupEvents.registry('item', e => {
//    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
//    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
//    e.create('test_item')
//    
//    // If you want to specify a different texture location you can do that too, like this:
//    e.create('test_item_1').texture('mobbo:item/lava') // This texture would be located at kubejs/assets/mobbo/textures/item/lava.png
//    
//    // You can chain builder methods as much as you like
//    e.create('test_item_2').maxStackSize(16).glow(true)
//    
//    // You can specify item type as 2nd argument in create(), some types have different available methods
//    e.create('custom_sword', 'sword').tier('diamond').attackDamageBaseline(10.0)
//  })




//NEW OVERWORLD ORES BELOW

StartupEvents.registry("block", event => {
    event.create("zinc_ore")
    .displayName("Zinc Ore")
    .mapColor("ICE")
    .stoneSoundType()
    .hardness(3.0)
    .resistance(3.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
})

StartupEvents.registry("block", event => {
    event.create("deepslate_zinc_ore")
    .displayName("Deepslate Zinc Ore")
    .mapColor("ICE")
    .stoneSoundType()
    .hardness(4.5)
    .resistance(3.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
})

StartupEvents.registry("block", event => {
    event.create("nickel_ore")
    .displayName("Nickel Ore")
    .mapColor("COLOR_LIGHT_GREEN")
    .stoneSoundType()
    .hardness(3.0)
    .resistance(3.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
})

StartupEvents.registry("block", event => {
    event.create("deepslate_nickel_ore")
    .displayName("Deepslate Nickel Ore")
    .mapColor("COLOR_LIGHT_GREEN")
    .stoneSoundType()
    .hardness(4.5)
    .resistance(3.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
})

StartupEvents.registry("block", event => {
    event.create("silver_ore")
    .displayName("Silver Ore")
    .mapColor("QUARTZ")
    .stoneSoundType()
    .hardness(3.0)
    .resistance(3.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
})

StartupEvents.registry("block", event => {
    event.create("deepslate_silver_ore")
    .displayName("Deepslate Silver Ore")
    .mapColor("QUARTZ")
    .stoneSoundType()
    .hardness(4.5)
    .resistance(3.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
})

StartupEvents.registry("block", event => {
    event.create("ruby_ore")
    .displayName("Ruby Ore")
    .mapColor("COLOR_RED")
    .stoneSoundType()
    .hardness(3.0)
    .resistance(3.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
})

//NEW NETHER ORES BELOW:

StartupEvents.registry("block", event => {
    event.create("brimstone_ore")
    .displayName("Brimstone Ore")
    .mapColor("NETHER")
    .stoneSoundType()
    .hardness(3.0)
    .resistance(3.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
})

StartupEvents.registry("block", event => {
    event.create("ichorium_ore")
    .displayName("Ichorium Ore")
    .mapColor("NETHER")
    .stoneSoundType()
    .hardness(3.0)
    .resistance(3.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
})

StartupEvents.registry("block", event => {
    event.create("hellstone_ore")
    .displayName("Hellstone Ore")
    .mapColor("NETHER")
    .stoneSoundType()
    .hardness(3.0)
    .resistance(3.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
})

//NEW OVERWORLD ITEMS BELOW:

StartupEvents.registry('item', e => {
    e.create('raw_zinc')
    .displayName("Raw Zinc")
})

StartupEvents.registry('item', e => {
    e.create('raw_nickel')
    .displayName("Raw Nickel")
})

StartupEvents.registry('item', e => {
    e.create('raw_silver')
    .displayName("Raw Silver")
})

StartupEvents.registry('item', e => {
    e.create('ruby')
    .displayName("Ruby")
})

StartupEvents.registry('item', e => {
    e.create('zinc_ingot')
    .displayName("Zinc Ingot")
})

StartupEvents.registry('item', e => {
    e.create('nickel_ingot')
    .displayName("Nickel Ingot")
})

StartupEvents.registry('item', e => {
    e.create('silver_ingot')
    .displayName("Silver Ingot")
})

StartupEvents.registry('item', e => {
    e.create('brass_ingot')
    .displayName("Brass Ingot")
})

StartupEvents.registry('item', e => {
    e.create('invar_ingot')
    .displayName("Invar Ingot")
})

StartupEvents.registry('item', e => {
    e.create('electrum_ingot')
    .displayName("Electrum Ingot")
})

//NEW NETHER ITEMS BELOW:

StartupEvents.registry('item', e => {
    e.create('brimstone_fragment')
    .displayName("Brimstone Fragment")
    .burnTime(3200)
})

StartupEvents.registry('item', e => {
    e.create('ichorium_bloodstone')
    .displayName("Ichorium Bloodstone")
})

StartupEvents.registry('item', e => {
    e.create('raw_hellstone')
    .displayName("Raw Hellstone")
})

StartupEvents.registry('item', e => {
    e.create('raw_nephyte')
    .displayName("Raw Nephyte")
})

StartupEvents.registry('item', e => {
    e.create('hellstone_ingot')
    .displayName("Hellstone Ingot")
})

StartupEvents.registry('item', e => {
    e.create('hellsteel_ingot')
    .displayName("Hellsteel Ingot")
})

StartupEvents.registry('item', e => {
    e.create('nephilim_ingot')
    .displayName("Nephilim Ingot")
})

//UNREFINED ALLOYS BELOW:

StartupEvents.registry('item', e => {
    e.create('unrefined_brass')
    .displayName("Unrefined Brass")
})

StartupEvents.registry('item', e => {
    e.create('unrefined_invar')
    .displayName("Unrefined Invar")
})

StartupEvents.registry('item', e => {
    e.create('unrefined_electrum')
    .displayName("Unrefined Electrum")
})

StartupEvents.registry('item', e => {
    e.create('unrefined_hellsteel')
    .displayName("Unrefined Hellsteel")
})