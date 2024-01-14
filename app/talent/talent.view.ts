namespace $.$$ {
	export class $gen_app_talent extends $.$gen_app_talent {

		light() {
			return 2
		}

		@$mol_mem
		x_list( next?: any ) {
			console.log( 'x_list', this.array_range( this.max_x_y().y ) )
			return this.array_range( this.max_x_y().y ).map( ( x ) => this.Y( x ) )
		}

		y_list( id_x: string ) {
			return this.array_range( this.max_x_y().x ).map( ( y ) => this.Talent( `${ id_x }_${ y }` ) )
		}

		array_range( length: number ) {
			return Array.from( { length }, ( _, index ) => index )
		}

		@$mol_mem
		talents_opened( next?: { x: number, y: number }[] ) {
			console.log( 'talents_opened', next )
			return next ?? [ {
				x: 0,
				y: 0,
			} ]
		}

		is_open( id: any ): boolean {
			const point = this.parse_x_y( id )
			return this.talents_opened().some( talent => talent.x === point.x() && talent.y === point.y() )
		}

		@$mol_mem
		max_x_y( next?: any ) {
			let x = 0
			let y = 0
			this.talents_opened().forEach( talent => {
				x = Math.max( x, talent.x )
				y = Math.max( y, talent.y )
			} )
			console.log( 'max_x_y', x, y, this.talents_opened() )
			return {
				x: x + this.light() + 1,
				y: y + this.light() + 1,
			}
		}

		parse_x_y( id_y_x: string ) {
			const [ y, x ] = id_y_x.split( '_' )
			return this.$.$gen_engine_point.make( { x: () => +x, y: () => +y } )
		}

		get_talent_id( id_y_x: string ) {
			const point = this.parse_x_y( id_y_x )
			return this.common_talents().find( talent => talent.x() === point.x() && talent.y() === point.y() )
		}

		talent_click( id_y_x: string, next?: any ) {
			const point = this.parse_x_y( id_y_x )
			const is_nearest_point = point.in_range_points( this.talents_opened() )
			if( is_nearest_point ) {
				this.talents_opened( [ ...this.talents_opened(), point.simple() ] )
			}
			console.log( 'talent_click', id_y_x )
		}

		talent_short_name( id: any ): string {
			return this.get_talent_id( id )?.name()?.slice( 0, 4 ) ?? ''
		}

		talent_description( id: any ): string {
			return this.get_talent_id( id )?.description() ?? ''
		}

		nearest_point( x: number, y: number, points: { x: number, y: number }[] ) {
		}

		@$mol_mem
		common_talents() {
			const talent1 = new this.$.$gen_engine_item_talent_all().all()[ 0 ]
			const talent2 = new this.$.$gen_engine_item_talent_all().all()[ 1 ]
			const talent3 = new this.$.$gen_engine_item_talent_all().all()[ 2 ]
			talent2.set_x_y( 1, 3 )
			talent3.set_x_y( 3, 1 )
			return [ talent1, talent2, talent3 ]
		}

	}
}
