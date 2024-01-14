namespace $.$$ {
	export class $gen_app_talent extends $.$gen_app_talent {

		y_list() {
			return this.max_y_count().map( ( y ) => this.X( y ) )
		}

		x_list( id_y: string ) {
			return this.max_x_count().map( ( x ) => this.Talent( `${ id_y }_${ x }` ) )
		}

		max_x_count() {
			return this.array_fill( this.max_x_y().x )
		}

		max_y_count() {
			return this.array_fill( this.max_x_y().y )
		}

		light() {
			return 20
		}

		max_x_y() {
			let x = 0
			let y = 0
			this.common_talents().forEach( talent => {
				x = Math.max( x, talent.x )
				y = Math.max( y, talent.y )
			} )
			return {
				x: x + this.light(),
				y: y + this.light()
			}
		}

		array_fill( count: number ) {
			return Array.from( { length: count }, ( elm, index ) => {
				return index
			} )
		}

		get_talent_id( id_x_y: string ) {
			const [ id_x, id_y ] = id_x_y.split( '_' )
			return this.common_talents()
				.find( talent => talent.x === +id_x && talent.y === +id_y )
		}

		talent_short_name( id: any ): string {
			return this.get_talent_id( id )?.name?.slice( 0, 4 ) ?? ''
		}

		@$mol_mem
		common_talents() {
			return [ {
				x: 0,
				y: 0,
				id: 'talent',
				name: 'Урон'
			}, {
				x: 2,
				y: 2,
				id: 'talent',
				name: 'Здоровье'
			}, ]
		}

	}
}
