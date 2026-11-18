ServerEvents.recipes(event => {

    event.remove({ output: 'charginggadgets:charging_station' })
    event.remove({ output: 'buildinggadgets2:gadget_building' })
    event.remove({ output: 'buildinggadgets2:gadget_exchanging' })
    event.remove({ output: 'buildinggadgets2:gadget_copy_paste' })
    event.remove({ output: 'buildinggadgets2:gadget_cut_paste' })
    event.remove({ output: 'buildinggadgets2:gadget_destruction' })
})
