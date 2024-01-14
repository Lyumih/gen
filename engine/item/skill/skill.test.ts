namespace $ {

	const skill = $$.$gen_engine_item_skill.make( {
		id_root: () => '1',
	} )

	$mol_test( {
		'skill type'() {
			$mol_assert_equal( skill.type(), 'skill' )
			$mol_assert_equal( skill.id_root(), '1' )
		}
	} )
}
