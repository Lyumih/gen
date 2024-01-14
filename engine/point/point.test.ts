namespace $ {
	const point = $$.$gen_engine_point.make( {} )

	const xy = ( x: number, y: number ) => $$.$gen_engine_point.make( { x: () => x, y: () => y } )
	const nearest = [
		xy( -1, 1 ), xy( -1, 0 ), xy( -1, 1 ),
		xy( 0, -1 ), xy( 0, 0 ), xy( 0, 1 ),
		xy( 1, -1 ), xy( 1, 0 ), xy( 1, 1 ),
	]

	$mol_test( {

		"point 0 0"() {
			$mol_assert_equal( point.x(), point.y(), 0, 0 )
		},

		"range point"() {
			console.log( point.range( 1 )[ 0 ].x )
			// $mol_assert_equal( point.range( 1 ), nearest )
		},

		"nearest point"() {
			$mol_assert_equal( point.in_range( { x: 0, y: 0 } ), true )
			$mol_assert_equal( point.in_range( { x: 1, y: 1 } ), true )
			$mol_assert_equal( point.in_range( { x: -2, y: -2 } ), false )
		},

	} )
}
