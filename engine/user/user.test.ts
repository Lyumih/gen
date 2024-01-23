namespace $ {

	// const skill = new $gen_engine_item_skill
	// skill.id_root( '1' )

	localStorage.removeItem( 'test-user' )
	localStorage.removeItem( 'test-unit' )
	localStorage.removeItem( 'test-skill' )
	const user = $gen_engine_user.make( { id: 'test-user' } )

	$mol_test( {

		'clean'( $ ) {

		},
		'new user props'( $ ) {
			$mol_assert_equal( user.name(), 'no name' )
			$mol_assert_equal( user.login(), 'no login' )
			$mol_assert_equal( user.email(), 'no email' )
			$mol_assert_equal( user.role(), 'user' )
			$mol_assert_equal( user.units().length, 0 )
		},

		'change name'( $ ) {
			$mol_assert_equal( user.name( 'Milis' ), 'Milis' )
		},

		'add unit'( $ ) {
			$mol_assert_equal( user.units().length, 0 )
			user.add_unit( $gen_engine_item_unit.make( { id: 'test-unit' } ).data() )
			user.add_unit( $gen_engine_item_unit.make( { id: 'test-unit' } ).data() )
			$mol_assert_equal( user.units().length, 2 )
		},

		'change unit name'( $ ) {
			$mol_assert_equal( user.units()[ 0 ].name( 'test' ), 'test' )
		},

		'remove unit'( $ ) {
			$mol_assert_equal( user.units().length, 2 )
			user.remove_first()
			$mol_assert_equal( user.units().length, 1 )
			console.log( user.units() )
		},

		'user skill length'( $ ) {
			$mol_assert_equal( user.units()[ 0 ].skills.length, 0 )
		},

		'add skill'( $ ) {
			const unit = user.units()[ 0 ]
			console.log( unit )
			$mol_assert_equal( unit.skills().length, 0 )
			unit?.add_skill( $gen_engine_item_skill.make( {} ).data() )
			console.log( unit )
			$mol_assert_equal( unit?.skills().length, 1 )
			$mol_assert_equal( user.units()[ 0 ].skills().length, 1 )
		},

	} )

}
