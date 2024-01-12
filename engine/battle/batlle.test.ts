namespace $ {

	const battle = new $$.$gen_engine_battle()
	const hero = new $$.$gen_engine_unit()
	const enemy = new $$.$gen_engine_unit()
	battle.init_unit( hero )
	battle.init_unit( enemy )

	const skill = {
		use: () => {}
	}

	$mol_test( {
		'battle next turn'() {
			$mol_assert_equal( battle.turn(), 0 )
			battle.next_turn()
			battle.next_turn()
			$mol_assert_equal( battle.turn(), 2 )
		},
		'hero/enemy attack turn'() {
			hero.use_attack( enemy )
			enemy.use_attack( hero )
			$mol_assert_equal( battle.turn(), 4 )
		},
		'hero/enemy use skill turn'() {
			hero.use_skill( [ enemy ], skill )
			enemy.use_skill( [ enemy ], skill )
			$mol_assert_equal( battle.turn(), 6 )
		}
	} )
}
