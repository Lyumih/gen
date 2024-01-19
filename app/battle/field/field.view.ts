namespace $.$$ {
	export class $gen_app_battle_field extends $.$gen_app_battle_field {

		@$mol_mem
		x_list( next?: any ) {
			return this.array_range( this.max_x_y().y ).map( ( x ) => this.Y( x ) )
		}

		y_list( id_x: string ) {
			return this.array_range( this.max_x_y().x ).map( ( y ) => this.Cell( `${ id_x }_${ y }` ) )
		}

		array_range( length: number ) {
			return Array.from( { length }, ( _, index ) => index )
		}

		@$mol_mem
		max_x_y( next?: any ) {
			return {
				x: 10,
				y: 6,
			}
		}

		@$mol_mem_key
		cell_content( id: string ): string {
			const [ id_x, id_y ] = id.split( '_' )
			const targets = this.units()
				.filter( unit => unit.x() === Number( id_x ) && unit.y() === Number( id_y ) )
			return targets.map( unit => unit.name() ).join( ',' )
		}
	}
}
