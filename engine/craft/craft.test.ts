namespace $ {

	const craft = new $gen_engine_craft
	const unit = new $gen_engine_unit
	const equipment = new $gen_engine_item_equipment

	craft.unit( unit )
	craft.equipment( equipment )

	const repeat = ( times: number, cb: ( i: number ) => any ) => {
		for( let i = 0; i < times; i++ ) { cb( i ) }
	}

	$mol_test( {
		"empty user add points (reactivity)"() {
			$mol_assert_equal( craft.equipment().level(), craft.unit().points(), equipment.props().length, 0 )
			$mol_assert_equal( craft.unit().points( 100000 ), unit.points(), 100000 )
		},

		"add 10 prop"() {
			repeat( 15, () => craft.prop_add( new $gen_engine_item_prop ) )
			$mol_assert_equal( equipment.props().length, 10 )
			$mol_assert_equal( unit.points(), 99950 )
		},

		"remove 10 prop"() {
			repeat( 10, () => craft.prop_remove( equipment.props()[ equipment.props().length - 1 ]?.id() ) )
			$mol_assert_equal( equipment.props().length, 0 )
			$mol_assert_equal( unit.points(), 99850 )
		},

		"level up all props 10 times"() {
			repeat( 10, () => craft.prop_add( new $gen_engine_item_prop ) )
			$mol_assert_equal( unit.points(), 99800 )
			repeat( 10, ( i ) => repeat( 10, () => craft.prop_level_up( equipment.props()[ i ]?.id() ) ) )
			$mol_assert_equal( craft.equipment().props()[ 0 ].level(), craft.equipment().props()[ 9 ].level(), 10 )
			$mol_assert_equal( unit.points(), 99700 )
		}

	} )
}
