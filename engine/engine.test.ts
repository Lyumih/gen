namespace $ {

	const engine = new $$.$gen_engine()
	$mol_test( {

		'engine seed 1'() {
			$mol_assert_equal( engine.seed(), '1' )
		},

		'engine add hero skill'() {
			$mol_assert_equal( engine.hero().skills.length, 2 )
			engine.add_hero_skill()
			$mol_assert_equal( engine.hero().skills.length, 3 )
		}
	} )
}
