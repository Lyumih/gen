namespace $ {

	const battle = new $$.$gen_engine_battle()
	const hero = new $$.$gen_engine_unit()
	const enemy = new $$.$gen_engine_unit()

	const skill = {
		use: () => {}
	}

	$mol_test( {
		'battle users length'() {
			$mol_assert_equal( battle.units().length, 0 )
			battle.units( [ hero, enemy ] )
			$mol_assert_equal( battle.units().length, 2 )
		},
		'battle next turn'() {
			$mol_assert_equal( battle.turn(), 0 )
			battle.next_turn()
			battle.next_turn()
			$mol_assert_equal( battle.turn(), 2 )
		},
		'hero/enemy attack turn'() {
			battle.units()[ 0 ].attack( battle.units()[ 1 ] )
			battle.units()[ 1 ].attack( battle.units()[ 0 ] )
			$mol_assert_equal( battle.turn(), 4 )
		},
		'hero/enemy use skill turn'() {
			battle.units()[ 0 ].use_skill( [ battle.units()[ 1 ] ], skill )
			battle.units()[ 1 ].use_skill( [ battle.units()[ 1 ] ], skill )
			$mol_assert_equal( battle.turn(), 6 )
		}
	} )
}
