namespace $ {

	const skill = $$.$gen_engine_item_skill.make( {

	} )

	$mol_test( {

		'skill type'() {
			$mol_assert_equal( skill.type(), 'skill' )
		}
	} )
}
