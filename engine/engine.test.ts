namespace $ {

	const engine = new $$.$gen_engine()
	let seed = 0
	engine.uuid = () => {
		seed += 1
		console.log( 'seed', seed )
		return seed.toString()
	}
	$mol_test( {

		'engine seed 1'() {
			$mol_assert_equal( engine.seed(), '1' )
		},

		'engine add hero skill'() {
			$mol_assert_equal( engine.hero().skills.length, 2 )
			engine.add_hero_skill()
			$mol_assert_equal( engine.hero().skills.length, 3 )
		},

		'engine skill level up'() {
			const skill = engine.hero_skills()[ 0 ]
			$mol_assert_equal( skill.level, 1 )
			engine.skill_level_up( skill.id )
			$mol_assert_equal( skill.level, 2 )
			$mol_assert_equal( engine.all_skills().length, 3 )
		},

		'shop sell'() {
			$mol_assert_equal( engine.shop().length, engine.inventory().length, 2 )
			engine.shop_buy( '3' )
			$mol_assert_equal( engine.shop().length, 1 )
			$mol_assert_equal( engine.inventory().length, 3 )
			engine.inventory_sell( '3' )
			$mol_assert_equal( engine.shop().length, engine.inventory().length, 2 )
		}
	} )
}
