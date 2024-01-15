namespace $ {
	type Point = {
		x: number
		y: number
	}

	export class $gen_engine_point extends $mol_object {
		@$mol_mem
		x( next?: number ) {
			return next ?? 0
		}

		@$mol_mem
		y( next?: number ) {
			return next ?? 0
		}

		range( length: number = 1 ) {
			// const xy = ( x: number, y: number ) => this.$.$gen_engine_point.make( { x: () => this.x() + x, y: () => this.y() + y } )
			const xy = ( x: number, y: number ) => ( { x, y } )
			const nearest = [
				xy( -1, 1 ), xy( -1, 0 ), xy( -1, 1 ),
				xy( 0, -1 ), xy( 0, 0 ), xy( 0, 1 ),
				xy( 1, -1 ), xy( 1, 0 ), xy( 1, 1 ),
			]

			return nearest
		}

		in_range( point: Point, distance: number = 1 ) {
			return Math.abs( this.x() - point.x ) <= distance && Math.abs( this.y() - point.y ) <= distance
		}

		in_range_hor( point: Point, distance: number = 1 ) {
			return Math.abs( this.x() - point.x ) <= distance
		}

		in_range_vert( point: Point, distance: number = 1 ) {
			return Math.abs( this.y() - point.y ) <= distance
		}

		in_range_points( points: Point[], distance: number = 1 ) {
			return points.some( point => this.in_range( point, distance ) )
		}

		in_range_points_hor( points: Point[], distance: number = 1 ) {
			return points.some( point => this.in_range_hor( point, distance ) )
		}

		in_range_points_vert( points: Point[], distance: number = 1 ) {
			return points.some( point => this.in_range_vert( point, distance ) )
		}

		in_range_points_hor_vert( points: Point[], distance: number = 1 ) {
			return points.some( point => this.in_range_hor( point, distance ) && this.in_range_vert( point, distance ) )
		}

		in_range_points_diagonal( points: Point[], distance: number = 1 ) {
			return points.some( point => this.in_range_points( points, distance ) && !this.in_range_points_hor_vert( points, distance ) )
		}


		simple() {
			return { x: this.x(), y: this.y() }
		}

	}

}
