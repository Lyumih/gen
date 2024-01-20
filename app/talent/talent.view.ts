namespace $.$$ {
	export class $gen_app_talent extends $.$gen_app_talent {

		light() {
			return 1
		}

		@$mol_mem
		x_list( next?: any ) {
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
			return next ?? [ {
				x: 0,
				y: 0,
			} ]
		}

		talent_count(): string {
			return `Талантов: ${ this.common_talents().length }`
		}

		status( id: any ) {
			const point = this.parse_x_y( id )

			const is_open = this.talents_opened().find( talent => talent.x === point.x() && talent.y === point.y() )
			const is_active = this.common_talents().find( talent => talent.x() === point.x() && talent.y() === point.y() )
			if( is_open && is_active ) {
				return 'active'
			} else if( is_active ) {
				return 'open'
			} else if( is_open ) {
				return 'active'
			}
			return ''
		}

		is_search( id: any ): boolean {
			if( this.talent_search() ) {
				const point = this.parse_x_y( id )
				const is_active = this.common_talents().find( talent => talent.x() === point.x() && talent.y() === point.y() )
				return Boolean( is_active?.name().toLocaleLowerCase().includes( this.talent_search().toLocaleLowerCase() ) || is_active?.description().includes( this.talent_search().toLocaleLowerCase() ) )
			}
			return false

		}

		@$mol_mem
		max_x_y( next?: any ) {
			let x = 0
			let y = 0
			this.talents_opened().forEach( talent => {
				x = Math.max( x, talent.x )
				y = Math.max( y, talent.y )
			} )
			return {
				x: x + this.light() + 1,
				y: y + this.light() + 1,
			}
		}

		parse_x_y( id_y_x: string ) {
			const [ y, x ] = id_y_x.split( '_' )
			return $gen_engine_point.make( { x: () => +x, y: () => +y } )
		}

		get_talent_id( id_y_x: string ) {
			const point = this.parse_x_y( id_y_x )
			return this.common_talents().find( talent => talent.x() === point.x() && talent.y() === point.y() )
		}

		find_empty_cell( x_y: string ) {
			const x = $mol_array_lottery( this.array_range( this.max_x_y().x ) )
			const y = $mol_array_lottery( this.array_range( this.max_x_y().y ) )
			const is_active = this.common_talents().some( talent => talent.x() === x && talent.y() === y )
			const is_opened = this.talents_opened().some( talent => talent.x === x && talent.y === y )
			const point = this.parse_x_y( x_y )
			const is_clicked = x === point.x() && y === point.y()

			if( is_active || is_opened || is_clicked ) {
				return false
			}
			return [ x, y ]
		}

		talent_click( id_y_x: string, next?: any ) {
			const point = this.parse_x_y( id_y_x )
			const is_nearest_point = point.in_range_points( this.talents_opened() )

			if( is_nearest_point ) {
				const new_point = this.find_empty_cell( id_y_x )
				if( new_point ) {
					const new_talent = $mol_array_lottery( new $gen_engine_item_talent_all().all() )
					// new_talent.base_id = '123'
					new_talent.set_x_y( new_point[ 0 ], new_point[ 1 ] )
					this.common_talents( [ ...this.common_talents(), new_talent ] )
				}
				this.talents_opened( [ ...this.talents_opened(), point.simple() ] )
			}
		}

		talent_short_name( id: any ): string {
			return this.get_talent_id( id )?.name()?.slice( 0, 4 ) ?? ''
		}

		talent_description( id: any ): string {
			return this.get_talent_id( id )?.description() ?? ''
		}

		@$mol_mem
		stats(): string {
			const sorted_talents = this.common_talents().sort( ( a, b ) => a.name().localeCompare( b.name() ) )
			const reduced: { count: number, description: string }[] = []
			sorted_talents.forEach( talent => {
				const index = reduced.findIndex( item => item.description === talent.description() )
				if( index === -1 ) {
					reduced.push( { count: 1, description: talent.description() } )
				} else {
					reduced[ index ].count++
				}
			} )
			return reduced.map( talent => `**${ talent.count }x** ${ talent.description }` ).join( '\n' )
		}

		@$mol_mem
		common_talents( next?: $gen_engine_item_talent[] ) {
			const talent1 = new $gen_engine_item_talent_all().all()[ 0 ]
			return next ?? [ talent1 ]
		}

	}
}
