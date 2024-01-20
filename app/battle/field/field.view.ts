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
				x: 5,
				y: 5,
			}
		}

		cell_unit_list( id: string ): readonly any[] {
			const [ id_x, id_y ] = id.split( '_' )
			// console.log( id )
			const units = this.units()
				.filter( unit => unit.x() === Number( id_x ) && unit.y() === Number( id_y ) )
			return units.map( unit => this.Unit( id + '_' + unit.id() ) )
		}

		xy( id: any ): string {
			const [ id_x, id_y ] = id.split( '_' )
			return `${ id_x }, ${ id_y }`
		}

		@$mol_mem_key
		cell_unit_name( id: string, next?: any ): string {
			const [ id_x, id_y, id_unit ] = id.split( '_' )
			console.log( id, next )
			const unit = this.units()
				.find( unit => unit.id() === id_unit )
			const unit_text = unit ? `${ unit.name() } ${ unit.health() }хп` : ''
			return unit_text ?? ''
		}

		// @$mol_mem_key
		unit_active( id: any, next?: any ) {
			const [ , , id_unit ] = id.split( '_' )
			if( this.active_id() === id_unit ) {
				this.active_id( '' )
			} else {
				this.active_id( id_unit ?? '' )
			}
		}

		is_active( id: string, next?: any ): boolean {
			const [ , , id_unit ] = id.split( '_' )
			return this.active_id() === id_unit
		}

		// @$mol_mem
		// active_id( next?: any ): string {
		// 	console.log( 'active_id', next )
		// 	console.log( this.unit_active( '0_0_' + this.u ) )
		// 	return 'this.units().'
		// }


	}
}
