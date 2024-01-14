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

		find_empty_cell( x_y: string ) {
			const x = this.$.$mol_array_lottery( this.array_range( this.max_x_y().x ) )
			const y = this.$.$mol_array_lottery( this.array_range( this.max_x_y().y ) )
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
					console.log( 'add talent' )
					const new_talent = this.$.$mol_array_lottery( new this.$.$gen_engine_item_talent_all().all() )
					new_talent.set_x_y( new_point[ 0 ], new_point[ 1 ] )
					this.common_talents( [ ...this.common_talents(), new_talent ] )
				}
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
		common_talents( next?: $gen_engine_item_talent[] ) {
			const talent1 = new this.$.$gen_engine_item_talent_all().all()[ 0 ]
			return next ?? [ talent1 ]
		}

	}
}
