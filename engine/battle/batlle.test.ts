namespace $ {

	const battle = new $gen_engine_battle
	const hero = new $gen_engine_item_unit
	const enemy = new $gen_engine_item_unit
	battle.init_unit( hero )
	battle.init_unit( enemy )

	const skill = new $gen_engine_item_skill
	$mol_test( {
		'add log'() {
			$mol_assert_equal( battle.history().length, 0 )
			battle.history( [ 'test' ] )
			battle.log( 'test me' )
			$mol_assert_equal( battle.history().length, 2 )
		},

		'battle next turn'() {
			$mol_assert_equal( battle.turn(), 0 )
			battle.next_turn()
			battle.next_turn()
			$mol_assert_equal( battle.turn(), 2 )
		},

		'hero/enemy attack turn'() {
			hero.use_attack( [ enemy ], battle )
			enemy.use_attack( [ hero ], battle )
			$mol_assert_equal( battle.turn(), 4 )
		},

		'hero/enemy use skill turn'() {
			hero.use_skill( [ enemy ], skill, battle )
			enemy.use_skill( [ enemy ], skill, battle )
			$mol_assert_equal( battle.turn(), 6 )
		},

	} )
}
