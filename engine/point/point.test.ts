namespace $ {
	const point = $$.$gen_engine_point.make( {} )

	const make = ( x: number, y: number ) => $$.$gen_engine_point.make( { x: () => x, y: () => y } )
	const nearest = [
		make( -1, 1 ), make( -1, 0 ), make( -1, 1 ),
		make( 0, -1 ), make( 0, 0 ), make( 0, 1 ),
		make( 1, -1 ), make( 1, 0 ), make( 1, 1 ),
	]

	$mol_test( {

		"point 0 0"() {
			$mol_assert_equal( point.x(), point.y(), 0, 0 )
		},

		"point range"() {
			// console.log( point.range( 1 )[ 0 ].x )
			// $mol_assert_equal( point.range( 1 ), nearest )
		},

		"point in range "() {
			$mol_assert_equal( point.in_range( { x: 0, y: 0 } ), true )
			$mol_assert_equal( point.in_range( { x: 1, y: 1 } ), true )
			$mol_assert_equal( point.in_range( { x: -2, y: -2 } ), false )
			$mol_assert_equal( point.in_range_hor( { x: 0, y: 0 } ), true )
		},

	} )
}
